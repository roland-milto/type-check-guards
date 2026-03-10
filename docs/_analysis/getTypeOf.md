# Behavior of `getTypeOf`

## Expected parameters

| Parameter | Data type | Description                                     |
|:----------|:----------|:------------------------------------------------|
| value     | unknown   | The value for which to determine the data type. |

Expected return type: `string`

## Specific tests

| Parameter <br> `value`         | Function <br> `getTypeOf` | Description                                                                                                   |
|:-------------------------------|:--------------------------|:--------------------------------------------------------------------------------------------------------------|
| null                           | "null"                    | null. `unknown` expected for *value*, but `null` given                                                        |
| undefined                      | "undefined"               | undefined. `unknown` expected for *value*, but `undefined` given                                              |
| 0                              | "integer"                 | number: zero. `unknown` expected for *value*, but `integer` given                                             |
| 42                             | "integer"                 | number: integer. `unknown` expected for *value*, but `integer` given                                          |
| 3.14                           | "float"                   | number: float. `unknown` expected for *value*, but `float` given                                              |
| NaN                            | "nan"                     | number: nan. `unknown` expected for *value*, but `nan` given                                                  |
| "hello"                        | "string"                  | string: non-numeric. `unknown` expected for *value*, but `string` given                                       |
| "1010"                         | "binary"                  | string: binary (no prefix). `unknown` expected for *value*, but `binary` given                                |
| "0b1010"                       | "binary"                  | string: binary (0b prefix). `unknown` expected for *value*, but `binary` given                                |
| "123"                          | "decimal"                 | string: decimal integer. `unknown` expected for *value*, but `decimal` given                                  |
| "123.45"                       | "decimal"                 | string: decimal float. `unknown` expected for *value*, but `decimal` given                                    |
| "0xFF"                         | "hexadecimal"             | string: hexadecimal. `unknown` expected for *value*, but `hexadecimal` given                                  |
| "0o755"                        | "octal"                   | string: octal. `unknown` expected for *value*, but `octal` given                                              |
| `[]`                           | "array"                   | array. `unknown` expected for *value*, but `array` given                                                      |
| `[1,2,3]`                      | "array"                   | array with values. `unknown` expected for *value*, but `array` given                                          |
| true                           | "boolean"                 | boolean. `unknown` expected for *value*, but `boolean` given                                                  |
| 1                              | "bigint"                  | bigint. `unknown` expected for *value*, but `bigint` given                                                    |
| Symbol()                       | "symbol"                  | symbol. `unknown` expected for *value*, but `symbol` given                                                    |
| ()=>{}                         | "function"                | function. `unknown` expected for *value*, but `function` given                                                |
| Date(2026-02-06T13:12:42.457Z) | "date"                    | date. `unknown` expected for *value*, but `date` given                                                        |
| /abc/i                         | "regexp"                  | regexp. `unknown` expected for *value*, but `regExp` given                                                    |
| Error                          | "error"                   | error. `unknown` expected for *value*, but `error` given                                                      |
| new Map()                      | "map"                     | map. `unknown` expected for *value*, but `map` given                                                          |
| new Set()                      | "set"                     | set. `unknown` expected for *value*, but `set` given                                                          |
| `{}`                           | "promise"                 | promise. `unknown` expected for *value*, but `promise` given                                                  |
| `{}`                           | "weakmap"                 | weakmap. `unknown` expected for *value*, but `weakMap` given                                                  |
| `{}`                           | "weakset"                 | weakset. `unknown` expected for *value*, but `weakSet` given                                                  |
| [Object: null prototype] {}    | "object"                  | object without prototype => raw [object Object] => object. `unknown` expected for *value*, but `object` given |

## Default tests

