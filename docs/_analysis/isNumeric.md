# Behavior of `isNumeric`

## Expected parameters

| Parameter | Data type | Description                          |
|:----------|:----------|:-------------------------------------|
| value     | unknown   | The value to check for numeric type. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value` | Function <br> `isNumeric` | Description                                                                                                                               |
|:-----------------------|:--------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| 42                     | true                      | Integer number (numeric). `unknown` expected for *value*, but `integer` given                                                             |
| 3.14                   | true                      | Float number (numeric). `unknown` expected for *value*, but `float` given                                                                 |
| 0                      | true                      | Zero number (numeric). `unknown` expected for *value*, but `integer` given                                                                |
| -7                     | true                      | Negative integer (numeric). `unknown` expected for *value*, but `integer` given                                                           |
| 0                      | true                      | BigInt zero (numeric). `unknown` expected for *value*, but `bigint` given                                                                 |
| 1000                   | true                      | BigInt from constructor (numeric). `unknown` expected for *value*, but `bigint` given                                                     |
| "123"                  | true                      | Decimal string (numeric via getTypeOf => decimal). `unknown` expected for *value*, but `decimal` given                                    |
| "123.45"               | true                      | Decimal string with fraction (numeric via getTypeOf => decimal). `unknown` expected for *value*, but `decimal` given                      |
| "0xFF"                 | true                      | Hexadecimal string (numeric via getTypeOf => hexadecimal). `unknown` expected for *value*, but `hexadecimal` given                        |
| "0o755"                | true                      | Octal string (numeric via getTypeOf => octal). `unknown` expected for *value*, but `octal` given                                          |
| "0b1010"               | true                      | Binary string (numeric via getTypeOf => binary). `unknown` expected for *value*, but `binary` given                                       |
| "1010"                 | true                      | Binary string without prefix (numeric via getTypeOf => binary). `unknown` expected for *value*, but `binary` given                        |
| NaN                    | true                      | NaN (numeric typeName is 'nan' -> depends on NUMERIC_TYPE_STRINGS; typically numeric). `unknown` expected for *value*, but `nan` given    |
| Infinity               | true                      | Infinity (type is 'number', classification depends on getTypeOf/NUMERIC_TYPE_STRINGS). `unknown` expected for *value*, but `number` given |
| "hello"                | false                     | Non-numeric string (not numeric). `unknown` expected for *value*, but `string` given                                                      |
| null                   | false                     | Null (not numeric). `unknown` expected for *value*, but `null` given                                                                      |
| undefined              | false                     | Undefined (not numeric). `unknown` expected for *value*, but `undefined` given                                                            |
| `{}`                   | false                     | Object (not numeric). `unknown` expected for *value*, but `object` given                                                                  |
| `[]`                   | false                     | Array (not numeric). `unknown` expected for *value*, but `array` given                                                                    |

## Default tests

| Parameter <br> `value`         | Function <br> `isNumeric` | Description                                                                                          |
|:-------------------------------|:--------------------------|:-----------------------------------------------------------------------------------------------------|
| ""                             | false                     | Empty string. `unknown` expected for *value*, but `string` given                                     |
| " "                            | false                     | Only space string. `unknown` expected for *value*, but `string` given                                |
| "\r"                           | false                     | Carriage return. `unknown` expected for *value*, but `string` given                                  |
| "integer"                      | false                     | Data type returned by `getTypeOf()`. `unknown` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                     | Two word string. `unknown` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                     | Non-ASCII (German umlauts). `unknown` expected for *value*, but `string` given                       |
| "你好"                           | false                     | Non-Latin characters. `unknown` expected for *value*, but `string` given                             |
| "🙂"                           | false                     | Emoji string. `unknown` expected for *value*, but `string` given                                     |
| 42                             | true                      | Positive number. `unknown` expected for *value*, but `integer` given                                 |
| -273                           | true                      | Negative number (0 Kelvin). `unknown` expected for *value*, but `integer` given                      |
| NaN                            | true                      | `NaN` (Not a Number). `unknown` expected for *value*, but `nan` given                                |
| Infinity                       | true                      | Positive Infinity. `unknown` expected for *value*, but `number` given                                |
| -Infinity                      | true                      | Negative Infinity. `unknown` expected for *value*, but `number` given                                |
| 0                              | true                      | BigInt zero `0n`. `unknown` expected for *value*, but `bigint` given                                 |
| 42                             | true                      | BigInt `42n`. `unknown` expected for *value*, but `bigint` given                                     |
| true                           | false                     | Boolean. `unknown` expected for *value*, but `boolean` given                                         |
| true                           | false                     | Boolean object `Boolean(true)`. `unknown` expected for *value*, but `boolean` given                  |
| null                           | false                     | Null. `unknown` expected for *value*, but `null` given                                               |
| undefined                      | false                     | Undefined. `unknown` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                     | Symbol. `unknown` expected for *value*, but `symbol` given                                           |
| /./                            | false                     | RegExp. `unknown` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                     | RegExp with flags. `unknown` expected for *value*, but `regExp` given                                |
| `{}`                           | false                     | Empty plain object. `unknown` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                     | Non-empty plain object. `unknown` expected for *value*, but `object` given                           |
| Date(2026-02-06T15:51:17.024Z) | false                     | `new Date()` object. `unknown` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                     | Invalid Date object. `unknown` expected for *value*, but `date` given                                |
| Error                          | false                     | `new Error()` object. `unknown` expected for *value*, but `error` given                              |
| new Map()                      | false                     | Empty map `new Map()`. `unknown` expected for *value*, but `map` given                               |
| new Set()                      | false                     | Empty set `new Set()`. `unknown` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                     | Non-empty map `new Map([['k', 'v']])`. `unknown` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                     | Non-empty set `new Set([1, 2, 3])`. `unknown` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                     | Object without prototype (Object.create(null)). `unknown` expected for *value*, but `object` given   |
| `[]`                           | false                     | Empty array. `unknown` expected for *value*, but `array` given                                       |
| `[null]`                       | false                     | Array with `undefined` (but returning `[null]`). `unknown` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                     | Sparse array (length 3, empty slots). `unknown` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                     | Nested array. `unknown` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                     | Mixed array. `unknown` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                     | Function `() => {}`. `unknown` expected for *value*, but `function` given                            |
| async()=>{}                    | false                     | Async function `async () => {}`. `unknown` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                     | Generator function `function* () { yield 1; }`. `unknown` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 6 February 2026 at 15:51:17 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>