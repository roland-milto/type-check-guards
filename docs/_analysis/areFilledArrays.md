# Behavior of `areFilledArrays`

## Expected parameters

| Parameter | Data type | Description                         |
|:----------|:----------|:------------------------------------|
| array     | array[][] | The two-dimensional array to check. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array` | Function <br> `areFilledArrays` | Description                                                                                                                                              |
|:-----------------------|:--------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| `[[1]]`                | true                            | 2D array with one filled subarray. `array[]` expected for *array[0]*, but `array` given                                                                  |
| `[["a","b"],[1,2,3]]`  | true                            | 2D array with multiple filled subarrays. `array[]` expected for *array[0]*, but `array` given. `array[]` expected for *array[1]*, but `array` given      |
| `[[{},[]],["string"]]` | true                            | 2D array with mixed values, filled subarrays. `array[]` expected for *array[0]*, but `array` given. `array[]` expected for *array[1]*, but `array` given |
| `[]`                   | false                           | Empty outer array (not filled)                                                                                                                           |
| `[[]]`                 | false                           | Contains empty subarray. `array[]` expected for *array[0]*, but `array` given                                                                            |
| `[[],[1,2,3]]`         | false                           | First subarray empty. `array[]` expected for *array[0]*, but `array` given. `array[]` expected for *array[1]*, but `array` given                         |
| `[[1,2,3],[]]`         | false                           | Last subarray empty. `array[]` expected for *array[0]*, but `array` given. `array[]` expected for *array[1]*, but `array` given                          |
| `[[1],"not an array"]` | false                           | Contains non-array item. `array[]` expected for *array[0]*, but `array` given. `array[]` expected for *array[1]*, but `string` given                     |
| `[[1],null]`           | false                           | Contains null item. `array[]` expected for *array[0]*, but `array` given. `array[]` expected for *array[1]*, but `null` given                            |

## Default tests

| Parameter <br> `array`         | Function <br> `areFilledArrays` | Description                                                                                            |
|:-------------------------------|:--------------------------------|:-------------------------------------------------------------------------------------------------------|
| ""                             | false                           | Empty string. `array[][]` expected for *array*, but `string` given                                     |
| " "                            | false                           | Only space string. `array[][]` expected for *array*, but `string` given                                |
| "\r"                           | false                           | Carriage return. `array[][]` expected for *array*, but `string` given                                  |
| "integer"                      | false                           | Data type returned by `getTypeOf()`. `array[][]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                           | Two word string. `array[][]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                           | Non-ASCII (German umlauts). `array[][]` expected for *array*, but `string` given                       |
| "你好"                           | false                           | Non-Latin characters. `array[][]` expected for *array*, but `string` given                             |
| "🙂"                           | false                           | Emoji string. `array[][]` expected for *array*, but `string` given                                     |
| 42                             | false                           | Positive number. `array[][]` expected for *array*, but `integer` given                                 |
| -273                           | false                           | Negative number (0 Kelvin). `array[][]` expected for *array*, but `integer` given                      |
| NaN                            | false                           | `NaN` (Not a Number). `array[][]` expected for *array*, but `nan` given                                |
| Infinity                       | false                           | Positive Infinity. `array[][]` expected for *array*, but `number` given                                |
| -Infinity                      | false                           | Negative Infinity. `array[][]` expected for *array*, but `number` given                                |
| 0                              | false                           | BigInt zero `0n`. `array[][]` expected for *array*, but `bigint` given                                 |
| 42                             | false                           | BigInt `42n`. `array[][]` expected for *array*, but `bigint` given                                     |
| true                           | false                           | Boolean. `array[][]` expected for *array*, but `boolean` given                                         |
| true                           | false                           | Boolean object `Boolean(true)`. `array[][]` expected for *array*, but `boolean` given                  |
| null                           | false                           | Null. `array[][]` expected for *array*, but `null` given                                               |
| undefined                      | false                           | Undefined. `array[][]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                           | Symbol. `array[][]` expected for *array*, but `symbol` given                                           |
| /./                            | false                           | RegExp. `array[][]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                           | RegExp with flags. `array[][]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                           | Empty plain object. `array[][]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                           | Non-empty plain object. `array[][]` expected for *array*, but `object` given                           |
| Date(2026-02-06T11:55:06.098Z) | false                           | `new Date()` object. `array[][]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                           | Invalid Date object. `array[][]` expected for *array*, but `date` given                                |
| Error                          | false                           | `new Error()` object. `array[][]` expected for *array*, but `error` given                              |
| new Map()                      | false                           | Empty map `new Map()`. `array[][]` expected for *array*, but `map` given                               |
| new Set()                      | false                           | Empty set `new Set()`. `array[][]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                           | Non-empty map `new Map([['k', 'v']])`. `array[][]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                           | Non-empty set `new Set([1, 2, 3])`. `array[][]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                           | Object without prototype (Object.create(null)). `array[][]` expected for *array*, but `object` given   |
| `[]`                           | false                           | Empty array. `array[][]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                           | Array with `undefined` (but returning `[null]`). `array[][]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                           | Sparse array (length 3, empty slots). `array[][]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | true                            | Nested array. `array[][]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                           | Mixed array. `array[][]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                           | Function `() => {}`. `array[][]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                           | Async function `async () => {}`. `array[][]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                           | Generator function `function* () { yield 1; }`. `array[][]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 6 February 2026 at 11:55:06 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>