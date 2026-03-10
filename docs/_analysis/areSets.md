# Behavior of `areSets`

## Expected parameters

| Parameter | Data type | Description                                  |
|:----------|:----------|:---------------------------------------------|
| array     | set[]     | The array to be checked for `Set` instances. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array` | Function <br> `areSets` | Description                                                              |
|:-----------------------|:------------------------|:-------------------------------------------------------------------------|
| `[{}]`                 | true                    | Single Set                                                               |
| `[{},{}]`              | true                    | Multiple Sets                                                            |
| `[{},{}]`              | true                    | Sets with different contents                                             |
| `[]`                   | false                   | Empty array (not filled)                                                 |
| `[{},{}]`              | false                   | Contains object. `set` expected for *array[1]*, but `object` given       |
| `[{},{}]`              | false                   | Contains WeakSet. `set` expected for *array[1]*, but `weakSet` given     |
| `[{},{}]`              | false                   | Contains Map. `set` expected for *array[1]*, but `map` given             |
| `[{},[]]`              | false                   | Contains array. `set` expected for *array[1]*, but `array` given         |
| `[{},null]`            | false                   | Contains null. `set` expected for *array[1]*, but `null` given           |
| `[{},null]`            | false                   | Contains undefined. `set` expected for *array[1]*, but `undefined` given |

## Default tests

| Parameter <br> `array`         | Function <br> `areSets` | Description                                                                                        |
|:-------------------------------|:------------------------|:---------------------------------------------------------------------------------------------------|
| ""                             | false                   | Empty string. `set[]` expected for *array*, but `string` given                                     |
| " "                            | false                   | Only space string. `set[]` expected for *array*, but `string` given                                |
| "\r"                           | false                   | Carriage return. `set[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                   | Data type returned by `getTypeOf()`. `set[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                   | Two word string. `set[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                   | Non-ASCII (German umlauts). `set[]` expected for *array*, but `string` given                       |
| "你好"                           | false                   | Non-Latin characters. `set[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                   | Emoji string. `set[]` expected for *array*, but `string` given                                     |
| 42                             | false                   | Positive number. `set[]` expected for *array*, but `integer` given                                 |
| -273                           | false                   | Negative number (0 Kelvin). `set[]` expected for *array*, but `integer` given                      |
| NaN                            | false                   | `NaN` (Not a Number). `set[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                   | Positive Infinity. `set[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                   | Negative Infinity. `set[]` expected for *array*, but `number` given                                |
| 0                              | false                   | BigInt zero `0n`. `set[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                   | BigInt `42n`. `set[]` expected for *array*, but `bigint` given                                     |
| true                           | false                   | Boolean. `set[]` expected for *array*, but `boolean` given                                         |
| true                           | false                   | Boolean object `Boolean(true)`. `set[]` expected for *array*, but `boolean` given                  |
| null                           | false                   | Null. `set[]` expected for *array*, but `null` given                                               |
| undefined                      | false                   | Undefined. `set[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                   | Symbol. `set[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                   | RegExp. `set[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                   | RegExp with flags. `set[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                   | Empty plain object. `set[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                   | Non-empty plain object. `set[]` expected for *array*, but `object` given                           |
| Date(2026-01-30T23:12:06.877Z) | false                   | `new Date()` object. `set[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                   | Invalid Date object. `set[]` expected for *array*, but `date` given                                |
| Error                          | false                   | `new Error()` object. `set[]` expected for *array*, but `error` given                              |
| new Map()                      | false                   | Empty map `new Map()`. `set[]` expected for *array*, but `map` given                               |
| new Set()                      | false                   | Empty set `new Set()`. `set[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                   | Non-empty map `new Map([['k', 'v']])`. `set[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                   | Non-empty set `new Set([1, 2, 3])`. `set[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                   | Object without prototype (Object.create(null)). `set[]` expected for *array*, but `object` given   |
| `[]`                           | false                   | Empty array. `set[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                   | Array with `undefined` (but returning `[null]`). `set[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                   | Sparse array (length 3, empty slots). `set[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                   | Nested array. `set[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                   | Mixed array. `set[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                   | Function `() => {}`. `set[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                   | Async function `async () => {}`. `set[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                   | Generator function `function* () { yield 1; }`. `set[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 23:12:06 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>