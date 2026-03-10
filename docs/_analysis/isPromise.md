# Behavior of `isPromise`

## Expected parameters

| Parameter | Data type | Description              |
|:----------|:----------|:-------------------------|
| value     | promise   | The value to be checked. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value` | Function <br> `isPromise` | Description                                                                                      |
|:-----------------------|:--------------------------|:-------------------------------------------------------------------------------------------------|
| `{}`                   | true                      | Promise.resolve(...)                                                                             |
| `{}`                   | true                      | Promise from rejected (caught)                                                                   |
| `{}`                   | true                      | New Promise(...)                                                                                 |
| `{"then":"then() {}"}` | false                     | Thenable object (not a Promise instance). `promise` expected for *value*, but `object` given     |
| async()=>1             | false                     | Async function (not a Promise). `promise` expected for *value*, but `function` given             |
| ()=>Promise.resolve(1) | false                     | Function returning Promise (not a Promise). `promise` expected for *value*, but `function` given |
| 123                    | false                     | Number (not a Promise). `promise` expected for *value*, but `integer` given                      |
| null                   | false                     | Null (not a Promise). `promise` expected for *value*, but `null` given                           |

## Default tests

| Parameter <br> `value`         | Function <br> `isPromise` | Description                                                                                          |
|:-------------------------------|:--------------------------|:-----------------------------------------------------------------------------------------------------|
| ""                             | false                     | Empty string. `promise` expected for *value*, but `string` given                                     |
| " "                            | false                     | Only space string. `promise` expected for *value*, but `string` given                                |
| "\r"                           | false                     | Carriage return. `promise` expected for *value*, but `string` given                                  |
| "integer"                      | false                     | Data type returned by `getTypeOf()`. `promise` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                     | Two word string. `promise` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                     | Non-ASCII (German umlauts). `promise` expected for *value*, but `string` given                       |
| "你好"                           | false                     | Non-Latin characters. `promise` expected for *value*, but `string` given                             |
| "🙂"                           | false                     | Emoji string. `promise` expected for *value*, but `string` given                                     |
| 42                             | false                     | Positive number. `promise` expected for *value*, but `integer` given                                 |
| -273                           | false                     | Negative number (0 Kelvin). `promise` expected for *value*, but `integer` given                      |
| NaN                            | false                     | `NaN` (Not a Number). `promise` expected for *value*, but `nan` given                                |
| Infinity                       | false                     | Positive Infinity. `promise` expected for *value*, but `number` given                                |
| -Infinity                      | false                     | Negative Infinity. `promise` expected for *value*, but `number` given                                |
| 0                              | false                     | BigInt zero `0n`. `promise` expected for *value*, but `bigint` given                                 |
| 42                             | false                     | BigInt `42n`. `promise` expected for *value*, but `bigint` given                                     |
| true                           | false                     | Boolean. `promise` expected for *value*, but `boolean` given                                         |
| true                           | false                     | Boolean object `Boolean(true)`. `promise` expected for *value*, but `boolean` given                  |
| null                           | false                     | Null. `promise` expected for *value*, but `null` given                                               |
| undefined                      | false                     | Undefined. `promise` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                     | Symbol. `promise` expected for *value*, but `symbol` given                                           |
| /./                            | false                     | RegExp. `promise` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                     | RegExp with flags. `promise` expected for *value*, but `regExp` given                                |
| `{}`                           | false                     | Empty plain object. `promise` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                     | Non-empty plain object. `promise` expected for *value*, but `object` given                           |
| Date(2026-01-30T23:51:49.877Z) | false                     | `new Date()` object. `promise` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                     | Invalid Date object. `promise` expected for *value*, but `date` given                                |
| Error                          | false                     | `new Error()` object. `promise` expected for *value*, but `error` given                              |
| new Map()                      | false                     | Empty map `new Map()`. `promise` expected for *value*, but `map` given                               |
| new Set()                      | false                     | Empty set `new Set()`. `promise` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                     | Non-empty map `new Map([['k', 'v']])`. `promise` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                     | Non-empty set `new Set([1, 2, 3])`. `promise` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                     | Object without prototype (Object.create(null)). `promise` expected for *value*, but `object` given   |
| `[]`                           | false                     | Empty array. `promise` expected for *value*, but `array` given                                       |
| `[null]`                       | false                     | Array with `undefined` (but returning `[null]`). `promise` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                     | Sparse array (length 3, empty slots). `promise` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                     | Nested array. `promise` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                     | Mixed array. `promise` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                     | Function `() => {}`. `promise` expected for *value*, but `function` given                            |
| async()=>{}                    | false                     | Async function `async () => {}`. `promise` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                     | Generator function `function* () { yield 1; }`. `promise` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 23:51:49 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>