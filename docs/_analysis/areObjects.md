# Behavior of `areObjects`

## Expected parameters

| Parameter | Data type | Description                                  |
|:----------|:----------|:---------------------------------------------|
| array     | object[]  | The array to be checked for object elements. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array`                    | Function <br> `areObjects` | Description                                                                                                                                          |
|:------------------------------------------|:---------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `[{}]`                                    | true                       | Single object                                                                                                                                        |
| `[{},{"a":1},"2026-01-31T00:07:42.213Z"]` | true                       | Mixed objects (plain + date). `object` expected for *array[2]*, but `date` given                                                                     |
| `[[],{},{}]`                              | true                       | Array, plain object, RegExp (all objects). `object` expected for *array[0]*, but `array` given. `object` expected for *array[2]*, but `regExp` given |
| `[{},{}]`                                 | true                       | Map and Set (objects). `object` expected for *array[0]*, but `map` given. `object` expected for *array[1]*, but `set` given                          |
| `[]`                                      | false                      | Empty array (not filled)                                                                                                                             |
| `[{},42,{"a":1}]`                         | false                      | Contains number. `object` expected for *array[1]*, but `integer` given                                                                               |
| `[{},"x",{}]`                             | false                      | Contains string. `object` expected for *array[1]*, but `string` given                                                                                |
| `[{},null,{}]`                            | false                      | Contains null. `object` expected for *array[1]*, but `null` given                                                                                    |
| `[{},"() => {}",{}]`                      | false                      | Contains function (not object). `object` expected for *array[1]*, but `function` given                                                               |

## Default tests

| Parameter <br> `array`         | Function <br> `areObjects` | Description                                                                                           |
|:-------------------------------|:---------------------------|:------------------------------------------------------------------------------------------------------|
| ""                             | false                      | Empty string. `object[]` expected for *array*, but `string` given                                     |
| " "                            | false                      | Only space string. `object[]` expected for *array*, but `string` given                                |
| "\r"                           | false                      | Carriage return. `object[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                      | Data type returned by `getTypeOf()`. `object[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                      | Two word string. `object[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                      | Non-ASCII (German umlauts). `object[]` expected for *array*, but `string` given                       |
| "你好"                           | false                      | Non-Latin characters. `object[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                      | Emoji string. `object[]` expected for *array*, but `string` given                                     |
| 42                             | false                      | Positive number. `object[]` expected for *array*, but `integer` given                                 |
| -273                           | false                      | Negative number (0 Kelvin). `object[]` expected for *array*, but `integer` given                      |
| NaN                            | false                      | `NaN` (Not a Number). `object[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                      | Positive Infinity. `object[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                      | Negative Infinity. `object[]` expected for *array*, but `number` given                                |
| 0                              | false                      | BigInt zero `0n`. `object[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                      | BigInt `42n`. `object[]` expected for *array*, but `bigint` given                                     |
| true                           | false                      | Boolean. `object[]` expected for *array*, but `boolean` given                                         |
| true                           | false                      | Boolean object `Boolean(true)`. `object[]` expected for *array*, but `boolean` given                  |
| null                           | false                      | Null. `object[]` expected for *array*, but `null` given                                               |
| undefined                      | false                      | Undefined. `object[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                      | Symbol. `object[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                      | RegExp. `object[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                      | RegExp with flags. `object[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                      | Empty plain object. `object[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                      | Non-empty plain object. `object[]` expected for *array*, but `object` given                           |
| Date(2026-01-31T00:07:42.210Z) | false                      | `new Date()` object. `object[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                      | Invalid Date object. `object[]` expected for *array*, but `date` given                                |
| Error                          | false                      | `new Error()` object. `object[]` expected for *array*, but `error` given                              |
| new Map()                      | false                      | Empty map `new Map()`. `object[]` expected for *array*, but `map` given                               |
| new Set()                      | false                      | Empty set `new Set()`. `object[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                      | Non-empty map `new Map([['k', 'v']])`. `object[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                      | Non-empty set `new Set([1, 2, 3])`. `object[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                      | Object without prototype (Object.create(null)). `object[]` expected for *array*, but `object` given   |
| `[]`                           | false                      | Empty array. `object[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                      | Array with `undefined` (but returning `[null]`). `object[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                      | Sparse array (length 3, empty slots). `object[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | true                       | Nested array. `object[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                      | Mixed array. `object[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                      | Function `() => {}`. `object[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                      | Async function `async () => {}`. `object[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                      | Generator function `function* () { yield 1; }`. `object[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 00:07:42 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>