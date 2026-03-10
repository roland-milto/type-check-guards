# Behavior of `isSymbol`

## Expected parameters

| Parameter | Data type | Description              |
|:----------|:----------|:-------------------------|
| value     | symbol    | The value to be checked. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value`              | Function <br> `isSymbol` | Description                                                                                            |
|:------------------------------------|:-------------------------|:-------------------------------------------------------------------------------------------------------|
| Symbol()                            | true                     | Anonymous Symbol                                                                                       |
| Symbol()                            | true                     | Symbol with description                                                                                |
| Symbol()                            | true                     | Global Symbol (Symbol.for)                                                                             |
| "Symbol()"                          | false                    | String that looks like Symbol. `symbol` expected for *value*, but `string` given                       |
| `{}`                                | false                    | Boxed Symbol object (not typeof 'symbol')                                                              |
| `{"valueOf":"() => Symbol(\"x\")"}` | false                    | Object with valueOf returning symbol (not a symbol). `symbol` expected for *value*, but `object` given |

## Default tests

| Parameter <br> `value`         | Function <br> `isSymbol` | Description                                                                                         |
|:-------------------------------|:-------------------------|:----------------------------------------------------------------------------------------------------|
| ""                             | false                    | Empty string. `symbol` expected for *value*, but `string` given                                     |
| " "                            | false                    | Only space string. `symbol` expected for *value*, but `string` given                                |
| "\r"                           | false                    | Carriage return. `symbol` expected for *value*, but `string` given                                  |
| "integer"                      | false                    | Data type returned by `getTypeOf()`. `symbol` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                    | Two word string. `symbol` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                    | Non-ASCII (German umlauts). `symbol` expected for *value*, but `string` given                       |
| "你好"                           | false                    | Non-Latin characters. `symbol` expected for *value*, but `string` given                             |
| "🙂"                           | false                    | Emoji string. `symbol` expected for *value*, but `string` given                                     |
| 42                             | false                    | Positive number. `symbol` expected for *value*, but `integer` given                                 |
| -273                           | false                    | Negative number (0 Kelvin). `symbol` expected for *value*, but `integer` given                      |
| NaN                            | false                    | `NaN` (Not a Number). `symbol` expected for *value*, but `nan` given                                |
| Infinity                       | false                    | Positive Infinity. `symbol` expected for *value*, but `number` given                                |
| -Infinity                      | false                    | Negative Infinity. `symbol` expected for *value*, but `number` given                                |
| 0                              | false                    | BigInt zero `0n`. `symbol` expected for *value*, but `bigint` given                                 |
| 42                             | false                    | BigInt `42n`. `symbol` expected for *value*, but `bigint` given                                     |
| true                           | false                    | Boolean. `symbol` expected for *value*, but `boolean` given                                         |
| true                           | false                    | Boolean object `Boolean(true)`. `symbol` expected for *value*, but `boolean` given                  |
| null                           | false                    | Null. `symbol` expected for *value*, but `null` given                                               |
| undefined                      | false                    | Undefined. `symbol` expected for *value*, but `undefined` given                                     |
| Symbol()                       | true                     | Symbol                                                                                              |
| /./                            | false                    | RegExp. `symbol` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                    | RegExp with flags. `symbol` expected for *value*, but `regExp` given                                |
| `{}`                           | false                    | Empty plain object. `symbol` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                    | Non-empty plain object. `symbol` expected for *value*, but `object` given                           |
| Date(2026-01-30T14:25:33.512Z) | false                    | `new Date()` object. `symbol` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                    | Invalid Date object. `symbol` expected for *value*, but `date` given                                |
| Error                          | false                    | `new Error()` object. `symbol` expected for *value*, but `error` given                              |
| new Map()                      | false                    | Empty map `new Map()`. `symbol` expected for *value*, but `map` given                               |
| new Set()                      | false                    | Empty set `new Set()`. `symbol` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                    | Non-empty map `new Map([['k', 'v']])`. `symbol` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                    | Non-empty set `new Set([1, 2, 3])`. `symbol` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                    | Object without prototype (Object.create(null)). `symbol` expected for *value*, but `object` given   |
| `[]`                           | false                    | Empty array. `symbol` expected for *value*, but `array` given                                       |
| `[null]`                       | false                    | Array with `undefined` (but returning `[null]`). `symbol` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                    | Sparse array (length 3, empty slots). `symbol` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                    | Nested array. `symbol` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                    | Mixed array. `symbol` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                    | Function `() => {}`. `symbol` expected for *value*, but `function` given                            |
| async()=>{}                    | false                    | Async function `async () => {}`. `symbol` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                    | Generator function `function* () { yield 1; }`. `symbol` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 14:25:33 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>