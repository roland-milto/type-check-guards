# Behavior of `isWeakMap`

## Expected parameters

| Parameter | Data type | Description         |
|:----------|:----------|:--------------------|
| value     | weakMap   | The value to check. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value` | Function <br> `isWeakMap` | Description                                                              |
|:-----------------------|:--------------------------|:-------------------------------------------------------------------------|
| `{}`                   | true                      | Empty WeakMap                                                            |
| `{}`                   | true                      | WeakMap with one entry                                                   |
| new Map()              | false                     | Map (not WeakMap). `weakMap` expected for *value*, but `map` given       |
| `{}`                   | false                     | Object (not WeakMap). `weakMap` expected for *value*, but `object` given |

## Default tests

| Parameter <br> `value`         | Function <br> `isWeakMap` | Description                                                                                          |
|:-------------------------------|:--------------------------|:-----------------------------------------------------------------------------------------------------|
| ""                             | false                     | Empty string. `weakMap` expected for *value*, but `string` given                                     |
| " "                            | false                     | Only space string. `weakMap` expected for *value*, but `string` given                                |
| "\r"                           | false                     | Carriage return. `weakMap` expected for *value*, but `string` given                                  |
| "integer"                      | false                     | Data type returned by `getTypeOf()`. `weakMap` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                     | Two word string. `weakMap` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                     | Non-ASCII (German umlauts). `weakMap` expected for *value*, but `string` given                       |
| "你好"                           | false                     | Non-Latin characters. `weakMap` expected for *value*, but `string` given                             |
| "🙂"                           | false                     | Emoji string. `weakMap` expected for *value*, but `string` given                                     |
| 42                             | false                     | Positive number. `weakMap` expected for *value*, but `integer` given                                 |
| -273                           | false                     | Negative number (0 Kelvin). `weakMap` expected for *value*, but `integer` given                      |
| NaN                            | false                     | `NaN` (Not a Number). `weakMap` expected for *value*, but `nan` given                                |
| Infinity                       | false                     | Positive Infinity. `weakMap` expected for *value*, but `number` given                                |
| -Infinity                      | false                     | Negative Infinity. `weakMap` expected for *value*, but `number` given                                |
| 0                              | false                     | BigInt zero `0n`. `weakMap` expected for *value*, but `bigint` given                                 |
| 42                             | false                     | BigInt `42n`. `weakMap` expected for *value*, but `bigint` given                                     |
| true                           | false                     | Boolean. `weakMap` expected for *value*, but `boolean` given                                         |
| true                           | false                     | Boolean object `Boolean(true)`. `weakMap` expected for *value*, but `boolean` given                  |
| null                           | false                     | Null. `weakMap` expected for *value*, but `null` given                                               |
| undefined                      | false                     | Undefined. `weakMap` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                     | Symbol. `weakMap` expected for *value*, but `symbol` given                                           |
| /./                            | false                     | RegExp. `weakMap` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                     | RegExp with flags. `weakMap` expected for *value*, but `regExp` given                                |
| `{}`                           | false                     | Empty plain object. `weakMap` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                     | Non-empty plain object. `weakMap` expected for *value*, but `object` given                           |
| Date(2026-01-30T13:35:07.177Z) | false                     | `new Date()` object. `weakMap` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                     | Invalid Date object. `weakMap` expected for *value*, but `date` given                                |
| Error                          | false                     | `new Error()` object. `weakMap` expected for *value*, but `error` given                              |
| new Map()                      | false                     | Empty map `new Map()`. `weakMap` expected for *value*, but `map` given                               |
| new Set()                      | false                     | Empty set `new Set()`. `weakMap` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                     | Non-empty map `new Map([['k', 'v']])`. `weakMap` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                     | Non-empty set `new Set([1, 2, 3])`. `weakMap` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                     | Object without prototype (Object.create(null)). `weakMap` expected for *value*, but `object` given   |
| `[]`                           | false                     | Empty array. `weakMap` expected for *value*, but `array` given                                       |
| `[null]`                       | false                     | Array with `undefined` (but returning `[null]`). `weakMap` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                     | Sparse array (length 3, empty slots). `weakMap` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                     | Nested array. `weakMap` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                     | Mixed array. `weakMap` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                     | Function `() => {}`. `weakMap` expected for *value*, but `function` given                            |
| async()=>{}                    | false                     | Async function `async () => {}`. `weakMap` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                     | Generator function `function* () { yield 1; }`. `weakMap` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 13:35:07 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>