# Behavior of `isFloat`

## Expected parameters

| Parameter | Data type | Description                                               |
|:----------|:----------|:----------------------------------------------------------|
| value     | float     | The value to be checked if it is a floating-point number. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value` | Function <br> `isFloat` | Description                                                                          |
|:-----------------------|:------------------------|:-------------------------------------------------------------------------------------|
| 3.14                   | true                    | Positive float                                                                       |
| -0.1                   | true                    | Negative float                                                                       |
| 1e-7                   | true                    | Scientific notation float                                                            |
| 2.220446049250313e-16  | true                    | EPSILON (float)                                                                      |
| 0.5                    | true                    | Half (float)                                                                         |
| 1                      | false                   | Integer (not float). `float` expected for *value*, but `integer` given               |
| 0                      | false                   | Zero integer (not float). `float` expected for *value*, but `integer` given          |
| 0                      | false                   | Negative zero integer (not float). `float` expected for *value*, but `integer` given |
| 1                      | false                   | 1.0 is integer (not float). `float` expected for *value*, but `integer` given        |
| 2                      | false                   | 2.000 is integer (not float). `float` expected for *value*, but `integer` given      |
| NaN                    | false                   | NaN (not finite). `float` expected for *value*, but `nan` given                      |
| Infinity               | false                   | Infinity (not finite). `float` expected for *value*, but `number` given              |
| -Infinity              | false                   | Negative Infinity (not finite). `float` expected for *value*, but `number` given     |
| "3.14"                 | false                   | Float as string (invalid). `float` expected for *value*, but `decimal` given         |
| `3.14`                 | false                   | Boxed Number object (invalid). `float` expected for *value*, but `number` given      |

## Default tests

| Parameter <br> `value`         | Function <br> `isFloat` | Description                                                                                        |
|:-------------------------------|:------------------------|:---------------------------------------------------------------------------------------------------|
| ""                             | false                   | Empty string. `float` expected for *value*, but `string` given                                     |
| " "                            | false                   | Only space string. `float` expected for *value*, but `string` given                                |
| "\r"                           | false                   | Carriage return. `float` expected for *value*, but `string` given                                  |
| "integer"                      | false                   | Data type returned by `getTypeOf()`. `float` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                   | Two word string. `float` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                   | Non-ASCII (German umlauts). `float` expected for *value*, but `string` given                       |
| "你好"                           | false                   | Non-Latin characters. `float` expected for *value*, but `string` given                             |
| "🙂"                           | false                   | Emoji string. `float` expected for *value*, but `string` given                                     |
| 42                             | false                   | Positive number. `float` expected for *value*, but `integer` given                                 |
| -273                           | false                   | Negative number (0 Kelvin). `float` expected for *value*, but `integer` given                      |
| NaN                            | false                   | `NaN` (Not a Number). `float` expected for *value*, but `nan` given                                |
| Infinity                       | false                   | Positive Infinity. `float` expected for *value*, but `number` given                                |
| -Infinity                      | false                   | Negative Infinity. `float` expected for *value*, but `number` given                                |
| 0                              | false                   | BigInt zero `0n`. `float` expected for *value*, but `bigint` given                                 |
| 42                             | false                   | BigInt `42n`. `float` expected for *value*, but `bigint` given                                     |
| true                           | false                   | Boolean. `float` expected for *value*, but `boolean` given                                         |
| true                           | false                   | Boolean object `Boolean(true)`. `float` expected for *value*, but `boolean` given                  |
| null                           | false                   | Null. `float` expected for *value*, but `null` given                                               |
| undefined                      | false                   | Undefined. `float` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                   | Symbol. `float` expected for *value*, but `symbol` given                                           |
| /./                            | false                   | RegExp. `float` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                   | RegExp with flags. `float` expected for *value*, but `regExp` given                                |
| `{}`                           | false                   | Empty plain object. `float` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                   | Non-empty plain object. `float` expected for *value*, but `object` given                           |
| Date(2026-01-30T16:06:39.498Z) | false                   | `new Date()` object. `float` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                   | Invalid Date object. `float` expected for *value*, but `date` given                                |
| Error                          | false                   | `new Error()` object. `float` expected for *value*, but `error` given                              |
| new Map()                      | false                   | Empty map `new Map()`. `float` expected for *value*, but `map` given                               |
| new Set()                      | false                   | Empty set `new Set()`. `float` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                   | Non-empty map `new Map([['k', 'v']])`. `float` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                   | Non-empty set `new Set([1, 2, 3])`. `float` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                   | Object without prototype (Object.create(null)). `float` expected for *value*, but `object` given   |
| `[]`                           | false                   | Empty array. `float` expected for *value*, but `array` given                                       |
| `[null]`                       | false                   | Array with `undefined` (but returning `[null]`). `float` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                   | Sparse array (length 3, empty slots). `float` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                   | Nested array. `float` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                   | Mixed array. `float` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                   | Function `() => {}`. `float` expected for *value*, but `function` given                            |
| async()=>{}                    | false                   | Async function `async () => {}`. `float` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                   | Generator function `function* () { yield 1; }`. `float` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 16:06:39 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>