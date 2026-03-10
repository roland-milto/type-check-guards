# Behavior of `arePlainObjects`

## Expected parameters

| Parameter | Data type     | Description                                        |
|:----------|:--------------|:---------------------------------------------------|
| array     | plainObject[] | The array to be checked for plain object elements. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array`            | Function <br> `arePlainObjects` | Description                                                                                                                                                  |
|:----------------------------------|:--------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `[{}]`                            | true                            | Single plain object. `plainObject` expected for *array[0]*, but `object` given                                                                               |
| `[{"a":1},{"b":2}]`               | true                            | Multiple plain objects with properties. `plainObject` expected for *array[0]*, but `object` given. `plainObject` expected for *array[1]*, but `object` given |
| `[{},{}]`                         | true                            | Object literal and Object constructor. `plainObject` expected for *array[0]*, but `object` given. `plainObject` expected for *array[1]*, but `object` given  |
| `[]`                              | false                           | Empty array (not filled)                                                                                                                                     |
| `[{},[]]`                         | false                           | Contains array. `plainObject` expected for *array[0]*, but `object` given. `plainObject` expected for *array[1]*, but `array` given                          |
| `[{},"2026-01-30T16:54:24.744Z"]` | false                           | Contains Date. `plainObject` expected for *array[0]*, but `object` given. `plainObject` expected for *array[1]*, but `date` given                            |
| `[{},{}]`                         | false                           | Contains RegExp. `plainObject` expected for *array[0]*, but `object` given. `plainObject` expected for *array[1]*, but `regExp` given                        |
| `[{},{}]`                         | false                           | Contains Map. `plainObject` expected for *array[0]*, but `object` given. `plainObject` expected for *array[1]*, but `map` given                              |
| `[{},null]`                       | false                           | Contains null. `plainObject` expected for *array[0]*, but `object` given. `plainObject` expected for *array[1]*, but `null` given                            |
| `[{},null]`                       | false                           | Contains undefined. `plainObject` expected for *array[0]*, but `object` given. `plainObject` expected for *array[1]*, but `undefined` given                  |

## Default tests

| Parameter <br> `array`         | Function <br> `arePlainObjects` | Description                                                                                                |
|:-------------------------------|:--------------------------------|:-----------------------------------------------------------------------------------------------------------|
| ""                             | false                           | Empty string. `plainObject[]` expected for *array*, but `string` given                                     |
| " "                            | false                           | Only space string. `plainObject[]` expected for *array*, but `string` given                                |
| "\r"                           | false                           | Carriage return. `plainObject[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                           | Data type returned by `getTypeOf()`. `plainObject[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                           | Two word string. `plainObject[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                           | Non-ASCII (German umlauts). `plainObject[]` expected for *array*, but `string` given                       |
| "你好"                           | false                           | Non-Latin characters. `plainObject[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                           | Emoji string. `plainObject[]` expected for *array*, but `string` given                                     |
| 42                             | false                           | Positive number. `plainObject[]` expected for *array*, but `integer` given                                 |
| -273                           | false                           | Negative number (0 Kelvin). `plainObject[]` expected for *array*, but `integer` given                      |
| NaN                            | false                           | `NaN` (Not a Number). `plainObject[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                           | Positive Infinity. `plainObject[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                           | Negative Infinity. `plainObject[]` expected for *array*, but `number` given                                |
| 0                              | false                           | BigInt zero `0n`. `plainObject[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                           | BigInt `42n`. `plainObject[]` expected for *array*, but `bigint` given                                     |
| true                           | false                           | Boolean. `plainObject[]` expected for *array*, but `boolean` given                                         |
| true                           | false                           | Boolean object `Boolean(true)`. `plainObject[]` expected for *array*, but `boolean` given                  |
| null                           | false                           | Null. `plainObject[]` expected for *array*, but `null` given                                               |
| undefined                      | false                           | Undefined. `plainObject[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                           | Symbol. `plainObject[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                           | RegExp. `plainObject[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                           | RegExp with flags. `plainObject[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                           | Empty plain object. `plainObject[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                           | Non-empty plain object. `plainObject[]` expected for *array*, but `object` given                           |
| Date(2026-01-30T16:54:24.742Z) | false                           | `new Date()` object. `plainObject[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                           | Invalid Date object. `plainObject[]` expected for *array*, but `date` given                                |
| Error                          | false                           | `new Error()` object. `plainObject[]` expected for *array*, but `error` given                              |
| new Map()                      | false                           | Empty map `new Map()`. `plainObject[]` expected for *array*, but `map` given                               |
| new Set()                      | false                           | Empty set `new Set()`. `plainObject[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                           | Non-empty map `new Map([['k', 'v']])`. `plainObject[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                           | Non-empty set `new Set([1, 2, 3])`. `plainObject[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                           | Object without prototype (Object.create(null)). `plainObject[]` expected for *array*, but `object` given   |
| `[]`                           | false                           | Empty array. `plainObject[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                           | Array with `undefined` (but returning `[null]`). `plainObject[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                           | Sparse array (length 3, empty slots). `plainObject[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                           | Nested array. `plainObject[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                           | Mixed array. `plainObject[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                           | Function `() => {}`. `plainObject[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                           | Async function `async () => {}`. `plainObject[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                           | Generator function `function* () { yield 1; }`. `plainObject[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 16:54:24 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>