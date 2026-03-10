# Behavior of `arePromises`

## Expected parameters

| Parameter | Data type | Description                               |
|:----------|:----------|:------------------------------------------|
| array     | promise[] | The array to check for Promise instances. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array`      | Function <br> `arePromises` | Description                                                                                     |
|:----------------------------|:----------------------------|:------------------------------------------------------------------------------------------------|
| `[{}]`                      | true                        | Single Promise                                                                                  |
| `[{},{}]`                   | true                        | Multiple Promises                                                                               |
| `[{},{}]`                   | true                        | Resolved Promises                                                                               |
| `[]`                        | false                       | Empty array (not filled)                                                                        |
| `[{},123]`                  | false                       | Contains number. `promise` expected for *array[1]*, but `integer` given                         |
| `[{},{"then":"then() {}"}]` | false                       | Contains thenable (not Promise instance). `promise` expected for *array[1]*, but `object` given |
| `[{},null]`                 | false                       | Contains null. `promise` expected for *array[1]*, but `null` given                              |
| `[{},null]`                 | false                       | Contains undefined. `promise` expected for *array[1]*, but `undefined` given                    |

## Default tests

| Parameter <br> `array`         | Function <br> `arePromises` | Description                                                                                            |
|:-------------------------------|:----------------------------|:-------------------------------------------------------------------------------------------------------|
| ""                             | false                       | Empty string. `promise[]` expected for *array*, but `string` given                                     |
| " "                            | false                       | Only space string. `promise[]` expected for *array*, but `string` given                                |
| "\r"                           | false                       | Carriage return. `promise[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                       | Data type returned by `getTypeOf()`. `promise[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                       | Two word string. `promise[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                       | Non-ASCII (German umlauts). `promise[]` expected for *array*, but `string` given                       |
| "你好"                           | false                       | Non-Latin characters. `promise[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                       | Emoji string. `promise[]` expected for *array*, but `string` given                                     |
| 42                             | false                       | Positive number. `promise[]` expected for *array*, but `integer` given                                 |
| -273                           | false                       | Negative number (0 Kelvin). `promise[]` expected for *array*, but `integer` given                      |
| NaN                            | false                       | `NaN` (Not a Number). `promise[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                       | Positive Infinity. `promise[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                       | Negative Infinity. `promise[]` expected for *array*, but `number` given                                |
| 0                              | false                       | BigInt zero `0n`. `promise[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                       | BigInt `42n`. `promise[]` expected for *array*, but `bigint` given                                     |
| true                           | false                       | Boolean. `promise[]` expected for *array*, but `boolean` given                                         |
| true                           | false                       | Boolean object `Boolean(true)`. `promise[]` expected for *array*, but `boolean` given                  |
| null                           | false                       | Null. `promise[]` expected for *array*, but `null` given                                               |
| undefined                      | false                       | Undefined. `promise[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                       | Symbol. `promise[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                       | RegExp. `promise[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                       | RegExp with flags. `promise[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                       | Empty plain object. `promise[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                       | Non-empty plain object. `promise[]` expected for *array*, but `object` given                           |
| Date(2026-01-30T23:47:12.631Z) | false                       | `new Date()` object. `promise[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                       | Invalid Date object. `promise[]` expected for *array*, but `date` given                                |
| Error                          | false                       | `new Error()` object. `promise[]` expected for *array*, but `error` given                              |
| new Map()                      | false                       | Empty map `new Map()`. `promise[]` expected for *array*, but `map` given                               |
| new Set()                      | false                       | Empty set `new Set()`. `promise[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                       | Non-empty map `new Map([['k', 'v']])`. `promise[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                       | Non-empty set `new Set([1, 2, 3])`. `promise[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                       | Object without prototype (Object.create(null)). `promise[]` expected for *array*, but `object` given   |
| `[]`                           | false                       | Empty array. `promise[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                       | Array with `undefined` (but returning `[null]`). `promise[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                       | Sparse array (length 3, empty slots). `promise[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                       | Nested array. `promise[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                       | Mixed array. `promise[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                       | Function `() => {}`. `promise[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                       | Async function `async () => {}`. `promise[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                       | Generator function `function* () { yield 1; }`. `promise[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 23:47:12 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>