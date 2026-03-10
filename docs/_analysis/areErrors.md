# Behavior of `areErrors`

## Expected parameters

| Parameter | Data type | Description                             |
|:----------|:----------|:----------------------------------------|
| array     | error[]   | The array to check for `Error` objects. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array`                | Function <br> `areErrors` | Description                                                                     |
|:--------------------------------------|:--------------------------|:--------------------------------------------------------------------------------|
| `[{}]`                                | true                      | Single Error                                                                    |
| `[{},{}]`                             | true                      | Multiple Errors                                                                 |
| `[{},{}]`                             | true                      | Multiple Error subclasses                                                       |
| `[]`                                  | false                     | Empty array (not filled)                                                        |
| `[{},"not an error"]`                 | false                     | Contains string. `error` expected for *array[1]*, but `string` given            |
| `[null]`                              | false                     | Contains undefined. `error` expected for *array[0]*, but `undefined` given      |
| `[null]`                              | false                     | Contains null. `error` expected for *array[0]*, but `null` given                |
| `[{},{"name":"Error","message":"x"}]` | false                     | Contains Error-like object. `error` expected for *array[1]*, but `object` given |

## Default tests

| Parameter <br> `array`         | Function <br> `areErrors` | Description                                                                                          |
|:-------------------------------|:--------------------------|:-----------------------------------------------------------------------------------------------------|
| ""                             | false                     | Empty string. `error[]` expected for *array*, but `string` given                                     |
| " "                            | false                     | Only space string. `error[]` expected for *array*, but `string` given                                |
| "\r"                           | false                     | Carriage return. `error[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                     | Data type returned by `getTypeOf()`. `error[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                     | Two word string. `error[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                     | Non-ASCII (German umlauts). `error[]` expected for *array*, but `string` given                       |
| "你好"                           | false                     | Non-Latin characters. `error[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                     | Emoji string. `error[]` expected for *array*, but `string` given                                     |
| 42                             | false                     | Positive number. `error[]` expected for *array*, but `integer` given                                 |
| -273                           | false                     | Negative number (0 Kelvin). `error[]` expected for *array*, but `integer` given                      |
| NaN                            | false                     | `NaN` (Not a Number). `error[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                     | Positive Infinity. `error[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                     | Negative Infinity. `error[]` expected for *array*, but `number` given                                |
| 0                              | false                     | BigInt zero `0n`. `error[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                     | BigInt `42n`. `error[]` expected for *array*, but `bigint` given                                     |
| true                           | false                     | Boolean. `error[]` expected for *array*, but `boolean` given                                         |
| true                           | false                     | Boolean object `Boolean(true)`. `error[]` expected for *array*, but `boolean` given                  |
| null                           | false                     | Null. `error[]` expected for *array*, but `null` given                                               |
| undefined                      | false                     | Undefined. `error[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                     | Symbol. `error[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                     | RegExp. `error[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                     | RegExp with flags. `error[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                     | Empty plain object. `error[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                     | Non-empty plain object. `error[]` expected for *array*, but `object` given                           |
| Date(2026-02-06T12:32:21.972Z) | false                     | `new Date()` object. `error[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                     | Invalid Date object. `error[]` expected for *array*, but `date` given                                |
| Error                          | false                     | `new Error()` object. `error[]` expected for *array*, but `error` given                              |
| new Map()                      | false                     | Empty map `new Map()`. `error[]` expected for *array*, but `map` given                               |
| new Set()                      | false                     | Empty set `new Set()`. `error[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                     | Non-empty map `new Map([['k', 'v']])`. `error[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                     | Non-empty set `new Set([1, 2, 3])`. `error[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                     | Object without prototype (Object.create(null)). `error[]` expected for *array*, but `object` given   |
| `[]`                           | false                     | Empty array. `error[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                     | Array with `undefined` (but returning `[null]`). `error[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                     | Sparse array (length 3, empty slots). `error[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                     | Nested array. `error[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                     | Mixed array. `error[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                     | Function `() => {}`. `error[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                     | Async function `async () => {}`. `error[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                     | Generator function `function* () { yield 1; }`. `error[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 6 February 2026 at 12:32:21 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>