# Behavior of `areJson`

## Expected parameters

| Parameter | Data type | Description                                       |
|:----------|:----------|:--------------------------------------------------|
| array     | string[]  | The array to be checked for JSON string elements. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array`                  | Function <br> `areJson` | Description                                                                |
|:----------------------------------------|:------------------------|:---------------------------------------------------------------------------|
| `["{\"a\":1}"]`                         | true                    | Single JSON string                                                         |
| `["{\"a\":1}","{\"b\":2}"]`             | true                    | Multiple JSON objects                                                      |
| `["true","null","0","\"x\"","[]","{}"]` | true                    | Mixed JSON literals. `string` expected for *array[2]*, but `binary` given  |
| `[]`                                    | false                   | Empty array (not filled)                                                   |
| `["{\"a\":1}",123]`                     | false                   | Contains non-string. `string` expected for *array[1]*, but `integer` given |
| `["{\"a\":1}",""]`                      | false                   | Contains invalid JSON string                                               |
| `["{\"a\":1}"," "]`                     | false                   | Contains whitespace-only string (invalid JSON)                             |
| `["{\"a\":1}","{a:1}"]`                 | false                   | Contains invalid JSON (unquoted key)                                       |
| `["{\"a\":1}","undefined"]`             | false                   | Contains invalid JSON literal                                              |

## Default tests

| Parameter <br> `array`         | Function <br> `areJson` | Description                                                                                           |
|:-------------------------------|:------------------------|:------------------------------------------------------------------------------------------------------|
| ""                             | false                   | Empty string. `string[]` expected for *array*, but `string` given                                     |
| " "                            | false                   | Only space string. `string[]` expected for *array*, but `string` given                                |
| "\r"                           | false                   | Carriage return. `string[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                   | Data type returned by `getTypeOf()`. `string[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                   | Two word string. `string[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                   | Non-ASCII (German umlauts). `string[]` expected for *array*, but `string` given                       |
| "你好"                           | false                   | Non-Latin characters. `string[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                   | Emoji string. `string[]` expected for *array*, but `string` given                                     |
| 42                             | false                   | Positive number. `string[]` expected for *array*, but `integer` given                                 |
| -273                           | false                   | Negative number (0 Kelvin). `string[]` expected for *array*, but `integer` given                      |
| NaN                            | false                   | `NaN` (Not a Number). `string[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                   | Positive Infinity. `string[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                   | Negative Infinity. `string[]` expected for *array*, but `number` given                                |
| 0                              | false                   | BigInt zero `0n`. `string[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                   | BigInt `42n`. `string[]` expected for *array*, but `bigint` given                                     |
| true                           | false                   | Boolean. `string[]` expected for *array*, but `boolean` given                                         |
| true                           | false                   | Boolean object `Boolean(true)`. `string[]` expected for *array*, but `boolean` given                  |
| null                           | false                   | Null. `string[]` expected for *array*, but `null` given                                               |
| undefined                      | false                   | Undefined. `string[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                   | Symbol. `string[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                   | RegExp. `string[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                   | RegExp with flags. `string[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                   | Empty plain object. `string[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                   | Non-empty plain object. `string[]` expected for *array*, but `object` given                           |
| Date(2026-01-30T16:24:07.739Z) | false                   | `new Date()` object. `string[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                   | Invalid Date object. `string[]` expected for *array*, but `date` given                                |
| Error                          | false                   | `new Error()` object. `string[]` expected for *array*, but `error` given                              |
| new Map()                      | false                   | Empty map `new Map()`. `string[]` expected for *array*, but `map` given                               |
| new Set()                      | false                   | Empty set `new Set()`. `string[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                   | Non-empty map `new Map([['k', 'v']])`. `string[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                   | Non-empty set `new Set([1, 2, 3])`. `string[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                   | Object without prototype (Object.create(null)). `string[]` expected for *array*, but `object` given   |
| `[]`                           | false                   | Empty array. `string[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                   | Array with `undefined` (but returning `[null]`). `string[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                   | Sparse array (length 3, empty slots). `string[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                   | Nested array. `string[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                   | Mixed array. `string[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                   | Function `() => {}`. `string[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                   | Async function `async () => {}`. `string[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                   | Generator function `function* () { yield 1; }`. `string[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 16:24:07 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>