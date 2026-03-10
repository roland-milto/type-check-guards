# Behavior of `areNull`

## Expected parameters

| Parameter | Data type | Description                                   |
|:----------|:----------|:----------------------------------------------|
| array     | null[]    | The input array to check for `null` elements. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array` | Function <br> `areNull` | Description                                                               |
|:-----------------------|:------------------------|:--------------------------------------------------------------------------|
| `[null]`               | true                    | Single null                                                               |
| `[null,null,null]`     | true                    | All null values                                                           |
| `[]`                   | false                   | Empty array (not filled)                                                  |
| `[null,null]`          | false                   | Contains undefined. `null` expected for *array[1]*, but `undefined` given |
| `[null,0]`             | false                   | Contains number. `null` expected for *array[1]*, but `integer` given      |
| `[null,"x"]`           | false                   | Contains string. `null` expected for *array[1]*, but `string` given       |
| `[null,false]`         | false                   | Contains boolean. `null` expected for *array[1]*, but `boolean` given     |
| `[null,{}]`            | false                   | Contains object. `null` expected for *array[1]*, but `object` given       |
| `[null,[]]`            | false                   | Contains array. `null` expected for *array[1]*, but `array` given         |

## Default tests

| Parameter <br> `array`         | Function <br> `areNull` | Description                                                                                         |
|:-------------------------------|:------------------------|:----------------------------------------------------------------------------------------------------|
| ""                             | false                   | Empty string. `null[]` expected for *array*, but `string` given                                     |
| " "                            | false                   | Only space string. `null[]` expected for *array*, but `string` given                                |
| "\r"                           | false                   | Carriage return. `null[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                   | Data type returned by `getTypeOf()`. `null[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                   | Two word string. `null[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                   | Non-ASCII (German umlauts). `null[]` expected for *array*, but `string` given                       |
| "你好"                           | false                   | Non-Latin characters. `null[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                   | Emoji string. `null[]` expected for *array*, but `string` given                                     |
| 42                             | false                   | Positive number. `null[]` expected for *array*, but `integer` given                                 |
| -273                           | false                   | Negative number (0 Kelvin). `null[]` expected for *array*, but `integer` given                      |
| NaN                            | false                   | `NaN` (Not a Number). `null[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                   | Positive Infinity. `null[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                   | Negative Infinity. `null[]` expected for *array*, but `number` given                                |
| 0                              | false                   | BigInt zero `0n`. `null[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                   | BigInt `42n`. `null[]` expected for *array*, but `bigint` given                                     |
| true                           | false                   | Boolean. `null[]` expected for *array*, but `boolean` given                                         |
| true                           | false                   | Boolean object `Boolean(true)`. `null[]` expected for *array*, but `boolean` given                  |
| null                           | false                   | Null. `null[]` expected for *array*, but `null` given                                               |
| undefined                      | false                   | Undefined. `null[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                   | Symbol. `null[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                   | RegExp. `null[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                   | RegExp with flags. `null[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                   | Empty plain object. `null[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                   | Non-empty plain object. `null[]` expected for *array*, but `object` given                           |
| Date(2026-01-31T15:42:05.476Z) | false                   | `new Date()` object. `null[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                   | Invalid Date object. `null[]` expected for *array*, but `date` given                                |
| Error                          | false                   | `new Error()` object. `null[]` expected for *array*, but `error` given                              |
| new Map()                      | false                   | Empty map `new Map()`. `null[]` expected for *array*, but `map` given                               |
| new Set()                      | false                   | Empty set `new Set()`. `null[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                   | Non-empty map `new Map([['k', 'v']])`. `null[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                   | Non-empty set `new Set([1, 2, 3])`. `null[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                   | Object without prototype (Object.create(null)). `null[]` expected for *array*, but `object` given   |
| `[]`                           | false                   | Empty array. `null[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                   | Array with `undefined` (but returning `[null]`). `null[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                   | Sparse array (length 3, empty slots). `null[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                   | Nested array. `null[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                   | Mixed array. `null[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                   | Function `() => {}`. `null[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                   | Async function `async () => {}`. `null[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                   | Generator function `function* () { yield 1; }`. `null[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 15:42:05 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>