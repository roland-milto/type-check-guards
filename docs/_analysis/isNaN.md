# Behavior of `isNaN`

## Expected parameters

| Parameter | Data type | Description                                                |
|:----------|:----------|:-----------------------------------------------------------|
| value     | nan       | The value to be checked if it is a `NaN` of type `number`. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value` | Function <br> `isNaN` | Description                                                                 |
|:-----------------------|:----------------------|:----------------------------------------------------------------------------|
| NaN                    | true                  | NaN (number)                                                                |
| NaN                    | true                  | Number.NaN (same NaN)                                                       |
| NaN                    | true                  | Computed NaN (0/0)                                                          |
| 0                      | false                 | Zero (not NaN). `nan` expected for *value*, but `integer` given             |
| 123                    | false                 | Number (not NaN). `nan` expected for *value*, but `integer` given           |
| Infinity               | false                 | Infinity (not NaN). `nan` expected for *value*, but `number` given          |
| -Infinity              | false                 | Negative Infinity (not NaN). `nan` expected for *value*, but `number` given |
| "NaN"                  | false                 | String 'NaN' (no coercion). `nan` expected for *value*, but `string` given  |
| NaN                    | true                  | Boxed NaN Number object (not typeof 'number')                               |

## Default tests

| Parameter <br> `value`         | Function <br> `isNaN` | Description                                                                                      |
|:-------------------------------|:----------------------|:-------------------------------------------------------------------------------------------------|
| ""                             | false                 | Empty string. `nan` expected for *value*, but `string` given                                     |
| " "                            | false                 | Only space string. `nan` expected for *value*, but `string` given                                |
| "\r"                           | false                 | Carriage return. `nan` expected for *value*, but `string` given                                  |
| "integer"                      | false                 | Data type returned by `getTypeOf()`. `nan` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                 | Two word string. `nan` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                 | Non-ASCII (German umlauts). `nan` expected for *value*, but `string` given                       |
| "你好"                           | false                 | Non-Latin characters. `nan` expected for *value*, but `string` given                             |
| "🙂"                           | false                 | Emoji string. `nan` expected for *value*, but `string` given                                     |
| 42                             | false                 | Positive number. `nan` expected for *value*, but `integer` given                                 |
| -273                           | false                 | Negative number (0 Kelvin). `nan` expected for *value*, but `integer` given                      |
| NaN                            | true                  | `NaN` (Not a Number)                                                                             |
| Infinity                       | false                 | Positive Infinity. `nan` expected for *value*, but `number` given                                |
| -Infinity                      | false                 | Negative Infinity. `nan` expected for *value*, but `number` given                                |
| 0                              | false                 | BigInt zero `0n`. `nan` expected for *value*, but `bigint` given                                 |
| 42                             | false                 | BigInt `42n`. `nan` expected for *value*, but `bigint` given                                     |
| true                           | false                 | Boolean. `nan` expected for *value*, but `boolean` given                                         |
| true                           | false                 | Boolean object `Boolean(true)`. `nan` expected for *value*, but `boolean` given                  |
| null                           | false                 | Null. `nan` expected for *value*, but `null` given                                               |
| undefined                      | false                 | Undefined. `nan` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                 | Symbol. `nan` expected for *value*, but `symbol` given                                           |
| /./                            | false                 | RegExp. `nan` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                 | RegExp with flags. `nan` expected for *value*, but `regExp` given                                |
| `{}`                           | false                 | Empty plain object. `nan` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                 | Non-empty plain object. `nan` expected for *value*, but `object` given                           |
| Date(2026-01-30T15:49:59.330Z) | false                 | `new Date()` object. `nan` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                 | Invalid Date object. `nan` expected for *value*, but `date` given                                |
| Error                          | false                 | `new Error()` object. `nan` expected for *value*, but `error` given                              |
| new Map()                      | false                 | Empty map `new Map()`. `nan` expected for *value*, but `map` given                               |
| new Set()                      | false                 | Empty set `new Set()`. `nan` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                 | Non-empty map `new Map([['k', 'v']])`. `nan` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                 | Non-empty set `new Set([1, 2, 3])`. `nan` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                 | Object without prototype (Object.create(null)). `nan` expected for *value*, but `object` given   |
| `[]`                           | false                 | Empty array. `nan` expected for *value*, but `array` given                                       |
| `[null]`                       | false                 | Array with `undefined` (but returning `[null]`). `nan` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                 | Sparse array (length 3, empty slots). `nan` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                 | Nested array. `nan` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                 | Mixed array. `nan` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                 | Function `() => {}`. `nan` expected for *value*, but `function` given                            |
| async()=>{}                    | false                 | Async function `async () => {}`. `nan` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                 | Generator function `function* () { yield 1; }`. `nan` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 15:49:59 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>