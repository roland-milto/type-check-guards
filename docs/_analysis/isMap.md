# Behavior of `isMap`

## Expected parameters

| Parameter | Data type | Description         |
|:----------|:----------|:--------------------|
| value     | map       | The value to check. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value`            | Function <br> `isMap` | Description                                                        |
|:----------------------------------|:----------------------|:-------------------------------------------------------------------|
| new Map()                         | true                  | Empty Map                                                          |
| new Map([["key", "value"]])       | true                  | Map with string entry                                              |
| new Map([[`{}`, 1], [`[]`, "x"]]) | true                  | Map with object/array keys                                         |
| new Map([[1, `{"ok":true}`]])     | true                  | Map with number key and object value                               |
| `{}`                              | false                 | WeakMap (not Map). `map` expected for *value*, but `weakMap` given |
| new Set()                         | false                 | Set (not Map). `map` expected for *value*, but `set` given         |
| `{}`                              | false                 | Object (not Map). `map` expected for *value*, but `object` given   |
| `[]`                              | false                 | Array (not Map). `map` expected for *value*, but `array` given     |

## Default tests

| Parameter <br> `value`         | Function <br> `isMap` | Description                                                                                      |
|:-------------------------------|:----------------------|:-------------------------------------------------------------------------------------------------|
| ""                             | false                 | Empty string. `map` expected for *value*, but `string` given                                     |
| " "                            | false                 | Only space string. `map` expected for *value*, but `string` given                                |
| "\r"                           | false                 | Carriage return. `map` expected for *value*, but `string` given                                  |
| "integer"                      | false                 | Data type returned by `getTypeOf()`. `map` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                 | Two word string. `map` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                 | Non-ASCII (German umlauts). `map` expected for *value*, but `string` given                       |
| "你好"                           | false                 | Non-Latin characters. `map` expected for *value*, but `string` given                             |
| "🙂"                           | false                 | Emoji string. `map` expected for *value*, but `string` given                                     |
| 42                             | false                 | Positive number. `map` expected for *value*, but `integer` given                                 |
| -273                           | false                 | Negative number (0 Kelvin). `map` expected for *value*, but `integer` given                      |
| NaN                            | false                 | `NaN` (Not a Number). `map` expected for *value*, but `nan` given                                |
| Infinity                       | false                 | Positive Infinity. `map` expected for *value*, but `number` given                                |
| -Infinity                      | false                 | Negative Infinity. `map` expected for *value*, but `number` given                                |
| 0                              | false                 | BigInt zero `0n`. `map` expected for *value*, but `bigint` given                                 |
| 42                             | false                 | BigInt `42n`. `map` expected for *value*, but `bigint` given                                     |
| true                           | false                 | Boolean. `map` expected for *value*, but `boolean` given                                         |
| true                           | false                 | Boolean object `Boolean(true)`. `map` expected for *value*, but `boolean` given                  |
| null                           | false                 | Null. `map` expected for *value*, but `null` given                                               |
| undefined                      | false                 | Undefined. `map` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                 | Symbol. `map` expected for *value*, but `symbol` given                                           |
| /./                            | false                 | RegExp. `map` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                 | RegExp with flags. `map` expected for *value*, but `regExp` given                                |
| `{}`                           | false                 | Empty plain object. `map` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                 | Non-empty plain object. `map` expected for *value*, but `object` given                           |
| Date(2026-01-31T16:42:13.665Z) | false                 | `new Date()` object. `map` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                 | Invalid Date object. `map` expected for *value*, but `date` given                                |
| Error                          | false                 | `new Error()` object. `map` expected for *value*, but `error` given                              |
| new Map()                      | true                  | Empty map `new Map()`                                                                            |
| new Set()                      | false                 | Empty set `new Set()`. `map` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | true                  | Non-empty map `new Map([['k', 'v']])`                                                            |
| new Set([1, 2, 3])             | false                 | Non-empty set `new Set([1, 2, 3])`. `map` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                 | Object without prototype (Object.create(null)). `map` expected for *value*, but `object` given   |
| `[]`                           | false                 | Empty array. `map` expected for *value*, but `array` given                                       |
| `[null]`                       | false                 | Array with `undefined` (but returning `[null]`). `map` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                 | Sparse array (length 3, empty slots). `map` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                 | Nested array. `map` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                 | Mixed array. `map` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                 | Function `() => {}`. `map` expected for *value*, but `function` given                            |
| async()=>{}                    | false                 | Async function `async () => {}`. `map` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                 | Generator function `function* () { yield 1; }`. `map` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 16:42:13 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>