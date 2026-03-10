# Behavior of `isEmpty`

## Expected parameters

| Parameter | Data type | Description                       |
|:----------|:----------|:----------------------------------|
| value     | unknown   | The value to check for emptiness. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value`           | Function <br> `isEmpty` | Description                                                                                                                              |
|:---------------------------------|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| null                             | true                    | Null is empty. `unknown` expected for *value*, but `null` given                                                                          |
| undefined                        | true                    | Undefined is empty. `unknown` expected for *value*, but `undefined` given                                                                |
| ""                               | true                    | Empty string is empty. `unknown` expected for *value*, but `string` given                                                                |
| "   "                            | true                    | Whitespace-only string is empty (trim). `unknown` expected for *value*, but `string` given                                               |
| "\n\t"                           | true                    | Whitespace/control string is empty (trim). `unknown` expected for *value*, but `string` given                                            |
| `[]`                             | true                    | Empty array is empty. `unknown` expected for *value*, but `array` given                                                                  |
| `[1]`                            | false                   | Non-empty array is not empty. `unknown` expected for *value*, but `array` given                                                          |
| new Map()                        | true                    | Empty Map is empty. `unknown` expected for *value*, but `map` given                                                                      |
| new Map([["k", "v"]])            | false                   | Non-empty Map is not empty. `unknown` expected for *value*, but `map` given                                                              |
| new Set()                        | true                    | Empty Set is empty. `unknown` expected for *value*, but `set` given                                                                      |
| new Set([1])                     | false                   | Non-empty Set is not empty. `unknown` expected for *value*, but `set` given                                                              |
| `{}`                             | true                    | Empty object is empty (no own enumerable props). `unknown` expected for *value*, but `object` given                                      |
| `{"a":1}`                        | false                   | Object with prop is not empty. `unknown` expected for *value*, but `object` given                                                        |
| `{}`                             | false                   | Object with prop (even undefined) is not empty. `unknown` expected for *value*, but `object` given                                       |
| [Object: null prototype] {}      | true                    | Object.create(null) with no props is empty. `unknown` expected for *value*, but `object` given                                           |
| [Object: null prototype] {"a":1} | false                   | Object.create(null) with prop is not empty. `unknown` expected for *value*, but `object` given                                           |
| 0                                | false                   | Number is not empty. `unknown` expected for *value*, but `integer` given                                                                 |
| false                            | false                   | Boolean is not empty. `unknown` expected for *value*, but `boolean` given                                                                |
| ()=>{}                           | false                   | Function is not empty. `unknown` expected for *value*, but `function` given                                                              |
| Date(2026-02-06T16:22:16.170Z)   | true                    | Date object is not empty (has no own enumerable props, but treated as object => empty). `unknown` expected for *value*, but `date` given |

## Default tests

| Parameter <br> `value`         | Function <br> `isEmpty` | Description                                                                                          |
|:-------------------------------|:------------------------|:-----------------------------------------------------------------------------------------------------|
| ""                             | true                    | Empty string. `unknown` expected for *value*, but `string` given                                     |
| " "                            | true                    | Only space string. `unknown` expected for *value*, but `string` given                                |
| "\r"                           | true                    | Carriage return. `unknown` expected for *value*, but `string` given                                  |
| "integer"                      | false                   | Data type returned by `getTypeOf()`. `unknown` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                   | Two word string. `unknown` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                   | Non-ASCII (German umlauts). `unknown` expected for *value*, but `string` given                       |
| "你好"                           | false                   | Non-Latin characters. `unknown` expected for *value*, but `string` given                             |
| "🙂"                           | false                   | Emoji string. `unknown` expected for *value*, but `string` given                                     |
| 42                             | false                   | Positive number. `unknown` expected for *value*, but `integer` given                                 |
| -273                           | false                   | Negative number (0 Kelvin). `unknown` expected for *value*, but `integer` given                      |
| NaN                            | false                   | `NaN` (Not a Number). `unknown` expected for *value*, but `nan` given                                |
| Infinity                       | false                   | Positive Infinity. `unknown` expected for *value*, but `number` given                                |
| -Infinity                      | false                   | Negative Infinity. `unknown` expected for *value*, but `number` given                                |
| 0                              | false                   | BigInt zero `0n`. `unknown` expected for *value*, but `bigint` given                                 |
| 42                             | false                   | BigInt `42n`. `unknown` expected for *value*, but `bigint` given                                     |
| true                           | false                   | Boolean. `unknown` expected for *value*, but `boolean` given                                         |
| true                           | false                   | Boolean object `Boolean(true)`. `unknown` expected for *value*, but `boolean` given                  |
| null                           | true                    | Null. `unknown` expected for *value*, but `null` given                                               |
| undefined                      | true                    | Undefined. `unknown` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                   | Symbol. `unknown` expected for *value*, but `symbol` given                                           |
| /./                            | true                    | RegExp. `unknown` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | true                    | RegExp with flags. `unknown` expected for *value*, but `regExp` given                                |
| `{}`                           | true                    | Empty plain object. `unknown` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                   | Non-empty plain object. `unknown` expected for *value*, but `object` given                           |
| Date(2026-02-06T16:22:16.164Z) | true                    | `new Date()` object. `unknown` expected for *value*, but `date` given                                |
| Date(Invalid)                  | true                    | Invalid Date object. `unknown` expected for *value*, but `date` given                                |
| Error                          | true                    | `new Error()` object. `unknown` expected for *value*, but `error` given                              |
| new Map()                      | true                    | Empty map `new Map()`. `unknown` expected for *value*, but `map` given                               |
| new Set()                      | true                    | Empty set `new Set()`. `unknown` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                   | Non-empty map `new Map([['k', 'v']])`. `unknown` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                   | Non-empty set `new Set([1, 2, 3])`. `unknown` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | true                    | Object without prototype (Object.create(null)). `unknown` expected for *value*, but `object` given   |
| `[]`                           | true                    | Empty array. `unknown` expected for *value*, but `array` given                                       |
| `[null]`                       | false                   | Array with `undefined` (but returning `[null]`). `unknown` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                   | Sparse array (length 3, empty slots). `unknown` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                   | Nested array. `unknown` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                   | Mixed array. `unknown` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                   | Function `() => {}`. `unknown` expected for *value*, but `function` given                            |
| async()=>{}                    | false                   | Async function `async () => {}`. `unknown` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                   | Generator function `function* () { yield 1; }`. `unknown` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 6 February 2026 at 16:22:16 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>