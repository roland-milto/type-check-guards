# Behavior of `isFalse`

## Expected parameters

| Parameter | Data type | Description              |
|:----------|:----------|:-------------------------|
| value     | false     | The value to be checked. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value` | Function <br> `isFalse` | Description                                                                                         |
|:-----------------------|:------------------------|:----------------------------------------------------------------------------------------------------|
| false                  | true                    | Boolean `false`. `false` expected for *value*, but `boolean` given                                  |
| true                   | false                   | Boolean true. `false` expected for *value*, but `boolean` given                                     |
| 0                      | false                   | Number 0 (falsy). `false` expected for *value*, but `integer` given                                 |
| 1                      | false                   | Number 1 (truthy). `false` expected for *value*, but `integer` given                                |
| "false"                | false                   | String 'false'. `false` expected for *value*, but `string` given                                    |
| ""                     | false                   | Empty string (falsy). `false` expected for *value*, but `string` given                              |
| `[]`                   | false                   | Empty array (truthy). `false` expected for *value*, but `array` given                               |
| `{}`                   | false                   | Empty object (truthy). `false` expected for *value*, but `object` given                             |
| `false`                | false                   | Boxed Boolean object (truthy, but not === false). `false` expected for *value*, but `boolean` given |

## Default tests

| Parameter <br> `value`         | Function <br> `isFalse` | Description                                                                                        |
|:-------------------------------|:------------------------|:---------------------------------------------------------------------------------------------------|
| ""                             | false                   | Empty string. `false` expected for *value*, but `string` given                                     |
| " "                            | false                   | Only space string. `false` expected for *value*, but `string` given                                |
| "\r"                           | false                   | Carriage return. `false` expected for *value*, but `string` given                                  |
| "integer"                      | false                   | Data type returned by `getTypeOf()`. `false` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                   | Two word string. `false` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                   | Non-ASCII (German umlauts). `false` expected for *value*, but `string` given                       |
| "你好"                           | false                   | Non-Latin characters. `false` expected for *value*, but `string` given                             |
| "🙂"                           | false                   | Emoji string. `false` expected for *value*, but `string` given                                     |
| 42                             | false                   | Positive number. `false` expected for *value*, but `integer` given                                 |
| -273                           | false                   | Negative number (0 Kelvin). `false` expected for *value*, but `integer` given                      |
| NaN                            | false                   | `NaN` (Not a Number). `false` expected for *value*, but `nan` given                                |
| Infinity                       | false                   | Positive Infinity. `false` expected for *value*, but `number` given                                |
| -Infinity                      | false                   | Negative Infinity. `false` expected for *value*, but `number` given                                |
| 0                              | false                   | BigInt zero `0n`. `false` expected for *value*, but `bigint` given                                 |
| 42                             | false                   | BigInt `42n`. `false` expected for *value*, but `bigint` given                                     |
| true                           | false                   | Boolean. `false` expected for *value*, but `boolean` given                                         |
| true                           | false                   | Boolean object `Boolean(true)`. `false` expected for *value*, but `boolean` given                  |
| null                           | false                   | Null. `false` expected for *value*, but `null` given                                               |
| undefined                      | false                   | Undefined. `false` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                   | Symbol. `false` expected for *value*, but `symbol` given                                           |
| /./                            | false                   | RegExp. `false` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                   | RegExp with flags. `false` expected for *value*, but `regExp` given                                |
| `{}`                           | false                   | Empty plain object. `false` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                   | Non-empty plain object. `false` expected for *value*, but `object` given                           |
| Date(2026-01-31T16:43:29.973Z) | false                   | `new Date()` object. `false` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                   | Invalid Date object. `false` expected for *value*, but `date` given                                |
| Error                          | false                   | `new Error()` object. `false` expected for *value*, but `error` given                              |
| new Map()                      | false                   | Empty map `new Map()`. `false` expected for *value*, but `map` given                               |
| new Set()                      | false                   | Empty set `new Set()`. `false` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                   | Non-empty map `new Map([['k', 'v']])`. `false` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                   | Non-empty set `new Set([1, 2, 3])`. `false` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                   | Object without prototype (Object.create(null)). `false` expected for *value*, but `object` given   |
| `[]`                           | false                   | Empty array. `false` expected for *value*, but `array` given                                       |
| `[null]`                       | false                   | Array with `undefined` (but returning `[null]`). `false` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                   | Sparse array (length 3, empty slots). `false` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                   | Nested array. `false` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                   | Mixed array. `false` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                   | Function `() => {}`. `false` expected for *value*, but `function` given                            |
| async()=>{}                    | false                   | Async function `async () => {}`. `false` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                   | Generator function `function* () { yield 1; }`. `false` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 16:43:29 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>