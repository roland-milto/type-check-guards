# Behavior of `isTrue`

## Expected parameters

| Parameter | Data type | Description         |
|:----------|:----------|:--------------------|
| value     | true      | The value to check. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value` | Function <br> `isTrue` | Description                                                                                       |
|:-----------------------|:-----------------------|:--------------------------------------------------------------------------------------------------|
| true                   | true                   | Boolean true (strict). `true` expected for *value*, but `boolean` given                           |
| false                  | false                  | Boolean false. `true` expected for *value*, but `boolean` given                                   |
| 1                      | false                  | Number 1 (truthy). `true` expected for *value*, but `integer` given                               |
| 0                      | false                  | Number 0 (falsy). `true` expected for *value*, but `integer` given                                |
| "true"                 | false                  | String 'true'. `true` expected for *value*, but `string` given                                    |
| ""                     | false                  | Empty string (falsy). `true` expected for *value*, but `string` given                             |
| `[]`                   | false                  | Empty array (truthy). `true` expected for *value*, but `array` given                              |
| `{}`                   | false                  | Empty object (truthy). `true` expected for *value*, but `object` given                            |
| true                   | true                   | Boxed Boolean object (truthy, but not === true). `true` expected for *value*, but `boolean` given |

## Default tests

| Parameter <br> `value`         | Function <br> `isTrue` | Description                                                                                       |
|:-------------------------------|:-----------------------|:--------------------------------------------------------------------------------------------------|
| ""                             | false                  | Empty string. `true` expected for *value*, but `string` given                                     |
| " "                            | false                  | Only space string. `true` expected for *value*, but `string` given                                |
| "\r"                           | false                  | Carriage return. `true` expected for *value*, but `string` given                                  |
| "integer"                      | false                  | Data type returned by `getTypeOf()`. `true` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                  | Two word string. `true` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                  | Non-ASCII (German umlauts). `true` expected for *value*, but `string` given                       |
| "你好"                           | false                  | Non-Latin characters. `true` expected for *value*, but `string` given                             |
| "🙂"                           | false                  | Emoji string. `true` expected for *value*, but `string` given                                     |
| 42                             | false                  | Positive number. `true` expected for *value*, but `integer` given                                 |
| -273                           | false                  | Negative number (0 Kelvin). `true` expected for *value*, but `integer` given                      |
| NaN                            | false                  | `NaN` (Not a Number). `true` expected for *value*, but `nan` given                                |
| Infinity                       | false                  | Positive Infinity. `true` expected for *value*, but `number` given                                |
| -Infinity                      | false                  | Negative Infinity. `true` expected for *value*, but `number` given                                |
| 0                              | false                  | BigInt zero `0n`. `true` expected for *value*, but `bigint` given                                 |
| 42                             | false                  | BigInt `42n`. `true` expected for *value*, but `bigint` given                                     |
| true                           | true                   | Boolean. `true` expected for *value*, but `boolean` given                                         |
| true                           | true                   | Boolean object `Boolean(true)`. `true` expected for *value*, but `boolean` given                  |
| null                           | false                  | Null. `true` expected for *value*, but `null` given                                               |
| undefined                      | false                  | Undefined. `true` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                  | Symbol. `true` expected for *value*, but `symbol` given                                           |
| /./                            | false                  | RegExp. `true` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                  | RegExp with flags. `true` expected for *value*, but `regExp` given                                |
| `{}`                           | false                  | Empty plain object. `true` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                  | Non-empty plain object. `true` expected for *value*, but `object` given                           |
| Date(2026-01-30T13:45:07.826Z) | false                  | `new Date()` object. `true` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                  | Invalid Date object. `true` expected for *value*, but `date` given                                |
| Error                          | false                  | `new Error()` object. `true` expected for *value*, but `error` given                              |
| new Map()                      | false                  | Empty map `new Map()`. `true` expected for *value*, but `map` given                               |
| new Set()                      | false                  | Empty set `new Set()`. `true` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                  | Non-empty map `new Map([['k', 'v']])`. `true` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                  | Non-empty set `new Set([1, 2, 3])`. `true` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                  | Object without prototype (Object.create(null)). `true` expected for *value*, but `object` given   |
| `[]`                           | false                  | Empty array. `true` expected for *value*, but `array` given                                       |
| `[null]`                       | false                  | Array with `undefined` (but returning `[null]`). `true` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                  | Sparse array (length 3, empty slots). `true` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                  | Nested array. `true` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                  | Mixed array. `true` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                  | Function `() => {}`. `true` expected for *value*, but `function` given                            |
| async()=>{}                    | false                  | Async function `async () => {}`. `true` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                  | Generator function `function* () { yield 1; }`. `true` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 13:45:07 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>