# Behavior of `isWeakSet`

## Expected parameters

| Parameter | Data type | Description              |
|:----------|:----------|:-------------------------|
| value     | weakSet   | The value to be checked. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value` | Function <br> `isWeakSet` | Description                                                                                      |
|:-----------------------|:--------------------------|:-------------------------------------------------------------------------------------------------|
| `{}`                   | true                      | Empty WeakSet                                                                                    |
| `{}`                   | true                      | WeakSet with objects                                                                             |
| `{}`                   | true                      | WeakSet with class instances                                                                     |
| new Set()              | false                     | Set (not WeakSet). `weakSet` expected for *value*, but `set` given                               |
| new Map()              | false                     | Map (not WeakSet). `weakSet` expected for *value*, but `map` given                               |
| `[]`                   | false                     | Array (not WeakSet). `weakSet` expected for *value*, but `array` given                           |
| `{}`                   | false                     | Object (not WeakSet). `weakSet` expected for *value*, but `object` given                         |
| ()=>new WeakSet()      | false                     | Function returning WeakSet (not a WeakSet). `weakSet` expected for *value*, but `function` given |

## Default tests

| Parameter <br> `value`         | Function <br> `isWeakSet` | Description                                                                                          |
|:-------------------------------|:--------------------------|:-----------------------------------------------------------------------------------------------------|
| ""                             | false                     | Empty string. `weakSet` expected for *value*, but `string` given                                     |
| " "                            | false                     | Only space string. `weakSet` expected for *value*, but `string` given                                |
| "\r"                           | false                     | Carriage return. `weakSet` expected for *value*, but `string` given                                  |
| "integer"                      | false                     | Data type returned by `getTypeOf()`. `weakSet` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                     | Two word string. `weakSet` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                     | Non-ASCII (German umlauts). `weakSet` expected for *value*, but `string` given                       |
| "你好"                           | false                     | Non-Latin characters. `weakSet` expected for *value*, but `string` given                             |
| "🙂"                           | false                     | Emoji string. `weakSet` expected for *value*, but `string` given                                     |
| 42                             | false                     | Positive number. `weakSet` expected for *value*, but `integer` given                                 |
| -273                           | false                     | Negative number (0 Kelvin). `weakSet` expected for *value*, but `integer` given                      |
| NaN                            | false                     | `NaN` (Not a Number). `weakSet` expected for *value*, but `nan` given                                |
| Infinity                       | false                     | Positive Infinity. `weakSet` expected for *value*, but `number` given                                |
| -Infinity                      | false                     | Negative Infinity. `weakSet` expected for *value*, but `number` given                                |
| 0                              | false                     | BigInt zero `0n`. `weakSet` expected for *value*, but `bigint` given                                 |
| 42                             | false                     | BigInt `42n`. `weakSet` expected for *value*, but `bigint` given                                     |
| true                           | false                     | Boolean. `weakSet` expected for *value*, but `boolean` given                                         |
| true                           | false                     | Boolean object `Boolean(true)`. `weakSet` expected for *value*, but `boolean` given                  |
| null                           | false                     | Null. `weakSet` expected for *value*, but `null` given                                               |
| undefined                      | false                     | Undefined. `weakSet` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                     | Symbol. `weakSet` expected for *value*, but `symbol` given                                           |
| /./                            | false                     | RegExp. `weakSet` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                     | RegExp with flags. `weakSet` expected for *value*, but `regExp` given                                |
| `{}`                           | false                     | Empty plain object. `weakSet` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                     | Non-empty plain object. `weakSet` expected for *value*, but `object` given                           |
| Date(2026-01-30T14:20:14.719Z) | false                     | `new Date()` object. `weakSet` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                     | Invalid Date object. `weakSet` expected for *value*, but `date` given                                |
| Error                          | false                     | `new Error()` object. `weakSet` expected for *value*, but `error` given                              |
| new Map()                      | false                     | Empty map `new Map()`. `weakSet` expected for *value*, but `map` given                               |
| new Set()                      | false                     | Empty set `new Set()`. `weakSet` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                     | Non-empty map `new Map([['k', 'v']])`. `weakSet` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                     | Non-empty set `new Set([1, 2, 3])`. `weakSet` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                     | Object without prototype (Object.create(null)). `weakSet` expected for *value*, but `object` given   |
| `[]`                           | false                     | Empty array. `weakSet` expected for *value*, but `array` given                                       |
| `[null]`                       | false                     | Array with `undefined` (but returning `[null]`). `weakSet` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                     | Sparse array (length 3, empty slots). `weakSet` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                     | Nested array. `weakSet` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                     | Mixed array. `weakSet` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                     | Function `() => {}`. `weakSet` expected for *value*, but `function` given                            |
| async()=>{}                    | false                     | Async function `async () => {}`. `weakSet` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                     | Generator function `function* () { yield 1; }`. `weakSet` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 14:20:14 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>