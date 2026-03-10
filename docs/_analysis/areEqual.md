# Behavior of `areEqual`

## Expected parameters

| Parameter | Data type | Description                                     |
|:----------|:----------|:------------------------------------------------|
| value     | unknown[] | The array to be checked.                        |
| expected  | unknown   | The element to compare each array item against. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value` | Parameter <br> `expected` | Function <br> `areEqual` | Description                                                                                                                                                                                                                                                     |
|:-----------------------|:--------------------------|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `[1,1,1]`              | 1                         | true                     | All equal to 1. `unknown` expected for *value[0]*, but `integer` given. `unknown` expected for *value[1]*, but `integer` given. `unknown` expected for *value[2]*, but `integer` given. `unknown` expected for *expected*, but `integer` given                  |
| `["test","test"]`      | "test"                    | true                     | All equal to 'test'. `unknown` expected for *value[0]*, but `string` given. `unknown` expected for *value[1]*, but `string` given. `unknown` expected for *expected*, but `string` given                                                                        |
| `[true,true,true]`     | true                      | true                     | All equal to true. `unknown` expected for *value[0]*, but `boolean` given. `unknown` expected for *value[1]*, but `boolean` given. `unknown` expected for *value[2]*, but `boolean` given. `unknown` expected for *expected*, but `boolean` given               |
| `[null,null]`          | null                      | true                     | All equal to null. `unknown` expected for *value[0]*, but `null` given. `unknown` expected for *value[1]*, but `null` given. `unknown` expected for *expected*, but `null` given                                                                                |
| `[null,null]`          | undefined                 | true                     | All equal to undefined. `unknown` expected for *value[0]*, but `undefined` given. `unknown` expected for *value[1]*, but `undefined` given. `unknown` expected for *expected*, but `undefined` given                                                            |
| `[]`                   | 5                         | false                    | Empty array (not filled). `unknown` expected for *expected*, but `integer` given                                                                                                                                                                                |
| `[2,3,2]`              | 2                         | false                    | Not all equal to 2. `unknown` expected for *value[0]*, but `integer` given. `unknown` expected for *value[1]*, but `integer` given. `unknown` expected for *value[2]*, but `integer` given. `unknown` expected for *expected*, but `integer` given              |
| `[1,"1",1]`            | 1                         | false                    | Contains different type (string). `unknown` expected for *value[0]*, but `integer` given. `unknown` expected for *value[1]*, but `binary` given. `unknown` expected for *value[2]*, but `integer` given. `unknown` expected for *expected*, but `integer` given |
| `["NaN","NaN"]`        | NaN                       | false                    | NaN comparison fails (NaN !== NaN). `unknown` expected for *value[0]*, but `nan` given. `unknown` expected for *value[1]*, but `nan` given. `unknown` expected for *expected*, but `nan` given                                                                  |

## Default tests

| Parameter <br> `value`         | Parameter <br> `expected`      | Function <br> `areEqual` | Description                                                                                             |
|:-------------------------------|:-------------------------------|:-------------------------|:--------------------------------------------------------------------------------------------------------|
| ""                             | 1                              | false                    | Empty string. `unknown[]` expected for *value*, but `string` given                                      |
| `[1,1,1]`                      | ""                             | false                    | Empty string. `unknown` expected for *expected*, but `string` given                                     |
| " "                            | 1                              | false                    | Only space string. `unknown[]` expected for *value*, but `string` given                                 |
| `[1,1,1]`                      | " "                            | false                    | Only space string. `unknown` expected for *expected*, but `string` given                                |
| "\r"                           | 1                              | false                    | Carriage return. `unknown[]` expected for *value*, but `string` given                                   |
| `[1,1,1]`                      | "\r"                           | false                    | Carriage return. `unknown` expected for *expected*, but `string` given                                  |
| "integer"                      | 1                              | false                    | Data type returned by `getTypeOf()`. `unknown[]` expected for *value*, but `string` given               |
| `[1,1,1]`                      | "integer"                      | false                    | Data type returned by `getTypeOf()`. `unknown` expected for *expected*, but `string` given              |
| "Roland Milto"                 | 1                              | false                    | Two word string. `unknown[]` expected for *value*, but `string` given                                   |
| `[1,1,1]`                      | "Roland Milto"                 | false                    | Two word string. `unknown` expected for *expected*, but `string` given                                  |
| "äöüß"                         | 1                              | false                    | Non-ASCII (German umlauts). `unknown[]` expected for *value*, but `string` given                        |
| `[1,1,1]`                      | "äöüß"                         | false                    | Non-ASCII (German umlauts). `unknown` expected for *expected*, but `string` given                       |
| "你好"                           | 1                              | false                    | Non-Latin characters. `unknown[]` expected for *value*, but `string` given                              |
| `[1,1,1]`                      | "你好"                           | false                    | Non-Latin characters. `unknown` expected for *expected*, but `string` given                             |
| "🙂"                           | 1                              | false                    | Emoji string. `unknown[]` expected for *value*, but `string` given                                      |
| `[1,1,1]`                      | "🙂"                           | false                    | Emoji string. `unknown` expected for *expected*, but `string` given                                     |
| 42                             | 1                              | false                    | Positive number. `unknown[]` expected for *value*, but `integer` given                                  |
| `[1,1,1]`                      | 42                             | false                    | Positive number. `unknown` expected for *expected*, but `integer` given                                 |
| -273                           | 1                              | false                    | Negative number (0 Kelvin). `unknown[]` expected for *value*, but `integer` given                       |
| `[1,1,1]`                      | -273                           | false                    | Negative number (0 Kelvin). `unknown` expected for *expected*, but `integer` given                      |
| NaN                            | 1                              | false                    | `NaN` (Not a Number). `unknown[]` expected for *value*, but `nan` given                                 |
| `[1,1,1]`                      | NaN                            | false                    | `NaN` (Not a Number). `unknown` expected for *expected*, but `nan` given                                |
| Infinity                       | 1                              | false                    | Positive Infinity. `unknown[]` expected for *value*, but `number` given                                 |
| `[1,1,1]`                      | Infinity                       | false                    | Positive Infinity. `unknown` expected for *expected*, but `number` given                                |
| -Infinity                      | 1                              | false                    | Negative Infinity. `unknown[]` expected for *value*, but `number` given                                 |
| `[1,1,1]`                      | -Infinity                      | false                    | Negative Infinity. `unknown` expected for *expected*, but `number` given                                |
| 0                              | 1                              | false                    | BigInt zero `0n`. `unknown[]` expected for *value*, but `bigint` given                                  |
| `[1,1,1]`                      | 0                              | false                    | BigInt zero `0n`. `unknown` expected for *expected*, but `bigint` given                                 |
| 42                             | 1                              | false                    | BigInt `42n`. `unknown[]` expected for *value*, but `bigint` given                                      |
| `[1,1,1]`                      | 42                             | false                    | BigInt `42n`. `unknown` expected for *expected*, but `bigint` given                                     |
| true                           | 1                              | false                    | Boolean. `unknown[]` expected for *value*, but `boolean` given                                          |
| `[1,1,1]`                      | true                           | false                    | Boolean. `unknown` expected for *expected*, but `boolean` given                                         |
| true                           | 1                              | false                    | Boolean object `Boolean(true)`. `unknown[]` expected for *value*, but `boolean` given                   |
| `[1,1,1]`                      | true                           | false                    | Boolean object `Boolean(true)`. `unknown` expected for *expected*, but `boolean` given                  |
| null                           | 1                              | false                    | Null. `unknown[]` expected for *value*, but `null` given                                                |
| `[1,1,1]`                      | null                           | false                    | Null. `unknown` expected for *expected*, but `null` given                                               |
| undefined                      | 1                              | false                    | Undefined. `unknown[]` expected for *value*, but `undefined` given                                      |
| `[1,1,1]`                      | undefined                      | false                    | Undefined. `unknown` expected for *expected*, but `undefined` given                                     |
| Symbol()                       | 1                              | false                    | Symbol. `unknown[]` expected for *value*, but `symbol` given                                            |
| `[1,1,1]`                      | Symbol()                       | false                    | Symbol. `unknown` expected for *expected*, but `symbol` given                                           |
| /./                            | 1                              | false                    | RegExp. `unknown[]` expected for *value*, but `regExp` given                                            |
| `[1,1,1]`                      | /./                            | false                    | RegExp. `unknown` expected for *expected*, but `regExp` given                                           |
| /^Roland$/i                    | 1                              | false                    | RegExp with flags. `unknown[]` expected for *value*, but `regExp` given                                 |
| `[1,1,1]`                      | /^Roland$/i                    | false                    | RegExp with flags. `unknown` expected for *expected*, but `regExp` given                                |
| `{}`                           | 1                              | false                    | Empty plain object. `unknown[]` expected for *value*, but `object` given                                |
| `[1,1,1]`                      | `{}`                           | false                    | Empty plain object. `unknown` expected for *expected*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | 1                              | false                    | Non-empty plain object. `unknown[]` expected for *value*, but `object` given                            |
| `[1,1,1]`                      | `{"dev":"Roland Milto"}`       | false                    | Non-empty plain object. `unknown` expected for *expected*, but `object` given                           |
| Date(2026-01-31T23:49:21.835Z) | 1                              | false                    | `new Date()` object. `unknown[]` expected for *value*, but `date` given                                 |
| `[1,1,1]`                      | Date(2026-01-31T23:49:21.835Z) | false                    | `new Date()` object. `unknown` expected for *expected*, but `date` given                                |
| Date(Invalid)                  | 1                              | false                    | Invalid Date object. `unknown[]` expected for *value*, but `date` given                                 |
| `[1,1,1]`                      | Date(Invalid)                  | false                    | Invalid Date object. `unknown` expected for *expected*, but `date` given                                |
| Error                          | 1                              | false                    | `new Error()` object. `unknown[]` expected for *value*, but `error` given                               |
| `[1,1,1]`                      | Error                          | false                    | `new Error()` object. `unknown` expected for *expected*, but `error` given                              |
| new Map()                      | 1                              | false                    | Empty map `new Map()`. `unknown[]` expected for *value*, but `map` given                                |
| `[1,1,1]`                      | new Map()                      | false                    | Empty map `new Map()`. `unknown` expected for *expected*, but `map` given                               |
| new Set()                      | 1                              | false                    | Empty set `new Set()`. `unknown[]` expected for *value*, but `set` given                                |
| `[1,1,1]`                      | new Set()                      | false                    | Empty set `new Set()`. `unknown` expected for *expected*, but `set` given                               |
| new Map([["k", "v"]])          | 1                              | false                    | Non-empty map `new Map([['k', 'v']])`. `unknown[]` expected for *value*, but `map` given                |
| `[1,1,1]`                      | new Map([["k", "v"]])          | false                    | Non-empty map `new Map([['k', 'v']])`. `unknown` expected for *expected*, but `map` given               |
| new Set([1, 2, 3])             | 1                              | false                    | Non-empty set `new Set([1, 2, 3])`. `unknown[]` expected for *value*, but `set` given                   |
| `[1,1,1]`                      | new Set([1, 2, 3])             | false                    | Non-empty set `new Set([1, 2, 3])`. `unknown` expected for *expected*, but `set` given                  |
| [Object: null prototype] {}    | 1                              | false                    | Object without prototype (Object.create(null)). `unknown[]` expected for *value*, but `object` given    |
| `[1,1,1]`                      | [Object: null prototype] {}    | false                    | Object without prototype (Object.create(null)). `unknown` expected for *expected*, but `object` given   |
| `[]`                           | 1                              | false                    | Empty array. `unknown[]` expected for *value*, but `array` given                                        |
| `[1,1,1]`                      | `[]`                           | false                    | Empty array. `unknown` expected for *expected*, but `array` given                                       |
| `[null]`                       | 1                              | false                    | Array with `undefined` (but returning `[null]`). `unknown[]` expected for *value*, but `array` given    |
| `[1,1,1]`                      | `[null]`                       | false                    | Array with `undefined` (but returning `[null]`). `unknown` expected for *expected*, but `array` given   |
| `[null,null,null]`             | 1                              | false                    | Sparse array (length 3, empty slots). `unknown[]` expected for *value*, but `array` given               |
| `[1,1,1]`                      | `[null,null,null]`             | false                    | Sparse array (length 3, empty slots). `unknown` expected for *expected*, but `array` given              |
| `[["nested"]]`                 | 1                              | false                    | Nested array. `unknown[]` expected for *value*, but `array` given                                       |
| `[1,1,1]`                      | `[["nested"]]`                 | false                    | Nested array. `unknown` expected for *expected*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | 1                              | false                    | Mixed array. `unknown[]` expected for *value*, but `array` given                                        |
| `[1,1,1]`                      | `["Birthday",18,8,1990]`       | false                    | Mixed array. `unknown` expected for *expected*, but `array` given                                       |
| ()=>{}                         | 1                              | false                    | Function `() => {}`. `unknown[]` expected for *value*, but `function` given                             |
| `[1,1,1]`                      | ()=>{}                         | false                    | Function `() => {}`. `unknown` expected for *expected*, but `function` given                            |
| async()=>{}                    | 1                              | false                    | Async function `async () => {}`. `unknown[]` expected for *value*, but `function` given                 |
| `[1,1,1]`                      | async()=>{}                    | false                    | Async function `async () => {}`. `unknown` expected for *expected*, but `function` given                |
| function*(){yield 1;}          | 1                              | false                    | Generator function `function* () { yield 1; }`. `unknown[]` expected for *value*, but `function` given  |
| `[1,1,1]`                      | function*(){yield 1;}          | false                    | Generator function `function* () { yield 1; }`. `unknown` expected for *expected*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 23:49:21 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>