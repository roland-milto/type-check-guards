/**
 * Represents a structured key-value pair where keys are strings and values can be either strings or numbers.
 * This is useful for creating objects that emulate enumerations in TypeScript.

 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-02-03
 */
type EnumLike = Record<string, string | number>;

// Export.
export {EnumLike}