# Behavior of `isBoolean`

## Expected parameters

| Parameter | Data type | Description              |
|:----------|:----------|:-------------------------|
| value     | boolean   | The value to be checked. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value` | Function <br> `isBoolean` | Description                                                                      |
|:-----------------------|:--------------------------|:---------------------------------------------------------------------------------|
| true                   | true                      | Boolean true                                                                     |
| false                  | true                      | Boolean false                                                                    |
| "true"                 | false                     | String 'true' (not boolean). `boolean` expected for *value*, but `string` given  |
| "false"                | false                     | String 'false' (not boolean). `boolean` expected for *value*, but `string` given |
| 1                      | false                     | Number 1 (not boolean). `boolean` expected for *value*, but `integer` given      |
| 0                      | false                     | Number 0 (not boolean). `boolean` expected for *value*, but `integer` given      |
| true                   | true                      | Boxed Boolean object (not boolean primitive)                                     |

## Default tests

| Parameter <br> `value`         | Function <br> `isBoolean` | Description                                                                                          |
|:-------------------------------|:--------------------------|:-----------------------------------------------------------------------------------------------------|
| ""                             | false                     | Empty string. `boolean` expected for *value*, but `string` given                                     |
| " "                            | false                     | Only space string. `boolean` expected for *value*, but `string` given                                |
| "\r"                           | false                     | Carriage return. `boolean` expected for *value*, but `string` given                                  |
| "integer"                      | false                     | Data type returned by `getTypeOf()`. `boolean` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                     | Two word string. `boolean` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                     | Non-ASCII (German umlauts). `boolean` expected for *value*, but `string` given                       |
| "你好"                           | false                     | Non-Latin characters. `boolean` expected for *value*, but `string` given                             |
| "🙂"                           | false                     | Emoji string. `boolean` expected for *value*, but `string` given                                     |
| 42                             | false                     | Positive number. `boolean` expected for *value*, but `integer` given                                 |
| -273                           | false                     | Negative number (0 Kelvin). `boolean` expected for *value*, but `integer` given                      |
| NaN                            | false                     | `NaN` (Not a Number). `boolean` expected for *value*, but `nan` given                                |
| Infinity                       | false                     | Positive Infinity. `boolean` expected for *value*, but `number` given                                |
| -Infinity                      | false                     | Negative Infinity. `boolean` expected for *value*, but `number` given                                |
| 0                              | false                     | BigInt zero `0n`. `boolean` expected for *value*, but `bigint` given                                 |
| 42                             | false                     | BigInt `42n`. `boolean` expected for *value*, but `bigint` given                                     |
| true                           | true                      | Boolean                                                                                              |
| true                           | true                      | Boolean object `Boolean(true)`                                                                       |
| null                           | false                     | Null. `boolean` expected for *value*, but `null` given                                               |
| undefined                      | false                     | Undefined. `boolean` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                     | Symbol. `boolean` expected for *value*, but `symbol` given                                           |
| /./                            | false                     | RegExp. `boolean` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                     | RegExp with flags. `boolean` expected for *value*, but `regExp` given                                |
| `{}`                           | false                     | Empty plain object. `boolean` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                     | Non-empty plain object. `boolean` expected for *value*, but `object` given                           |
| Date(2026-01-30T14:39:06.588Z) | false                     | `new Date()` object. `boolean` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                     | Invalid Date object. `boolean` expected for *value*, but `date` given                                |
| Error                          | false                     | `new Error()` object. `boolean` expected for *value*, but `error` given                              |
| new Map()                      | false                     | Empty map `new Map()`. `boolean` expected for *value*, but `map` given                               |
| new Set()                      | false                     | Empty set `new Set()`. `boolean` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                     | Non-empty map `new Map([['k', 'v']])`. `boolean` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                     | Non-empty set `new Set([1, 2, 3])`. `boolean` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                     | Object without prototype (Object.create(null)). `boolean` expected for *value*, but `object` given   |
| `[]`                           | false                     | Empty array. `boolean` expected for *value*, but `array` given                                       |
| `[null]`                       | false                     | Array with `undefined` (but returning `[null]`). `boolean` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                     | Sparse array (length 3, empty slots). `boolean` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                     | Nested array. `boolean` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                     | Mixed array. `boolean` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                     | Function `() => {}`. `boolean` expected for *value*, but `function` given                            |
| async()=>{}                    | false                     | Async function `async () => {}`. `boolean` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                     | Generator function `function* () { yield 1; }`. `boolean` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 14:39:06 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>