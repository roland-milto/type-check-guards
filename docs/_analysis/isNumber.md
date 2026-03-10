# Behavior of `isNumber`

## Expected parameters

| Parameter | Data type | Description         |
|:----------|:----------|:--------------------|
| value     | number    | The value to check. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value`  | Function <br> `isNumber` | Description                                                                        |
|:------------------------|:-------------------------|:-----------------------------------------------------------------------------------|
| 0                       | true                     | Zero                                                                               |
| 0                       | true                     | Negative zero                                                                      |
| 1                       | true                     | Positive integer                                                                   |
| -1                      | true                     | Negative integer                                                                   |
| 42                      | true                     | Integer                                                                            |
| 3.14159                 | true                     | Float                                                                              |
| 2.220446049250313e-16   | true                     | EPSILON (smallest difference)                                                      |
| 5e-324                  | true                     | MIN_VALUE (smallest positive number)                                               |
| 1.7976931348623157e+308 | true                     | MAX_VALUE (largest finite number)                                                  |
| 9007199254740991        | true                     | MAX_SAFE_INTEGER                                                                   |
| -9007199254740991       | true                     | MIN_SAFE_INTEGER                                                                   |
| NaN                     | false                    | NaN (invalid number)                                                               |
| Infinity                | false                    | Infinity (invalid number)                                                          |
| -Infinity               | false                    | Negative Infinity (invalid number)                                                 |
| "42"                    | false                    | Number as string (invalid)                                                         |
| "3.14"                  | false                    | Float as string (invalid)                                                          |
| " 42 "                  | false                    | Trimmed number string (invalid). `number` expected for *value*, but `string` given |
| 42                      | true                     | Boxed Number object `Number(42)`                                                   |

## Default tests

| Parameter <br> `value`         | Function <br> `isNumber` | Description                                                                                         |
|:-------------------------------|:-------------------------|:----------------------------------------------------------------------------------------------------|
| ""                             | false                    | Empty string. `number` expected for *value*, but `string` given                                     |
| " "                            | false                    | Only space string. `number` expected for *value*, but `string` given                                |
| "\r"                           | false                    | Carriage return. `number` expected for *value*, but `string` given                                  |
| "integer"                      | false                    | Data type returned by `getTypeOf()`. `number` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                    | Two word string. `number` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                    | Non-ASCII (German umlauts). `number` expected for *value*, but `string` given                       |
| "你好"                           | false                    | Non-Latin characters. `number` expected for *value*, but `string` given                             |
| "🙂"                           | false                    | Emoji string. `number` expected for *value*, but `string` given                                     |
| 42                             | true                     | Positive number. `number` expected for *value*, but `integer` given                                 |
| -273                           | true                     | Negative number (0 Kelvin). `number` expected for *value*, but `integer` given                      |
| NaN                            | false                    | `NaN` (Not a Number). `number` expected for *value*, but `nan` given                                |
| Infinity                       | false                    | Positive Infinity                                                                                   |
| -Infinity                      | false                    | Negative Infinity                                                                                   |
| 0                              | false                    | BigInt zero `0n`. `number` expected for *value*, but `bigint` given                                 |
| 42                             | false                    | BigInt `42n`. `number` expected for *value*, but `bigint` given                                     |
| true                           | false                    | Boolean. `number` expected for *value*, but `boolean` given                                         |
| true                           | false                    | Boolean object `Boolean(true)`. `number` expected for *value*, but `boolean` given                  |
| null                           | false                    | Null. `number` expected for *value*, but `null` given                                               |
| undefined                      | false                    | Undefined. `number` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                    | Symbol. `number` expected for *value*, but `symbol` given                                           |
| /./                            | false                    | RegExp. `number` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                    | RegExp with flags. `number` expected for *value*, but `regExp` given                                |
| `{}`                           | false                    | Empty plain object. `number` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                    | Non-empty plain object. `number` expected for *value*, but `object` given                           |
| Date(2026-01-30T13:07:54.111Z) | false                    | `new Date()` object. `number` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                    | Invalid Date object. `number` expected for *value*, but `date` given                                |
| Error                          | false                    | `new Error()` object. `number` expected for *value*, but `error` given                              |
| new Map()                      | false                    | Empty map `new Map()`. `number` expected for *value*, but `map` given                               |
| new Set()                      | false                    | Empty set `new Set()`. `number` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                    | Non-empty map `new Map([['k', 'v']])`. `number` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                    | Non-empty set `new Set([1, 2, 3])`. `number` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                    | Object without prototype (Object.create(null)). `number` expected for *value*, but `object` given   |
| `[]`                           | false                    | Empty array. `number` expected for *value*, but `array` given                                       |
| `[null]`                       | false                    | Array with `undefined` (but returning `[null]`). `number` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                    | Sparse array (length 3, empty slots). `number` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                    | Nested array. `number` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                    | Mixed array. `number` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                    | Function `() => {}`. `number` expected for *value*, but `function` given                            |
| async()=>{}                    | false                    | Async function `async () => {}`. `number` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                    | Generator function `function* () { yield 1; }`. `number` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 13:07:54 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>