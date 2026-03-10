# Behavior of `areWeakSets`

## Expected parameters

| Parameter | Data type | Description                                    |
|:----------|:----------|:-----------------------------------------------|
| array     | weakSet[] | The array to be checked for `WeakSet` objects. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array` | Function <br> `areWeakSets` | Description                                                                  |
|:-----------------------|:----------------------------|:-----------------------------------------------------------------------------|
| `[{}]`                 | true                        | Single WeakSet                                                               |
| `[{},{}]`              | true                        | Multiple WeakSets                                                            |
| `[{},{}]`              | true                        | WeakSets with objects/instances                                              |
| `[]`                   | false                       | Empty array (not filled)                                                     |
| `[{},{}]`              | false                       | Contains plain object. `weakSet` expected for *array[1]*, but `object` given |
| `[{},{}]`              | false                       | Contains Set. `weakSet` expected for *array[1]*, but `set` given             |
| `[{},[]]`              | false                       | Contains array. `weakSet` expected for *array[1]*, but `array` given         |
| `[{},null]`            | false                       | Contains null. `weakSet` expected for *array[1]*, but `null` given           |
| `[{},null]`            | false                       | Contains undefined. `weakSet` expected for *array[1]*, but `undefined` given |
| `[{},"() => {}"]`      | false                       | Contains function. `weakSet` expected for *array[1]*, but `function` given   |

## Default tests

| Parameter <br> `array`         | Function <br> `areWeakSets` | Description                                                                                            |
|:-------------------------------|:----------------------------|:-------------------------------------------------------------------------------------------------------|
| ""                             | false                       | Empty string. `weakSet[]` expected for *array*, but `string` given                                     |
| " "                            | false                       | Only space string. `weakSet[]` expected for *array*, but `string` given                                |
| "\r"                           | false                       | Carriage return. `weakSet[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                       | Data type returned by `getTypeOf()`. `weakSet[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                       | Two word string. `weakSet[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                       | Non-ASCII (German umlauts). `weakSet[]` expected for *array*, but `string` given                       |
| "你好"                           | false                       | Non-Latin characters. `weakSet[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                       | Emoji string. `weakSet[]` expected for *array*, but `string` given                                     |
| 42                             | false                       | Positive number. `weakSet[]` expected for *array*, but `integer` given                                 |
| -273                           | false                       | Negative number (0 Kelvin). `weakSet[]` expected for *array*, but `integer` given                      |
| NaN                            | false                       | `NaN` (Not a Number). `weakSet[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                       | Positive Infinity. `weakSet[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                       | Negative Infinity. `weakSet[]` expected for *array*, but `number` given                                |
| 0                              | false                       | BigInt zero `0n`. `weakSet[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                       | BigInt `42n`. `weakSet[]` expected for *array*, but `bigint` given                                     |
| true                           | false                       | Boolean. `weakSet[]` expected for *array*, but `boolean` given                                         |
| true                           | false                       | Boolean object `Boolean(true)`. `weakSet[]` expected for *array*, but `boolean` given                  |
| null                           | false                       | Null. `weakSet[]` expected for *array*, but `null` given                                               |
| undefined                      | false                       | Undefined. `weakSet[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                       | Symbol. `weakSet[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                       | RegExp. `weakSet[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                       | RegExp with flags. `weakSet[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                       | Empty plain object. `weakSet[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                       | Non-empty plain object. `weakSet[]` expected for *array*, but `object` given                           |
| Date(2026-01-30T14:20:20.527Z) | false                       | `new Date()` object. `weakSet[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                       | Invalid Date object. `weakSet[]` expected for *array*, but `date` given                                |
| Error                          | false                       | `new Error()` object. `weakSet[]` expected for *array*, but `error` given                              |
| new Map()                      | false                       | Empty map `new Map()`. `weakSet[]` expected for *array*, but `map` given                               |
| new Set()                      | false                       | Empty set `new Set()`. `weakSet[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                       | Non-empty map `new Map([['k', 'v']])`. `weakSet[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                       | Non-empty set `new Set([1, 2, 3])`. `weakSet[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                       | Object without prototype (Object.create(null)). `weakSet[]` expected for *array*, but `object` given   |
| `[]`                           | false                       | Empty array. `weakSet[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                       | Array with `undefined` (but returning `[null]`). `weakSet[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                       | Sparse array (length 3, empty slots). `weakSet[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                       | Nested array. `weakSet[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                       | Mixed array. `weakSet[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                       | Function `() => {}`. `weakSet[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                       | Async function `async () => {}`. `weakSet[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                       | Generator function `function* () { yield 1; }`. `weakSet[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 14:20:20 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>