# Behavior of `isString`

## Expected parameters

| Parameter | Data type | Description                             |
|:----------|:----------|:----------------------------------------|
| value     | string    | The value to be tested for string type. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value`       | Function <br> `isString` | Description                                                                                                            |
|:-----------------------------|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------|
| "   "                        | true                     | Multiple spaces                                                                                                        |
| " "                          | true                     | Non-breaking space (NBSP)                                                                                              |
| "​"                          | true                     | Zero-width space (ZWSP)                                                                                                |
| "1337"                       | true                     | Number as string. `string` expected for *value*, but `decimal` given                                                   |
| "äöüß"                       | true                     | Umlauts                                                                                                                |
| "你好"                         | true                     | Non-Latin characters                                                                                                   |
| "🙂"                         | true                     | Emoji                                                                                                                  |
| "424242"                     | true                     | Repeat the truth. `string` expected for *value*, but `decimal` given                                                   |
| "Roland"                     | true                     | String object `String('Roland')`                                                                                       |
| `"Roland"`                   | false                    | `Object('Roland')` wrapper                                                                                             |
| `{"toString":"() => 'DEV'"}` | false                    | Object with toString() returning string `{ toString: () => 'DEV' }`. `string` expected for *value*, but `object` given |

## Default tests

| Parameter <br> `value`         | Function <br> `isString` | Description                                                                                         |
|:-------------------------------|:-------------------------|:----------------------------------------------------------------------------------------------------|
| ""                             | true                     | Empty string                                                                                        |
| " "                            | true                     | Only space string                                                                                   |
| "\r"                           | true                     | Carriage return                                                                                     |
| "integer"                      | true                     | Data type returned by `getTypeOf()`                                                                 |
| "Roland Milto"                 | true                     | Two word string                                                                                     |
| "äöüß"                         | true                     | Non-ASCII (German umlauts)                                                                          |
| "你好"                           | true                     | Non-Latin characters                                                                                |
| "🙂"                           | true                     | Emoji string                                                                                        |
| 42                             | false                    | Positive number. `string` expected for *value*, but `integer` given                                 |
| -273                           | false                    | Negative number (0 Kelvin). `string` expected for *value*, but `integer` given                      |
| NaN                            | false                    | `NaN` (Not a Number). `string` expected for *value*, but `nan` given                                |
| Infinity                       | false                    | Positive Infinity. `string` expected for *value*, but `number` given                                |
| -Infinity                      | false                    | Negative Infinity. `string` expected for *value*, but `number` given                                |
| 0                              | false                    | BigInt zero `0n`. `string` expected for *value*, but `bigint` given                                 |
| 42                             | false                    | BigInt `42n`. `string` expected for *value*, but `bigint` given                                     |
| true                           | false                    | Boolean. `string` expected for *value*, but `boolean` given                                         |
| true                           | false                    | Boolean object `Boolean(true)`. `string` expected for *value*, but `boolean` given                  |
| null                           | false                    | Null. `string` expected for *value*, but `null` given                                               |
| undefined                      | false                    | Undefined. `string` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                    | Symbol. `string` expected for *value*, but `symbol` given                                           |
| /./                            | false                    | RegExp. `string` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                    | RegExp with flags. `string` expected for *value*, but `regExp` given                                |
| `{}`                           | false                    | Empty plain object. `string` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                    | Non-empty plain object. `string` expected for *value*, but `object` given                           |
| Date(2026-01-30T13:12:59.106Z) | false                    | `new Date()` object. `string` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                    | Invalid Date object. `string` expected for *value*, but `date` given                                |
| Error                          | false                    | `new Error()` object. `string` expected for *value*, but `error` given                              |
| new Map()                      | false                    | Empty map `new Map()`. `string` expected for *value*, but `map` given                               |
| new Set()                      | false                    | Empty set `new Set()`. `string` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                    | Non-empty map `new Map([['k', 'v']])`. `string` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                    | Non-empty set `new Set([1, 2, 3])`. `string` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                    | Object without prototype (Object.create(null)). `string` expected for *value*, but `object` given   |
| `[]`                           | false                    | Empty array. `string` expected for *value*, but `array` given                                       |
| `[null]`                       | false                    | Array with `undefined` (but returning `[null]`). `string` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                    | Sparse array (length 3, empty slots). `string` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                    | Nested array. `string` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                    | Mixed array. `string` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                    | Function `() => {}`. `string` expected for *value*, but `function` given                            |
| async()=>{}                    | false                    | Async function `async () => {}`. `string` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                    | Generator function `function* () { yield 1; }`. `string` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 13:12:59 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>