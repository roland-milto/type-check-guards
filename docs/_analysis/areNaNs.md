# Behavior of `areNaNs`

## Expected parameters

| Parameter | Data type | Description                          |
|:----------|:----------|:-------------------------------------|
| array     | nan[]     | The array to check for `NaN` values. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array`     | Function <br> `areNaNs` | Description                                                                            |
|:---------------------------|:------------------------|:---------------------------------------------------------------------------------------|
| `["NaN"]`                  | true                    | Single NaN                                                                             |
| `["NaN","NaN","NaN"]`      | true                    | All NaN values                                                                         |
| `["NaN","NaN"]`            | true                    | Computed NaN and Number.NaN                                                            |
| `[]`                       | false                   | Empty array (not filled)                                                               |
| `["NaN",1,"NaN"]`          | false                   | Contains a number. `nan` expected for *array[1]*, but `integer` given                  |
| `["NaN","Infinity","NaN"]` | false                   | Contains Infinity. `nan` expected for *array[1]*, but `number` given                   |
| `["NaN","NaN","NaN"]`      | false                   | Contains string 'NaN' (no coercion). `nan` expected for *array[1]*, but `string` given |
| `["NaN",null,"NaN"]`       | false                   | Contains null. `nan` expected for *array[1]*, but `null` given                         |
| `["NaN",null,"NaN"]`       | false                   | Contains undefined. `nan` expected for *array[1]*, but `undefined` given               |
| `["NaN","NaN","NaN"]`      | true                    | Contains boxed Number object                                                           |

## Default tests

| Parameter <br> `array`         | Function <br> `areNaNs` | Description                                                                                        |
|:-------------------------------|:------------------------|:---------------------------------------------------------------------------------------------------|
| ""                             | false                   | Empty string. `nan[]` expected for *array*, but `string` given                                     |
| " "                            | false                   | Only space string. `nan[]` expected for *array*, but `string` given                                |
| "\r"                           | false                   | Carriage return. `nan[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                   | Data type returned by `getTypeOf()`. `nan[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                   | Two word string. `nan[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                   | Non-ASCII (German umlauts). `nan[]` expected for *array*, but `string` given                       |
| "你好"                           | false                   | Non-Latin characters. `nan[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                   | Emoji string. `nan[]` expected for *array*, but `string` given                                     |
| 42                             | false                   | Positive number. `nan[]` expected for *array*, but `integer` given                                 |
| -273                           | false                   | Negative number (0 Kelvin). `nan[]` expected for *array*, but `integer` given                      |
| NaN                            | false                   | `NaN` (Not a Number). `nan[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                   | Positive Infinity. `nan[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                   | Negative Infinity. `nan[]` expected for *array*, but `number` given                                |
| 0                              | false                   | BigInt zero `0n`. `nan[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                   | BigInt `42n`. `nan[]` expected for *array*, but `bigint` given                                     |
| true                           | false                   | Boolean. `nan[]` expected for *array*, but `boolean` given                                         |
| true                           | false                   | Boolean object `Boolean(true)`. `nan[]` expected for *array*, but `boolean` given                  |
| null                           | false                   | Null. `nan[]` expected for *array*, but `null` given                                               |
| undefined                      | false                   | Undefined. `nan[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                   | Symbol. `nan[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                   | RegExp. `nan[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                   | RegExp with flags. `nan[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                   | Empty plain object. `nan[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                   | Non-empty plain object. `nan[]` expected for *array*, but `object` given                           |
| Date(2026-01-30T15:50:02.921Z) | false                   | `new Date()` object. `nan[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                   | Invalid Date object. `nan[]` expected for *array*, but `date` given                                |
| Error                          | false                   | `new Error()` object. `nan[]` expected for *array*, but `error` given                              |
| new Map()                      | false                   | Empty map `new Map()`. `nan[]` expected for *array*, but `map` given                               |
| new Set()                      | false                   | Empty set `new Set()`. `nan[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                   | Non-empty map `new Map([['k', 'v']])`. `nan[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                   | Non-empty set `new Set([1, 2, 3])`. `nan[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                   | Object without prototype (Object.create(null)). `nan[]` expected for *array*, but `object` given   |
| `[]`                           | false                   | Empty array. `nan[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                   | Array with `undefined` (but returning `[null]`). `nan[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                   | Sparse array (length 3, empty slots). `nan[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                   | Nested array. `nan[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                   | Mixed array. `nan[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                   | Function `() => {}`. `nan[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                   | Async function `async () => {}`. `nan[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                   | Generator function `function* () { yield 1; }`. `nan[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 15:50:02 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>