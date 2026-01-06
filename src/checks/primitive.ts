/**
 * Determines whether the provided value is a primitive data type.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-06
 *
 * @param   {unknown} value - The value to check.
 *
 * @returns {boolean}       - Returns `true` if the value is a primitive, otherwise `false`.
 *
 * @example
 * // true
 * isPrimitive(42)
 *
 * // true
 * isPrimitive("text")
 *
 * // false
 * isPrimitive({})
 */
export function isPrimitive(value: unknown): value is bigint | boolean | null | number | string | symbol | undefined {
  return (
    value === null ||
    (typeof value !== 'object' && typeof value !== 'function')
  );
}

/**
 * Checks if the provided value is an array consisting entirely of primitive data types.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-06
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an array of primitives, otherwise `false`.
 *
 * @example
 * // true
 * arePrimitives([1, "a", true])
 *
 * // true
 * arePrimitives([null, undefined])
 *
 * // false
 * arePrimitives([1, {}])
 */
export function arePrimitives(array: unknown): array is (bigint | boolean | null | number | string | symbol | undefined)[] {
  if (!Array.isArray(array)) {
    return false;
  }

  if (array.length === 0) {
    return false;
  }

  for (const item of array) {
    if (!isPrimitive(item)) {
      return false;
    }
  }

  return true;
}