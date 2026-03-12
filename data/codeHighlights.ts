export const codeHighlights: Record<string, { title: string; language: string; narrative: string; code: string; description: string }[]> = {
  'wida-crm': [
    {
      title: 'N+1 Query Fix — Eager Loading',
      language: 'PHP',
      narrative: 'The client detail page was taking almost a second to load. I opened Laravel Debugbar and saw 47 separate queries firing — one for the client, then one for each note, then one for each note\'s employee. Classic N+1 problem.',
      code: `// Before: 47 queries, ~900ms
$client = Client::findOrFail($id);
// Each $client->notes triggered a query,
// then each $note->employee triggered another

// After: 3 queries, ~220ms
$client = Client::with(['notes', 'notes.employee'])
    ->findOrFail($id);`,
      description: 'The with() call tells Eloquent to fetch the related notes and each note\'s employee in just 2 extra queries using WHERE IN clauses instead of firing a separate query every time you access a relationship. That took us from 47 queries down to 3, and load time went from 900ms to 220ms.'
    },
    {
      title: 'Permission Middleware',
      language: 'PHP',
      narrative: 'WIDA needed three different roles — Admin, Sales, and Warehouse — each seeing different pages. Rather than scattering auth checks everywhere, I built a middleware that maps route names to page IDs in the permissions table.',
      code: `class RedirectUnauthorized {
    public function handle(Request $request, Closure $next, $routeName) {
        $user = Auth::user();
        $pageIdMap = [
            'dashboard'    => 1,
            'clients'      => 2,
            'orders'       => 3,
            'vendors'      => 4,
            'reports'      => 5,
            'admin.users'  => 6,
        ];

        $requiredPageId = $pageIdMap[$routeName] ?? null;
        $userPermissions = Permission::where('Employee_ID', $user->Employee_ID)
            ->pluck('Page_ID');

        if ($requiredPageId && !$userPermissions->contains($requiredPageId)) {
            return redirect()->route('access.denied');
        }

        return $next($request);
    }
}`,
      description: 'The middleware grabs the current user, looks up which page ID the route requires from $pageIdMap, then checks the permissions table to see if that user has access. If not, they get redirected to an access denied page. Every protected route just declares this middleware with its route name, so adding a new page is one line in the map.'
    },
    {
      title: 'Transaction-Wrapped Order Creation',
      language: 'PHP',
      narrative: 'Orders can have multiple products, and each product updates inventory. If any product fails to save, we\'d end up with a partial order — the kind of bug that makes accounting people very unhappy. Database transactions were the obvious answer.',
      code: `DB::beginTransaction();
try {
    $order = new Order([
        'Order_ID'    => $newOrderId,
        'Client_ID'   => $request->Client_ID,
        'Employee_ID' => Auth::user()->Employee_ID,
        'Order_DATE'  => now(),
    ]);
    $order->save();

    foreach ($request->products as $productData) {
        $product = new OrderDetail([
            'Order_ID'   => $order->Order_ID,
            'Product_ID' => $productData['id'],
            'Quantity'   => $productData['quantity'],
            'Unit_Price' => $productData['price'],
        ]);
        $product->save();
    }

    DB::commit();
    return redirect()->route('orders.show', $order->Order_ID);
} catch (\\Exception $e) {
    DB::rollback();
    Log::error('Order creation failed: ' . $e->getMessage());
    return back()->withErrors(['error' => 'Order could not be created.']);
}`,
      description: 'DB::beginTransaction() starts the transaction. The order header gets saved first, then we loop through each product and save an OrderDetail row. If anything throws, the catch block calls DB::rollback() so nothing is half-saved, and Log::error records what went wrong. If everything succeeds, DB::commit() makes it permanent and we redirect to the order page.'
    },
    {
      title: 'Custom Sequential ID Generation',
      language: 'PHP',
      narrative: 'WIDA wanted human-readable order IDs like O001, O002, O003 instead of auto-increment integers. Sounds simple, but you have to handle the case where no orders exist yet and avoid race conditions.',
      code: `$latestOrder = Order::orderBy('Order_ID', 'desc')->first();
$latestNumber = $latestOrder
    ? intval(substr($latestOrder->Order_ID, 1)) + 1
    : 1;
$newOrderId = 'O' . str_pad($latestNumber, 3, '0', STR_PAD_LEFT);
// O001, O002, ... O999`,
      description: 'It grabs the latest order, strips the "O" prefix with substr, parses what\'s left into an integer, adds 1, then pads it back to 3 digits with str_pad. If no orders exist yet, it starts at 1. Simple, but does the job for a small team without needing database sequences or UUIDs.'
    }
  ],
  'lacombe-gutters': [
    {
      title: 'CSS-Only Leaf-Fall Animation',
      language: 'CSS',
      narrative: 'The gutter company wanted something that immediately communicated "gutters and falling leaves" when you land on the page. I could have reached for a canvas library, but pure CSS keyframes gave me the effect with zero JavaScript overhead.',
      code: `@keyframes leafFall {
  0% {
    transform: translateY(-10vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}

/* Each leaf gets a random delay and duration */
.leaf {
  animation: leafFall linear infinite;
  animation-duration: var(--duration, 4s);
  animation-delay: var(--delay, 0s);
}`,
      description: 'The @keyframes block moves each leaf from above the viewport to below it while rotating 360 degrees. Opacity fades in at 10% and out at 90% so leaves don\'t pop in or out abruptly. Each leaf div gets different --duration and --delay custom properties so they fall at different speeds and stagger naturally. No JavaScript involved, so it runs on the GPU at 60fps.'
    },
    {
      title: 'Turnstile CAPTCHA Integration',
      language: 'TypeScript',
      narrative: 'The contact form was getting hammered by bots within a week of launch. I went with Cloudflare Turnstile over reCAPTCHA because it\'s less intrusive for real users. The tricky part was server-side verification — you can\'t trust the client token alone.',
      code: `// Server-side verification (API route)
const turnstileResponse = await fetch(
  'https://challenges.cloudflare.com/turnstile/v0/siteverify',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: turnstileToken,
      remoteip: getClientIP(request),
    }),
  }
);

const data = await turnstileResponse.json();
if (!data.success) {
  return NextResponse.json(
    { error: 'Verification failed.' },
    { status: 403 }
  );
}`,
      description: 'The API route sends the client\'s Turnstile token along with the secret key and their IP to Cloudflare\'s siteverify endpoint. Cloudflare checks if the token is valid and returns a success boolean. If it fails, we return a 403 with a generic error so bots don\'t learn anything useful. The secret key stays server-side and never touches the browser.'
    },
    {
      title: 'WCAG Touch Target Enforcement',
      language: 'CSS',
      narrative: 'Lighthouse flagged several buttons and links as too small for mobile touch. WCAG 2.1 requires 44x44px minimum touch targets. I added a global rule so every interactive element meets the standard automatically.',
      code: `/* Before: buttons were 32px tall on mobile */
@media (max-width: 768px) {
  button,
  a.btn-construction,
  .nav-link {
    min-height: 44px;
  }
}

/* Ensure centering within the larger targets */
@media (max-width: 480px) {
  button,
  a.btn-construction,
  .nav-link {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
}`,
      description: 'The first media query sets min-height: 44px on all buttons and links so they meet the WCAG 2.1 touch target minimum. The second one at 480px adds flexbox centering so the text stays vertically centered inside the taller hit area. Only applies on mobile so desktop layout stays the same.'
    }
  ],
  'blockchain-tickets': [
    {
      title: 'Firebase Auth + User Creation',
      language: 'C#',
      narrative: 'The platform needs both blockchain wallets and traditional accounts. Firebase handles the auth layer, but I needed to gracefully handle duplicate emails since users might try signing up through different providers.',
      code: `public async Task<FirebaseToken> VerifyTokenAsync(string idToken)
{
    try
    {
        FirebaseToken decodedToken = await FirebaseAuth
            .DefaultInstance
            .VerifyIdTokenAsync(idToken);
        return decodedToken;
    }
    catch (Exception ex)
    {
        _logger.LogError(ex, "Token verification failed");
        throw;
    }
}

public async Task<UserRecord> CreateUserAsync(string email, string password)
{
    try
    {
        return await FirebaseAuth.DefaultInstance.CreateUserAsync(
            new UserRecordArgs
            {
                Email = email,
                EmailVerified = false,
                Password = password,
                Disabled = false,
            });
    }
    catch (FirebaseAuthException ex)
        when (ex.AuthErrorCode == AuthErrorCode.EmailAlreadyExists)
    {
        throw new Exception("A user with this email already exists.");
    }
}`,
      description: 'VerifyTokenAsync takes a Firebase ID token from the client, calls VerifyIdTokenAsync to decode and validate it, and returns the decoded token with the user\'s info. CreateUserAsync registers a new user, but uses a catch-when clause that only catches the specific EmailAlreadyExists error. Any other Firebase error gets thrown normally so it\'s not silently swallowed.'
    },
    {
      title: 'Session Timeout with Activity Tracking',
      language: 'JavaScript',
      narrative: 'For a ticketing platform handling money, sessions can\'t stay alive forever. I implemented a 60-minute idle timeout that resets on any user interaction — mouse, keyboard, touch, or scroll.',
      code: `const SESSION_TIMEOUT = 60 * 60 * 1000; // 60 minutes

const updateActivity = () => {
  setLastActivity(Date.now());
  sessionStorage.setItem('lastActivity', Date.now().toString());
};

useEffect(() => {
  const checkSessionTimeout = () => {
    const stored = sessionStorage.getItem('lastActivity');
    if (stored) {
      const elapsed = Date.now() - parseInt(stored, 10);
      if (elapsed > SESSION_TIMEOUT) {
        console.log("Session timeout - logging out");
        logout();
      }
    }
  };

  const intervalId = setInterval(checkSessionTimeout, 60 * 1000);

  const events = ['mousedown', 'keydown', 'touchstart', 'scroll'];
  events.forEach(e => window.addEventListener(e, updateActivity));

  return () => {
    clearInterval(intervalId);
    events.forEach(e => window.removeEventListener(e, updateActivity));
  };
}, []);`,
      description: 'updateActivity writes the current timestamp to sessionStorage whenever the user moves the mouse, types, taps, or scrolls. A setInterval runs every 60 seconds comparing the stored timestamp to now. If more than 60 minutes have passed without activity, it calls logout(). The cleanup function in the useEffect return removes all the event listeners and clears the interval when the component unmounts.'
    },
    {
      title: 'Interactive Seat Selection',
      language: 'JavaScript',
      narrative: 'The seat map needed to feel instant — no lag when clicking seats, immediate visual feedback, and a running total that updates as you select. I used local state with toggle logic to keep it snappy.',
      code: `const PRICE_CATEGORIES = {
  VIP: 250, Premium: 180, Standard: 120, Budget: 80
};

const handleSeatClick = (seat) => {
  if (!seat.available) return;

  setSelectedSeats(prev => {
    const alreadySelected = prev.some(s => s.id === seat.id);

    if (alreadySelected) {
      const updated = prev.filter(s => s.id !== seat.id);
      onSeatSelect?.(updated);
      return updated;
    } else {
      const updated = [...prev, seat];
      onSeatSelect?.(updated);
      return updated;
    }
  });
};

// Total updates reactively
const total = selectedSeats.reduce(
  (sum, s) => sum + PRICE_CATEGORIES[s.category], 0
);`,
      description: 'handleSeatClick first checks if the seat is available. Then it uses setSelectedSeats with a function to get the previous state (avoids stale closure issues). If the seat is already selected, it filters it out. If not, it spreads the old array and adds it. Either way, it calls the optional onSeatSelect callback so the parent component can react. The total recalculates automatically by reducing over the selected seats and looking up each seat\'s price category.'
    }
  ],
  '4pics1word': [
    {
      title: 'Build-Time Image Pre-Download',
      language: 'TypeScript',
      narrative: 'The game pulls images from Unsplash, but their API has strict rate limits. During development, I kept hitting 429 errors mid-game. The fix was to download all images at build time so the app never makes runtime API calls.',
      code: `// prebuild-images.ts — runs before EAS build
import axios from 'axios';
import * as FileSystem from 'expo-file-system';

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

async function downloadImage(query: string, index: number) {
  const response = await axios.get(
    \`https://api.unsplash.com/photos/random\`,
    {
      params: { query, orientation: 'squarish' },
      headers: { Authorization: \`Client-ID \${UNSPLASH_ACCESS_KEY}\` },
    }
  );

  const imageUrl = response.data.urls.small;
  const localPath = \`\${FileSystem.documentDirectory}images/\${query}_\${index}.jpg\`;

  await FileSystem.downloadAsync(imageUrl, localPath);
  return localPath;
}

// Pre-download all puzzle images during build
export async function prebuildAllImages(puzzles: Puzzle[]) {
  for (const puzzle of puzzles) {
    const paths = await Promise.all(
      puzzle.keywords.map((kw, i) => downloadImage(kw, i))
    );
    puzzle.localImages = paths;
  }
}`,
      description: 'downloadImage hits the Unsplash API with a search keyword and downloads the image to a local path using Expo\'s FileSystem. prebuildAllImages loops through every puzzle, downloads all 4 images per puzzle in parallel with Promise.all, and stores the local paths back on the puzzle object. Since this runs during build, the APK ships with all images baked in and never needs to call Unsplash at runtime.'
    },
    {
      title: 'Audio Preloading Fix',
      language: 'TypeScript',
      narrative: 'Players reported a noticeable delay on the first sound effect — tap a letter, wait 200ms, then hear the click. The issue was that expo-av loads audio lazily by default. I switched to createAsync to preload sounds during app startup.',
      code: `import { Audio } from 'expo-av';

// Preload all game sounds at startup
let correctSound: Audio.Sound | null = null;
let wrongSound: Audio.Sound | null = null;
let tapSound: Audio.Sound | null = null;

export async function preloadGameAudio() {
  const [correct, wrong, tap] = await Promise.all([
    Audio.Sound.createAsync(
      require('../assets/sounds/correct.mp3'),
      { shouldPlay: false }
    ),
    Audio.Sound.createAsync(
      require('../assets/sounds/wrong.mp3'),
      { shouldPlay: false }
    ),
    Audio.Sound.createAsync(
      require('../assets/sounds/tap.mp3'),
      { shouldPlay: false }
    ),
  ]);

  correctSound = correct.sound;
  wrongSound = wrong.sound;
  tapSound = tap.sound;
}

export async function playSound(type: 'correct' | 'wrong' | 'tap') {
  const sound = { correct: correctSound, wrong: wrongSound, tap: tapSound }[type];
  if (sound) {
    await sound.replayAsync();
  }
}`,
      description: 'preloadGameAudio runs at app startup and calls Audio.Sound.createAsync for each sound file in parallel. createAsync loads and decodes the audio buffer into memory with shouldPlay: false so nothing plays yet. When the game needs a sound, playSound looks up the right Sound object and calls replayAsync, which replays the already-loaded buffer instantly. That killed the 200ms first-play delay.'
    }
  ],
  'dungeon-escape': [
    {
      title: 'Cross-Platform Terminal Handling',
      language: 'C++',
      narrative: 'The game needed to clear the terminal between screens, but the command differs between Windows (cls) and Unix (clear). Preprocessor directives handle this at compile time with zero runtime cost.',
      code: `#ifdef _WIN32
    #include <cstdlib>
    #define CLEAR_SCREEN() system("cls")
#else
    #include <cstdlib>
    #define CLEAR_SCREEN() system("clear")
#endif

void GameEngine::render() {
    CLEAR_SCREEN();

    std::cout << "\\n=== DUNGEON ESCAPE ===" << std::endl;
    std::cout << "Room: " << currentRoom->getName() << std::endl;
    std::cout << currentRoom->getDescription() << std::endl;
    std::cout << "\\nHP: " << player.getHealth()
              << "/" << player.getMaxHealth() << std::endl;

    if (player.isCursed()) {
        std::cout << "[CURSED] Taking damage over time!" << std::endl;
    }

    std::cout << "\\nExits: ";
    for (const auto& [direction, room] : currentRoom->getExits()) {
        std::cout << direction << " ";
    }
    std::cout << std::endl;
}`,
      description: '#ifdef _WIN32 checks at compile time whether we\'re on Windows, and defines CLEAR_SCREEN() to call either system("cls") or system("clear") accordingly. The render() function calls CLEAR_SCREEN() then prints the current room name, description, player HP, curse status, and available exits. The structured binding in the for loop (auto& [direction, room]) iterates over the room\'s exit map.'
    },
    {
      title: 'RAII Resource Management',
      language: 'C++',
      narrative: 'With 10 rooms, dozens of items, and multiple enemies, manual memory management would be a nightmare. Smart pointers and RAII ensure everything gets cleaned up automatically when the game exits or a room is unloaded.',
      code: `class GameEngine {
private:
    std::vector<std::unique_ptr<Room>> rooms;
    std::vector<std::unique_ptr<Enemy>> enemies;
    std::vector<std::unique_ptr<Item>> items;
    Player player;
    Room* currentRoom; // non-owning pointer

public:
    GameEngine() : player(100, 10, 5), currentRoom(nullptr) {
        initialize();
    }

    // Destructor is trivial — unique_ptr handles cleanup
    ~GameEngine() = default;

    // No copy (unique_ptr is move-only)
    GameEngine(const GameEngine&) = delete;
    GameEngine& operator=(const GameEngine&) = delete;

    void initialize() {
        // Factory creates rooms with ownership transfer
        rooms.push_back(std::make_unique<Room>(
            "Entrance Hall",
            "A dimly lit hall with torches on the walls."
        ));
        // ... more rooms

        currentRoom = rooms[0].get(); // borrow, don't own
    }
};`,
      description: 'The vectors of unique_ptr own all rooms, enemies, and items. When GameEngine is destroyed, the vectors are destroyed, which destroys each unique_ptr, which frees the memory automatically. The destructor is = default because there\'s nothing manual to do. Copy is deleted since unique_ptr can\'t be copied (who would own the memory?). currentRoom is a raw pointer that just points at whichever room the player is in without owning it.'
    }
  ],
  'portfolio-v2': [
    {
      title: 'React Server Component Boundaries',
      language: 'TypeScript',
      narrative: 'The trickiest part of migrating from CRA to Next.js 14 was figuring out where to put "use client" directives. Too high and you lose server-side rendering benefits. Too low and you get hydration mismatches with Framer Motion.',
      code: `// app/page.tsx — Server Component (no "use client")
import HeroKinetic from '../components/organisms/HeroKinetic';
import ProjectsIsometric from '../components/organisms/ProjectsIsometric';
import ClientOnly from '../components/ui/ClientOnly';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* ClientOnly wrapper prevents hydration mismatch */}
      <ClientOnly fallback={<HeroSkeleton />}>
        <HeroKinetic />    {/* "use client" inside */}
      </ClientOnly>
      <ClientOnly fallback={<div className="min-h-screen bg-bg-primary" />}>
        <ProjectsIsometric />  {/* "use client" inside */}
      </ClientOnly>
      <ContactKinetic />   {/* dynamically imported, ssr: false */}
    </main>
  );
}`,
      description: 'The page file has no "use client" directive, so it runs as a Server Component and sends plain HTML on first load. HeroKinetic and ProjectsIsometric each have "use client" inside their own files. They\'re wrapped in ClientOnly which renders a fallback on the server and only mounts the real component on the client, avoiding hydration mismatches from Framer Motion. ContactKinetic is dynamically imported elsewhere with ssr: false so it\'s completely skipped during server rendering.'
    },
    {
      title: 'Dynamic Import for Below-Fold Content',
      language: 'TypeScript',
      narrative: 'The contact section with its animated blobs and form validation was adding 40KB to the initial bundle. Since it\'s below the fold, users don\'t need it until they scroll down. Dynamic import defers the load.',
      code: `import dynamic from 'next/dynamic';

// Lazy-load the contact section — not needed on initial render
const ContactKinetic = dynamic(
  () => import('../components/organisms/ContactKinetic'),
  {
    ssr: false,  // Skip server rendering entirely
    loading: () => (
      <div className="min-h-96 bg-bg-primary" />  // Placeholder
    ),
  }
);

// In the component tree, it renders like any other component
// but only loads when the browser is ready
<ContactKinetic />`,
      description: 'next/dynamic wraps the import in a lazy loader. Setting ssr: false means the server doesn\'t render it at all, so it\'s not in the initial HTML or the first JS bundle. The loading function returns a placeholder div that holds the space so the page doesn\'t jump when the real component loads in. The browser downloads and mounts ContactKinetic after the rest of the page is ready.'
    }
  ],
  'valley-city-sales': [
    {
      title: 'TOTP 2FA with Device Remember',
      language: 'TypeScript',
      narrative: 'The dealer isn\'t tech-savvy, so I needed 2FA that\'s secure but not annoying. TOTP codes with a 30-day device remember token means he only enters codes on new devices. The remember token uses crypto-grade randomness — no Math.random() shortcuts.',
      code: `export async function generateTOTPSetup(email: string) {
  const totp = new OTPAuth.TOTP({
    issuer: 'Valley City Sales Admin',
    label: email,
    algorithm: 'SHA1',
    digits: 6,
    period: 30,
    secret: new OTPAuth.Secret({ size: 20 }),
  });

  const uri = totp.toString();
  const qrDataUrl = await QRCode.toDataURL(uri, {
    width: 256, margin: 2
  });

  return { secret: totp.secret.base32, qrDataUrl, uri };
}

export function verifyTOTP(secret: string, code: string): boolean {
  const totp = new OTPAuth.TOTP({
    issuer: 'Valley City Sales Admin',
    algorithm: 'SHA1',
    digits: 6,
    period: 30,
    secret: OTPAuth.Secret.fromBase32(secret),
  });
  // Allow 1 period of clock drift (±30s)
  return totp.validate({ token: code, window: 1 }) !== null;
}

export function generateRememberToken(): string {
  const arr = new Uint8Array(32);
  crypto.getRandomValues(arr);
  return Array.from(arr, b => b.toString(16).padStart(2, '0')).join('');
}`,
      description: 'generateTOTPSetup creates a new TOTP instance with a random 20-byte secret, converts it to an otpauth:// URI, and renders that URI as a QR code the user scans with their authenticator app. verifyTOTP rebuilds the TOTP from the stored secret and calls validate with window: 1, which accepts codes from the current 30-second period plus one period before and after (handles clock drift). generateRememberToken fills a 32-byte array with crypto.getRandomValues and converts it to a hex string for the 30-day cookie.'
    },
    {
      title: 'VIN Decode with NHTSA Normalization',
      language: 'TypeScript',
      narrative: 'Auto-filling 8+ fields from a VIN saves the dealer minutes per listing. But NHTSA\'s API is messy — "Sport Utility Vehicle (SUV)" needs to become "suv", empty strings need to become undefined, and "Not Applicable" is their version of null.',
      code: `const VIN_REGEX = /^[A-HJ-NPR-Z0-9]{17}$/i;
const NHTSA_API = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues';

export async function decodeVIN(vin: string): Promise<VINResult> {
  const clean = vin.trim().toUpperCase();
  if (!VIN_REGEX.test(clean)) {
    return { error: 'Invalid VIN. Must be exactly 17 characters.' };
  }

  const res = await fetch(
    \`\${NHTSA_API}/\${encodeURIComponent(clean)}?format=json\`,
    { signal: AbortSignal.timeout(10_000) }
  );
  const data = await res.json();
  const r = data.Results?.[0];

  // NHTSA uses empty strings and "Not Applicable" for missing data
  const val = (field: string) => {
    const v = r[field];
    return v && v !== 'Not Applicable' && v !== '' ? v : undefined;
  };

  const bodyMap: Record<string, string> = {
    'Sedan': 'sedan', 'SUV': 'suv',
    'Sport Utility Vehicle (SUV)': 'suv',
    'Pickup': 'pickup', 'Truck': 'pickup',
    'Van': 'van', 'Wagon': 'wagon',
  };

  return {
    year: val('ModelYear') ? parseInt(val('ModelYear')!) : undefined,
    make: val('Make'),
    model: val('Model'),
    body_type: bodyMap[val('BodyClass') || ''],
    drivetrain: val('DriveType')?.includes('4') ? '4wd' : val('DriveType')?.toLowerCase(),
  };
}`,
      description: 'The regex validates the VIN is exactly 17 characters and excludes I, O, Q (not used in real VINs). It queries NHTSA\'s DecodeVinValues endpoint with a 10-second timeout via AbortSignal. The val() helper filters out empty strings and "Not Applicable" that NHTSA returns for missing fields. bodyMap converts their verbose descriptions like "Sport Utility Vehicle (SUV)" into the short enum values ("suv") that the listing form dropdown expects.'
    },
    {
      title: 'ISR Revalidation Pattern',
      language: 'TypeScript',
      narrative: 'The public site needs to show new listings within a minute of the dealer adding them, but we can\'t do full SSR on every request — the PocketBase server is a $6 droplet. ISR with 60-second revalidation hits the sweet spot.',
      code: `// Every data page exports this — 60 second ISR
export const revalidate = 60;

async function getHomeData() {
  const pb = createPocketBase();

  const [allListings, allPromos] = await Promise.all([
    pb.collection('listings').getFullList({
      filter: "status = 'active'",
      sort: '-tier,-created',
    }),
    (() => {
      const now = new Date().toISOString();
      return pb.collection('promotions').getFullList({
        filter: \`active = true && start_date <= '\${now}' && end_date >= '\${now}'\`,
        sort: 'display_order',
      });
    })(),
  ]);

  // Filter out listings without images (draft/incomplete)
  const listings = allListings.filter(
    l => l.images && l.images.length > 0
  );

  return { listings, promos };
}`,
      description: 'export const revalidate = 60 tells Next.js to cache the page and regenerate it at most once per minute. Promise.all runs the listings and promotions queries at the same time instead of waiting for one to finish before starting the other. The promotions query filters by active status and current date range. After both resolve, we filter out any listings that have no images so blank cards never show up on the homepage.'
    }
  ]
};
