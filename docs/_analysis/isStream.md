# Behavior of `isStream`

## Expected parameters

| Parameter | Data type | Description              |
|:----------|:----------|:-------------------------|
| value     | stream    | The value to be checked. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value`                                                                                                                                                                                                                                                                                                                                                                                                   | Function <br> `isStream` | Description                                                                                       |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:--------------------------------------------------------------------------------------------------|
| `{"_events":{"prefinish":"function prefinish() {\r\n  if (this._final !== final) {\r\n    final.call(this);\r\n  }\r\n}"},"_readableState":{"highWaterMark":16384,"buffer":[],"bufferIndex":0,"length":0,"pipes":[],"awaitDrainWriters":null},"_writableState":{"highWaterMark":16384,"length":0,"corked":0,"onwrite":"[Function]","writelen":0,"bufferedIndex":0,"pendingcb":0},"allowHalfOpen":true,"_eventsCount":1}` | true                     | Node.js PassThrough stream. `stream` expected for *value*, but `object` given                     |
| `{"_events":{},"_readableState":{"highWaterMark":16384,"buffer":[],"bufferIndex":0,"length":0,"pipes":[],"awaitDrainWriters":null},"_read":"read() {}"}`                                                                                                                                                                                                                                                                 | true                     | Node.js Readable stream. `stream` expected for *value*, but `object` given                        |
| `{"_events":{},"_writableState":{"highWaterMark":16384,"length":0,"corked":0,"onwrite":"[Function]","writelen":0,"bufferedIndex":0,"pendingcb":0},"_write":"write(_c, _e, cb) { cb(); }"}`                                                                                                                                                                                                                               | true                     | Node.js Writable stream. `stream` expected for *value*, but `object` given                        |
| `{"pipe":"pipe() {}","on":"on() {}"}`                                                                                                                                                                                                                                                                                                                                                                                    | true                     | Stream-like object (has pipe and on functions). `stream` expected for *value*, but `object` given |
| `{"pipe":"pipe() {}","on":"nope"}`                                                                                                                                                                                                                                                                                                                                                                                       | false                    | Has pipe but on is not a function (not stream). `stream` expected for *value*, but `object` given |
| `{"on":"on() {}","pipe":"nope"}`                                                                                                                                                                                                                                                                                                                                                                                         | false                    | Has on but pipe is not a function (not stream). `stream` expected for *value*, but `object` given |
| `{}`                                                                                                                                                                                                                                                                                                                                                                                                                     | false                    | Plain object (not stream). `stream` expected for *value*, but `object` given                      |
| "notAStream"                                                                                                                                                                                                                                                                                                                                                                                                             | false                    | String (not stream). `stream` expected for *value*, but `string` given                            |
| null                                                                                                                                                                                                                                                                                                                                                                                                                     | false                    | Null (not stream). `stream` expected for *value*, but `null` given                                |

## Default tests

| Parameter <br> `value`         | Function <br> `isStream` | Description                                                                                         |
|:-------------------------------|:-------------------------|:----------------------------------------------------------------------------------------------------|
| ""                             | false                    | Empty string. `stream` expected for *value*, but `string` given                                     |
| " "                            | false                    | Only space string. `stream` expected for *value*, but `string` given                                |
| "\r"                           | false                    | Carriage return. `stream` expected for *value*, but `string` given                                  |
| "integer"                      | false                    | Data type returned by `getTypeOf()`. `stream` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                    | Two word string. `stream` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                    | Non-ASCII (German umlauts). `stream` expected for *value*, but `string` given                       |
| "你好"                           | false                    | Non-Latin characters. `stream` expected for *value*, but `string` given                             |
| "🙂"                           | false                    | Emoji string. `stream` expected for *value*, but `string` given                                     |
| 42                             | false                    | Positive number. `stream` expected for *value*, but `integer` given                                 |
| -273                           | false                    | Negative number (0 Kelvin). `stream` expected for *value*, but `integer` given                      |
| NaN                            | false                    | `NaN` (Not a Number). `stream` expected for *value*, but `nan` given                                |
| Infinity                       | false                    | Positive Infinity. `stream` expected for *value*, but `number` given                                |
| -Infinity                      | false                    | Negative Infinity. `stream` expected for *value*, but `number` given                                |
| 0                              | false                    | BigInt zero `0n`. `stream` expected for *value*, but `bigint` given                                 |
| 42                             | false                    | BigInt `42n`. `stream` expected for *value*, but `bigint` given                                     |
| true                           | false                    | Boolean. `stream` expected for *value*, but `boolean` given                                         |
| true                           | false                    | Boolean object `Boolean(true)`. `stream` expected for *value*, but `boolean` given                  |
| null                           | false                    | Null. `stream` expected for *value*, but `null` given                                               |
| undefined                      | false                    | Undefined. `stream` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                    | Symbol. `stream` expected for *value*, but `symbol` given                                           |
| /./                            | false                    | RegExp. `stream` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                    | RegExp with flags. `stream` expected for *value*, but `regExp` given                                |
| `{}`                           | false                    | Empty plain object. `stream` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                    | Non-empty plain object. `stream` expected for *value*, but `object` given                           |
| Date(2026-01-30T23:41:39.287Z) | false                    | `new Date()` object. `stream` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                    | Invalid Date object. `stream` expected for *value*, but `date` given                                |
| Error                          | false                    | `new Error()` object. `stream` expected for *value*, but `error` given                              |
| new Map()                      | false                    | Empty map `new Map()`. `stream` expected for *value*, but `map` given                               |
| new Set()                      | false                    | Empty set `new Set()`. `stream` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                    | Non-empty map `new Map([['k', 'v']])`. `stream` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                    | Non-empty set `new Set([1, 2, 3])`. `stream` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                    | Object without prototype (Object.create(null)). `stream` expected for *value*, but `object` given   |
| `[]`                           | false                    | Empty array. `stream` expected for *value*, but `array` given                                       |
| `[null]`                       | false                    | Array with `undefined` (but returning `[null]`). `stream` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                    | Sparse array (length 3, empty slots). `stream` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                    | Nested array. `stream` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                    | Mixed array. `stream` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                    | Function `() => {}`. `stream` expected for *value*, but `function` given                            |
| async()=>{}                    | false                    | Async function `async () => {}`. `stream` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                    | Generator function `function* () { yield 1; }`. `stream` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 23:41:39 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>