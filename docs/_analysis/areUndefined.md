# Behavior of `areUndefined`

## Expected parameters

| Parameter | Data type   | Description                                  |
|:----------|:------------|:---------------------------------------------|
| array     | undefined[] | The array to check for `undefined` elements. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array` | Function <br> `areUndefined` | Description                                                                |
|:-----------------------|:-----------------------------|:---------------------------------------------------------------------------|
| `[null]`               | true                         | Single undefined                                                           |
| `[null,null]`          | true                         | All undefined values                                                       |
| `[null,null,null]`     | true                         | Mixed undefined forms (void 0 and undefined)                               |
| `[]`                   | false                        | Empty array (not filled)                                                   |
| `[null,null]`          | false                        | Contains null. `undefined` expected for *array[1]*, but `null` given       |
| `[null,0,null]`        | false                        | Contains number. `undefined` expected for *array[1]*, but `integer` given  |
| `[null,false,null]`    | false                        | Contains boolean. `undefined` expected for *array[1]*, but `boolean` given |
| `[null,"",null]`       | false                        | Contains string. `undefined` expected for *array[1]*, but `string` given   |
| `[null,{},null]`       | false                        | Contains object. `undefined` expected for *array[1]*, but `object` given   |
| `[null,[],null]`       | false                        | Contains array. `undefined` expected for *array[1]*, but `array` given     |

## Default tests

| Parameter <br> `array`         | Function <br> `areUndefined` | Description                                                                                              |
|:-------------------------------|:-----------------------------|:---------------------------------------------------------------------------------------------------------|
| ""                             | false                        | Empty string. `undefined[]` expected for *array*, but `string` given                                     |
| " "                            | false                        | Only space string. `undefined[]` expected for *array*, but `string` given                                |
| "\r"                           | false                        | Carriage return. `undefined[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                        | Data type returned by `getTypeOf()`. `undefined[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                        | Two word string. `undefined[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                        | Non-ASCII (German umlauts). `undefined[]` expected for *array*, but `string` given                       |
| "你好"                           | false                        | Non-Latin characters. `undefined[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                        | Emoji string. `undefined[]` expected for *array*, but `string` given                                     |
| 42                             | false                        | Positive number. `undefined[]` expected for *array*, but `integer` given                                 |
| -273                           | false                        | Negative number (0 Kelvin). `undefined[]` expected for *array*, but `integer` given                      |
| NaN                            | false                        | `NaN` (Not a Number). `undefined[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                        | Positive Infinity. `undefined[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                        | Negative Infinity. `undefined[]` expected for *array*, but `number` given                                |
| 0                              | false                        | BigInt zero `0n`. `undefined[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                        | BigInt `42n`. `undefined[]` expected for *array*, but `bigint` given                                     |
| true                           | false                        | Boolean. `undefined[]` expected for *array*, but `boolean` given                                         |
| true                           | false                        | Boolean object `Boolean(true)`. `undefined[]` expected for *array*, but `boolean` given                  |
| null                           | false                        | Null. `undefined[]` expected for *array*, but `null` given                                               |
| undefined                      | false                        | Undefined. `undefined[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                        | Symbol. `undefined[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                        | RegExp. `undefined[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                        | RegExp with flags. `undefined[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                        | Empty plain object. `undefined[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                        | Non-empty plain object. `undefined[]` expected for *array*, but `object` given                           |
| Date(2026-01-30T13:54:24.193Z) | false                        | `new Date()` object. `undefined[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                        | Invalid Date object. `undefined[]` expected for *array*, but `date` given                                |
| Error                          | false                        | `new Error()` object. `undefined[]` expected for *array*, but `error` given                              |
| new Map()                      | false                        | Empty map `new Map()`. `undefined[]` expected for *array*, but `map` given                               |
| new Set()                      | false                        | Empty set `new Set()`. `undefined[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                        | Non-empty map `new Map([['k', 'v']])`. `undefined[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                        | Non-empty set `new Set([1, 2, 3])`. `undefined[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                        | Object without prototype (Object.create(null)). `undefined[]` expected for *array*, but `object` given   |
| `[]`                           | false                        | Empty array. `undefined[]` expected for *array*, but `array` given                                       |
| `[null]`                       | true                         | Array with `undefined` (but returning `[null]`). `undefined[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | true                         | Sparse array (length 3, empty slots). `undefined[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                        | Nested array. `undefined[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                        | Mixed array. `undefined[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                        | Function `() => {}`. `undefined[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                        | Async function `async () => {}`. `undefined[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                        | Generator function `function* () { yield 1; }`. `undefined[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 13:54:24 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>