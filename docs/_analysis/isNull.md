# Behavior of `isNull`

## Expected parameters

| Parameter | Data type | Description                    |
|:----------|:----------|:-------------------------------|
| value     | null      | The value to check for `null`. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value` | Function <br> `isNull` | Description                                                                |
|:-----------------------|:-----------------------|:---------------------------------------------------------------------------|
| null                   | true                   | Null literal (strict)                                                      |
| undefined              | false                  | Undefined (not null). `null` expected for *value*, but `undefined` given   |
| 0                      | false                  | Zero (not null). `null` expected for *value*, but `integer` given          |
| ""                     | false                  | Empty string (not null). `null` expected for *value*, but `string` given   |
| false                  | false                  | Boolean false (not null). `null` expected for *value*, but `boolean` given |
| `{}`                   | false                  | Object (not null). `null` expected for *value*, but `object` given         |
| `[]`                   | false                  | Array (not null). `null` expected for *value*, but `array` given           |

## Default tests

| Parameter <br> `value`         | Function <br> `isNull` | Description                                                                                       |
|:-------------------------------|:-----------------------|:--------------------------------------------------------------------------------------------------|
| ""                             | false                  | Empty string. `null` expected for *value*, but `string` given                                     |
| " "                            | false                  | Only space string. `null` expected for *value*, but `string` given                                |
| "\r"                           | false                  | Carriage return. `null` expected for *value*, but `string` given                                  |
| "integer"                      | false                  | Data type returned by `getTypeOf()`. `null` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                  | Two word string. `null` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                  | Non-ASCII (German umlauts). `null` expected for *value*, but `string` given                       |
| "你好"                           | false                  | Non-Latin characters. `null` expected for *value*, but `string` given                             |
| "🙂"                           | false                  | Emoji string. `null` expected for *value*, but `string` given                                     |
| 42                             | false                  | Positive number. `null` expected for *value*, but `integer` given                                 |
| -273                           | false                  | Negative number (0 Kelvin). `null` expected for *value*, but `integer` given                      |
| NaN                            | false                  | `NaN` (Not a Number). `null` expected for *value*, but `nan` given                                |
| Infinity                       | false                  | Positive Infinity. `null` expected for *value*, but `number` given                                |
| -Infinity                      | false                  | Negative Infinity. `null` expected for *value*, but `number` given                                |
| 0                              | false                  | BigInt zero `0n`. `null` expected for *value*, but `bigint` given                                 |
| 42                             | false                  | BigInt `42n`. `null` expected for *value*, but `bigint` given                                     |
| true                           | false                  | Boolean. `null` expected for *value*, but `boolean` given                                         |
| true                           | false                  | Boolean object `Boolean(true)`. `null` expected for *value*, but `boolean` given                  |
| null                           | true                   | Null                                                                                              |
| undefined                      | false                  | Undefined. `null` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                  | Symbol. `null` expected for *value*, but `symbol` given                                           |
| /./                            | false                  | RegExp. `null` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                  | RegExp with flags. `null` expected for *value*, but `regExp` given                                |
| `{}`                           | false                  | Empty plain object. `null` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                  | Non-empty plain object. `null` expected for *value*, but `object` given                           |
| Date(2026-01-31T15:38:19.925Z) | false                  | `new Date()` object. `null` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                  | Invalid Date object. `null` expected for *value*, but `date` given                                |
| Error                          | false                  | `new Error()` object. `null` expected for *value*, but `error` given                              |
| new Map()                      | false                  | Empty map `new Map()`. `null` expected for *value*, but `map` given                               |
| new Set()                      | false                  | Empty set `new Set()`. `null` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                  | Non-empty map `new Map([['k', 'v']])`. `null` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                  | Non-empty set `new Set([1, 2, 3])`. `null` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                  | Object without prototype (Object.create(null)). `null` expected for *value*, but `object` given   |
| `[]`                           | false                  | Empty array. `null` expected for *value*, but `array` given                                       |
| `[null]`                       | false                  | Array with `undefined` (but returning `[null]`). `null` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                  | Sparse array (length 3, empty slots). `null` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                  | Nested array. `null` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                  | Mixed array. `null` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                  | Function `() => {}`. `null` expected for *value*, but `function` given                            |
| async()=>{}                    | false                  | Async function `async () => {}`. `null` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                  | Generator function `function* () { yield 1; }`. `null` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 15:38:19 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>