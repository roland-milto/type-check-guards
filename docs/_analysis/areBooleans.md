# Behavior of `areBooleans`

## Expected parameters

| Parameter | Data type | Description                                   |
|:----------|:----------|:----------------------------------------------|
| array     | boolean[] | The array to be checked for boolean elements. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array` | Function <br> `areBooleans` | Description                                                                  |
|:-----------------------|:----------------------------|:-----------------------------------------------------------------------------|
| `[true]`               | true                        | Single boolean true                                                          |
| `[false]`              | true                        | Single boolean false                                                         |
| `[true,false,true]`    | true                        | Mixed booleans                                                               |
| `[true,false]`         | true                        | Two booleans                                                                 |
| `[]`                   | false                       | Empty array (not filled)                                                     |
| `[true,1,false]`       | false                       | Contains number. `boolean` expected for *array[1]*, but `integer` given      |
| `[true,"false"]`       | false                       | Contains string. `boolean` expected for *array[1]*, but `string` given       |
| `[true,false]`         | true                        | Contains boxed Boolean object                                                |
| `[true,null]`          | false                       | Contains null. `boolean` expected for *array[1]*, but `null` given           |
| `[true,null]`          | false                       | Contains undefined. `boolean` expected for *array[1]*, but `undefined` given |

## Default tests

| Parameter <br> `array`         | Function <br> `areBooleans` | Description                                                                                            |
|:-------------------------------|:----------------------------|:-------------------------------------------------------------------------------------------------------|
| ""                             | false                       | Empty string. `boolean[]` expected for *array*, but `string` given                                     |
| " "                            | false                       | Only space string. `boolean[]` expected for *array*, but `string` given                                |
| "\r"                           | false                       | Carriage return. `boolean[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                       | Data type returned by `getTypeOf()`. `boolean[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                       | Two word string. `boolean[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                       | Non-ASCII (German umlauts). `boolean[]` expected for *array*, but `string` given                       |
| "你好"                           | false                       | Non-Latin characters. `boolean[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                       | Emoji string. `boolean[]` expected for *array*, but `string` given                                     |
| 42                             | false                       | Positive number. `boolean[]` expected for *array*, but `integer` given                                 |
| -273                           | false                       | Negative number (0 Kelvin). `boolean[]` expected for *array*, but `integer` given                      |
| NaN                            | false                       | `NaN` (Not a Number). `boolean[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                       | Positive Infinity. `boolean[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                       | Negative Infinity. `boolean[]` expected for *array*, but `number` given                                |
| 0                              | false                       | BigInt zero `0n`. `boolean[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                       | BigInt `42n`. `boolean[]` expected for *array*, but `bigint` given                                     |
| true                           | false                       | Boolean. `boolean[]` expected for *array*, but `boolean` given                                         |
| true                           | false                       | Boolean object `Boolean(true)`. `boolean[]` expected for *array*, but `boolean` given                  |
| null                           | false                       | Null. `boolean[]` expected for *array*, but `null` given                                               |
| undefined                      | false                       | Undefined. `boolean[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                       | Symbol. `boolean[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                       | RegExp. `boolean[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                       | RegExp with flags. `boolean[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                       | Empty plain object. `boolean[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                       | Non-empty plain object. `boolean[]` expected for *array*, but `object` given                           |
| Date(2026-01-30T14:38:52.657Z) | false                       | `new Date()` object. `boolean[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                       | Invalid Date object. `boolean[]` expected for *array*, but `date` given                                |
| Error                          | false                       | `new Error()` object. `boolean[]` expected for *array*, but `error` given                              |
| new Map()                      | false                       | Empty map `new Map()`. `boolean[]` expected for *array*, but `map` given                               |
| new Set()                      | false                       | Empty set `new Set()`. `boolean[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                       | Non-empty map `new Map([['k', 'v']])`. `boolean[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                       | Non-empty set `new Set([1, 2, 3])`. `boolean[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                       | Object without prototype (Object.create(null)). `boolean[]` expected for *array*, but `object` given   |
| `[]`                           | false                       | Empty array. `boolean[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                       | Array with `undefined` (but returning `[null]`). `boolean[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                       | Sparse array (length 3, empty slots). `boolean[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                       | Nested array. `boolean[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                       | Mixed array. `boolean[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                       | Function `() => {}`. `boolean[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                       | Async function `async () => {}`. `boolean[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                       | Generator function `function* () { yield 1; }`. `boolean[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 14:38:52 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>