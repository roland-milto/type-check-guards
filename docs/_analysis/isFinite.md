# Behavior of `isFinite`

## Expected parameters

| Parameter | Data type | Description                        |
|:----------|:----------|:-----------------------------------|
| value     | finite    | The value to check for finiteness. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value`  | Function <br> `isFinite` | Description                                                                                             |
|:------------------------|:-------------------------|:--------------------------------------------------------------------------------------------------------|
| 0                       | true                     | Zero (finite). `finite` expected for *value*, but `integer` given                                       |
| 0                       | true                     | Negative zero (finite). `finite` expected for *value*, but `integer` given                              |
| 42                      | true                     | Integer (finite). `finite` expected for *value*, but `integer` given                                    |
| -123.45                 | true                     | Negative float (finite). `finite` expected for *value*, but `float` given                               |
| 5e-324                  | true                     | MIN_VALUE (finite). `finite` expected for *value*, but `float` given                                    |
| 1.7976931348623157e+308 | true                     | MAX_VALUE (finite). `finite` expected for *value*, but `number` given                                   |
| 2.220446049250313e-16   | true                     | EPSILON (finite). `finite` expected for *value*, but `float` given                                      |
| Infinity                | false                    | Infinity (not finite). `finite` expected for *value*, but `number` given                                |
| -Infinity               | false                    | Negative Infinity (not finite). `finite` expected for *value*, but `number` given                       |
| NaN                     | false                    | NaN (not finite). `finite` expected for *value*, but `nan` given                                        |
| "123"                   | false                    | Number as string (not finite by Number.isFinite). `finite` expected for *value*, but `decimal` given    |
| 123                     | true                     | Boxed Number object (not finite by Number.isFinite). `finite` expected for *value*, but `integer` given |

## Default tests

| Parameter <br> `value`         | Function <br> `isFinite` | Description                                                                                         |
|:-------------------------------|:-------------------------|:----------------------------------------------------------------------------------------------------|
| ""                             | false                    | Empty string. `finite` expected for *value*, but `string` given                                     |
| " "                            | false                    | Only space string. `finite` expected for *value*, but `string` given                                |
| "\r"                           | false                    | Carriage return. `finite` expected for *value*, but `string` given                                  |
| "integer"                      | false                    | Data type returned by `getTypeOf()`. `finite` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                    | Two word string. `finite` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                    | Non-ASCII (German umlauts). `finite` expected for *value*, but `string` given                       |
| "你好"                           | false                    | Non-Latin characters. `finite` expected for *value*, but `string` given                             |
| "🙂"                           | false                    | Emoji string. `finite` expected for *value*, but `string` given                                     |
| 42                             | true                     | Positive number. `finite` expected for *value*, but `integer` given                                 |
| -273                           | true                     | Negative number (0 Kelvin). `finite` expected for *value*, but `integer` given                      |
| NaN                            | false                    | `NaN` (Not a Number). `finite` expected for *value*, but `nan` given                                |
| Infinity                       | false                    | Positive Infinity. `finite` expected for *value*, but `number` given                                |
| -Infinity                      | false                    | Negative Infinity. `finite` expected for *value*, but `number` given                                |
| 0                              | false                    | BigInt zero `0n`. `finite` expected for *value*, but `bigint` given                                 |
| 42                             | false                    | BigInt `42n`. `finite` expected for *value*, but `bigint` given                                     |
| true                           | false                    | Boolean. `finite` expected for *value*, but `boolean` given                                         |
| true                           | false                    | Boolean object `Boolean(true)`. `finite` expected for *value*, but `boolean` given                  |
| null                           | false                    | Null. `finite` expected for *value*, but `null` given                                               |
| undefined                      | false                    | Undefined. `finite` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                    | Symbol. `finite` expected for *value*, but `symbol` given                                           |
| /./                            | false                    | RegExp. `finite` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                    | RegExp with flags. `finite` expected for *value*, but `regExp` given                                |
| `{}`                           | false                    | Empty plain object. `finite` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                    | Non-empty plain object. `finite` expected for *value*, but `object` given                           |
| Date(2026-01-30T16:28:36.881Z) | false                    | `new Date()` object. `finite` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                    | Invalid Date object. `finite` expected for *value*, but `date` given                                |
| Error                          | false                    | `new Error()` object. `finite` expected for *value*, but `error` given                              |
| new Map()                      | false                    | Empty map `new Map()`. `finite` expected for *value*, but `map` given                               |
| new Set()                      | false                    | Empty set `new Set()`. `finite` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                    | Non-empty map `new Map([['k', 'v']])`. `finite` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                    | Non-empty set `new Set([1, 2, 3])`. `finite` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                    | Object without prototype (Object.create(null)). `finite` expected for *value*, but `object` given   |
| `[]`                           | false                    | Empty array. `finite` expected for *value*, but `array` given                                       |
| `[null]`                       | false                    | Array with `undefined` (but returning `[null]`). `finite` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                    | Sparse array (length 3, empty slots). `finite` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                    | Nested array. `finite` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                    | Mixed array. `finite` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                    | Function `() => {}`. `finite` expected for *value*, but `function` given                            |
| async()=>{}                    | false                    | Async function `async () => {}`. `finite` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                    | Generator function `function* () { yield 1; }`. `finite` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 16:28:36 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>