# Behavior of `isHexadecimal`

## Expected parameters

| Parameter | Data type   | Description              |
|:----------|:------------|:-------------------------|
| value     | hexadecimal | The value to be checked. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value` | Function <br> `isHexadecimal` | Description                                                                                        |
|:-----------------------|:------------------------------|:---------------------------------------------------------------------------------------------------|
| "0x0"                  | true                          | Hex literal: zero                                                                                  |
| "0x1A2B"               | true                          | Hex literal: uppercase digits                                                                      |
| "0xdeadBEEF"           | true                          | Hex literal: mixed case digits                                                                     |
| "0Xff"                 | true                          | Hex literal: uppercase X prefix                                                                    |
| "+0x7f"                | true                          | Signed hex literal: plus                                                                           |
| "-0Xff"                | true                          | Signed hex literal: minus                                                                          |
| "0x"                   | false                         | Missing digits. `hexadecimal` expected for *value*, but `string` given                             |
| "0xG"                  | false                         | Invalid hex digit 'G'. `hexadecimal` expected for *value*, but `string` given                      |
| "0x1.2"                | false                         | Dot not allowed. `hexadecimal` expected for *value*, but `string` given                            |
| "0x-ff"                | false                         | Sign in wrong position. `hexadecimal` expected for *value*, but `string` given                     |
| "1A2B"                 | false                         | Missing 0x prefix (invalid). `hexadecimal` expected for *value*, but `string` given                |
| "-1A2B"                | false                         | Missing 0x prefix even if signed (invalid). `hexadecimal` expected for *value*, but `string` given |
| "0o77"                 | false                         | Octal prefix (invalid). `hexadecimal` expected for *value*, but `octal` given                      |
| "0b1010"               | false                         | Binary prefix (invalid). `hexadecimal` expected for *value*, but `binary` given                    |
| "0xFF_FF"              | false                         | Underscore separators (invalid). `hexadecimal` expected for *value*, but `string` given            |
| " 0x1A"                | false                         | Leading whitespace (invalid). `hexadecimal` expected for *value*, but `string` given               |
| "0x1A "                | false                         | Trailing whitespace (invalid). `hexadecimal` expected for *value*, but `string` given              |
| "\t0x1A"               | false                         | Leading tab (invalid). `hexadecimal` expected for *value*, but `string` given                      |
| "0x1A\n"               | false                         | Trailing newline (invalid). `hexadecimal` expected for *value*, but `string` given                 |

## Default tests

| Parameter <br> `value`         | Function <br> `isHexadecimal` | Description                                                                                              |
|:-------------------------------|:------------------------------|:---------------------------------------------------------------------------------------------------------|
| ""                             | false                         | Empty string. `hexadecimal` expected for *value*, but `string` given                                     |
| " "                            | false                         | Only space string. `hexadecimal` expected for *value*, but `string` given                                |
| "\r"                           | false                         | Carriage return. `hexadecimal` expected for *value*, but `string` given                                  |
| "integer"                      | false                         | Data type returned by `getTypeOf()`. `hexadecimal` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                         | Two word string. `hexadecimal` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                         | Non-ASCII (German umlauts). `hexadecimal` expected for *value*, but `string` given                       |
| "你好"                           | false                         | Non-Latin characters. `hexadecimal` expected for *value*, but `string` given                             |
| "🙂"                           | false                         | Emoji string. `hexadecimal` expected for *value*, but `string` given                                     |
| 42                             | false                         | Positive number. `hexadecimal` expected for *value*, but `integer` given                                 |
| -273                           | false                         | Negative number (0 Kelvin). `hexadecimal` expected for *value*, but `integer` given                      |
| NaN                            | false                         | `NaN` (Not a Number). `hexadecimal` expected for *value*, but `nan` given                                |
| Infinity                       | false                         | Positive Infinity. `hexadecimal` expected for *value*, but `number` given                                |
| -Infinity                      | false                         | Negative Infinity. `hexadecimal` expected for *value*, but `number` given                                |
| 0                              | false                         | BigInt zero `0n`. `hexadecimal` expected for *value*, but `bigint` given                                 |
| 42                             | false                         | BigInt `42n`. `hexadecimal` expected for *value*, but `bigint` given                                     |
| true                           | false                         | Boolean. `hexadecimal` expected for *value*, but `boolean` given                                         |
| true                           | false                         | Boolean object `Boolean(true)`. `hexadecimal` expected for *value*, but `boolean` given                  |
| null                           | false                         | Null. `hexadecimal` expected for *value*, but `null` given                                               |
| undefined                      | false                         | Undefined. `hexadecimal` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                         | Symbol. `hexadecimal` expected for *value*, but `symbol` given                                           |
| /./                            | false                         | RegExp. `hexadecimal` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                         | RegExp with flags. `hexadecimal` expected for *value*, but `regExp` given                                |
| `{}`                           | false                         | Empty plain object. `hexadecimal` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                         | Non-empty plain object. `hexadecimal` expected for *value*, but `object` given                           |
| Date(2026-01-31T22:57:24.174Z) | false                         | `new Date()` object. `hexadecimal` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                         | Invalid Date object. `hexadecimal` expected for *value*, but `date` given                                |
| Error                          | false                         | `new Error()` object. `hexadecimal` expected for *value*, but `error` given                              |
| new Map()                      | false                         | Empty map `new Map()`. `hexadecimal` expected for *value*, but `map` given                               |
| new Set()                      | false                         | Empty set `new Set()`. `hexadecimal` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                         | Non-empty map `new Map([['k', 'v']])`. `hexadecimal` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                         | Non-empty set `new Set([1, 2, 3])`. `hexadecimal` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                         | Object without prototype (Object.create(null)). `hexadecimal` expected for *value*, but `object` given   |
| `[]`                           | false                         | Empty array. `hexadecimal` expected for *value*, but `array` given                                       |
| `[null]`                       | false                         | Array with `undefined` (but returning `[null]`). `hexadecimal` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                         | Sparse array (length 3, empty slots). `hexadecimal` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                         | Nested array. `hexadecimal` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                         | Mixed array. `hexadecimal` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                         | Function `() => {}`. `hexadecimal` expected for *value*, but `function` given                            |
| async()=>{}                    | false                         | Async function `async () => {}`. `hexadecimal` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                         | Generator function `function* () { yield 1; }`. `hexadecimal` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 22:57:24 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>