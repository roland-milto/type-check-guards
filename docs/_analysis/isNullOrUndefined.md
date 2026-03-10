# Behavior of `isNullOrUndefined`

## Expected parameters

| Parameter | Data type | Description                                        |
|:----------|:----------|:---------------------------------------------------|
| value     | unknown   | The value to be checked for `null` or `undefined`. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value` | Function <br> `isNullOrUndefined` | Description                                                                             |
|:-----------------------|:----------------------------------|:----------------------------------------------------------------------------------------|
| null                   | true                              | Null. `unknown` expected for *value*, but `null` given                                  |
| undefined              | true                              | Undefined. `unknown` expected for *value*, but `undefined` given                        |
| undefined              | true                              | void 0 (undefined). `unknown` expected for *value*, but `undefined` given               |
| 0                      | false                             | Zero (not null/undefined). `unknown` expected for *value*, but `integer` given          |
| ""                     | false                             | Empty string (not null/undefined). `unknown` expected for *value*, but `string` given   |
| false                  | false                             | Boolean false (not null/undefined). `unknown` expected for *value*, but `boolean` given |
| `{}`                   | false                             | Object (not null/undefined). `unknown` expected for *value*, but `object` given         |
| `[]`                   | false                             | Array (not null/undefined). `unknown` expected for *value*, but `array` given           |

## Default tests

| Parameter <br> `value`         | Function <br> `isNullOrUndefined` | Description                                                                                          |
|:-------------------------------|:----------------------------------|:-----------------------------------------------------------------------------------------------------|
| ""                             | false                             | Empty string. `unknown` expected for *value*, but `string` given                                     |
| " "                            | false                             | Only space string. `unknown` expected for *value*, but `string` given                                |
| "\r"                           | false                             | Carriage return. `unknown` expected for *value*, but `string` given                                  |
| "integer"                      | false                             | Data type returned by `getTypeOf()`. `unknown` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                             | Two word string. `unknown` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                             | Non-ASCII (German umlauts). `unknown` expected for *value*, but `string` given                       |
| "你好"                           | false                             | Non-Latin characters. `unknown` expected for *value*, but `string` given                             |
| "🙂"                           | false                             | Emoji string. `unknown` expected for *value*, but `string` given                                     |
| 42                             | false                             | Positive number. `unknown` expected for *value*, but `integer` given                                 |
| -273                           | false                             | Negative number (0 Kelvin). `unknown` expected for *value*, but `integer` given                      |
| NaN                            | false                             | `NaN` (Not a Number). `unknown` expected for *value*, but `nan` given                                |
| Infinity                       | false                             | Positive Infinity. `unknown` expected for *value*, but `number` given                                |
| -Infinity                      | false                             | Negative Infinity. `unknown` expected for *value*, but `number` given                                |
| 0                              | false                             | BigInt zero `0n`. `unknown` expected for *value*, but `bigint` given                                 |
| 42                             | false                             | BigInt `42n`. `unknown` expected for *value*, but `bigint` given                                     |
| true                           | false                             | Boolean. `unknown` expected for *value*, but `boolean` given                                         |
| true                           | false                             | Boolean object `Boolean(true)`. `unknown` expected for *value*, but `boolean` given                  |
| null                           | true                              | Null. `unknown` expected for *value*, but `null` given                                               |
| undefined                      | true                              | Undefined. `unknown` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                             | Symbol. `unknown` expected for *value*, but `symbol` given                                           |
| /./                            | false                             | RegExp. `unknown` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                             | RegExp with flags. `unknown` expected for *value*, but `regExp` given                                |
| `{}`                           | false                             | Empty plain object. `unknown` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                             | Non-empty plain object. `unknown` expected for *value*, but `object` given                           |
| Date(2026-01-31T00:32:41.716Z) | false                             | `new Date()` object. `unknown` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                             | Invalid Date object. `unknown` expected for *value*, but `date` given                                |
| Error                          | false                             | `new Error()` object. `unknown` expected for *value*, but `error` given                              |
| new Map()                      | false                             | Empty map `new Map()`. `unknown` expected for *value*, but `map` given                               |
| new Set()                      | false                             | Empty set `new Set()`. `unknown` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                             | Non-empty map `new Map([['k', 'v']])`. `unknown` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                             | Non-empty set `new Set([1, 2, 3])`. `unknown` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                             | Object without prototype (Object.create(null)). `unknown` expected for *value*, but `object` given   |
| `[]`                           | false                             | Empty array. `unknown` expected for *value*, but `array` given                                       |
| `[null]`                       | false                             | Array with `undefined` (but returning `[null]`). `unknown` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                             | Sparse array (length 3, empty slots). `unknown` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                             | Nested array. `unknown` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                             | Mixed array. `unknown` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                             | Function `() => {}`. `unknown` expected for *value*, but `function` given                            |
| async()=>{}                    | false                             | Async function `async () => {}`. `unknown` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                             | Generator function `function* () { yield 1; }`. `unknown` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 00:32:41 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>