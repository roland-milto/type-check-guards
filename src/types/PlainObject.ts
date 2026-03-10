/**
 * The `PlainObject` type represents an object with string keys and values of the `unknown` type.
 * It enforces that all keys of the object are `readonly`, ensuring immutability at the key level.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-03-10
 *
 * @example
 * const myObject: PlainObject = {
 *   author: 'Roland Milto',
 *   year: 1990,
 * };
 */
type PlainObject = Record<string, unknown> & {
  readonly [key: string]: unknown;
};

// @todo write documentation for PlainObject type

// Export type.
export type {PlainObject};