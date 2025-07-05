'use client';

import React from 'react';
import Link from 'next/link';

const DungeonEscapeCodePage = () => {
  const [codeContent, setCodeContent] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Load the C++ code content
    const loadCode = async () => {
      try {
        const fullCode = `// GameEngine.cpp - Main game loop and state management
#include "GameEngine.h"
#include <iostream>
#include <vector>
#include <memory>

class GameEngine {
private:
    GameState currentState;
    Player player;
    std::vector<std::unique_ptr<Enemy>> enemies;
    std::vector<std::unique_ptr<Item>> items;
    
public:
    void run() {
        initialize();
        
        while (currentState != GameState::EXIT) {
            handleInput();
            update();
            render();
        }
        
        cleanup();
    }
    
    void update() {
        switch (currentState) {
            case GameState::MENU:
                updateMenu();
                break;
            case GameState::PLAYING:
                updateGame();
                break;
            case GameState::PAUSED:
                updatePause();
                break;
        }
    }
};

// Player.cpp - Character system with RPG mechanics
class Player {
private:
    int health = 100;
    int maxHealth = 100;
    int attack = 10;
    int defense = 5;
    int level = 1;
    int experience = 0;
    Position position;
    std::vector<std::unique_ptr<Item>> inventory;
    
public:
    Player(int startHealth, int startAttack, int startDefense) 
        : health(startHealth), maxHealth(startHealth), 
          attack(startAttack), defense(startDefense) {}
    
    void takeDamage(int damage) {
        int actualDamage = std::max(damage - defense, 1);
        health = std::max(health - actualDamage, 0);
        
        if (health <= 0) {
            std::cout << "Game Over!" << std::endl;
        }
    }
    
    void gainExperience(int exp) {
        experience += exp;
        checkLevelUp();
    }
    
    void checkLevelUp() {
        int expRequired = level * 100;
        if (experience >= expRequired) {
            level++;
            maxHealth += 20;
            health = maxHealth;
            attack += 5;
            defense += 3;
            experience -= expRequired;
            
            std::cout << "Level up! Now level " << level << std::endl;
        }
    }
};

// Combat.cpp - Turn-based combat system
class CombatSystem {
public:
    static bool battle(Player& player, Enemy& enemy) {
        std::cout << "Battle begins!" << std::endl;
        std::cout << "Player: " << player.getHealth() << " HP" << std::endl;
        std::cout << "Enemy: " << enemy.getHealth() << " HP" << std::endl;
        std::cout << "Attack (1), Defend (2), Item (3), Run (4)" << std::endl;
        
        while (player.getHealth() > 0 && enemy.getHealth() > 0) {
            // Player turn
            int choice;
            std::cin >> choice;
            
            switch (choice) {
                case 1:
                    attack(player, enemy);
                    break;
                case 2:
                    defend(player);
                    break;
                case 3:
                    useItem(player);
                    break;
                case 4:
                    if (attemptRun()) {
                        std::cout << "Escaped!" << std::endl;
                        return false;
                    }
                    break;
            }
            
            // Enemy turn
            if (enemy.getHealth() > 0) {
                enemyTurn(player, enemy);
            }
        }
        
        if (player.getHealth() > 0) {
            std::cout << "Victory!" << std::endl;
            return true;
        } else {
            std::cout << "Defeat!" << std::endl;
            return false;
        }
    }
    
private:
    static void attack(Player& attacker, Enemy& defender) {
        int damage = attacker.getAttack() + (rand() % 10);
        defender.takeDamage(damage);
        std::cout << "Dealt " << damage << " damage!" << std::endl;
    }
};

// Item.cpp - Inventory and item management
enum class ItemType {
    WEAPON,
    ARMOR,
    CONSUMABLE,
    KEY_ITEM
};

class Item {
private:
    std::string name;
    std::string description;
    ItemType type;
    int value;
    
public:
    Item(std::string n, std::string desc, ItemType t, int v) 
        : name(n), description(desc), type(t), value(v) {}
    
    virtual void use(Player& player) {
        switch (type) {
            case ItemType::CONSUMABLE:
                std::cout << "Used " << name << std::endl;
                player.heal(value);
                break;
            case ItemType::WEAPON:
                player.equipWeapon(value);
                break;
            case ItemType::ARMOR:
                player.equipArmor(value);
                break;
        }
    }
    
    std::string getName() const { return name; }
    std::string getDescription() const { return description; }
    ItemType getType() const { return type; }
    int getValue() const { return value; }
};

class Inventory {
private:
    std::vector<std::unique_ptr<Item>> items;
    static const int MAX_ITEMS = 20;
    
public:
    bool addItem(const Item& item) {
        if (items.size() >= MAX_ITEMS) {
            std::cout << "Inventory full!" << std::endl;
            return false;
        }
        
        items.push_back(std::make_unique<Item>(item));
        std::cout << "Added " << item.getName() << " to inventory." << std::endl;
        return true;
    }
    
    void displayInventory() {
        std::cout << "\n=== INVENTORY ===" << std::endl;
        for (size_t i = 0; i < items.size(); ++i) {
            std::cout << (i + 1) << ". " << items[i]->getName() << std::endl;
        }
    }
};

// Technical Features:
// - Smart pointers for automatic memory management
// - STL containers for dynamic data structures  
// - Object-oriented design with inheritance
// - Template-based type safety
// - RAII for resource management
// - Modern C++17 features throughout`;
        
        setCodeContent(fullCode);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading code:', error);
        setIsLoading(false);
      }
    };
    
    loadCode();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{
        background: 'linear-gradient(135deg, #15202B 0%, #1a2332 50%, #15202B 100%)'
      }}>
        <div style={{ color: '#F4F1EA' }}>Loading C++ code...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #15202B 0%, #1a2332 50%, #15202B 100%)'
    }}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="mb-4 px-4 py-2 rounded border transition-colors"
            style={{
              backgroundColor: 'rgba(244, 241, 234, 0.1)',
              color: '#F4F1EA',
              borderColor: 'rgba(169, 184, 196, 0.3)'
            }}
            onMouseOver={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(244, 241, 234, 0.2)'}
            onMouseOut={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(244, 241, 234, 0.1)'}
          >
            ← Back to Projects
          </button>
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#F4F1EA' }}>Dungeon Escape - Source Code</h1>
          <p style={{ color: 'rgba(244, 241, 234, 0.7)' }}>Complete C++17 implementation of the text-based dungeon crawler</p>
        </div>

        {/* Page Navigation */}
        <div className="mb-8 sticky top-4 z-10">
          <nav className="backdrop-blur-sm border rounded-lg p-4" style={{
            backgroundColor: 'rgba(21, 32, 43, 0.95)',
            borderColor: 'rgba(169, 184, 196, 0.3)'
          }}>
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => document.getElementById('game-engine')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-3 py-2 text-sm rounded transition-colors"
                style={{
                  backgroundColor: 'rgba(244, 241, 234, 0.1)',
                  color: '#F4F1EA'
                }}
                onMouseOver={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#D75F4E';
                  (e.target as HTMLElement).style.color = '#F4F1EA';
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = 'rgba(244, 241, 234, 0.1)';
                  (e.target as HTMLElement).style.color = '#F4F1EA';
                }}
              >
                Game Engine
              </button>
              <button
                onClick={() => document.getElementById('player-system')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-3 py-2 text-sm rounded transition-colors"
                style={{
                  backgroundColor: 'rgba(244, 241, 234, 0.1)',
                  color: '#F4F1EA'
                }}
                onMouseOver={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#D75F4E';
                  (e.target as HTMLElement).style.color = '#F4F1EA';
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = 'rgba(244, 241, 234, 0.1)';
                  (e.target as HTMLElement).style.color = '#F4F1EA';
                }}
              >
                Player System
              </button>
              <button
                onClick={() => document.getElementById('combat-system')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-3 py-2 text-sm rounded transition-colors"
                style={{
                  backgroundColor: 'rgba(244, 241, 234, 0.1)',
                  color: '#F4F1EA'
                }}
                onMouseOver={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#D75F4E';
                  (e.target as HTMLElement).style.color = '#F4F1EA';
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = 'rgba(244, 241, 234, 0.1)';
                  (e.target as HTMLElement).style.color = '#F4F1EA';
                }}
              >
                Combat System
              </button>
              <button
                onClick={() => document.getElementById('inventory-system')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-3 py-2 text-sm rounded transition-colors"
                style={{
                  backgroundColor: 'rgba(244, 241, 234, 0.1)',
                  color: '#F4F1EA'
                }}
                onMouseOver={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#D75F4E';
                  (e.target as HTMLElement).style.color = '#F4F1EA';
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = 'rgba(244, 241, 234, 0.1)';
                  (e.target as HTMLElement).style.color = '#F4F1EA';
                }}
              >
                Inventory System
              </button>
              <button
                onClick={() => document.getElementById('technical-highlights')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-3 py-2 text-sm rounded transition-colors"
                style={{
                  backgroundColor: 'rgba(244, 241, 234, 0.1)',
                  color: '#F4F1EA'
                }}
                onMouseOver={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#D75F4E';
                  (e.target as HTMLElement).style.color = '#F4F1EA';
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = 'rgba(244, 241, 234, 0.1)';
                  (e.target as HTMLElement).style.color = '#F4F1EA';
                }}
              >
                Technical Highlights
              </button>
            </div>
          </nav>
        </div>

        <div className="grid gap-6">
          {/* Game Engine Core */}
          <div id="game-engine" className="rounded-lg border overflow-hidden" style={{
            backgroundColor: 'rgba(244, 241, 234, 0.9)',
            borderColor: 'rgba(169, 184, 196, 0.3)'
          }}>
            <div className="px-6 py-4 border-b" style={{
              backgroundColor: 'rgba(21, 32, 43, 0.1)',
              borderColor: 'rgba(169, 184, 196, 0.3)'
            }}>
              <h2 className="text-xl font-semibold" style={{ color: '#15202B' }}>Game Engine Core</h2>
              <p className="text-sm mt-1" style={{ color: 'rgba(21, 32, 43, 0.7)' }}>Main game loop and state management</p>
            </div>
            <div className="p-6">
              <pre className="p-4 rounded text-sm overflow-x-auto" style={{
                backgroundColor: 'rgba(21, 32, 43, 0.05)',
                color: '#15202B',
                border: '1px solid rgba(169, 184, 196, 0.2)'
              }}>
                <code>
                  {codeContent}
                </code>
              </pre>
            </div>
          </div>

          {/* Player Character System */}
          <div id="player-system" className="rounded-lg border overflow-hidden" style={{
            backgroundColor: 'rgba(244, 241, 234, 0.9)',
            borderColor: 'rgba(169, 184, 196, 0.3)'
          }}>
            <div className="px-6 py-4 border-b" style={{
              backgroundColor: 'rgba(21, 32, 43, 0.1)',
              borderColor: 'rgba(169, 184, 196, 0.3)'
            }}>
              <h2 className="text-xl font-semibold" style={{ color: '#15202B' }}>Player Character System</h2>
              <p className="text-sm mt-1" style={{ color: 'rgba(21, 32, 43, 0.7)' }}>Character attributes and progression</p>
            </div>
            <div className="p-6">
              <pre className="p-4 rounded text-sm overflow-x-auto" style={{
                backgroundColor: 'rgba(21, 32, 43, 0.05)',
                color: '#15202B',
                border: '1px solid rgba(169, 184, 196, 0.2)'
              }}>
                <code>
{`// Player.h - Character class definition
class Player {
private:
    int health;
    int maxHealth;
    int attack;
    int defense;
    int level;
    int experience;
    Position position;
    std::vector<Item> inventory;
    
public:
    Player(int startHealth = 100, int startAttack = 10) 
        : health(startHealth), maxHealth(startHealth), 
          attack(startAttack), defense(5), level(1), experience(0) {}
    
    void takeDamage(int damage) {
        int actualDamage = std::max(1, damage - defense);
        health = std::max(0, health - actualDamage);
        
        if (health <= 0) {
            std::cout << "You have been defeated!" << std::endl;
        }
    }
    
    void gainExperience(int exp) {
        experience += exp;
        checkLevelUp();
    }
    
    void checkLevelUp() {
        int expRequired = level * 100;
        if (experience >= expRequired) {
            level++;
            maxHealth += 20;
            health = maxHealth;
            attack += 5;
            defense += 2;
            experience -= expRequired;
            
            std::cout << "Level up! You are now level " << level << std::endl;
        }
    }
};`}
                </code>
              </pre>
            </div>
          </div>

          {/* Combat System */}
          <div id="combat-system" className="bg-surface-primary rounded-lg border border-divider overflow-hidden">
            <div className="px-6 py-4 bg-surface-panel border-b border-divider">
              <h2 className="text-xl font-semibold text-text-body">Combat System</h2>
              <p className="text-text-body/70 text-sm mt-1">Turn-based combat mechanics</p>
            </div>
            <div className="p-6">
              <pre className="bg-surface-panel p-4 rounded text-sm overflow-x-auto">
                <code className="text-text-body">
{`// Combat.cpp - Battle system implementation
class Combat {
public:
    static bool battle(Player& player, Enemy& enemy) {
        std::cout << "A wild " << enemy.getName() << " appears!" << std::endl;
        
        while (player.isAlive() && enemy.isAlive()) {
            // Player turn
            std::cout << "\\nYour turn! Choose action:" << std::endl;
            std::cout << "1. Attack" << std::endl;
            std::cout << "2. Defend" << std::endl;
            std::cout << "3. Use Item" << std::endl;
            std::cout << "4. Run" << std::endl;
            
            int choice;
            std::cin >> choice;
            
            switch (choice) {
                case 1:
                    attack(player, enemy);
                    break;
                case 2:
                    defend(player);
                    break;
                case 3:
                    useItem(player);
                    break;
                case 4:
                    if (attemptRun()) {
                        std::cout << "You successfully escaped!" << std::endl;
                        return false;
                    }
                    break;
            }
            
            // Enemy turn
            if (enemy.isAlive()) {
                enemyTurn(enemy, player);
            }
        }
        
        if (player.isAlive()) {
            std::cout << "Victory! You defeated the " << enemy.getName() << "!" << std::endl;
            player.gainExperience(enemy.getExpReward());
            return true;
        } else {
            std::cout << "Defeat! Game Over." << std::endl;
            return false;
        }
    }
    
private:
    static void attack(Player& attacker, Enemy& defender) {
        int damage = attacker.getAttack() + (rand() % 10);
        defender.takeDamage(damage);
        std::cout << "You deal " << damage << " damage!" << std::endl;
    }
};`}
                </code>
              </pre>
            </div>
          </div>

          {/* Inventory System */}
          <div id="inventory-system" className="bg-surface-primary rounded-lg border border-divider overflow-hidden">
            <div className="px-6 py-4 bg-surface-panel border-b border-divider">
              <h2 className="text-xl font-semibold text-text-body">Inventory System</h2>
              <p className="text-text-body/70 text-sm mt-1">Item management and equipment</p>
            </div>
            <div className="p-6">
              <pre className="bg-surface-panel p-4 rounded text-sm overflow-x-auto">
                <code className="text-text-body">
{`// Inventory.h - Item management system
enum class ItemType {
    WEAPON,
    ARMOR,
    CONSUMABLE,
    KEY_ITEM
};

class Item {
private:
    std::string name;
    std::string description;
    ItemType type;
    int value;
    
public:
    Item(const std::string& n, const std::string& desc, ItemType t, int v)
        : name(n), description(desc), type(t), value(v) {}
    
    virtual void use(Player& player) {
        switch (type) {
            case ItemType::CONSUMABLE:
                if (name == "Health Potion") {
                    player.heal(value);
                    std::cout << "You restored " << value << " health!" << std::endl;
                }
                break;
            case ItemType::WEAPON:
                player.equipWeapon(*this);
                break;
            case ItemType::ARMOR:
                player.equipArmor(*this);
                break;
        }
    }
    
    std::string getName() const { return name; }
    std::string getDescription() const { return description; }
    ItemType getType() const { return type; }
    int getValue() const { return value; }
};

class Inventory {
private:
    std::vector<Item> items;
    static const int MAX_ITEMS = 20;
    
public:
    bool addItem(const Item& item) {
        if (items.size() >= MAX_ITEMS) {
            std::cout << "Inventory full! Cannot add " << item.getName() << std::endl;
            return false;
        }
        
        items.push_back(item);
        std::cout << "Added " << item.getName() << " to inventory." << std::endl;
        return true;
    }
    
    void displayInventory() const {
        std::cout << "\\n=== INVENTORY ===" << std::endl;
        for (size_t i = 0; i < items.size(); ++i) {
            std::cout << i + 1 << ". " << items[i].getName() 
                      << " - " << items[i].getDescription() << std::endl;
        }
        std::cout << "=================" << std::endl;
    }
};`}
                </code>
              </pre>
            </div>
          </div>

          {/* Technical Highlights */}
          <div id="technical-highlights" className="bg-surface-primary rounded-lg border border-divider overflow-hidden">
            <div className="px-6 py-4 bg-surface-panel border-b border-divider">
              <h2 className="text-xl font-semibold text-text-body">Technical Highlights</h2>
              <p className="text-text-body/70 text-sm mt-1">Key implementation features</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-text-body">C++17 Features Used</h3>
                  <ul className="text-text-body/70 text-sm space-y-1">
                    <li>• Smart pointers for memory management</li>
                    <li>• STL containers (vector, map, queue)</li>
                    <li>• Object-oriented design patterns</li>
                    <li>• Template metaprogramming</li>
                    <li>• Exception handling</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-text-body">Architecture Patterns</h3>
                  <ul className="text-text-body/70 text-sm space-y-1">
                    <li>• State machine for game states</li>
                    <li>• Observer pattern for events</li>
                    <li>• Strategy pattern for AI behavior</li>
                    <li>• Factory pattern for object creation</li>
                    <li>• RAII for resource management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default DungeonEscapeCodePage;
