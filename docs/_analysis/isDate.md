# Behavior of `isDate`

## Expected parameters

| Parameter | Data type | Description                              |
|:----------|:----------|:-----------------------------------------|
| value     | date      | The value to be checked for `Date` type. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value`           | Function <br> `isDate` | Description                                                                             |
|:---------------------------------|:-----------------------|:----------------------------------------------------------------------------------------|
| Date(2026-01-31T16:03:12.607Z)   | true                   | Current Date instance                                                                   |
| Date(1970-01-01T00:00:00.000Z)   | true                   | Epoch Date instance                                                                     |
| Date(2025-12-17T00:00:00.000Z)   | true                   | Date from ISO string (may be invalid/valid depending on parser, but is a Date instance) |
| "1990-08-18"                     | false                  | String (not a Date). `date` expected for *value*, but `string` given                    |
| 1769875392607                    | false                  | Timestamp number (not a Date). `date` expected for *value*, but `integer` given         |
| `{"year":1990}`                  | false                  | Plain object (not a Date). `date` expected for *value*, but `object` given              |
| `{"getTime":"() => Date.now()"}` | false                  | Date-like object (not a Date instance). `date` expected for *value*, but `object` given |

## Default tests

| Parameter <br> `value`         | Function <br> `isDate` | Description                                                                                       |
|:-------------------------------|:-----------------------|:--------------------------------------------------------------------------------------------------|
| ""                             | false                  | Empty string. `date` expected for *value*, but `string` given                                     |
| " "                            | false                  | Only space string. `date` expected for *value*, but `string` given                                |
| "\r"                           | false                  | Carriage return. `date` expected for *value*, but `string` given                                  |
| "integer"                      | false                  | Data type returned by `getTypeOf()`. `date` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                  | Two word string. `date` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                  | Non-ASCII (German umlauts). `date` expected for *value*, but `string` given                       |
| "你好"                           | false                  | Non-Latin characters. `date` expected for *value*, but `string` given                             |
| "🙂"                           | false                  | Emoji string. `date` expected for *value*, but `string` given                                     |
| 42                             | false                  | Positive number. `date` expected for *value*, but `integer` given                                 |
| -273                           | false                  | Negative number (0 Kelvin). `date` expected for *value*, but `integer` given                      |
| NaN                            | false                  | `NaN` (Not a Number). `date` expected for *value*, but `nan` given                                |
| Infinity                       | false                  | Positive Infinity. `date` expected for *value*, but `number` given                                |
| -Infinity                      | false                  | Negative Infinity. `date` expected for *value*, but `number` given                                |
| 0                              | false                  | BigInt zero `0n`. `date` expected for *value*, but `bigint` given                                 |
| 42                             | false                  | BigInt `42n`. `date` expected for *value*, but `bigint` given                                     |
| true                           | false                  | Boolean. `date` expected for *value*, but `boolean` given                                         |
| true                           | false                  | Boolean object `Boolean(true)`. `date` expected for *value*, but `boolean` given                  |
| null                           | false                  | Null. `date` expected for *value*, but `null` given                                               |
| undefined                      | false                  | Undefined. `date` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                  | Symbol. `date` expected for *value*, but `symbol` given                                           |
| /./                            | false                  | RegExp. `date` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                  | RegExp with flags. `date` expected for *value*, but `regExp` given                                |
| `{}`                           | false                  | Empty plain object. `date` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                  | Non-empty plain object. `date` expected for *value*, but `object` given                           |
| Date(2026-01-31T16:03:12.604Z) | true                   | `new Date()` object                                                                               |
| Date(Invalid)                  | true                   | Invalid Date object                                                                               |
| Error                          | false                  | `new Error()` object. `date` expected for *value*, but `error` given                              |
| new Map()                      | false                  | Empty map `new Map()`. `date` expected for *value*, but `map` given                               |
| new Set()                      | false                  | Empty set `new Set()`. `date` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                  | Non-empty map `new Map([['k', 'v']])`. `date` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                  | Non-empty set `new Set([1, 2, 3])`. `date` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                  | Object without prototype (Object.create(null)). `date` expected for *value*, but `object` given   |
| `[]`                           | false                  | Empty array. `date` expected for *value*, but `array` given                                       |
| `[null]`                       | false                  | Array with `undefined` (but returning `[null]`). `date` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                  | Sparse array (length 3, empty slots). `date` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                  | Nested array. `date` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                  | Mixed array. `date` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                  | Function `() => {}`. `date` expected for *value*, but `function` given                            |
| async()=>{}                    | false                  | Async function `async () => {}`. `date` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                  | Generator function `function* () { yield 1; }`. `date` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 16:03:12 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>