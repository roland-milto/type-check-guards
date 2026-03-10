# Behavior of `areFloats`

## Expected parameters

| Parameter | Data type | Description                            |
|:----------|:----------|:---------------------------------------|
| array     | float[]   | The array to check for float elements. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array`              | Function <br> `areFloats` | Description                                                                             |
|:------------------------------------|:--------------------------|:----------------------------------------------------------------------------------------|
| `[3.14]`                            | true                      | Single float                                                                            |
| `[3.14,2.71,0.5]`                   | true                      | Multiple floats                                                                         |
| `[1e-7,-0.1,2.220446049250313e-16]` | true                      | Floats with scientific notation and EPSILON                                             |
| `[]`                                | false                     | Empty array (not filled)                                                                |
| `[3.14,2]`                          | false                     | Contains integer. `float` expected for *array[1]*, but `integer` given                  |
| `[3.14,1]`                          | false                     | Contains 1.0 (integer, not float). `float` expected for *array[1]*, but `integer` given |
| `[3.14,"NaN"]`                      | false                     | Contains NaN. `float` expected for *array[1]*, but `nan` given                          |
| `[3.14,"Infinity"]`                 | false                     | Contains Infinity. `float` expected for *array[1]*, but `number` given                  |
| `[3.14,"2.71"]`                     | false                     | Contains float as string. `float` expected for *array[1]*, but `decimal` given          |
| `[3.14,2.71]`                       | true                      | Contains boxed Number object                                                            |

## Default tests

| Parameter <br> `array`         | Function <br> `areFloats` | Description                                                                                          |
|:-------------------------------|:--------------------------|:-----------------------------------------------------------------------------------------------------|
| ""                             | false                     | Empty string. `float[]` expected for *array*, but `string` given                                     |
| " "                            | false                     | Only space string. `float[]` expected for *array*, but `string` given                                |
| "\r"                           | false                     | Carriage return. `float[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                     | Data type returned by `getTypeOf()`. `float[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                     | Two word string. `float[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                     | Non-ASCII (German umlauts). `float[]` expected for *array*, but `string` given                       |
| "你好"                           | false                     | Non-Latin characters. `float[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                     | Emoji string. `float[]` expected for *array*, but `string` given                                     |
| 42                             | false                     | Positive number. `float[]` expected for *array*, but `integer` given                                 |
| -273                           | false                     | Negative number (0 Kelvin). `float[]` expected for *array*, but `integer` given                      |
| NaN                            | false                     | `NaN` (Not a Number). `float[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                     | Positive Infinity. `float[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                     | Negative Infinity. `float[]` expected for *array*, but `number` given                                |
| 0                              | false                     | BigInt zero `0n`. `float[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                     | BigInt `42n`. `float[]` expected for *array*, but `bigint` given                                     |
| true                           | false                     | Boolean. `float[]` expected for *array*, but `boolean` given                                         |
| true                           | false                     | Boolean object `Boolean(true)`. `float[]` expected for *array*, but `boolean` given                  |
| null                           | false                     | Null. `float[]` expected for *array*, but `null` given                                               |
| undefined                      | false                     | Undefined. `float[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                     | Symbol. `float[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                     | RegExp. `float[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                     | RegExp with flags. `float[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                     | Empty plain object. `float[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                     | Non-empty plain object. `float[]` expected for *array*, but `object` given                           |
| Date(2026-01-30T15:56:09.849Z) | false                     | `new Date()` object. `float[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                     | Invalid Date object. `float[]` expected for *array*, but `date` given                                |
| Error                          | false                     | `new Error()` object. `float[]` expected for *array*, but `error` given                              |
| new Map()                      | false                     | Empty map `new Map()`. `float[]` expected for *array*, but `map` given                               |
| new Set()                      | false                     | Empty set `new Set()`. `float[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                     | Non-empty map `new Map([['k', 'v']])`. `float[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                     | Non-empty set `new Set([1, 2, 3])`. `float[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                     | Object without prototype (Object.create(null)). `float[]` expected for *array*, but `object` given   |
| `[]`                           | false                     | Empty array. `float[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                     | Array with `undefined` (but returning `[null]`). `float[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                     | Sparse array (length 3, empty slots). `float[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                     | Nested array. `float[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                     | Mixed array. `float[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                     | Function `() => {}`. `float[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                     | Async function `async () => {}`. `float[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                     | Generator function `function* () { yield 1; }`. `float[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 15:56:09 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>