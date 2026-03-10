# Behavior of `areFinite`

## Expected parameters

| Parameter | Data type | Description                                                 |
|:----------|:----------|:------------------------------------------------------------|
| array     | finite[]  | The array to be checked for finiteness of all its elements. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array`             | Function <br> `areFinite` | Description                                                                                                                                                                                       |
|:-----------------------------------|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `[1]`                              | true                      | Single finite number. `finite` expected for *array[0]*, but `integer` given                                                                                                                       |
| `[1,2,3]`                          | true                      | All finite integers. `finite` expected for *array[0]*, but `integer` given. `finite` expected for *array[1]*, but `integer` given. `finite` expected for *array[2]*, but `integer` given          |
| `[10.5,-3,0]`                      | true                      | Finite mixed numbers. `finite` expected for *array[0]*, but `float` given. `finite` expected for *array[1]*, but `integer` given. `finite` expected for *array[2]*, but `integer` given           |
| `[5e-324,1.7976931348623157e+308]` | true                      | Finite boundaries. `finite` expected for *array[0]*, but `float` given. `finite` expected for *array[1]*, but `number` given                                                                      |
| `[]`                               | false                     | Empty array (not filled)                                                                                                                                                                          |
| `[1,"Infinity",3]`                 | false                     | Contains Infinity. `finite` expected for *array[0]*, but `integer` given. `finite` expected for *array[1]*, but `number` given. `finite` expected for *array[2]*, but `integer` given             |
| `[1,"-Infinity",3]`                | false                     | Contains -Infinity. `finite` expected for *array[0]*, but `integer` given. `finite` expected for *array[1]*, but `number` given. `finite` expected for *array[2]*, but `integer` given            |
| `[1,"NaN",3]`                      | false                     | Contains NaN. `finite` expected for *array[0]*, but `integer` given. `finite` expected for *array[1]*, but `nan` given. `finite` expected for *array[2]*, but `integer` given                     |
| `[1,"2",3]`                        | false                     | Contains number as string. `finite` expected for *array[0]*, but `integer` given. `finite` expected for *array[1]*, but `decimal` given. `finite` expected for *array[2]*, but `integer` given    |
| `[1,2,3]`                          | true                      | Contains boxed Number object. `finite` expected for *array[0]*, but `integer` given. `finite` expected for *array[1]*, but `integer` given. `finite` expected for *array[2]*, but `integer` given |

## Default tests

| Parameter <br> `array`         | Function <br> `areFinite` | Description                                                                                           |
|:-------------------------------|:--------------------------|:------------------------------------------------------------------------------------------------------|
| ""                             | false                     | Empty string. `finite[]` expected for *array*, but `string` given                                     |
| " "                            | false                     | Only space string. `finite[]` expected for *array*, but `string` given                                |
| "\r"                           | false                     | Carriage return. `finite[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                     | Data type returned by `getTypeOf()`. `finite[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                     | Two word string. `finite[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                     | Non-ASCII (German umlauts). `finite[]` expected for *array*, but `string` given                       |
| "你好"                           | false                     | Non-Latin characters. `finite[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                     | Emoji string. `finite[]` expected for *array*, but `string` given                                     |
| 42                             | false                     | Positive number. `finite[]` expected for *array*, but `integer` given                                 |
| -273                           | false                     | Negative number (0 Kelvin). `finite[]` expected for *array*, but `integer` given                      |
| NaN                            | false                     | `NaN` (Not a Number). `finite[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                     | Positive Infinity. `finite[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                     | Negative Infinity. `finite[]` expected for *array*, but `number` given                                |
| 0                              | false                     | BigInt zero `0n`. `finite[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                     | BigInt `42n`. `finite[]` expected for *array*, but `bigint` given                                     |
| true                           | false                     | Boolean. `finite[]` expected for *array*, but `boolean` given                                         |
| true                           | false                     | Boolean object `Boolean(true)`. `finite[]` expected for *array*, but `boolean` given                  |
| null                           | false                     | Null. `finite[]` expected for *array*, but `null` given                                               |
| undefined                      | false                     | Undefined. `finite[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                     | Symbol. `finite[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                     | RegExp. `finite[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                     | RegExp with flags. `finite[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                     | Empty plain object. `finite[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                     | Non-empty plain object. `finite[]` expected for *array*, but `object` given                           |
| Date(2026-01-30T16:33:07.496Z) | false                     | `new Date()` object. `finite[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                     | Invalid Date object. `finite[]` expected for *array*, but `date` given                                |
| Error                          | false                     | `new Error()` object. `finite[]` expected for *array*, but `error` given                              |
| new Map()                      | false                     | Empty map `new Map()`. `finite[]` expected for *array*, but `map` given                               |
| new Set()                      | false                     | Empty set `new Set()`. `finite[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                     | Non-empty map `new Map([['k', 'v']])`. `finite[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                     | Non-empty set `new Set([1, 2, 3])`. `finite[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                     | Object without prototype (Object.create(null)). `finite[]` expected for *array*, but `object` given   |
| `[]`                           | false                     | Empty array. `finite[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                     | Array with `undefined` (but returning `[null]`). `finite[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                     | Sparse array (length 3, empty slots). `finite[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                     | Nested array. `finite[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                     | Mixed array. `finite[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                     | Function `() => {}`. `finite[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                     | Async function `async () => {}`. `finite[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                     | Generator function `function* () { yield 1; }`. `finite[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 16:33:07 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>