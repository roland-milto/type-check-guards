# Behavior of `isFilledArray`

## Expected parameters

| Parameter | Data type | Description                                    |
|:----------|:----------|:-----------------------------------------------|
| value     | array[]   | The value to check if it is a non-empty array. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value` | Function <br> `isFilledArray` | Description                                                                                                                     |
|:-----------------------|:------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| `[1]`                  | true                          | Single element array (filled). `array` expected for *value[0]*, but `integer` given                                             |
| `["a","b"]`            | true                          | String array (filled). `array` expected for *value[0]*, but `string` given. `array` expected for *value[1]*, but `string` given |
| `[null]`               | true                          | Array with undefined element (still filled). `array` expected for *value[0]*, but `undefined` given                             |
| `[null]`               | true                          | Sparse array length 1 (still filled). `array` expected for *value[0]*, but `undefined` given                                    |
| `[]`                   | false                         | Empty array (not filled)                                                                                                        |
| "not an array"         | false                         | String (not an array). `array[]` expected for *value*, but `string` given                                                       |
| `{}`                   | false                         | Object (not an array). `array[]` expected for *value*, but `object` given                                                       |
| null                   | false                         | Null (not an array). `array[]` expected for *value*, but `null` given                                                           |
| undefined              | false                         | Undefined (not an array). `array[]` expected for *value*, but `undefined` given                                                 |

## Default tests

| Parameter <br> `value`         | Function <br> `isFilledArray` | Description                                                                                          |
|:-------------------------------|:------------------------------|:-----------------------------------------------------------------------------------------------------|
| ""                             | false                         | Empty string. `array[]` expected for *value*, but `string` given                                     |
| " "                            | false                         | Only space string. `array[]` expected for *value*, but `string` given                                |
| "\r"                           | false                         | Carriage return. `array[]` expected for *value*, but `string` given                                  |
| "integer"                      | false                         | Data type returned by `getTypeOf()`. `array[]` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                         | Two word string. `array[]` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                         | Non-ASCII (German umlauts). `array[]` expected for *value*, but `string` given                       |
| "你好"                           | false                         | Non-Latin characters. `array[]` expected for *value*, but `string` given                             |
| "🙂"                           | false                         | Emoji string. `array[]` expected for *value*, but `string` given                                     |
| 42                             | false                         | Positive number. `array[]` expected for *value*, but `integer` given                                 |
| -273                           | false                         | Negative number (0 Kelvin). `array[]` expected for *value*, but `integer` given                      |
| NaN                            | false                         | `NaN` (Not a Number). `array[]` expected for *value*, but `nan` given                                |
| Infinity                       | false                         | Positive Infinity. `array[]` expected for *value*, but `number` given                                |
| -Infinity                      | false                         | Negative Infinity. `array[]` expected for *value*, but `number` given                                |
| 0                              | false                         | BigInt zero `0n`. `array[]` expected for *value*, but `bigint` given                                 |
| 42                             | false                         | BigInt `42n`. `array[]` expected for *value*, but `bigint` given                                     |
| true                           | false                         | Boolean. `array[]` expected for *value*, but `boolean` given                                         |
| true                           | false                         | Boolean object `Boolean(true)`. `array[]` expected for *value*, but `boolean` given                  |
| null                           | false                         | Null. `array[]` expected for *value*, but `null` given                                               |
| undefined                      | false                         | Undefined. `array[]` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                         | Symbol. `array[]` expected for *value*, but `symbol` given                                           |
| /./                            | false                         | RegExp. `array[]` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                         | RegExp with flags. `array[]` expected for *value*, but `regExp` given                                |
| `{}`                           | false                         | Empty plain object. `array[]` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                         | Non-empty plain object. `array[]` expected for *value*, but `object` given                           |
| Date(2026-02-06T11:45:59.157Z) | false                         | `new Date()` object. `array[]` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                         | Invalid Date object. `array[]` expected for *value*, but `date` given                                |
| Error                          | false                         | `new Error()` object. `array[]` expected for *value*, but `error` given                              |
| new Map()                      | false                         | Empty map `new Map()`. `array[]` expected for *value*, but `map` given                               |
| new Set()                      | false                         | Empty set `new Set()`. `array[]` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                         | Non-empty map `new Map([['k', 'v']])`. `array[]` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                         | Non-empty set `new Set([1, 2, 3])`. `array[]` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                         | Object without prototype (Object.create(null)). `array[]` expected for *value*, but `object` given   |
| `[]`                           | false                         | Empty array. `array[]` expected for *value*, but `array` given                                       |
| `[null]`                       | true                          | Array with `undefined` (but returning `[null]`). `array[]` expected for *value*, but `array` given   |
| `[null,null,null]`             | true                          | Sparse array (length 3, empty slots). `array[]` expected for *value*, but `array` given              |
| `[["nested"]]`                 | true                          | Nested array. `array[]` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | true                          | Mixed array. `array[]` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                         | Function `() => {}`. `array[]` expected for *value*, but `function` given                            |
| async()=>{}                    | false                         | Async function `async () => {}`. `array[]` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                         | Generator function `function* () { yield 1; }`. `array[]` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 6 February 2026 at 11:45:59 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>