# Behavior of `areBinaries`

## Expected parameters

| Parameter | Data type | Description              |
|:----------|:----------|:-------------------------|
| array     | binary[]  | The value to be checked. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array`   | Function <br> `areBinaries` | Description                                                                                  |
|:-------------------------|:----------------------------|:---------------------------------------------------------------------------------------------|
| `["0"]`                  | true                        | Single valid binary (no prefix)                                                              |
| `["0b1010","1101"]`      | true                        | Valid binaries (mixed prefix/no prefix)                                                      |
| `["0B1","000","101010"]` | true                        | Valid binaries with 0B and leading zeros                                                     |
| `[]`                     | false                       | Empty array (not filled)                                                                     |
| `["1010","1020"]`        | false                       | Contains invalid digit. `binary` expected for *array[1]*, but `decimal` given                |
| `["0b1010","0b"]`        | false                       | Contains prefix without digits. `binary` expected for *array[1]*, but `string` given         |
| `["1010"," 1101"]`       | false                       | Contains leading whitespace (invalid). `binary` expected for *array[1]*, but `string` given  |
| `["1010","1101 "]`       | false                       | Contains trailing whitespace (invalid). `binary` expected for *array[1]*, but `string` given |
| `["1010",10]`            | false                       | Contains number (non-string, invalid). `binary` expected for *array[1]*, but `integer` given |
| `["1010",null]`          | false                       | Contains null. `binary` expected for *array[1]*, but `null` given                            |
| `["1010",null]`          | false                       | Contains undefined. `binary` expected for *array[1]*, but `undefined` given                  |

## Default tests

| Parameter <br> `array`         | Function <br> `areBinaries` | Description                                                                                           |
|:-------------------------------|:----------------------------|:------------------------------------------------------------------------------------------------------|
| ""                             | false                       | Empty string. `binary[]` expected for *array*, but `string` given                                     |
| " "                            | false                       | Only space string. `binary[]` expected for *array*, but `string` given                                |
| "\r"                           | false                       | Carriage return. `binary[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                       | Data type returned by `getTypeOf()`. `binary[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                       | Two word string. `binary[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                       | Non-ASCII (German umlauts). `binary[]` expected for *array*, but `string` given                       |
| "你好"                           | false                       | Non-Latin characters. `binary[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                       | Emoji string. `binary[]` expected for *array*, but `string` given                                     |
| 42                             | false                       | Positive number. `binary[]` expected for *array*, but `integer` given                                 |
| -273                           | false                       | Negative number (0 Kelvin). `binary[]` expected for *array*, but `integer` given                      |
| NaN                            | false                       | `NaN` (Not a Number). `binary[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                       | Positive Infinity. `binary[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                       | Negative Infinity. `binary[]` expected for *array*, but `number` given                                |
| 0                              | false                       | BigInt zero `0n`. `binary[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                       | BigInt `42n`. `binary[]` expected for *array*, but `bigint` given                                     |
| true                           | false                       | Boolean. `binary[]` expected for *array*, but `boolean` given                                         |
| true                           | false                       | Boolean object `Boolean(true)`. `binary[]` expected for *array*, but `boolean` given                  |
| null                           | false                       | Null. `binary[]` expected for *array*, but `null` given                                               |
| undefined                      | false                       | Undefined. `binary[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                       | Symbol. `binary[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                       | RegExp. `binary[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                       | RegExp with flags. `binary[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                       | Empty plain object. `binary[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                       | Non-empty plain object. `binary[]` expected for *array*, but `object` given                           |
| Date(2026-01-31T23:13:34.219Z) | false                       | `new Date()` object. `binary[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                       | Invalid Date object. `binary[]` expected for *array*, but `date` given                                |
| Error                          | false                       | `new Error()` object. `binary[]` expected for *array*, but `error` given                              |
| new Map()                      | false                       | Empty map `new Map()`. `binary[]` expected for *array*, but `map` given                               |
| new Set()                      | false                       | Empty set `new Set()`. `binary[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                       | Non-empty map `new Map([['k', 'v']])`. `binary[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                       | Non-empty set `new Set([1, 2, 3])`. `binary[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                       | Object without prototype (Object.create(null)). `binary[]` expected for *array*, but `object` given   |
| `[]`                           | false                       | Empty array. `binary[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                       | Array with `undefined` (but returning `[null]`). `binary[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                       | Sparse array (length 3, empty slots). `binary[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                       | Nested array. `binary[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                       | Mixed array. `binary[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                       | Function `() => {}`. `binary[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                       | Async function `async () => {}`. `binary[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                       | Generator function `function* () { yield 1; }`. `binary[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 23:13:34 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>