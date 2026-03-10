# Behavior of `areOctals`

## Expected parameters

| Parameter | Data type | Description              |
|:----------|:----------|:-------------------------|
| array     | octal[]   | The value to be checked. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array`   | Function <br> `areOctals` | Description                                                                                 |
|:-------------------------|:--------------------------|:--------------------------------------------------------------------------------------------|
| `["0o0"]`                | true                      | Single valid octal                                                                          |
| `["0o123","+0O755"]`     | true                      | Multiple valid octals (signed + case-insensitive)                                           |
| `["0o7","0o10","0o777"]` | true                      | Multiple valid octals                                                                       |
| `[]`                     | false                     | Empty array (not filled)                                                                    |
| `["0o123","0o128"]`      | false                     | Contains invalid digit. `octal` expected for *array[1]*, but `string` given                 |
| `["0o123"," 0o7"]`       | false                     | Contains leading whitespace (invalid). `octal` expected for *array[1]*, but `string` given  |
| `["0o123","0o7 "]`       | false                     | Contains trailing whitespace (invalid). `octal` expected for *array[1]*, but `string` given |
| `["0o123",83]`           | false                     | Contains number (non-string, invalid). `octal` expected for *array[1]*, but `integer` given |
| `["0o123",null]`         | false                     | Contains null. `octal` expected for *array[1]*, but `null` given                            |
| `["0o123",null]`         | false                     | Contains undefined. `octal` expected for *array[1]*, but `undefined` given                  |

## Default tests

| Parameter <br> `array`         | Function <br> `areOctals` | Description                                                                                          |
|:-------------------------------|:--------------------------|:-----------------------------------------------------------------------------------------------------|
| ""                             | false                     | Empty string. `octal[]` expected for *array*, but `string` given                                     |
| " "                            | false                     | Only space string. `octal[]` expected for *array*, but `string` given                                |
| "\r"                           | false                     | Carriage return. `octal[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                     | Data type returned by `getTypeOf()`. `octal[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                     | Two word string. `octal[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                     | Non-ASCII (German umlauts). `octal[]` expected for *array*, but `string` given                       |
| "你好"                           | false                     | Non-Latin characters. `octal[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                     | Emoji string. `octal[]` expected for *array*, but `string` given                                     |
| 42                             | false                     | Positive number. `octal[]` expected for *array*, but `integer` given                                 |
| -273                           | false                     | Negative number (0 Kelvin). `octal[]` expected for *array*, but `integer` given                      |
| NaN                            | false                     | `NaN` (Not a Number). `octal[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                     | Positive Infinity. `octal[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                     | Negative Infinity. `octal[]` expected for *array*, but `number` given                                |
| 0                              | false                     | BigInt zero `0n`. `octal[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                     | BigInt `42n`. `octal[]` expected for *array*, but `bigint` given                                     |
| true                           | false                     | Boolean. `octal[]` expected for *array*, but `boolean` given                                         |
| true                           | false                     | Boolean object `Boolean(true)`. `octal[]` expected for *array*, but `boolean` given                  |
| null                           | false                     | Null. `octal[]` expected for *array*, but `null` given                                               |
| undefined                      | false                     | Undefined. `octal[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                     | Symbol. `octal[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                     | RegExp. `octal[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                     | RegExp with flags. `octal[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                     | Empty plain object. `octal[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                     | Non-empty plain object. `octal[]` expected for *array*, but `object` given                           |
| Date(2026-01-30T14:52:40.744Z) | false                     | `new Date()` object. `octal[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                     | Invalid Date object. `octal[]` expected for *array*, but `date` given                                |
| Error                          | false                     | `new Error()` object. `octal[]` expected for *array*, but `error` given                              |
| new Map()                      | false                     | Empty map `new Map()`. `octal[]` expected for *array*, but `map` given                               |
| new Set()                      | false                     | Empty set `new Set()`. `octal[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                     | Non-empty map `new Map([['k', 'v']])`. `octal[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                     | Non-empty set `new Set([1, 2, 3])`. `octal[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                     | Object without prototype (Object.create(null)). `octal[]` expected for *array*, but `object` given   |
| `[]`                           | false                     | Empty array. `octal[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                     | Array with `undefined` (but returning `[null]`). `octal[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                     | Sparse array (length 3, empty slots). `octal[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                     | Nested array. `octal[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                     | Mixed array. `octal[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                     | Function `() => {}`. `octal[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                     | Async function `async () => {}`. `octal[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                     | Generator function `function* () { yield 1; }`. `octal[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 14:52:40 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>