# Behavior of `isOfType`

## Expected parameters

| Parameter | Data type | Description                                             |
|:----------|:----------|:--------------------------------------------------------|
| value     | unknown   | The value to test against the `type`.                   |
| type      | string    | The string representation of the type to check against. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value`         | Parameter <br> `type` | Function <br> `isOfType` | Description                                                                     |
|:-------------------------------|:----------------------|:-------------------------|:--------------------------------------------------------------------------------|
| 123                            | "number"              | true                     | Matches number. `unknown` expected for *value*, but `integer` given             |
| "hello"                        | "string"              | true                     | Matches string. `unknown` expected for *value*, but `string` given              |
| true                           | "boolean"             | true                     | Matches boolean. `unknown` expected for *value*, but `boolean` given            |
| 42                             | "bigint"              | true                     | Matches bigint. `unknown` expected for *value*, but `bigint` given              |
| Symbol()                       | "symbol"              | true                     | Matches symbol. `unknown` expected for *value*, but `symbol` given              |
| ()=>{}                         | "function"            | true                     | Matches function. `unknown` expected for *value*, but `function` given          |
| null                           | "null"                | true                     | Matches null. `unknown` expected for *value*, but `null` given                  |
| undefined                      | "undefined"           | true                     | Matches undefined. `unknown` expected for *value*, but `undefined` given        |
| `[]`                           | "array"               | true                     | Matches array. `unknown` expected for *value*, but `array` given                |
| Date(2026-01-30T17:04:47.446Z) | "date"                | true                     | Matches date. `unknown` expected for *value*, but `date` given                  |
| /./                            | "regexp"              | false                    | Matches regexp. `unknown` expected for *value*, but `regExp` given              |
| 3.14                           | "float"               | true                     | Matches float. `unknown` expected for *value*, but `float` given                |
| 123                            | "boolean"             | false                    | Does not match boolean. `unknown` expected for *value*, but `integer` given     |
| "123"                          | "number"              | false                    | Does not match number. `unknown` expected for *value*, but `decimal` given      |
| null                           | "object"              | false                    | Null does not match object. `unknown` expected for *value*, but `null` given    |
| `{}`                           | "array"               | false                    | Object does not match array. `unknown` expected for *value*, but `object` given |

## Default tests

| Parameter <br> `value`         | Parameter <br> `type`          | Function <br> `isOfType` | Description                                                                                          |
|:-------------------------------|:-------------------------------|:-------------------------|:-----------------------------------------------------------------------------------------------------|
| ""                             | "number"                       | false                    | Empty string. `unknown` expected for *value*, but `string` given                                     |
| 123                            | ""                             | false                    | Empty string                                                                                         |
| " "                            | "number"                       | false                    | Only space string. `unknown` expected for *value*, but `string` given                                |
| 123                            | " "                            | false                    | Only space string                                                                                    |
| "\r"                           | "number"                       | false                    | Carriage return. `unknown` expected for *value*, but `string` given                                  |
| 123                            | "\r"                           | false                    | Carriage return                                                                                      |
| "integer"                      | "number"                       | false                    | Data type returned by `getTypeOf()`. `unknown` expected for *value*, but `string` given              |
| 123                            | "integer"                      | true                     | Data type returned by `getTypeOf()`                                                                  |
| "Roland Milto"                 | "number"                       | false                    | Two word string. `unknown` expected for *value*, but `string` given                                  |
| 123                            | "Roland Milto"                 | false                    | Two word string                                                                                      |
| "äöüß"                         | "number"                       | false                    | Non-ASCII (German umlauts). `unknown` expected for *value*, but `string` given                       |
| 123                            | "äöüß"                         | false                    | Non-ASCII (German umlauts)                                                                           |
| "你好"                           | "number"                       | false                    | Non-Latin characters. `unknown` expected for *value*, but `string` given                             |
| 123                            | "你好"                           | false                    | Non-Latin characters                                                                                 |
| "🙂"                           | "number"                       | false                    | Emoji string. `unknown` expected for *value*, but `string` given                                     |
| 123                            | "🙂"                           | false                    | Emoji string                                                                                         |
| 42                             | "number"                       | true                     | Positive number. `unknown` expected for *value*, but `integer` given                                 |
| 123                            | 42                             | false                    | Positive number. `string` expected for *type*, but `integer` given                                   |
| -273                           | "number"                       | true                     | Negative number (0 Kelvin). `unknown` expected for *value*, but `integer` given                      |
| 123                            | -273                           | false                    | Negative number (0 Kelvin). `string` expected for *type*, but `integer` given                        |
| NaN                            | "number"                       | true                     | `NaN` (Not a Number). `unknown` expected for *value*, but `nan` given                                |
| 123                            | NaN                            | false                    | `NaN` (Not a Number). `string` expected for *type*, but `nan` given                                  |
| Infinity                       | "number"                       | true                     | Positive Infinity. `unknown` expected for *value*, but `number` given                                |
| 123                            | Infinity                       | false                    | Positive Infinity. `string` expected for *type*, but `number` given                                  |
| -Infinity                      | "number"                       | true                     | Negative Infinity. `unknown` expected for *value*, but `number` given                                |
| 123                            | -Infinity                      | false                    | Negative Infinity. `string` expected for *type*, but `number` given                                  |
| 0                              | "number"                       | false                    | BigInt zero `0n`. `unknown` expected for *value*, but `bigint` given                                 |
| 123                            | 0                              | false                    | BigInt zero `0n`. `string` expected for *type*, but `bigint` given                                   |
| 42                             | "number"                       | false                    | BigInt `42n`. `unknown` expected for *value*, but `bigint` given                                     |
| 123                            | 42                             | false                    | BigInt `42n`. `string` expected for *type*, but `bigint` given                                       |
| true                           | "number"                       | false                    | Boolean. `unknown` expected for *value*, but `boolean` given                                         |
| 123                            | true                           | false                    | Boolean. `string` expected for *type*, but `boolean` given                                           |
| true                           | "number"                       | false                    | Boolean object `Boolean(true)`. `unknown` expected for *value*, but `boolean` given                  |
| 123                            | true                           | false                    | Boolean object `Boolean(true)`. `string` expected for *type*, but `boolean` given                    |
| null                           | "number"                       | false                    | Null. `unknown` expected for *value*, but `null` given                                               |
| 123                            | null                           | false                    | Null. `string` expected for *type*, but `null` given                                                 |
| undefined                      | "number"                       | false                    | Undefined. `unknown` expected for *value*, but `undefined` given                                     |
| 123                            | undefined                      | false                    | Undefined. `string` expected for *type*, but `undefined` given                                       |
| Symbol()                       | "number"                       | false                    | Symbol. `unknown` expected for *value*, but `symbol` given                                           |
| 123                            | Symbol()                       | false                    | Symbol. `string` expected for *type*, but `symbol` given                                             |
| /./                            | "number"                       | false                    | RegExp. `unknown` expected for *value*, but `regExp` given                                           |
| 123                            | /./                            | false                    | RegExp. `string` expected for *type*, but `regExp` given                                             |
| /^Roland$/i                    | "number"                       | false                    | RegExp with flags. `unknown` expected for *value*, but `regExp` given                                |
| 123                            | /^Roland$/i                    | false                    | RegExp with flags. `string` expected for *type*, but `regExp` given                                  |
| `{}`                           | "number"                       | false                    | Empty plain object. `unknown` expected for *value*, but `object` given                               |
| 123                            | `{}`                           | false                    | Empty plain object. `string` expected for *type*, but `object` given                                 |
| `{"dev":"Roland Milto"}`       | "number"                       | false                    | Non-empty plain object. `unknown` expected for *value*, but `object` given                           |
| 123                            | `{"dev":"Roland Milto"}`       | false                    | Non-empty plain object. `string` expected for *type*, but `object` given                             |
| Date(2026-01-30T17:04:47.443Z) | "number"                       | false                    | `new Date()` object. `unknown` expected for *value*, but `date` given                                |
| 123                            | Date(2026-01-30T17:04:47.443Z) | false                    | `new Date()` object. `string` expected for *type*, but `date` given                                  |
| Date(Invalid)                  | "number"                       | false                    | Invalid Date object. `unknown` expected for *value*, but `date` given                                |
| 123                            | Date(Invalid)                  | false                    | Invalid Date object. `string` expected for *type*, but `date` given                                  |
| Error                          | "number"                       | false                    | `new Error()` object. `unknown` expected for *value*, but `error` given                              |
| 123                            | Error                          | false                    | `new Error()` object. `string` expected for *type*, but `error` given                                |
| new Map()                      | "number"                       | false                    | Empty map `new Map()`. `unknown` expected for *value*, but `map` given                               |
| 123                            | new Map()                      | false                    | Empty map `new Map()`. `string` expected for *type*, but `map` given                                 |
| new Set()                      | "number"                       | false                    | Empty set `new Set()`. `unknown` expected for *value*, but `set` given                               |
| 123                            | new Set()                      | false                    | Empty set `new Set()`. `string` expected for *type*, but `set` given                                 |
| new Map([["k", "v"]])          | "number"                       | false                    | Non-empty map `new Map([['k', 'v']])`. `unknown` expected for *value*, but `map` given               |
| 123                            | new Map([["k", "v"]])          | false                    | Non-empty map `new Map([['k', 'v']])`. `string` expected for *type*, but `map` given                 |
| new Set([1, 2, 3])             | "number"                       | false                    | Non-empty set `new Set([1, 2, 3])`. `unknown` expected for *value*, but `set` given                  |
| 123                            | new Set([1, 2, 3])             | false                    | Non-empty set `new Set([1, 2, 3])`. `string` expected for *type*, but `set` given                    |
| [Object: null prototype] {}    | "number"                       | false                    | Object without prototype (Object.create(null)). `unknown` expected for *value*, but `object` given   |
| 123                            | [Object: null prototype] {}    | false                    | Object without prototype (Object.create(null)). `string` expected for *type*, but `object` given     |
| `[]`                           | "number"                       | false                    | Empty array. `unknown` expected for *value*, but `array` given                                       |
| 123                            | `[]`                           | false                    | Empty array. `string` expected for *type*, but `array` given                                         |
| `[null]`                       | "number"                       | false                    | Array with `undefined` (but returning `[null]`). `unknown` expected for *value*, but `array` given   |
| 123                            | `[null]`                       | false                    | Array with `undefined` (but returning `[null]`). `string` expected for *type*, but `array` given     |
| `[null,null,null]`             | "number"                       | false                    | Sparse array (length 3, empty slots). `unknown` expected for *value*, but `array` given              |
| 123                            | `[null,null,null]`             | false                    | Sparse array (length 3, empty slots). `string` expected for *type*, but `array` given                |
| `[["nested"]]`                 | "number"                       | false                    | Nested array. `unknown` expected for *value*, but `array` given                                      |
| 123                            | `[["nested"]]`                 | false                    | Nested array. `string` expected for *type*, but `array` given                                        |
| `["Birthday",18,8,1990]`       | "number"                       | false                    | Mixed array. `unknown` expected for *value*, but `array` given                                       |
| 123                            | `["Birthday",18,8,1990]`       | false                    | Mixed array. `string` expected for *type*, but `array` given                                         |
| ()=>{}                         | "number"                       | false                    | Function `() => {}`. `unknown` expected for *value*, but `function` given                            |
| 123                            | ()=>{}                         | false                    | Function `() => {}`. `string` expected for *type*, but `function` given                              |
| async()=>{}                    | "number"                       | false                    | Async function `async () => {}`. `unknown` expected for *value*, but `function` given                |
| 123                            | async()=>{}                    | false                    | Async function `async () => {}`. `string` expected for *type*, but `function` given                  |
| function*(){yield 1;}          | "number"                       | false                    | Generator function `function* () { yield 1; }`. `unknown` expected for *value*, but `function` given |
| 123                            | function*(){yield 1;}          | false                    | Generator function `function* () { yield 1; }`. `string` expected for *type*, but `function` given   |

<br>

---

<small>The file was generated on 30 January 2026 at 17:04:47 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>