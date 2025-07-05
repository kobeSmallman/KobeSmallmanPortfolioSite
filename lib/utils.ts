import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
/**
 * Combines multiple class names and merges Tailwind CSS classes
 * @param inputs - Class names to be combined
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a date string into a human-readable format
 * @param dateString - Date string to format
 * @returns Formatted date string (e.g., "January 1, 2023")
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Truncates text to a specified length and adds an ellipsis if needed
 * @param text - Text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 */
export function truncateText(text: string, maxLength: number = 100): string {
  if (text.length <= maxLength) return text
  return `${text.substring(0, maxLength)}...`
}

/**
 * Generates a random ID of specified length
 * @param length - Length of the ID to generate
 * @returns Random alphanumeric ID
 */
export function generateId(length: number = 8): string {
  return Math.random().toString(36).substring(2, 2 + length)
}

/**
 * Scrolls to an element with the specified ID
 * @param id - ID of the element to scroll to
 * @param offset - Optional offset from the top of the element (in pixels)
 */
export function scrollToElement(id: string, offset: number = 0): void {
  const element = document.getElementById(id)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    })
  }
}

/**
 * Debounce a function call
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
