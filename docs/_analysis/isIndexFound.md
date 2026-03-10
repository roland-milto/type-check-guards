# Behavior of `isIndexFound`

## Expected parameters

| Parameter | Data type | Description                                          |
|:----------|:----------|:-----------------------------------------------------|
| value     | integer   | The value to check for being a non-negative integer. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value` | Function <br> `isIndexFound` | Description                                                                                     |
|:-----------------------|:-----------------------------|:------------------------------------------------------------------------------------------------|
| 0                      | true                         | Zero index (found)                                                                              |
| 1                      | true                         | Positive index (found)                                                                          |
| 3                      | true                         | Index 3 (found)                                                                                 |
| 9007199254740991       | true                         | MAX_SAFE_INTEGER (still a non-negative safe integer)                                            |
| -1                     | false                        | Negative integer (not found)                                                                    |
| -0.1                   | false                        | Negative float (not index). `integer` expected for *value*, but `float` given                   |
| 0.1                    | false                        | Positive float (not integer). `integer` expected for *value*, but `float` given                 |
| NaN                    | false                        | NaN (not integer). `integer` expected for *value*, but `nan` given                              |
| Infinity               | false                        | Infinity (not integer). `integer` expected for *value*, but `number` given                      |
| "5"                    | false                        | String (not integer). `integer` expected for *value*, but `decimal` given                       |
| `5`                    | false                        | Boxed Number object (not integer primitive). `integer` expected for *value*, but `number` given |
| null                   | false                        | Null (not integer). `integer` expected for *value*, but `null` given                            |
| undefined              | false                        | Undefined (not integer). `integer` expected for *value*, but `undefined` given                  |

## Default tests

| Parameter <br> `value`         | Function <br> `isIndexFound` | Description                                                                                          |
|:-------------------------------|:-----------------------------|:-----------------------------------------------------------------------------------------------------|
| ""                             | false                        | Empty string. `integer` expected for *value*, but `string` given                                     |
| " "                            | false                        | Only space string. `integer` expected for *value*, but `string` given                                |
| "\r"                           | false                        | Carriage return. `integer` expected for *value*, but `string` given                                  |
| "integer"                      | false                        | Data type returned by `getTypeOf()`. `integer` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                        | Two word string. `integer` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                        | Non-ASCII (German umlauts). `integer` expected for *value*, but `string` given                       |
| "你好"                           | false                        | Non-Latin characters. `integer` expected for *value*, but `string` given                             |
| "🙂"                           | false                        | Emoji string. `integer` expected for *value*, but `string` given                                     |
| 42                             | true                         | Positive number                                                                                      |
| -273                           | false                        | Negative number (0 Kelvin)                                                                           |
| NaN                            | false                        | `NaN` (Not a Number). `integer` expected for *value*, but `nan` given                                |
| Infinity                       | false                        | Positive Infinity. `integer` expected for *value*, but `number` given                                |
| -Infinity                      | false                        | Negative Infinity. `integer` expected for *value*, but `number` given                                |
| 0                              | false                        | BigInt zero `0n`. `integer` expected for *value*, but `bigint` given                                 |
| 42                             | false                        | BigInt `42n`. `integer` expected for *value*, but `bigint` given                                     |
| true                           | false                        | Boolean. `integer` expected for *value*, but `boolean` given                                         |
| true                           | false                        | Boolean object `Boolean(true)`. `integer` expected for *value*, but `boolean` given                  |
| null                           | false                        | Null. `integer` expected for *value*, but `null` given                                               |
| undefined                      | false                        | Undefined. `integer` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                        | Symbol. `integer` expected for *value*, but `symbol` given                                           |
| /./                            | false                        | RegExp. `integer` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                        | RegExp with flags. `integer` expected for *value*, but `regExp` given                                |
| `{}`                           | false                        | Empty plain object. `integer` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                        | Non-empty plain object. `integer` expected for *value*, but `object` given                           |
| Date(2026-01-31T00:44:34.858Z) | false                        | `new Date()` object. `integer` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                        | Invalid Date object. `integer` expected for *value*, but `date` given                                |
| Error                          | false                        | `new Error()` object. `integer` expected for *value*, but `error` given                              |
| new Map()                      | false                        | Empty map `new Map()`. `integer` expected for *value*, but `map` given                               |
| new Set()                      | false                        | Empty set `new Set()`. `integer` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                        | Non-empty map `new Map([['k', 'v']])`. `integer` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                        | Non-empty set `new Set([1, 2, 3])`. `integer` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                        | Object without prototype (Object.create(null)). `integer` expected for *value*, but `object` given   |
| `[]`                           | false                        | Empty array. `integer` expected for *value*, but `array` given                                       |
| `[null]`                       | false                        | Array with `undefined` (but returning `[null]`). `integer` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                        | Sparse array (length 3, empty slots). `integer` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                        | Nested array. `integer` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                        | Mixed array. `integer` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                        | Function `() => {}`. `integer` expected for *value*, but `function` given                            |
| async()=>{}                    | false                        | Async function `async () => {}`. `integer` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                        | Generator function `function* () { yield 1; }`. `integer` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 00:44:34 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>