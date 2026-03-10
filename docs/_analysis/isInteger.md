# Behavior of `isInteger`

## Expected parameters

| Parameter | Data type | Description                            |
|:----------|:----------|:---------------------------------------|
| value     | integer   | The value to check for integer status. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value` | Function <br> `isInteger` | Description                                                                      |
|:-----------------------|:--------------------------|:---------------------------------------------------------------------------------|
| 0                      | true                      | Zero (safe integer)                                                              |
| 0                      | true                      | Negative zero (safe integer)                                                     |
| 1                      | true                      | Positive integer                                                                 |
| -1                     | true                      | Negative integer                                                                 |
| 42                     | true                      | Integer                                                                          |
| 9007199254740991       | true                      | MAX_SAFE_INTEGER                                                                 |
| -9007199254740991      | true                      | MIN_SAFE_INTEGER                                                                 |
| 3.14                   | false                     | Float (not integer). `integer` expected for *value*, but `float` given           |
| 2.220446049250313e-16  | false                     | EPSILON (not integer). `integer` expected for *value*, but `float` given         |
| Infinity               | false                     | Infinity (not safe integer). `integer` expected for *value*, but `number` given  |
| NaN                    | false                     | NaN (not safe integer). `integer` expected for *value*, but `nan` given          |
| "5"                    | false                     | Integer as string (invalid). `integer` expected for *value*, but `decimal` given |
| 5                      | true                      | Boxed Number object (invalid)                                                    |

## Default tests

| Parameter <br> `value`         | Function <br> `isInteger` | Description                                                                                          |
|:-------------------------------|:--------------------------|:-----------------------------------------------------------------------------------------------------|
| ""                             | false                     | Empty string. `integer` expected for *value*, but `string` given                                     |
| " "                            | false                     | Only space string. `integer` expected for *value*, but `string` given                                |
| "\r"                           | false                     | Carriage return. `integer` expected for *value*, but `string` given                                  |
| "integer"                      | false                     | Data type returned by `getTypeOf()`. `integer` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                     | Two word string. `integer` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                     | Non-ASCII (German umlauts). `integer` expected for *value*, but `string` given                       |
| "你好"                           | false                     | Non-Latin characters. `integer` expected for *value*, but `string` given                             |
| "🙂"                           | false                     | Emoji string. `integer` expected for *value*, but `string` given                                     |
| 42                             | true                      | Positive number                                                                                      |
| -273                           | true                      | Negative number (0 Kelvin)                                                                           |
| NaN                            | false                     | `NaN` (Not a Number). `integer` expected for *value*, but `nan` given                                |
| Infinity                       | false                     | Positive Infinity. `integer` expected for *value*, but `number` given                                |
| -Infinity                      | false                     | Negative Infinity. `integer` expected for *value*, but `number` given                                |
| 0                              | false                     | BigInt zero `0n`. `integer` expected for *value*, but `bigint` given                                 |
| 42                             | false                     | BigInt `42n`. `integer` expected for *value*, but `bigint` given                                     |
| true                           | false                     | Boolean. `integer` expected for *value*, but `boolean` given                                         |
| true                           | false                     | Boolean object `Boolean(true)`. `integer` expected for *value*, but `boolean` given                  |
| null                           | false                     | Null. `integer` expected for *value*, but `null` given                                               |
| undefined                      | false                     | Undefined. `integer` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                     | Symbol. `integer` expected for *value*, but `symbol` given                                           |
| /./                            | false                     | RegExp. `integer` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                     | RegExp with flags. `integer` expected for *value*, but `regExp` given                                |
| `{}`                           | false                     | Empty plain object. `integer` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                     | Non-empty plain object. `integer` expected for *value*, but `object` given                           |
| Date(2026-01-31T00:48:52.064Z) | false                     | `new Date()` object. `integer` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                     | Invalid Date object. `integer` expected for *value*, but `date` given                                |
| Error                          | false                     | `new Error()` object. `integer` expected for *value*, but `error` given                              |
| new Map()                      | false                     | Empty map `new Map()`. `integer` expected for *value*, but `map` given                               |
| new Set()                      | false                     | Empty set `new Set()`. `integer` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                     | Non-empty map `new Map([['k', 'v']])`. `integer` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                     | Non-empty set `new Set([1, 2, 3])`. `integer` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                     | Object without prototype (Object.create(null)). `integer` expected for *value*, but `object` given   |
| `[]`                           | false                     | Empty array. `integer` expected for *value*, but `array` given                                       |
| `[null]`                       | false                     | Array with `undefined` (but returning `[null]`). `integer` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                     | Sparse array (length 3, empty slots). `integer` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                     | Nested array. `integer` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                     | Mixed array. `integer` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                     | Function `() => {}`. `integer` expected for *value*, but `function` given                            |
| async()=>{}                    | false                     | Async function `async () => {}`. `integer` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                     | Generator function `function* () { yield 1; }`. `integer` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 00:48:52 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>