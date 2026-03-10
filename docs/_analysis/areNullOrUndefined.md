# Behavior of `areNullOrUndefined`

## Expected parameters

| Parameter | Data type | Description         |
|:----------|:----------|:--------------------|
| array     | unknown[] | The array to check. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array` | Function <br> `areNullOrUndefined` | Description                                                                                                                                                                            |
|:-----------------------|:-----------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `[null]`               | true                               | Single null. `unknown` expected for *array[0]*, but `null` given                                                                                                                       |
| `[null]`               | true                               | Single undefined. `unknown` expected for *array[0]*, but `undefined` given                                                                                                             |
| `[null,null,null]`     | true                               | Null/undefined mix. `unknown` expected for *array[0]*, but `null` given. `unknown` expected for *array[1]*, but `undefined` given. `unknown` expected for *array[2]*, but `null` given |
| `[null,null]`          | true                               | Undefined mix (void 0 + undefined). `unknown` expected for *array[0]*, but `undefined` given. `unknown` expected for *array[1]*, but `undefined` given                                 |
| `[]`                   | false                              | Empty array (not filled)                                                                                                                                                               |
| `[null,"string"]`      | false                              | Contains string. `unknown` expected for *array[0]*, but `null` given. `unknown` expected for *array[1]*, but `string` given                                                            |
| `[null,0]`             | false                              | Contains number. `unknown` expected for *array[0]*, but `null` given. `unknown` expected for *array[1]*, but `integer` given                                                           |
| `[null,false]`         | false                              | Contains boolean. `unknown` expected for *array[0]*, but `undefined` given. `unknown` expected for *array[1]*, but `boolean` given                                                     |
| `[null,{}]`            | false                              | Contains object. `unknown` expected for *array[0]*, but `null` given. `unknown` expected for *array[1]*, but `object` given                                                            |
| `[null,[]]`            | false                              | Contains array. `unknown` expected for *array[0]*, but `undefined` given. `unknown` expected for *array[1]*, but `array` given                                                         |

## Default tests

| Parameter <br> `array`         | Function <br> `areNullOrUndefined` | Description                                                                                            |
|:-------------------------------|:-----------------------------------|:-------------------------------------------------------------------------------------------------------|
| ""                             | false                              | Empty string. `unknown[]` expected for *array*, but `string` given                                     |
| " "                            | false                              | Only space string. `unknown[]` expected for *array*, but `string` given                                |
| "\r"                           | false                              | Carriage return. `unknown[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                              | Data type returned by `getTypeOf()`. `unknown[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                              | Two word string. `unknown[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                              | Non-ASCII (German umlauts). `unknown[]` expected for *array*, but `string` given                       |
| "你好"                           | false                              | Non-Latin characters. `unknown[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                              | Emoji string. `unknown[]` expected for *array*, but `string` given                                     |
| 42                             | false                              | Positive number. `unknown[]` expected for *array*, but `integer` given                                 |
| -273                           | false                              | Negative number (0 Kelvin). `unknown[]` expected for *array*, but `integer` given                      |
| NaN                            | false                              | `NaN` (Not a Number). `unknown[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                              | Positive Infinity. `unknown[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                              | Negative Infinity. `unknown[]` expected for *array*, but `number` given                                |
| 0                              | false                              | BigInt zero `0n`. `unknown[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                              | BigInt `42n`. `unknown[]` expected for *array*, but `bigint` given                                     |
| true                           | false                              | Boolean. `unknown[]` expected for *array*, but `boolean` given                                         |
| true                           | false                              | Boolean object `Boolean(true)`. `unknown[]` expected for *array*, but `boolean` given                  |
| null                           | false                              | Null. `unknown[]` expected for *array*, but `null` given                                               |
| undefined                      | false                              | Undefined. `unknown[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                              | Symbol. `unknown[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                              | RegExp. `unknown[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                              | RegExp with flags. `unknown[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                              | Empty plain object. `unknown[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                              | Non-empty plain object. `unknown[]` expected for *array*, but `object` given                           |
| Date(2026-01-31T00:28:49.842Z) | false                              | `new Date()` object. `unknown[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                              | Invalid Date object. `unknown[]` expected for *array*, but `date` given                                |
| Error                          | false                              | `new Error()` object. `unknown[]` expected for *array*, but `error` given                              |
| new Map()                      | false                              | Empty map `new Map()`. `unknown[]` expected for *array*, but `map` given                               |
| new Set()                      | false                              | Empty set `new Set()`. `unknown[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                              | Non-empty map `new Map([['k', 'v']])`. `unknown[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                              | Non-empty set `new Set([1, 2, 3])`. `unknown[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                              | Object without prototype (Object.create(null)). `unknown[]` expected for *array*, but `object` given   |
| `[]`                           | false                              | Empty array. `unknown[]` expected for *array*, but `array` given                                       |
| `[null]`                       | true                               | Array with `undefined` (but returning `[null]`). `unknown[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | true                               | Sparse array (length 3, empty slots). `unknown[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                              | Nested array. `unknown[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                              | Mixed array. `unknown[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                              | Function `() => {}`. `unknown[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                              | Async function `async () => {}`. `unknown[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                              | Generator function `function* () { yield 1; }`. `unknown[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 00:28:49 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>