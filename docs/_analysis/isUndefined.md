# Behavior of `isUndefined`

## Expected parameters

| Parameter | Data type | Description              |
|:----------|:----------|:-------------------------|
| value     | undefined | The value to be checked. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value` | Function <br> `isUndefined` | Description                                                                          |
|:-----------------------|:----------------------------|:-------------------------------------------------------------------------------------|
| undefined              | true                        | Undefined literal                                                                    |
| undefined              | true                        | void 0 (undefined)                                                                   |
| null                   | false                       | Null (not undefined). `undefined` expected for *value*, but `null` given             |
| 0                      | false                       | Zero (not undefined). `undefined` expected for *value*, but `integer` given          |
| ""                     | false                       | Empty string (not undefined). `undefined` expected for *value*, but `string` given   |
| false                  | false                       | Boolean false (not undefined). `undefined` expected for *value*, but `boolean` given |
| `{}`                   | false                       | Object (not undefined). `undefined` expected for *value*, but `object` given         |
| `[]`                   | false                       | Array (not undefined). `undefined` expected for *value*, but `array` given           |

## Default tests

| Parameter <br> `value`         | Function <br> `isUndefined` | Description                                                                                            |
|:-------------------------------|:----------------------------|:-------------------------------------------------------------------------------------------------------|
| ""                             | false                       | Empty string. `undefined` expected for *value*, but `string` given                                     |
| " "                            | false                       | Only space string. `undefined` expected for *value*, but `string` given                                |
| "\r"                           | false                       | Carriage return. `undefined` expected for *value*, but `string` given                                  |
| "integer"                      | false                       | Data type returned by `getTypeOf()`. `undefined` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                       | Two word string. `undefined` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                       | Non-ASCII (German umlauts). `undefined` expected for *value*, but `string` given                       |
| "你好"                           | false                       | Non-Latin characters. `undefined` expected for *value*, but `string` given                             |
| "🙂"                           | false                       | Emoji string. `undefined` expected for *value*, but `string` given                                     |
| 42                             | false                       | Positive number. `undefined` expected for *value*, but `integer` given                                 |
| -273                           | false                       | Negative number (0 Kelvin). `undefined` expected for *value*, but `integer` given                      |
| NaN                            | false                       | `NaN` (Not a Number). `undefined` expected for *value*, but `nan` given                                |
| Infinity                       | false                       | Positive Infinity. `undefined` expected for *value*, but `number` given                                |
| -Infinity                      | false                       | Negative Infinity. `undefined` expected for *value*, but `number` given                                |
| 0                              | false                       | BigInt zero `0n`. `undefined` expected for *value*, but `bigint` given                                 |
| 42                             | false                       | BigInt `42n`. `undefined` expected for *value*, but `bigint` given                                     |
| true                           | false                       | Boolean. `undefined` expected for *value*, but `boolean` given                                         |
| true                           | false                       | Boolean object `Boolean(true)`. `undefined` expected for *value*, but `boolean` given                  |
| null                           | false                       | Null. `undefined` expected for *value*, but `null` given                                               |
| undefined                      | true                        | Undefined                                                                                              |
| Symbol()                       | false                       | Symbol. `undefined` expected for *value*, but `symbol` given                                           |
| /./                            | false                       | RegExp. `undefined` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                       | RegExp with flags. `undefined` expected for *value*, but `regExp` given                                |
| `{}`                           | false                       | Empty plain object. `undefined` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                       | Non-empty plain object. `undefined` expected for *value*, but `object` given                           |
| Date(2026-01-30T14:01:32.738Z) | false                       | `new Date()` object. `undefined` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                       | Invalid Date object. `undefined` expected for *value*, but `date` given                                |
| Error                          | false                       | `new Error()` object. `undefined` expected for *value*, but `error` given                              |
| new Map()                      | false                       | Empty map `new Map()`. `undefined` expected for *value*, but `map` given                               |
| new Set()                      | false                       | Empty set `new Set()`. `undefined` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                       | Non-empty map `new Map([['k', 'v']])`. `undefined` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                       | Non-empty set `new Set([1, 2, 3])`. `undefined` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                       | Object without prototype (Object.create(null)). `undefined` expected for *value*, but `object` given   |
| `[]`                           | false                       | Empty array. `undefined` expected for *value*, but `array` given                                       |
| `[null]`                       | false                       | Array with `undefined` (but returning `[null]`). `undefined` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                       | Sparse array (length 3, empty slots). `undefined` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                       | Nested array. `undefined` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                       | Mixed array. `undefined` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                       | Function `() => {}`. `undefined` expected for *value*, but `function` given                            |
| async()=>{}                    | false                       | Async function `async () => {}`. `undefined` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                       | Generator function `function* () { yield 1; }`. `undefined` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 14:01:32 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>