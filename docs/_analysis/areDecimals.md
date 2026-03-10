# Behavior of `areDecimals`

## Expected parameters

| Parameter | Data type | Description              |
|:----------|:----------|:-------------------------|
| array     | decimal[] | The array to be checked. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array`         | Function <br> `areDecimals` | Description                                                                                   |
|:-------------------------------|:----------------------------|:----------------------------------------------------------------------------------------------|
| `["1.0"]`                      | true                        | Single decimal string                                                                         |
| `["1.0","2.5","3.14"]`         | true                        | Multiple decimal strings                                                                      |
| `["0","-42","+42",".5","42."]` | true                        | Various valid decimal forms. `decimal` expected for *array[0]*, but `binary` given            |
| `[]`                           | false                       | Empty array (not filled)                                                                      |
| `["1.0","abc","3.14"]`         | false                       | Contains non-decimal string. `decimal` expected for *array[1]*, but `string` given            |
| `["1.0"," 2.5","3.14"]`        | false                       | Contains leading whitespace (invalid). `decimal` expected for *array[1]*, but `string` given  |
| `["1.0","2.5 ","3.14"]`        | false                       | Contains trailing whitespace (invalid). `decimal` expected for *array[1]*, but `string` given |
| `["1.0",2.5,"3.14"]`           | false                       | Contains number (non-string, invalid). `decimal` expected for *array[1]*, but `float` given   |
| `["1.0",null,"3.14"]`          | false                       | Contains null. `decimal` expected for *array[1]*, but `null` given                            |
| `["1.0",null,"3.14"]`          | false                       | Contains undefined. `decimal` expected for *array[1]*, but `undefined` given                  |
| `["1.0","1e3","3.14"]`         | false                       | Contains scientific notation (invalid). `decimal` expected for *array[1]*, but `string` given |

## Default tests

| Parameter <br> `array`         | Function <br> `areDecimals` | Description                                                                                            |
|:-------------------------------|:----------------------------|:-------------------------------------------------------------------------------------------------------|
| ""                             | false                       | Empty string. `decimal[]` expected for *array*, but `string` given                                     |
| " "                            | false                       | Only space string. `decimal[]` expected for *array*, but `string` given                                |
| "\r"                           | false                       | Carriage return. `decimal[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                       | Data type returned by `getTypeOf()`. `decimal[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                       | Two word string. `decimal[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                       | Non-ASCII (German umlauts). `decimal[]` expected for *array*, but `string` given                       |
| "你好"                           | false                       | Non-Latin characters. `decimal[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                       | Emoji string. `decimal[]` expected for *array*, but `string` given                                     |
| 42                             | false                       | Positive number. `decimal[]` expected for *array*, but `integer` given                                 |
| -273                           | false                       | Negative number (0 Kelvin). `decimal[]` expected for *array*, but `integer` given                      |
| NaN                            | false                       | `NaN` (Not a Number). `decimal[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                       | Positive Infinity. `decimal[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                       | Negative Infinity. `decimal[]` expected for *array*, but `number` given                                |
| 0                              | false                       | BigInt zero `0n`. `decimal[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                       | BigInt `42n`. `decimal[]` expected for *array*, but `bigint` given                                     |
| true                           | false                       | Boolean. `decimal[]` expected for *array*, but `boolean` given                                         |
| true                           | false                       | Boolean object `Boolean(true)`. `decimal[]` expected for *array*, but `boolean` given                  |
| null                           | false                       | Null. `decimal[]` expected for *array*, but `null` given                                               |
| undefined                      | false                       | Undefined. `decimal[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                       | Symbol. `decimal[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                       | RegExp. `decimal[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                       | RegExp with flags. `decimal[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                       | Empty plain object. `decimal[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                       | Non-empty plain object. `decimal[]` expected for *array*, but `object` given                           |
| Date(2026-01-31T15:55:58.454Z) | false                       | `new Date()` object. `decimal[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                       | Invalid Date object. `decimal[]` expected for *array*, but `date` given                                |
| Error                          | false                       | `new Error()` object. `decimal[]` expected for *array*, but `error` given                              |
| new Map()                      | false                       | Empty map `new Map()`. `decimal[]` expected for *array*, but `map` given                               |
| new Set()                      | false                       | Empty set `new Set()`. `decimal[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                       | Non-empty map `new Map([['k', 'v']])`. `decimal[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                       | Non-empty set `new Set([1, 2, 3])`. `decimal[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                       | Object without prototype (Object.create(null)). `decimal[]` expected for *array*, but `object` given   |
| `[]`                           | false                       | Empty array. `decimal[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                       | Array with `undefined` (but returning `[null]`). `decimal[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                       | Sparse array (length 3, empty slots). `decimal[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                       | Nested array. `decimal[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                       | Mixed array. `decimal[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                       | Function `() => {}`. `decimal[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                       | Async function `async () => {}`. `decimal[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                       | Generator function `function* () { yield 1; }`. `decimal[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 15:55:58 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>