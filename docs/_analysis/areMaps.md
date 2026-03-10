# Behavior of `areMaps`

## Expected parameters

| Parameter | Data type | Description         |
|:----------|:----------|:--------------------|
| array     | map[]     | The array to check. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array` | Function <br> `areMaps` | Description                                                              |
|:-----------------------|:------------------------|:-------------------------------------------------------------------------|
| `[{}]`                 | true                    | Single Map                                                               |
| `[{},{}]`              | true                    | Multiple Maps                                                            |
| `[{},{}]`              | true                    | Maps with entries                                                        |
| `[]`                   | false                   | Empty array (not filled)                                                 |
| `[{},{}]`              | false                   | Contains object. `map` expected for *array[1]*, but `object` given       |
| `[{},{}]`              | false                   | Contains WeakMap. `map` expected for *array[1]*, but `weakMap` given     |
| `[{},{}]`              | false                   | Contains Set. `map` expected for *array[1]*, but `set` given             |
| `[{},[]]`              | false                   | Contains array. `map` expected for *array[1]*, but `array` given         |
| `[{},null]`            | false                   | Contains null. `map` expected for *array[1]*, but `null` given           |
| `[{},null]`            | false                   | Contains undefined. `map` expected for *array[1]*, but `undefined` given |

## Default tests

| Parameter <br> `array`         | Function <br> `areMaps` | Description                                                                                        |
|:-------------------------------|:------------------------|:---------------------------------------------------------------------------------------------------|
| ""                             | false                   | Empty string. `map[]` expected for *array*, but `string` given                                     |
| " "                            | false                   | Only space string. `map[]` expected for *array*, but `string` given                                |
| "\r"                           | false                   | Carriage return. `map[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                   | Data type returned by `getTypeOf()`. `map[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                   | Two word string. `map[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                   | Non-ASCII (German umlauts). `map[]` expected for *array*, but `string` given                       |
| "你好"                           | false                   | Non-Latin characters. `map[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                   | Emoji string. `map[]` expected for *array*, but `string` given                                     |
| 42                             | false                   | Positive number. `map[]` expected for *array*, but `integer` given                                 |
| -273                           | false                   | Negative number (0 Kelvin). `map[]` expected for *array*, but `integer` given                      |
| NaN                            | false                   | `NaN` (Not a Number). `map[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                   | Positive Infinity. `map[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                   | Negative Infinity. `map[]` expected for *array*, but `number` given                                |
| 0                              | false                   | BigInt zero `0n`. `map[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                   | BigInt `42n`. `map[]` expected for *array*, but `bigint` given                                     |
| true                           | false                   | Boolean. `map[]` expected for *array*, but `boolean` given                                         |
| true                           | false                   | Boolean object `Boolean(true)`. `map[]` expected for *array*, but `boolean` given                  |
| null                           | false                   | Null. `map[]` expected for *array*, but `null` given                                               |
| undefined                      | false                   | Undefined. `map[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                   | Symbol. `map[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                   | RegExp. `map[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                   | RegExp with flags. `map[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                   | Empty plain object. `map[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                   | Non-empty plain object. `map[]` expected for *array*, but `object` given                           |
| Date(2026-01-31T16:11:14.902Z) | false                   | `new Date()` object. `map[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                   | Invalid Date object. `map[]` expected for *array*, but `date` given                                |
| Error                          | false                   | `new Error()` object. `map[]` expected for *array*, but `error` given                              |
| new Map()                      | false                   | Empty map `new Map()`. `map[]` expected for *array*, but `map` given                               |
| new Set()                      | false                   | Empty set `new Set()`. `map[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                   | Non-empty map `new Map([['k', 'v']])`. `map[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                   | Non-empty set `new Set([1, 2, 3])`. `map[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                   | Object without prototype (Object.create(null)). `map[]` expected for *array*, but `object` given   |
| `[]`                           | false                   | Empty array. `map[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                   | Array with `undefined` (but returning `[null]`). `map[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                   | Sparse array (length 3, empty slots). `map[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                   | Nested array. `map[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                   | Mixed array. `map[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                   | Function `() => {}`. `map[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                   | Async function `async () => {}`. `map[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                   | Generator function `function* () { yield 1; }`. `map[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 16:11:14 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>