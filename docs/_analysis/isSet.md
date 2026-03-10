# Behavior of `isSet`

## Expected parameters

| Parameter | Data type | Description         |
|:----------|:----------|:--------------------|
| value     | set       | The value to check. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value` | Function <br> `isSet` | Description                                                        |
|:-----------------------|:----------------------|:-------------------------------------------------------------------|
| new Set()              | true                  | Empty Set                                                          |
| new Set([1, 2, 3])     | true                  | Set with numbers                                                   |
| new Set(["a", "b"])    | true                  | Set with strings                                                   |
| new Set([`{}`, `[]`])  | true                  | Set with object and array                                          |
| `{}`                   | false                 | WeakSet (not Set). `set` expected for *value*, but `weakSet` given |
| new Map()              | false                 | Map (not Set). `set` expected for *value*, but `map` given         |
| `[]`                   | false                 | Array (not Set). `set` expected for *value*, but `array` given     |
| `{}`                   | false                 | Object (not Set). `set` expected for *value*, but `object` given   |

## Default tests

| Parameter <br> `value`         | Function <br> `isSet` | Description                                                                                      |
|:-------------------------------|:----------------------|:-------------------------------------------------------------------------------------------------|
| ""                             | false                 | Empty string. `set` expected for *value*, but `string` given                                     |
| " "                            | false                 | Only space string. `set` expected for *value*, but `string` given                                |
| "\r"                           | false                 | Carriage return. `set` expected for *value*, but `string` given                                  |
| "integer"                      | false                 | Data type returned by `getTypeOf()`. `set` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                 | Two word string. `set` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                 | Non-ASCII (German umlauts). `set` expected for *value*, but `string` given                       |
| "你好"                           | false                 | Non-Latin characters. `set` expected for *value*, but `string` given                             |
| "🙂"                           | false                 | Emoji string. `set` expected for *value*, but `string` given                                     |
| 42                             | false                 | Positive number. `set` expected for *value*, but `integer` given                                 |
| -273                           | false                 | Negative number (0 Kelvin). `set` expected for *value*, but `integer` given                      |
| NaN                            | false                 | `NaN` (Not a Number). `set` expected for *value*, but `nan` given                                |
| Infinity                       | false                 | Positive Infinity. `set` expected for *value*, but `number` given                                |
| -Infinity                      | false                 | Negative Infinity. `set` expected for *value*, but `number` given                                |
| 0                              | false                 | BigInt zero `0n`. `set` expected for *value*, but `bigint` given                                 |
| 42                             | false                 | BigInt `42n`. `set` expected for *value*, but `bigint` given                                     |
| true                           | false                 | Boolean. `set` expected for *value*, but `boolean` given                                         |
| true                           | false                 | Boolean object `Boolean(true)`. `set` expected for *value*, but `boolean` given                  |
| null                           | false                 | Null. `set` expected for *value*, but `null` given                                               |
| undefined                      | false                 | Undefined. `set` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                 | Symbol. `set` expected for *value*, but `symbol` given                                           |
| /./                            | false                 | RegExp. `set` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                 | RegExp with flags. `set` expected for *value*, but `regExp` given                                |
| `{}`                           | false                 | Empty plain object. `set` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                 | Non-empty plain object. `set` expected for *value*, but `object` given                           |
| Date(2026-01-30T23:08:31.659Z) | false                 | `new Date()` object. `set` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                 | Invalid Date object. `set` expected for *value*, but `date` given                                |
| Error                          | false                 | `new Error()` object. `set` expected for *value*, but `error` given                              |
| new Map()                      | false                 | Empty map `new Map()`. `set` expected for *value*, but `map` given                               |
| new Set()                      | true                  | Empty set `new Set()`                                                                            |
| new Map([["k", "v"]])          | false                 | Non-empty map `new Map([['k', 'v']])`. `set` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | true                  | Non-empty set `new Set([1, 2, 3])`                                                               |
| [Object: null prototype] {}    | false                 | Object without prototype (Object.create(null)). `set` expected for *value*, but `object` given   |
| `[]`                           | false                 | Empty array. `set` expected for *value*, but `array` given                                       |
| `[null]`                       | false                 | Array with `undefined` (but returning `[null]`). `set` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                 | Sparse array (length 3, empty slots). `set` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                 | Nested array. `set` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                 | Mixed array. `set` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                 | Function `() => {}`. `set` expected for *value*, but `function` given                            |
| async()=>{}                    | false                 | Async function `async () => {}`. `set` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                 | Generator function `function* () { yield 1; }`. `set` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 23:08:31 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>