# Behavior of `areSymbols`

## Expected parameters

| Parameter | Data type | Description                                  |
|:----------|:----------|:---------------------------------------------|
| array     | symbol[]  | The array to be checked for symbol elements. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array` | Function <br> `areSymbols` | Description                                                                 |
|:-----------------------|:---------------------------|:----------------------------------------------------------------------------|
| `[null]`               | true                       | Single symbol                                                               |
| `[null,null,null]`     | true                       | Multiple symbols                                                            |
| `[null,null]`          | true                       | Global symbols (Symbol.for)                                                 |
| `[]`                   | false                      | Empty array (not filled)                                                    |
| `[null,"b",null]`      | false                      | Contains string. `symbol` expected for *array[1]*, but `string` given       |
| `[null,{}]`            | false                      | Contains boxed Symbol object                                                |
| `[null,null]`          | false                      | Contains null. `symbol` expected for *array[1]*, but `null` given           |
| `[null,null]`          | false                      | Contains undefined. `symbol` expected for *array[1]*, but `undefined` given |
| `[null,{}]`            | false                      | Contains object. `symbol` expected for *array[1]*, but `object` given       |

## Default tests

| Parameter <br> `array`         | Function <br> `areSymbols` | Description                                                                                           |
|:-------------------------------|:---------------------------|:------------------------------------------------------------------------------------------------------|
| ""                             | false                      | Empty string. `symbol[]` expected for *array*, but `string` given                                     |
| " "                            | false                      | Only space string. `symbol[]` expected for *array*, but `string` given                                |
| "\r"                           | false                      | Carriage return. `symbol[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                      | Data type returned by `getTypeOf()`. `symbol[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                      | Two word string. `symbol[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                      | Non-ASCII (German umlauts). `symbol[]` expected for *array*, but `string` given                       |
| "你好"                           | false                      | Non-Latin characters. `symbol[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                      | Emoji string. `symbol[]` expected for *array*, but `string` given                                     |
| 42                             | false                      | Positive number. `symbol[]` expected for *array*, but `integer` given                                 |
| -273                           | false                      | Negative number (0 Kelvin). `symbol[]` expected for *array*, but `integer` given                      |
| NaN                            | false                      | `NaN` (Not a Number). `symbol[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                      | Positive Infinity. `symbol[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                      | Negative Infinity. `symbol[]` expected for *array*, but `number` given                                |
| 0                              | false                      | BigInt zero `0n`. `symbol[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                      | BigInt `42n`. `symbol[]` expected for *array*, but `bigint` given                                     |
| true                           | false                      | Boolean. `symbol[]` expected for *array*, but `boolean` given                                         |
| true                           | false                      | Boolean object `Boolean(true)`. `symbol[]` expected for *array*, but `boolean` given                  |
| null                           | false                      | Null. `symbol[]` expected for *array*, but `null` given                                               |
| undefined                      | false                      | Undefined. `symbol[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                      | Symbol. `symbol[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                      | RegExp. `symbol[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                      | RegExp with flags. `symbol[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                      | Empty plain object. `symbol[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                      | Non-empty plain object. `symbol[]` expected for *array*, but `object` given                           |
| Date(2026-01-30T14:20:24.413Z) | false                      | `new Date()` object. `symbol[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                      | Invalid Date object. `symbol[]` expected for *array*, but `date` given                                |
| Error                          | false                      | `new Error()` object. `symbol[]` expected for *array*, but `error` given                              |
| new Map()                      | false                      | Empty map `new Map()`. `symbol[]` expected for *array*, but `map` given                               |
| new Set()                      | false                      | Empty set `new Set()`. `symbol[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                      | Non-empty map `new Map([['k', 'v']])`. `symbol[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                      | Non-empty set `new Set([1, 2, 3])`. `symbol[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                      | Object without prototype (Object.create(null)). `symbol[]` expected for *array*, but `object` given   |
| `[]`                           | false                      | Empty array. `symbol[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                      | Array with `undefined` (but returning `[null]`). `symbol[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                      | Sparse array (length 3, empty slots). `symbol[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                      | Nested array. `symbol[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                      | Mixed array. `symbol[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                      | Function `() => {}`. `symbol[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                      | Async function `async () => {}`. `symbol[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                      | Generator function `function* () { yield 1; }`. `symbol[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 14:20:24 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>