# Behavior of `isPrimitive`

## Expected parameters

| Parameter | Data type | Description                            |
|:----------|:----------|:---------------------------------------|
| value     | primitive | The value to check for primitive type. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value`         | Function <br> `isPrimitive` | Description                                                                                 |
|:-------------------------------|:----------------------------|:--------------------------------------------------------------------------------------------|
| null                           | true                        | Null (primitive by definition). `primitive` expected for *value*, but `null` given          |
| undefined                      | true                        | Undefined (primitive). `primitive` expected for *value*, but `undefined` given              |
| true                           | true                        | Boolean (primitive). `primitive` expected for *value*, but `boolean` given                  |
| 0                              | true                        | Number (primitive). `primitive` expected for *value*, but `integer` given                   |
| "text"                         | true                        | String (primitive). `primitive` expected for *value*, but `string` given                    |
| 0                              | true                        | BigInt (primitive). `primitive` expected for *value*, but `bigint` given                    |
| Symbol()                       | true                        | Symbol (primitive). `primitive` expected for *value*, but `symbol` given                    |
| `{}`                           | false                       | Plain object (not primitive). `primitive` expected for *value*, but `object` given          |
| `[]`                           | false                       | Array (not primitive). `primitive` expected for *value*, but `array` given                  |
| ()=>{}                         | false                       | Function (not primitive). `primitive` expected for *value*, but `function` given            |
| Date(2026-01-30T23:55:11.763Z) | false                       | Date (not primitive). `primitive` expected for *value*, but `date` given                    |
| `1`                            | false                       | Boxed Number object (not primitive). `primitive` expected for *value*, but `number` given   |
| `false`                        | false                       | Boxed Boolean object (not primitive). `primitive` expected for *value*, but `boolean` given |
| `"x"`                          | false                       | Boxed String object (not primitive). `primitive` expected for *value*, but `string` given   |

## Default tests

| Parameter <br> `value`         | Function <br> `isPrimitive` | Description                                                                                            |
|:-------------------------------|:----------------------------|:-------------------------------------------------------------------------------------------------------|
| ""                             | true                        | Empty string. `primitive` expected for *value*, but `string` given                                     |
| " "                            | true                        | Only space string. `primitive` expected for *value*, but `string` given                                |
| "\r"                           | true                        | Carriage return. `primitive` expected for *value*, but `string` given                                  |
| "integer"                      | true                        | Data type returned by `getTypeOf()`. `primitive` expected for *value*, but `string` given              |
| "Roland Milto"                 | true                        | Two word string. `primitive` expected for *value*, but `string` given                                  |
| "äöüß"                         | true                        | Non-ASCII (German umlauts). `primitive` expected for *value*, but `string` given                       |
| "你好"                           | true                        | Non-Latin characters. `primitive` expected for *value*, but `string` given                             |
| "🙂"                           | true                        | Emoji string. `primitive` expected for *value*, but `string` given                                     |
| 42                             | true                        | Positive number. `primitive` expected for *value*, but `integer` given                                 |
| -273                           | true                        | Negative number (0 Kelvin). `primitive` expected for *value*, but `integer` given                      |
| NaN                            | true                        | `NaN` (Not a Number). `primitive` expected for *value*, but `nan` given                                |
| Infinity                       | true                        | Positive Infinity. `primitive` expected for *value*, but `number` given                                |
| -Infinity                      | true                        | Negative Infinity. `primitive` expected for *value*, but `number` given                                |
| 0                              | true                        | BigInt zero `0n`. `primitive` expected for *value*, but `bigint` given                                 |
| 42                             | true                        | BigInt `42n`. `primitive` expected for *value*, but `bigint` given                                     |
| true                           | true                        | Boolean. `primitive` expected for *value*, but `boolean` given                                         |
| true                           | true                        | Boolean object `Boolean(true)`. `primitive` expected for *value*, but `boolean` given                  |
| null                           | true                        | Null. `primitive` expected for *value*, but `null` given                                               |
| undefined                      | true                        | Undefined. `primitive` expected for *value*, but `undefined` given                                     |
| Symbol()                       | true                        | Symbol. `primitive` expected for *value*, but `symbol` given                                           |
| /./                            | false                       | RegExp. `primitive` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                       | RegExp with flags. `primitive` expected for *value*, but `regExp` given                                |
| `{}`                           | false                       | Empty plain object. `primitive` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                       | Non-empty plain object. `primitive` expected for *value*, but `object` given                           |
| Date(2026-01-30T23:55:11.760Z) | false                       | `new Date()` object. `primitive` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                       | Invalid Date object. `primitive` expected for *value*, but `date` given                                |
| Error                          | false                       | `new Error()` object. `primitive` expected for *value*, but `error` given                              |
| new Map()                      | false                       | Empty map `new Map()`. `primitive` expected for *value*, but `map` given                               |
| new Set()                      | false                       | Empty set `new Set()`. `primitive` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                       | Non-empty map `new Map([['k', 'v']])`. `primitive` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                       | Non-empty set `new Set([1, 2, 3])`. `primitive` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                       | Object without prototype (Object.create(null)). `primitive` expected for *value*, but `object` given   |
| `[]`                           | false                       | Empty array. `primitive` expected for *value*, but `array` given                                       |
| `[null]`                       | false                       | Array with `undefined` (but returning `[null]`). `primitive` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                       | Sparse array (length 3, empty slots). `primitive` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                       | Nested array. `primitive` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                       | Mixed array. `primitive` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                       | Function `() => {}`. `primitive` expected for *value*, but `function` given                            |
| async()=>{}                    | false                       | Async function `async () => {}`. `primitive` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                       | Generator function `function* () { yield 1; }`. `primitive` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 23:55:11 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>