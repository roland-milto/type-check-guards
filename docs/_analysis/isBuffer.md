# Behavior of `isBuffer`

## Expected parameters

| Parameter | Data type | Description             |
|:----------|:----------|:------------------------|
| value     | buffer    | The value to be tested. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value`                           | Function <br> `isBuffer` | Description                                                                           |
|:-------------------------------------------------|:-------------------------|:--------------------------------------------------------------------------------------|
| `{"type":"Buffer","data":[104,101,108,108,111]}` | true                     | Buffer from string (utf8). `buffer` expected for *value*, but `uint8Array` given      |
| `{"type":"Buffer","data":[0,1,2,255]}`           | true                     | Buffer from byte array. `buffer` expected for *value*, but `uint8Array` given         |
| `{"type":"Buffer","data":[]}`                    | true                     | Empty Buffer (still a Buffer). `buffer` expected for *value*, but `uint8Array` given  |
| `{"type":"Buffer","data":[0,0,0,0]}`             | true                     | Allocated Buffer with length 4. `buffer` expected for *value*, but `uint8Array` given |
| `{"0":1,"1":2,"2":3}`                            | false                    | Uint8Array (not a Buffer). `buffer` expected for *value*, but `uint8Array` given      |
| "hello"                                          | false                    | String (not a Buffer). `buffer` expected for *value*, but `string` given              |
| `[1,2,3]`                                        | false                    | Array (not a Buffer). `buffer` expected for *value*, but `array` given                |
| `{}`                                             | false                    | Object (not a Buffer). `buffer` expected for *value*, but `object` given              |

## Default tests

| Parameter <br> `value`         | Function <br> `isBuffer` | Description                                                                                         |
|:-------------------------------|:-------------------------|:----------------------------------------------------------------------------------------------------|
| ""                             | false                    | Empty string. `buffer` expected for *value*, but `string` given                                     |
| " "                            | false                    | Only space string. `buffer` expected for *value*, but `string` given                                |
| "\r"                           | false                    | Carriage return. `buffer` expected for *value*, but `string` given                                  |
| "integer"                      | false                    | Data type returned by `getTypeOf()`. `buffer` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                    | Two word string. `buffer` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                    | Non-ASCII (German umlauts). `buffer` expected for *value*, but `string` given                       |
| "你好"                           | false                    | Non-Latin characters. `buffer` expected for *value*, but `string` given                             |
| "🙂"                           | false                    | Emoji string. `buffer` expected for *value*, but `string` given                                     |
| 42                             | false                    | Positive number. `buffer` expected for *value*, but `integer` given                                 |
| -273                           | false                    | Negative number (0 Kelvin). `buffer` expected for *value*, but `integer` given                      |
| NaN                            | false                    | `NaN` (Not a Number). `buffer` expected for *value*, but `nan` given                                |
| Infinity                       | false                    | Positive Infinity. `buffer` expected for *value*, but `number` given                                |
| -Infinity                      | false                    | Negative Infinity. `buffer` expected for *value*, but `number` given                                |
| 0                              | false                    | BigInt zero `0n`. `buffer` expected for *value*, but `bigint` given                                 |
| 42                             | false                    | BigInt `42n`. `buffer` expected for *value*, but `bigint` given                                     |
| true                           | false                    | Boolean. `buffer` expected for *value*, but `boolean` given                                         |
| true                           | false                    | Boolean object `Boolean(true)`. `buffer` expected for *value*, but `boolean` given                  |
| null                           | false                    | Null. `buffer` expected for *value*, but `null` given                                               |
| undefined                      | false                    | Undefined. `buffer` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                    | Symbol. `buffer` expected for *value*, but `symbol` given                                           |
| /./                            | false                    | RegExp. `buffer` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                    | RegExp with flags. `buffer` expected for *value*, but `regExp` given                                |
| `{}`                           | false                    | Empty plain object. `buffer` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                    | Non-empty plain object. `buffer` expected for *value*, but `object` given                           |
| Date(2026-01-31T16:30:28.173Z) | false                    | `new Date()` object. `buffer` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                    | Invalid Date object. `buffer` expected for *value*, but `date` given                                |
| Error                          | false                    | `new Error()` object. `buffer` expected for *value*, but `error` given                              |
| new Map()                      | false                    | Empty map `new Map()`. `buffer` expected for *value*, but `map` given                               |
| new Set()                      | false                    | Empty set `new Set()`. `buffer` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                    | Non-empty map `new Map([['k', 'v']])`. `buffer` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                    | Non-empty set `new Set([1, 2, 3])`. `buffer` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                    | Object without prototype (Object.create(null)). `buffer` expected for *value*, but `object` given   |
| `[]`                           | false                    | Empty array. `buffer` expected for *value*, but `array` given                                       |
| `[null]`                       | false                    | Array with `undefined` (but returning `[null]`). `buffer` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                    | Sparse array (length 3, empty slots). `buffer` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                    | Nested array. `buffer` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                    | Mixed array. `buffer` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                    | Function `() => {}`. `buffer` expected for *value*, but `function` given                            |
| async()=>{}                    | false                    | Async function `async () => {}`. `buffer` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                    | Generator function `function* () { yield 1; }`. `buffer` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 16:30:28 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>