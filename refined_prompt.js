/**
 * Converts a given string to snake_case format.
 * Handles edge cases such as:
 * - null, undefined, or non-string inputs
 * - empty strings
 * - multiple separators (spaces, underscores, hyphens)
 * - leading/trailing whitespace
 * - mixed or uppercase input
 * - numeric characters
 *
 * @param {string} input - The string to convert to snake_case.
 * @returns {string} A snake_case formatted string.
 *
 * @example
 * toSnakeCase("first name");      // first_name
 * toSnakeCase("userId");          // user_id
 * toSnakeCase("SCREEN NAME");     // screen_name
 * toSnakeCase("mobile-number");   // mobile_number
 */
function toSnakeCase(input) {
  // Input validation
  if (typeof input !== "string") {
    console.warn("toSnakeCase: input must be a string");
    return "";
  }

  // Trim whitespace and handle empty string
  const trimmed = input.trim();
  if (trimmed === "") {
    return "";
  }

  return trimmed
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2") // handle camelCase input
    .toLowerCase()
    .split(/[\s_-]+/)
    .filter(Boolean)
    .join("_");
}