| Parameter <br> `value`         | Function <br> `getTypeOf` | Description                                                                                          |
|:-------------------------------|:--------------------------|:-----------------------------------------------------------------------------------------------------|
| ""                             | "string"                  | Empty string. `unknown` expected for *value*, but `string` given                                     |
| " "                            | "string"                  | Only space string. `unknown` expected for *value*, but `string` given                                |
| "\r"                           | "string"                  | Carriage return. `unknown` expected for *value*, but `string` given                                  |
| "integer"                      | "string"                  | Data type returned by `getTypeOf()`. `unknown` expected for *value*, but `string` given              |
| "Roland Milto"                 | "string"                  | Two word string. `unknown` expected for *value*, but `string` given                                  |
| "äöüß"                         | "string"                  | Non-ASCII (German umlauts). `unknown` expected for *value*, but `string` given                       |
| "你好"                           | "string"                  | Non-Latin characters. `unknown` expected for *value*, but `string` given                             |
| "🙂"                           | "string"                  | Emoji string. `unknown` expected for *value*, but `string` given                                     |
| 42                             | "integer"                 | Positive number. `unknown` expected for *value*, but `integer` given                                 |
| -273                           | "integer"                 | Negative number (0 Kelvin). `unknown` expected for *value*, but `integer` given                      |
| NaN                            | "nan"                     | `NaN` (Not a Number). `unknown` expected for *value*, but `nan` given                                |
| Infinity                       | "number"                  | Positive Infinity. `unknown` expected for *value*, but `number` given                                |
| -Infinity                      | "number"                  | Negative Infinity. `unknown` expected for *value*, but `number` given                                |
| 0                              | "bigint"                  | BigInt zero `0n`. `unknown` expected for *value*, but `bigint` given                                 |
| 42                             | "bigint"                  | BigInt `42n`. `unknown` expected for *value*, but `bigint` given                                     |
| true                           | "boolean"                 | Boolean. `unknown` expected for *value*, but `boolean` given                                         |
| true                           | "boolean"                 | Boolean object `Boolean(true)`. `unknown` expected for *value*, but `boolean` given                  |
| null                           | "null"                    | Null. `unknown` expected for *value*, but `null` given                                               |
| undefined                      | "undefined"               | Undefined. `unknown` expected for *value*, but `undefined` given                                     |
| Symbol()                       | "symbol"                  | Symbol. `unknown` expected for *value*, but `symbol` given                                           |
| /./                            | "regexp"                  | RegExp. `unknown` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | "regexp"                  | RegExp with flags. `unknown` expected for *value*, but `regExp` given                                |
| `{}`                           | "object"                  | Empty plain object. `unknown` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | "object"                  | Non-empty plain object. `unknown` expected for *value*, but `object` given                           |
| Date(2026-02-06T13:12:42.453Z) | "date"                    | `new Date()` object. `unknown` expected for *value*, but `date` given                                |
| Date(Invalid)                  | "date"                    | Invalid Date object. `unknown` expected for *value*, but `date` given                                |
| Error                          | "error"                   | `new Error()` object. `unknown` expected for *value*, but `error` given                              |
| new Map()                      | "map"                     | Empty map `new Map()`. `unknown` expected for *value*, but `map` given                               |
| new Set()                      | "set"                     | Empty set `new Set()`. `unknown` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | "map"                     | Non-empty map `new Map([['k', 'v']])`. `unknown` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | "set"                     | Non-empty set `new Set([1, 2, 3])`. `unknown` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | "object"                  | Object without prototype (Object.create(null)). `unknown` expected for *value*, but `object` given   |
| `[]`                           | "array"                   | Empty array. `unknown` expected for *value*, but `array` given                                       |
| `[null]`                       | "array"                   | Array with `undefined` (but returning `[null]`). `unknown` expected for *value*, but `array` given   |
| `[null,null,null]`             | "array"                   | Sparse array (length 3, empty slots). `unknown` expected for *value*, but `array` given              |
| `[["nested"]]`                 | "array"                   | Nested array. `unknown` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | "array"                   | Mixed array. `unknown` expected for *value*, but `array` given                                       |
| ()=>{}                         | "function"                | Function `() => {}`. `unknown` expected for *value*, but `function` given                            |
| async()=>{}                    | "function"                | Async function `async () => {}`. `unknown` expected for *value*, but `function` given                |
| function*(){yield 1;}          | "function"                | Generator function `function* () { yield 1; }`. `unknown` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 6 February 2026 at 13:12:42 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>