/**
 * Converts a given string to kebab-case format.
 *
 * This function validates the input, normalizes the string by trimming
 * whitespace and converting it to lowercase, splits it using common
 * separators and camelCase boundaries, and then joins the result using
 * hyphens.
 *
 * Edge cases handled:
 * - null, undefined, or non-string inputs
 * - empty strings
 * - multiple consecutive separators
 * - leading and trailing whitespace
 * - mixed casing and camelCase input
 * - numeric characters
 *
 * @param {string} input - The string to convert to kebab-case.
 * @returns {string} A kebab-case formatted string.
 *
 * @example
 * toKebabCase("first name");      // "first-name"
 * toKebabCase("userId");          // "user-id"
 * toKebabCase("SCREEN_NAME");     // "screen-name"
 * toKebabCase("mobile-number");   // "mobile-number"
 */
function toKebabCase(input) {
  // Step 1: Input validation
  if (typeof input !== "string") {
    console.warn("toKebabCase: input must be a string");
    return "";
  }

  // Step 2: Normalize input
  const trimmed = input.trim();
  if (trimmed === "") {
    return "";
  }

  // Step 3: Convert to kebab-case
  return trimmed
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2") // handle camelCase
    .toLowerCase()
    .split(/[\s_-]+/) // split on spaces, underscores, hyphens
    .filter(Boolean)
    .join("-");
}

// Example test cases
console.log(toKebabCase("first name"));        // first-name
console.log(toKebabCase("userId"));            // user-id
console.log(toKebabCase("SCREEN_NAME"));       // screen-name
console.log(toKebabCase("mobile-number"));     // mobile-number
console.log(toKebabCase("  multipleWordsHere ")); // multiple-words-here
console.log(toKebabCase(null));                // ""
