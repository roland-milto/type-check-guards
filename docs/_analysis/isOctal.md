# Behavior of `isOctal`

## Expected parameters

| Parameter | Data type | Description              |
|:----------|:----------|:-------------------------|
| value     | octal     | The value to be checked. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value` | Function <br> `isOctal` | Description                                                                                      |
|:-----------------------|:------------------------|:-------------------------------------------------------------------------------------------------|
| "0o0"                  | true                    | Octal literal: zero                                                                              |
| "0o7"                  | true                    | Octal literal: single digit                                                                      |
| "0o10"                 | true                    | Octal literal: two digits                                                                        |
| "0o123"                | true                    | Octal literal: typical                                                                           |
| "0O755"                | true                    | Octal literal: uppercase O                                                                       |
| "+0o755"               | true                    | Signed octal literal: plus                                                                       |
| "-0O755"               | true                    | Signed octal literal: minus                                                                      |
| "0o"                   | false                   | Missing digits. `octal` expected for *value*, but `string` given                                 |
| "0o8"                  | false                   | Invalid digit 8. `octal` expected for *value*, but `string` given                                |
| "0o9"                  | false                   | Invalid digit 9. `octal` expected for *value*, but `string` given                                |
| "0o128"                | false                   | Contains invalid digit 8. `octal` expected for *value*, but `string` given                       |
| "0o007"                | true                    | Leading zeros after prefix (valid)                                                               |
| "00o123"               | false                   | Wrong prefix position. `octal` expected for *value*, but `string` given                          |
| "0x10"                 | false                   | Hex prefix (not octal). `octal` expected for *value*, but `hexadecimal` given                    |
| "0755"                 | false                   | Legacy octal-like without 0o prefix (invalid). `octal` expected for *value*, but `decimal` given |
| "0o12_"                | false                   | Invalid underscore separator. `octal` expected for *value*, but `string` given                   |
| "0o12.3"               | false                   | Decimal point (invalid). `octal` expected for *value*, but `string` given                        |
| "0o-123"               | false                   | Sign in wrong position (invalid). `octal` expected for *value*, but `string` given               |
| " 0o123"               | false                   | Leading whitespace (invalid). `octal` expected for *value*, but `string` given                   |
| "0o123 "               | false                   | Trailing whitespace (invalid). `octal` expected for *value*, but `string` given                  |
| "\t0o123"              | false                   | Leading tab (invalid). `octal` expected for *value*, but `string` given                          |
| "0o123\n"              | false                   | Trailing newline (invalid). `octal` expected for *value*, but `string` given                     |

## Default tests

| Parameter <br> `value`         | Function <br> `isOctal` | Description                                                                                        |
|:-------------------------------|:------------------------|:---------------------------------------------------------------------------------------------------|
| ""                             | false                   | Empty string. `octal` expected for *value*, but `string` given                                     |
| " "                            | false                   | Only space string. `octal` expected for *value*, but `string` given                                |
| "\r"                           | false                   | Carriage return. `octal` expected for *value*, but `string` given                                  |
| "integer"                      | false                   | Data type returned by `getTypeOf()`. `octal` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                   | Two word string. `octal` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                   | Non-ASCII (German umlauts). `octal` expected for *value*, but `string` given                       |
| "你好"                           | false                   | Non-Latin characters. `octal` expected for *value*, but `string` given                             |
| "🙂"                           | false                   | Emoji string. `octal` expected for *value*, but `string` given                                     |
| 42                             | false                   | Positive number. `octal` expected for *value*, but `integer` given                                 |
| -273                           | false                   | Negative number (0 Kelvin). `octal` expected for *value*, but `integer` given                      |
| NaN                            | false                   | `NaN` (Not a Number). `octal` expected for *value*, but `nan` given                                |
| Infinity                       | false                   | Positive Infinity. `octal` expected for *value*, but `number` given                                |
| -Infinity                      | false                   | Negative Infinity. `octal` expected for *value*, but `number` given                                |
| 0                              | false                   | BigInt zero `0n`. `octal` expected for *value*, but `bigint` given                                 |
| 42                             | false                   | BigInt `42n`. `octal` expected for *value*, but `bigint` given                                     |
| true                           | false                   | Boolean. `octal` expected for *value*, but `boolean` given                                         |
| true                           | false                   | Boolean object `Boolean(true)`. `octal` expected for *value*, but `boolean` given                  |
| null                           | false                   | Null. `octal` expected for *value*, but `null` given                                               |
| undefined                      | false                   | Undefined. `octal` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                   | Symbol. `octal` expected for *value*, but `symbol` given                                           |
| /./                            | false                   | RegExp. `octal` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                   | RegExp with flags. `octal` expected for *value*, but `regExp` given                                |
| `{}`                           | false                   | Empty plain object. `octal` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                   | Non-empty plain object. `octal` expected for *value*, but `object` given                           |
| Date(2026-01-30T15:41:10.709Z) | false                   | `new Date()` object. `octal` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                   | Invalid Date object. `octal` expected for *value*, but `date` given                                |
| Error                          | false                   | `new Error()` object. `octal` expected for *value*, but `error` given                              |
| new Map()                      | false                   | Empty map `new Map()`. `octal` expected for *value*, but `map` given                               |
| new Set()                      | false                   | Empty set `new Set()`. `octal` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                   | Non-empty map `new Map([['k', 'v']])`. `octal` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                   | Non-empty set `new Set([1, 2, 3])`. `octal` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                   | Object without prototype (Object.create(null)). `octal` expected for *value*, but `object` given   |
| `[]`                           | false                   | Empty array. `octal` expected for *value*, but `array` given                                       |
| `[null]`                       | false                   | Array with `undefined` (but returning `[null]`). `octal` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                   | Sparse array (length 3, empty slots). `octal` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                   | Nested array. `octal` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                   | Mixed array. `octal` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                   | Function `() => {}`. `octal` expected for *value*, but `function` given                            |
| async()=>{}                    | false                   | Async function `async () => {}`. `octal` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                   | Generator function `function* () { yield 1; }`. `octal` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 15:41:10 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>