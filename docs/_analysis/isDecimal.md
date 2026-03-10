# Behavior of `isDecimal`

## Expected parameters

| Parameter | Data type | Description                                     |
|:----------|:----------|:------------------------------------------------|
| value     | decimal   | The value to check for a decimal string format. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value` | Function <br> `isDecimal` | Description                                                                                |
|:-----------------------|:--------------------------|:-------------------------------------------------------------------------------------------|
| "0"                    | true                      | Integer string (valid decimal). `decimal` expected for *value*, but `binary` given         |
| "123"                  | true                      | Positive integer string (valid decimal)                                                    |
| "-42"                  | true                      | Negative integer string (valid decimal)                                                    |
| "+42"                  | true                      | Signed positive integer string (valid decimal)                                             |
| "0.99"                 | true                      | Decimal with leading zero                                                                  |
| "123.45"               | true                      | Decimal with fraction                                                                      |
| "-42.0"                | true                      | Decimal with trailing .0                                                                   |
| "42."                  | true                      | Trailing dot allowed by regex (digits + '.' + optional digits)                             |
| ".5"                   | true                      | Leading dot allowed (.digits)                                                              |
| "-.5"                  | true                      | Signed leading dot decimal                                                                 |
| "+.5"                  | true                      | Signed leading dot decimal                                                                 |
| ""                     | false                     | Empty string (invalid). `decimal` expected for *value*, but `string` given                 |
| " "                    | false                     | Whitespace only (invalid). `decimal` expected for *value*, but `string` given              |
| " 123.45"              | false                     | Leading whitespace (invalid). `decimal` expected for *value*, but `string` given           |
| "123.45 "              | false                     | Trailing whitespace (invalid). `decimal` expected for *value*, but `string` given          |
| "1.2.3"                | false                     | Multiple dots (invalid). `decimal` expected for *value*, but `string` given                |
| "--1"                  | false                     | Double sign (invalid). `decimal` expected for *value*, but `string` given                  |
| "+-1"                  | false                     | Mixed signs (invalid). `decimal` expected for *value*, but `string` given                  |
| "."                    | false                     | Dot only (invalid). `decimal` expected for *value*, but `string` given                     |
| "+. "                  | false                     | Sign with whitespace/dot (invalid). `decimal` expected for *value*, but `string` given     |
| "1e3"                  | false                     | Scientific notation (invalid). `decimal` expected for *value*, but `string` given          |
| "NaN"                  | false                     | NaN string (invalid). `decimal` expected for *value*, but `string` given                   |
| "Infinity"             | false                     | Infinity string (invalid). `decimal` expected for *value*, but `string` given              |
| "0x10"                 | false                     | Hex string (invalid). `decimal` expected for *value*, but `hexadecimal` given              |
| "1_000"                | false                     | Numeric separator underscore (invalid). `decimal` expected for *value*, but `string` given |

## Default tests

| Parameter <br> `value`         | Function <br> `isDecimal` | Description                                                                                          |
|:-------------------------------|:--------------------------|:-----------------------------------------------------------------------------------------------------|
| ""                             | false                     | Empty string. `decimal` expected for *value*, but `string` given                                     |
| " "                            | false                     | Only space string. `decimal` expected for *value*, but `string` given                                |
| "\r"                           | false                     | Carriage return. `decimal` expected for *value*, but `string` given                                  |
| "integer"                      | false                     | Data type returned by `getTypeOf()`. `decimal` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                     | Two word string. `decimal` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                     | Non-ASCII (German umlauts). `decimal` expected for *value*, but `string` given                       |
| "你好"                           | false                     | Non-Latin characters. `decimal` expected for *value*, but `string` given                             |
| "🙂"                           | false                     | Emoji string. `decimal` expected for *value*, but `string` given                                     |
| 42                             | false                     | Positive number. `decimal` expected for *value*, but `integer` given                                 |
| -273                           | false                     | Negative number (0 Kelvin). `decimal` expected for *value*, but `integer` given                      |
| NaN                            | false                     | `NaN` (Not a Number). `decimal` expected for *value*, but `nan` given                                |
| Infinity                       | false                     | Positive Infinity. `decimal` expected for *value*, but `number` given                                |
| -Infinity                      | false                     | Negative Infinity. `decimal` expected for *value*, but `number` given                                |
| 0                              | false                     | BigInt zero `0n`. `decimal` expected for *value*, but `bigint` given                                 |
| 42                             | false                     | BigInt `42n`. `decimal` expected for *value*, but `bigint` given                                     |
| true                           | false                     | Boolean. `decimal` expected for *value*, but `boolean` given                                         |
| true                           | false                     | Boolean object `Boolean(true)`. `decimal` expected for *value*, but `boolean` given                  |
| null                           | false                     | Null. `decimal` expected for *value*, but `null` given                                               |
| undefined                      | false                     | Undefined. `decimal` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                     | Symbol. `decimal` expected for *value*, but `symbol` given                                           |
| /./                            | false                     | RegExp. `decimal` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                     | RegExp with flags. `decimal` expected for *value*, but `regExp` given                                |
| `{}`                           | false                     | Empty plain object. `decimal` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                     | Non-empty plain object. `decimal` expected for *value*, but `object` given                           |
| Date(2026-01-31T15:50:58.337Z) | false                     | `new Date()` object. `decimal` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                     | Invalid Date object. `decimal` expected for *value*, but `date` given                                |
| Error                          | false                     | `new Error()` object. `decimal` expected for *value*, but `error` given                              |
| new Map()                      | false                     | Empty map `new Map()`. `decimal` expected for *value*, but `map` given                               |
| new Set()                      | false                     | Empty set `new Set()`. `decimal` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                     | Non-empty map `new Map([['k', 'v']])`. `decimal` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                     | Non-empty set `new Set([1, 2, 3])`. `decimal` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                     | Object without prototype (Object.create(null)). `decimal` expected for *value*, but `object` given   |
| `[]`                           | false                     | Empty array. `decimal` expected for *value*, but `array` given                                       |
| `[null]`                       | false                     | Array with `undefined` (but returning `[null]`). `decimal` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                     | Sparse array (length 3, empty slots). `decimal` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                     | Nested array. `decimal` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                     | Mixed array. `decimal` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                     | Function `() => {}`. `decimal` expected for *value*, but `function` given                            |
| async()=>{}                    | false                     | Async function `async () => {}`. `decimal` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                     | Generator function `function* () { yield 1; }`. `decimal` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 15:50:58 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>