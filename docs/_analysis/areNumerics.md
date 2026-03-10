# Behavior of `areNumerics`

## Expected parameters

| Parameter | Data type | Description                              |
|:----------|:----------|:-----------------------------------------|
| array     | unknown   | The array to check for numeric elements. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array`         | Function <br> `areNumerics` | Description                                                                                       |
|:-------------------------------|:----------------------------|:--------------------------------------------------------------------------------------------------|
| `[1,2,3]`                      | true                        | All numbers (numeric). `unknown` expected for *array*, but `array` given                          |
| `[-3.14,0,42]`                 | true                        | Mixed finite numbers (numeric). `unknown` expected for *array*, but `array` given                 |
| `[Unserializable]`             | true                        | All BigInts (numeric). `unknown` expected for *array*, but `array` given                          |
| `["123","0xFF","0o10","0b11"]` | true                        | All numeric strings (decimal/hex/octal/binary). `unknown` expected for *array*, but `array` given |
| `[]`                           | false                       | Empty array (not filled). `unknown` expected for *array*, but `array` given                       |
| "string"                       | false                       | Not an array (invalid). `unknown` expected for *array*, but `string` given                        |
| `[1,"two",3]`                  | false                       | Contains non-numeric string. `unknown` expected for *array*, but `array` given                    |
| `[1,{},3]`                     | false                       | Contains object. `unknown` expected for *array*, but `array` given                                |
| `[1,null,3]`                   | false                       | Contains null. `unknown` expected for *array*, but `array` given                                  |
| `[1,null,3]`                   | false                       | Contains undefined. `unknown` expected for *array*, but `array` given                             |

## Default tests

| Parameter <br> `array`         | Function <br> `areNumerics` | Description                                                                                          |
|:-------------------------------|:----------------------------|:-----------------------------------------------------------------------------------------------------|
| ""                             | false                       | Empty string. `unknown` expected for *array*, but `string` given                                     |
| " "                            | false                       | Only space string. `unknown` expected for *array*, but `string` given                                |
| "\r"                           | false                       | Carriage return. `unknown` expected for *array*, but `string` given                                  |
| "integer"                      | false                       | Data type returned by `getTypeOf()`. `unknown` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                       | Two word string. `unknown` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                       | Non-ASCII (German umlauts). `unknown` expected for *array*, but `string` given                       |
| "你好"                           | false                       | Non-Latin characters. `unknown` expected for *array*, but `string` given                             |
| "🙂"                           | false                       | Emoji string. `unknown` expected for *array*, but `string` given                                     |
| 42                             | false                       | Positive number. `unknown` expected for *array*, but `integer` given                                 |
| -273                           | false                       | Negative number (0 Kelvin). `unknown` expected for *array*, but `integer` given                      |
| NaN                            | false                       | `NaN` (Not a Number). `unknown` expected for *array*, but `nan` given                                |
| Infinity                       | false                       | Positive Infinity. `unknown` expected for *array*, but `number` given                                |
| -Infinity                      | false                       | Negative Infinity. `unknown` expected for *array*, but `number` given                                |
| 0                              | false                       | BigInt zero `0n`. `unknown` expected for *array*, but `bigint` given                                 |
| 42                             | false                       | BigInt `42n`. `unknown` expected for *array*, but `bigint` given                                     |
| true                           | false                       | Boolean. `unknown` expected for *array*, but `boolean` given                                         |
| true                           | false                       | Boolean object `Boolean(true)`. `unknown` expected for *array*, but `boolean` given                  |
| null                           | false                       | Null. `unknown` expected for *array*, but `null` given                                               |
| undefined                      | false                       | Undefined. `unknown` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                       | Symbol. `unknown` expected for *array*, but `symbol` given                                           |
| /./                            | false                       | RegExp. `unknown` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                       | RegExp with flags. `unknown` expected for *array*, but `regExp` given                                |
| `{}`                           | false                       | Empty plain object. `unknown` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                       | Non-empty plain object. `unknown` expected for *array*, but `object` given                           |
| Date(2026-02-06T16:03:34.742Z) | false                       | `new Date()` object. `unknown` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                       | Invalid Date object. `unknown` expected for *array*, but `date` given                                |
| Error                          | false                       | `new Error()` object. `unknown` expected for *array*, but `error` given                              |
| new Map()                      | false                       | Empty map `new Map()`. `unknown` expected for *array*, but `map` given                               |
| new Set()                      | false                       | Empty set `new Set()`. `unknown` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                       | Non-empty map `new Map([['k', 'v']])`. `unknown` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                       | Non-empty set `new Set([1, 2, 3])`. `unknown` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                       | Object without prototype (Object.create(null)). `unknown` expected for *array*, but `object` given   |
| `[]`                           | false                       | Empty array. `unknown` expected for *array*, but `array` given                                       |
| `[null]`                       | false                       | Array with `undefined` (but returning `[null]`). `unknown` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                       | Sparse array (length 3, empty slots). `unknown` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                       | Nested array. `unknown` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                       | Mixed array. `unknown` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                       | Function `() => {}`. `unknown` expected for *array*, but `function` given                            |
| async()=>{}                    | false                       | Async function `async () => {}`. `unknown` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                       | Generator function `function* () { yield 1; }`. `unknown` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 6 February 2026 at 16:03:34 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>