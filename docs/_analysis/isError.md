# Behavior of `isError`

## Expected parameters

| Parameter | Data type | Description                                  |
|:----------|:----------|:---------------------------------------------|
| value     | error     | The value to check against the `Error` type. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value`           | Function <br> `isError` | Description                                                                                    |
|:---------------------------------|:------------------------|:-----------------------------------------------------------------------------------------------|
| Error                            | true                    | Error instance                                                                                 |
| TypeError                        | true                    | TypeError instance                                                                             |
| RangeError                       | true                    | RangeError instance                                                                            |
| AggregateError                   | true                    | AggregateError instance (if supported)                                                         |
| `{"name":"Error","message":"x"}` | false                   | Error-like plain object (not Error instance). `error` expected for *value*, but `object` given |
| "This is a string"               | false                   | String (not Error). `error` expected for *value*, but `string` given                           |
| 42                               | false                   | Number (not Error). `error` expected for *value*, but `integer` given                          |
| undefined                        | false                   | Undefined (not Error). `error` expected for *value*, but `undefined` given                     |
| null                             | false                   | Null (not Error). `error` expected for *value*, but `null` given                               |

## Default tests

| Parameter <br> `value`         | Function <br> `isError` | Description                                                                                        |
|:-------------------------------|:------------------------|:---------------------------------------------------------------------------------------------------|
| ""                             | false                   | Empty string. `error` expected for *value*, but `string` given                                     |
| " "                            | false                   | Only space string. `error` expected for *value*, but `string` given                                |
| "\r"                           | false                   | Carriage return. `error` expected for *value*, but `string` given                                  |
| "integer"                      | false                   | Data type returned by `getTypeOf()`. `error` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                   | Two word string. `error` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                   | Non-ASCII (German umlauts). `error` expected for *value*, but `string` given                       |
| "你好"                           | false                   | Non-Latin characters. `error` expected for *value*, but `string` given                             |
| "🙂"                           | false                   | Emoji string. `error` expected for *value*, but `string` given                                     |
| 42                             | false                   | Positive number. `error` expected for *value*, but `integer` given                                 |
| -273                           | false                   | Negative number (0 Kelvin). `error` expected for *value*, but `integer` given                      |
| NaN                            | false                   | `NaN` (Not a Number). `error` expected for *value*, but `nan` given                                |
| Infinity                       | false                   | Positive Infinity. `error` expected for *value*, but `number` given                                |
| -Infinity                      | false                   | Negative Infinity. `error` expected for *value*, but `number` given                                |
| 0                              | false                   | BigInt zero `0n`. `error` expected for *value*, but `bigint` given                                 |
| 42                             | false                   | BigInt `42n`. `error` expected for *value*, but `bigint` given                                     |
| true                           | false                   | Boolean. `error` expected for *value*, but `boolean` given                                         |
| true                           | false                   | Boolean object `Boolean(true)`. `error` expected for *value*, but `boolean` given                  |
| null                           | false                   | Null. `error` expected for *value*, but `null` given                                               |
| undefined                      | false                   | Undefined. `error` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                   | Symbol. `error` expected for *value*, but `symbol` given                                           |
| /./                            | false                   | RegExp. `error` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                   | RegExp with flags. `error` expected for *value*, but `regExp` given                                |
| `{}`                           | false                   | Empty plain object. `error` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                   | Non-empty plain object. `error` expected for *value*, but `object` given                           |
| Date(2026-02-06T12:44:24.069Z) | false                   | `new Date()` object. `error` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                   | Invalid Date object. `error` expected for *value*, but `date` given                                |
| Error                          | true                    | `new Error()` object                                                                               |
| new Map()                      | false                   | Empty map `new Map()`. `error` expected for *value*, but `map` given                               |
| new Set()                      | false                   | Empty set `new Set()`. `error` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                   | Non-empty map `new Map([['k', 'v']])`. `error` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                   | Non-empty set `new Set([1, 2, 3])`. `error` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                   | Object without prototype (Object.create(null)). `error` expected for *value*, but `object` given   |
| `[]`                           | false                   | Empty array. `error` expected for *value*, but `array` given                                       |
| `[null]`                       | false                   | Array with `undefined` (but returning `[null]`). `error` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                   | Sparse array (length 3, empty slots). `error` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                   | Nested array. `error` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                   | Mixed array. `error` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                   | Function `() => {}`. `error` expected for *value*, but `function` given                            |
| async()=>{}                    | false                   | Async function `async () => {}`. `error` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                   | Generator function `function* () { yield 1; }`. `error` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 6 February 2026 at 12:44:24 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>