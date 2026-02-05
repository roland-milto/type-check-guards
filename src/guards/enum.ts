// Import: Interfaces and types.
import type {EnumLike} from "../types/enumLike.js";
// Import: local functions.
import {isNumber} from "./number.js";
import {isString} from "./string.js";
import {isFilledArray} from "./filledArray.js";

// Interfaces and types.
type EnumMode = "both" | "numeric" | "strings";

/**
 * The `isEnum` function generates a type guard to validate if a given token belongs to the specified enumeration.
 * It supports filtering between numeric, string, or both types of enum values using an optional mode.

 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-29

 * @param   {Enumeration} enumeration - The enum to check against.
 * @param   {EnumMode}    [option]    - An optional mode to filter "numeric", "strings", or "both" enum values.
 * @returns {Function}                - A type guard function validating if a token belongs to the enum.

 * @example
 * // Enum declaration
 * enum Color {
 *   Red = 1,
 *   Green = 2,
 *   Blue = 3
 * }
 *
 * const isValidColorNumeric = isEnum(Color, "numeric");
 * const isValidColorString = isEnum(Color, "strings");
 * const isValidColorBoth = isEnum(Color, "both");
 *
 * // Examples with "numeric" mode
 * isValidColorNumeric(1);   // true
 * isValidColorNumeric("1"); // false (strings are excluded in numeric mode)
 *
 * // Examples with "strings" mode
 * isValidColorString(1);    // false (numbers are excluded in strings mode)
 * isValidColorString("Red");// true
 *
 * // Examples with "both" mode
 * isValidColorBoth(1);      // true
 * isValidColorBoth("Red");  // true
 */
function isEnum<Enumeration extends EnumLike>(enumeration: Enumeration, option?: EnumMode): (token: unknown) => token is Enumeration[keyof Enumeration] {
  const mode: EnumMode =
    option === "both"
    || option === "strings"
    || option === "numeric"
      ? option : "numeric";

  const values: (number | string)[] = Object.values(enumeration);
  const looksLikeNumericTsEnum: boolean = values.some(isNumber) && values.some(isString);

  const filteredValues: (number | string)[] = looksLikeNumericTsEnum
    ? mode === "numeric"
      ? values.filter((v: number | string): v is number => typeof v === "number")
      : mode === "strings"
        ? values.filter((v: number | string): v is string => typeof v === "string")
        : values
    : values;

  const allowed = new Set<unknown>(filteredValues);

  return (token: unknown): token is Enumeration[keyof Enumeration] => allowed.has(token);
}

/**
 * The `areEnums` function checks whether all elements in a given array are valid members of a specified enumeration.
 * It uses a type guard to verify if the provided tokens conform to the enumeration type and mode specified.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-02-03
 *
 * @template Enumeration            - The enumeration type to validate against.
 *
 * @param   {Enumeration} array     - The enumeration object to validate against.
 * @param   {EnumMode}    [option]  - Optional mode for additional enumeration validation settings.
 *
 * @returns {(tokens: unknown[]) => tokens is Array<Enumeration[keyof Enumeration]>}
 *                              - A predicate function that determines if an input array only contains valid enumeration members.
 *
 * @throws  {TypeError}        - If the input array is not an enumerable object or the mode is invalid.
 *
 * @example
 * const Colors = { RED: "red", GREEN: "green", BLUE: "blue" } as const;
 * const isColorArray = areEnums(Colors);
 *
 * // true
 * console.log(isColorArray(["red", "green", "blue"]));
 *
 * // false (invalid value: "yellow" is not part of the Colors enum)
 * console.log(isColorArray(["red", "yellow"]));
 *
 * // false (input is an empty array)
 * console.log(isColorArray([]));
 *
 * // true
 * console.log(isColorArray(["red"]));
 */
function areEnums<Enumeration extends EnumLike>(array: Enumeration, option?: EnumMode): (tokens: unknown[]) => tokens is Array<Enumeration[keyof Enumeration]> {
  const guard: (token: unknown) => token is Enumeration[keyof Enumeration] = isEnum(array, option);

  return (tokens: unknown[]): tokens is Array<Enumeration[keyof Enumeration]> => {
    if (!isFilledArray(tokens)) return false;

    for (let i: number = 0; i < tokens.length; i++) {
      if (!guard(tokens[i])) return false;
    }

    return true;
  };
}

// Export with aliases.
export {isEnum, isEnum as isEnumeration, areEnums, areEnums as areEnumerations};