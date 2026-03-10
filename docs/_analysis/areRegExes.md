# Behavior of `areRegExes`

## Expected parameters

| Parameter | Data type | Description              |
|:----------|:----------|:-------------------------|
| array     | regexp[]  | The value to be checked. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array` | Function <br> `areRegExes` | Description                                                                                                                               |
|:-----------------------|:---------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| `[{}]`                 | true                       | Single RegExp. `regexp` expected for *array[0]*, but `regExp` given                                                                       |
| `[{},{}]`              | true                       | Multiple RegExp literals. `regexp` expected for *array[0]*, but `regExp` given. `regexp` expected for *array[1]*, but `regExp` given      |
| `[{},{}]`              | true                       | RegExp constructors and flags. `regexp` expected for *array[0]*, but `regExp` given. `regexp` expected for *array[1]*, but `regExp` given |
| `[]`                   | false                      | Empty array (not filled)                                                                                                                  |
| `[{},".*"]`            | false                      | Contains string. `regexp` expected for *array[0]*, but `regExp` given. `regexp` expected for *array[1]*, but `string` given               |
| `[{},{}]`              | false                      | Contains object. `regexp` expected for *array[0]*, but `regExp` given. `regexp` expected for *array[1]*, but `object` given               |
| `[{},null]`            | false                      | Contains null. `regexp` expected for *array[0]*, but `regExp` given. `regexp` expected for *array[1]*, but `null` given                   |
| `[{},null]`            | false                      | Contains undefined. `regexp` expected for *array[0]*, but `regExp` given. `regexp` expected for *array[1]*, but `undefined` given         |

## Default tests

| Parameter <br> `array`         | Function <br> `areRegExes` | Description                                                                                           |
|:-------------------------------|:---------------------------|:------------------------------------------------------------------------------------------------------|
| ""                             | false                      | Empty string. `regexp[]` expected for *array*, but `string` given                                     |
| " "                            | false                      | Only space string. `regexp[]` expected for *array*, but `string` given                                |
| "\r"                           | false                      | Carriage return. `regexp[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                      | Data type returned by `getTypeOf()`. `regexp[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                      | Two word string. `regexp[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                      | Non-ASCII (German umlauts). `regexp[]` expected for *array*, but `string` given                       |
| "你好"                           | false                      | Non-Latin characters. `regexp[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                      | Emoji string. `regexp[]` expected for *array*, but `string` given                                     |
| 42                             | false                      | Positive number. `regexp[]` expected for *array*, but `integer` given                                 |
| -273                           | false                      | Negative number (0 Kelvin). `regexp[]` expected for *array*, but `integer` given                      |
| NaN                            | false                      | `NaN` (Not a Number). `regexp[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                      | Positive Infinity. `regexp[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                      | Negative Infinity. `regexp[]` expected for *array*, but `number` given                                |
| 0                              | false                      | BigInt zero `0n`. `regexp[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                      | BigInt `42n`. `regexp[]` expected for *array*, but `bigint` given                                     |
| true                           | false                      | Boolean. `regexp[]` expected for *array*, but `boolean` given                                         |
| true                           | false                      | Boolean object `Boolean(true)`. `regexp[]` expected for *array*, but `boolean` given                  |
| null                           | false                      | Null. `regexp[]` expected for *array*, but `null` given                                               |
| undefined                      | false                      | Undefined. `regexp[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                      | Symbol. `regexp[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                      | RegExp. `regexp[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                      | RegExp with flags. `regexp[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                      | Empty plain object. `regexp[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                      | Non-empty plain object. `regexp[]` expected for *array*, but `object` given                           |
| Date(2026-01-30T23:16:30.114Z) | false                      | `new Date()` object. `regexp[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                      | Invalid Date object. `regexp[]` expected for *array*, but `date` given                                |
| Error                          | false                      | `new Error()` object. `regexp[]` expected for *array*, but `error` given                              |
| new Map()                      | false                      | Empty map `new Map()`. `regexp[]` expected for *array*, but `map` given                               |
| new Set()                      | false                      | Empty set `new Set()`. `regexp[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                      | Non-empty map `new Map([['k', 'v']])`. `regexp[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                      | Non-empty set `new Set([1, 2, 3])`. `regexp[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                      | Object without prototype (Object.create(null)). `regexp[]` expected for *array*, but `object` given   |
| `[]`                           | false                      | Empty array. `regexp[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                      | Array with `undefined` (but returning `[null]`). `regexp[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                      | Sparse array (length 3, empty slots). `regexp[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                      | Nested array. `regexp[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                      | Mixed array. `regexp[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                      | Function `() => {}`. `regexp[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                      | Async function `async () => {}`. `regexp[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                      | Generator function `function* () { yield 1; }`. `regexp[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 23:16:30 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>