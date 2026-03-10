# Behavior of `isOneOfType`

## Expected parameters

| Parameter | Data type        | Description                                                             |
|:----------|:-----------------|:------------------------------------------------------------------------|
| value     | unknown          | The value to be checked against the specified types.                    |
| types     | DataTypeAsString | An array of type strings representing the potential types of the value. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value`         | Parameter <br> `types` | Function <br> `isOneOfType` | Description                                                                                                                                                 |
|:-------------------------------|:-----------------------|:----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3                              | `["number"]`           | true                        | Matches single type: number. `unknown` expected for *value*, but `integer` given. `DataTypeAsString` expected for *types*, but `array` given                |
| "hello"                        | `["string"]`           | true                        | Matches single type: string. `unknown` expected for *value*, but `string` given. `DataTypeAsString` expected for *types*, but `array` given                 |
| true                           | `["boolean"]`          | true                        | Matches swwwdingle type: boolean. `unknown` expected for *value*, but `boolean` given. `DataTypeAsString` expected for *types*, but `array` given           |
| 3                              | `["boolean"]`          | false                       | Does not match: number vs boolean. `unknown` expected for *value*, but `integer` given. `DataTypeAsString` expected for *types*, but `array` given          |
| "world"                        | `["array"]`            | false                       | Does not match: string vs array. `unknown` expected for *value*, but `string` given. `DataTypeAsString` expected for *types*, but `array` given             |
| 3                              | `["string","number"]`  | true                        | Matches one of multiple types (number). `unknown` expected for *value*, but `integer` given. `DataTypeAsString` expected for *types*, but `array` given     |
| "x"                            | `["number","string"]`  | true                        | Matches one of multiple types (string). `unknown` expected for *value*, but `string` given. `DataTypeAsString` expected for *types*, but `array` given      |
| `[]`                           | `["array","object"]`   | true                        | Matches array (also object, but should pass). `unknown` expected for *value*, but `array` given. `DataTypeAsString` expected for *types*, but `array` given |
| Date(2026-02-06T13:59:11.901Z) | `["date","object"]`    | true                        | Matches date/object via complex types. `unknown` expected for *value*, but `date` given. `DataTypeAsString` expected for *types*, but `array` given         |
| `{}`                           | `[]`                   | false                       | Empty types array (always false). `unknown` expected for *value*, but `object` given. `DataTypeAsString` expected for *types*, but `array` given            |

## Default tests

| Parameter <br> `value`         | Parameter <br> `types`         | Function <br> `isOneOfType` | Description                                                                                                   |
|:-------------------------------|:-------------------------------|:----------------------------|:--------------------------------------------------------------------------------------------------------------|
| ""                             | `["number"]`                   | false                       | Empty string. `unknown` expected for *value*, but `string` given                                              |
| 3                              | ""                             | false                       | Empty string. `DataTypeAsString` expected for *types*, but `string` given                                     |
| " "                            | `["number"]`                   | false                       | Only space string. `unknown` expected for *value*, but `string` given                                         |
| 3                              | " "                            | false                       | Only space string. `DataTypeAsString` expected for *types*, but `string` given                                |
| "\r"                           | `["number"]`                   | false                       | Carriage return. `unknown` expected for *value*, but `string` given                                           |
| 3                              | "\r"                           | false                       | Carriage return. `DataTypeAsString` expected for *types*, but `string` given                                  |
| "integer"                      | `["number"]`                   | false                       | Data type returned by `getTypeOf()`. `unknown` expected for *value*, but `string` given                       |
| 3                              | "integer"                      | false                       | Data type returned by `getTypeOf()`. `DataTypeAsString` expected for *types*, but `string` given              |
| "Roland Milto"                 | `["number"]`                   | false                       | Two word string. `unknown` expected for *value*, but `string` given                                           |
| 3                              | "Roland Milto"                 | false                       | Two word string. `DataTypeAsString` expected for *types*, but `string` given                                  |
| "äöüß"                         | `["number"]`                   | false                       | Non-ASCII (German umlauts). `unknown` expected for *value*, but `string` given                                |
| 3                              | "äöüß"                         | false                       | Non-ASCII (German umlauts). `DataTypeAsString` expected for *types*, but `string` given                       |
| "你好"                           | `["number"]`                   | false                       | Non-Latin characters. `unknown` expected for *value*, but `string` given                                      |
| 3                              | "你好"                           | false                       | Non-Latin characters. `DataTypeAsString` expected for *types*, but `string` given                             |
| "🙂"                           | `["number"]`                   | false                       | Emoji string. `unknown` expected for *value*, but `string` given                                              |
| 3                              | "🙂"                           | false                       | Emoji string. `DataTypeAsString` expected for *types*, but `string` given                                     |
| 42                             | `["number"]`                   | true                        | Positive number. `unknown` expected for *value*, but `integer` given                                          |
| 3                              | 42                             | Error                       | Positive number. `DataTypeAsString` expected for *types*, but `integer` given                                 |
| -273                           | `["number"]`                   | true                        | Negative number (0 Kelvin). `unknown` expected for *value*, but `integer` given                               |
| 3                              | -273                           | Error                       | Negative number (0 Kelvin). `DataTypeAsString` expected for *types*, but `integer` given                      |
| NaN                            | `["number"]`                   | true                        | `NaN` (Not a Number). `unknown` expected for *value*, but `nan` given                                         |
| 3                              | NaN                            | Error                       | `NaN` (Not a Number). `DataTypeAsString` expected for *types*, but `nan` given                                |
| Infinity                       | `["number"]`                   | true                        | Positive Infinity. `unknown` expected for *value*, but `number` given                                         |
| 3                              | Infinity                       | Error                       | Positive Infinity. `DataTypeAsString` expected for *types*, but `number` given                                |
| -Infinity                      | `["number"]`                   | true                        | Negative Infinity. `unknown` expected for *value*, but `number` given                                         |
| 3                              | -Infinity                      | Error                       | Negative Infinity. `DataTypeAsString` expected for *types*, but `number` given                                |
| 0                              | `["number"]`                   | false                       | BigInt zero `0n`. `unknown` expected for *value*, but `bigint` given                                          |
| 3                              | 0                              | Error                       | BigInt zero `0n`. `DataTypeAsString` expected for *types*, but `bigint` given                                 |
| 42                             | `["number"]`                   | false                       | BigInt `42n`. `unknown` expected for *value*, but `bigint` given                                              |
| 3                              | 42                             | Error                       | BigInt `42n`. `DataTypeAsString` expected for *types*, but `bigint` given                                     |
| true                           | `["number"]`                   | false                       | Boolean. `unknown` expected for *value*, but `boolean` given                                                  |
| 3                              | true                           | Error                       | Boolean. `DataTypeAsString` expected for *types*, but `boolean` given                                         |
| true                           | `["number"]`                   | false                       | Boolean object `Boolean(true)`. `unknown` expected for *value*, but `boolean` given                           |
| 3                              | true                           | Error                       | Boolean object `Boolean(true)`. `DataTypeAsString` expected for *types*, but `boolean` given                  |
| null                           | `["number"]`                   | false                       | Null. `unknown` expected for *value*, but `null` given                                                        |
| 3                              | null                           | Error                       | Null. `DataTypeAsString` expected for *types*, but `null` given                                               |
| undefined                      | `["number"]`                   | false                       | Undefined. `unknown` expected for *value*, but `undefined` given                                              |
| 3                              | undefined                      | Error                       | Undefined. `DataTypeAsString` expected for *types*, but `undefined` given                                     |
| Symbol()                       | `["number"]`                   | false                       | Symbol. `unknown` expected for *value*, but `symbol` given                                                    |
| 3                              | Symbol()                       | Error                       | Symbol. `DataTypeAsString` expected for *types*, but `symbol` given                                           |
| /./                            | `["number"]`                   | false                       | RegExp. `unknown` expected for *value*, but `regExp` given                                                    |
| 3                              | /./                            | Error                       | RegExp. `DataTypeAsString` expected for *types*, but `regExp` given                                           |
| /^Roland$/i                    | `["number"]`                   | false                       | RegExp with flags. `unknown` expected for *value*, but `regExp` given                                         |
| 3                              | /^Roland$/i                    | Error                       | RegExp with flags. `DataTypeAsString` expected for *types*, but `regExp` given                                |
| `{}`                           | `["number"]`                   | false                       | Empty plain object. `unknown` expected for *value*, but `object` given                                        |
| 3                              | `{}`                           | Error                       | Empty plain object. `DataTypeAsString` expected for *types*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | `["number"]`                   | false                       | Non-empty plain object. `unknown` expected for *value*, but `object` given                                    |
| 3                              | `{"dev":"Roland Milto"}`       | Error                       | Non-empty plain object. `DataTypeAsString` expected for *types*, but `object` given                           |
| Date(2026-02-06T13:59:11.897Z) | `["number"]`                   | false                       | `new Date()` object. `unknown` expected for *value*, but `date` given                                         |
| 3                              | Date(2026-02-06T13:59:11.897Z) | Error                       | `new Date()` object. `DataTypeAsString` expected for *types*, but `date` given                                |
| Date(Invalid)                  | `["number"]`                   | false                       | Invalid Date object. `unknown` expected for *value*, but `date` given                                         |
| 3                              | Date(Invalid)                  | Error                       | Invalid Date object. `DataTypeAsString` expected for *types*, but `date` given                                |
| Error                          | `["number"]`                   | false                       | `new Error()` object. `unknown` expected for *value*, but `error` given                                       |
| 3                              | Error                          | Error                       | `new Error()` object. `DataTypeAsString` expected for *types*, but `error` given                              |
| new Map()                      | `["number"]`                   | false                       | Empty map `new Map()`. `unknown` expected for *value*, but `map` given                                        |
| 3                              | new Map()                      | false                       | Empty map `new Map()`. `DataTypeAsString` expected for *types*, but `map` given                               |
| new Set()                      | `["number"]`                   | false                       | Empty set `new Set()`. `unknown` expected for *value*, but `set` given                                        |
| 3                              | new Set()                      | false                       | Empty set `new Set()`. `DataTypeAsString` expected for *types*, but `set` given                               |
| new Map([["k", "v"]])          | `["number"]`                   | false                       | Non-empty map `new Map([['k', 'v']])`. `unknown` expected for *value*, but `map` given                        |
| 3                              | new Map([["k", "v"]])          | false                       | Non-empty map `new Map([['k', 'v']])`. `DataTypeAsString` expected for *types*, but `map` given               |
| new Set([1, 2, 3])             | `["number"]`                   | false                       | Non-empty set `new Set([1, 2, 3])`. `unknown` expected for *value*, but `set` given                           |
| 3                              | new Set([1, 2, 3])             | false                       | Non-empty set `new Set([1, 2, 3])`. `DataTypeAsString` expected for *types*, but `set` given                  |
| [Object: null prototype] {}    | `["number"]`                   | false                       | Object without prototype (Object.create(null)). `unknown` expected for *value*, but `object` given            |
| 3                              | [Object: null prototype] {}    | Error                       | Object without prototype (Object.create(null)). `DataTypeAsString` expected for *types*, but `object` given   |
| `[]`                           | `["number"]`                   | false                       | Empty array. `unknown` expected for *value*, but `array` given                                                |
| 3                              | `[]`                           | false                       | Empty array. `DataTypeAsString` expected for *types*, but `array` given                                       |
| `[null]`                       | `["number"]`                   | false                       | Array with `undefined` (but returning `[null]`). `unknown` expected for *value*, but `array` given            |
| 3                              | `[null]`                       | false                       | Array with `undefined` (but returning `[null]`). `DataTypeAsString` expected for *types*, but `array` given   |
| `[null,null,null]`             | `["number"]`                   | false                       | Sparse array (length 3, empty slots). `unknown` expected for *value*, but `array` given                       |
| 3                              | `[null,null,null]`             | false                       | Sparse array (length 3, empty slots). `DataTypeAsString` expected for *types*, but `array` given              |
| `[["nested"]]`                 | `["number"]`                   | false                       | Nested array. `unknown` expected for *value*, but `array` given                                               |
| 3                              | `[["nested"]]`                 | false                       | Nested array. `DataTypeAsString` expected for *types*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | `["number"]`                   | false                       | Mixed array. `unknown` expected for *value*, but `array` given                                                |
| 3                              | `["Birthday",18,8,1990]`       | false                       | Mixed array. `DataTypeAsString` expected for *types*, but `array` given                                       |
| ()=>{}                         | `["number"]`                   | false                       | Function `() => {}`. `unknown` expected for *value*, but `function` given                                     |
| 3                              | ()=>{}                         | Error                       | Function `() => {}`. `DataTypeAsString` expected for *types*, but `function` given                            |
| async()=>{}                    | `["number"]`                   | false                       | Async function `async () => {}`. `unknown` expected for *value*, but `function` given                         |
| 3                              | async()=>{}                    | Error                       | Async function `async () => {}`. `DataTypeAsString` expected for *types*, but `function` given                |
| function*(){yield 1;}          | `["number"]`                   | false                       | Generator function `function* () { yield 1; }`. `unknown` expected for *value*, but `function` given          |
| 3                              | function*(){yield 1;}          | Error                       | Generator function `function* () { yield 1; }`. `DataTypeAsString` expected for *types*, but `function` given |

<br>

---

<small>The file was generated on 6 February 2026 at 13:59:11 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>