/**
 * Determines whether the given value is strictly equal to the expected value.
 *
 * @param   {unknown} value     - The value to compare.
 * @param   {unknown} expected  - The expected value for comparison.
 *
 * @returns {boolean}           - Returns `true` if the value is strictly equal to the expected value, otherwise `false`.
 */
export function isEqual<T>(value: unknown, expected: T): value is T {
  return value === expected;
}