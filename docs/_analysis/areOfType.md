# Behavior of `areOfType`

## Expected parameters

| Parameter | Data type | Description                                          |
|:----------|:----------|:-----------------------------------------------------|
| array     | unknown[] | The array to check.                                  |
| type      | string    | The type to check against each element in the array. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array`                                    | Parameter <br> `type` | Function <br> `areOfType` | Description                                                                                                                                                                                            |
|:----------------------------------------------------------|:----------------------|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `[1,2,3]`                                                 | "number"              | true                      | All numbers. `unknown` expected for *array[0]*, but `integer` given. `unknown` expected for *array[1]*, but `integer` given. `unknown` expected for *array[2]*, but `integer` given                    |
| `["a","b","c"]`                                           | "string"              | true                      | All strings. `unknown` expected for *array[0]*, but `string` given. `unknown` expected for *array[1]*, but `string` given. `unknown` expected for *array[2]*, but `string` given                       |
| `[true,false,true]`                                       | "boolean"             | true                      | All booleans. `unknown` expected for *array[0]*, but `boolean` given. `unknown` expected for *array[1]*, but `boolean` given. `unknown` expected for *array[2]*, but `boolean` given                   |
| `[Unserializable]`                                        | "bigint"              | true                      | All bigints. `unknown` expected for *array[0]*, but `bigint` given. `unknown` expected for *array[1]*, but `bigint` given. `unknown` expected for *array[2]*, but `bigint` given                       |
| `[null,null]`                                             | "symbol"              | true                      | All symbols. `unknown` expected for *array[0]*, but `symbol` given. `unknown` expected for *array[1]*, but `symbol` given                                                                              |
| `["() => {\r\n\t\t}","() => {\r\n\t\t}"]`                 | "function"            | true                      | All functions. `unknown` expected for *array[0]*, but `function` given. `unknown` expected for *array[1]*, but `function` given                                                                        |
| `[null,null]`                                             | "null"                | true                      | All null. `unknown` expected for *array[0]*, but `null` given. `unknown` expected for *array[1]*, but `null` given                                                                                     |
| `[null,null]`                                             | "undefined"           | true                      | All undefined. `unknown` expected for *array[0]*, but `undefined` given. `unknown` expected for *array[1]*, but `undefined` given                                                                      |
| `[[],[]]`                                                 | "array"               | true                      | All arrays. `unknown` expected for *array[0]*, but `array` given. `unknown` expected for *array[1]*, but `array` given                                                                                 |
| `["2026-02-06T12:15:54.138Z","1970-01-01T00:00:00.000Z"]` | "date"                | true                      | All dates. `unknown` expected for *array[0]*, but `date` given. `unknown` expected for *array[1]*, but `date` given                                                                                    |
| `[{},{}]`                                                 | "regexp"              | true                      | All regexps. `unknown` expected for *array[0]*, but `regExp` given. `unknown` expected for *array[1]*, but `regExp` given                                                                              |
| `[3.14,-0.1,1e-7]`                                        | "float"               | true                      | All floats. `unknown` expected for *array[0]*, but `float` given. `unknown` expected for *array[1]*, but `float` given. `unknown` expected for *array[2]*, but `float` given                           |
| `[]`                                                      | "string"              | false                     | Empty array (not filled)                                                                                                                                                                               |
| `[1,"2",3]`                                               | "number"              | false                     | Mixed values (not all numbers). `unknown` expected for *array[0]*, but `integer` given. `unknown` expected for *array[1]*, but `decimal` given. `unknown` expected for *array[2]*, but `integer` given |
| `["2026-02-06T12:15:54.138Z","x"]`                        | "date"                | false                     | Mixed values (not all dates). `unknown` expected for *array[0]*, but `date` given. `unknown` expected for *array[1]*, but `string` given                                                               |

## Default tests

| Parameter <br> `array`         | Parameter <br> `type`          | Function <br> `areOfType` | Description                                                                                            |
|:-------------------------------|:-------------------------------|:--------------------------|:-------------------------------------------------------------------------------------------------------|
| ""                             | "number"                       | false                     | Empty string. `unknown[]` expected for *array*, but `string` given                                     |
| `[1,2,3]`                      | ""                             | false                     | Empty string                                                                                           |
| " "                            | "number"                       | false                     | Only space string. `unknown[]` expected for *array*, but `string` given                                |
| `[1,2,3]`                      | " "                            | false                     | Only space string                                                                                      |
| "\r"                           | "number"                       | false                     | Carriage return. `unknown[]` expected for *array*, but `string` given                                  |
| `[1,2,3]`                      | "\r"                           | false                     | Carriage return                                                                                        |
| "integer"                      | "number"                       | false                     | Data type returned by `getTypeOf()`. `unknown[]` expected for *array*, but `string` given              |
| `[1,2,3]`                      | "integer"                      | true                      | Data type returned by `getTypeOf()`                                                                    |
| "Roland Milto"                 | "number"                       | false                     | Two word string. `unknown[]` expected for *array*, but `string` given                                  |
| `[1,2,3]`                      | "Roland Milto"                 | false                     | Two word string                                                                                        |
| "äöüß"                         | "number"                       | false                     | Non-ASCII (German umlauts). `unknown[]` expected for *array*, but `string` given                       |
| `[1,2,3]`                      | "äöüß"                         | false                     | Non-ASCII (German umlauts)                                                                             |
| "你好"                           | "number"                       | false                     | Non-Latin characters. `unknown[]` expected for *array*, but `string` given                             |
| `[1,2,3]`                      | "你好"                           | false                     | Non-Latin characters                                                                                   |
| "🙂"                           | "number"                       | false                     | Emoji string. `unknown[]` expected for *array*, but `string` given                                     |
| `[1,2,3]`                      | "🙂"                           | false                     | Emoji string                                                                                           |
| 42                             | "number"                       | false                     | Positive number. `unknown[]` expected for *array*, but `integer` given                                 |
| `[1,2,3]`                      | 42                             | false                     | Positive number. `string` expected for *type*, but `integer` given                                     |
| -273                           | "number"                       | false                     | Negative number (0 Kelvin). `unknown[]` expected for *array*, but `integer` given                      |
| `[1,2,3]`                      | -273                           | false                     | Negative number (0 Kelvin). `string` expected for *type*, but `integer` given                          |
| NaN                            | "number"                       | false                     | `NaN` (Not a Number). `unknown[]` expected for *array*, but `nan` given                                |
| `[1,2,3]`                      | NaN                            | false                     | `NaN` (Not a Number). `string` expected for *type*, but `nan` given                                    |
| Infinity                       | "number"                       | false                     | Positive Infinity. `unknown[]` expected for *array*, but `number` given                                |
| `[1,2,3]`                      | Infinity                       | false                     | Positive Infinity. `string` expected for *type*, but `number` given                                    |
| -Infinity                      | "number"                       | false                     | Negative Infinity. `unknown[]` expected for *array*, but `number` given                                |
| `[1,2,3]`                      | -Infinity                      | false                     | Negative Infinity. `string` expected for *type*, but `number` given                                    |
| 0                              | "number"                       | false                     | BigInt zero `0n`. `unknown[]` expected for *array*, but `bigint` given                                 |
| `[1,2,3]`                      | 0                              | false                     | BigInt zero `0n`. `string` expected for *type*, but `bigint` given                                     |
| 42                             | "number"                       | false                     | BigInt `42n`. `unknown[]` expected for *array*, but `bigint` given                                     |
| `[1,2,3]`                      | 42                             | false                     | BigInt `42n`. `string` expected for *type*, but `bigint` given                                         |
| true                           | "number"                       | false                     | Boolean. `unknown[]` expected for *array*, but `boolean` given                                         |
| `[1,2,3]`                      | true                           | false                     | Boolean. `string` expected for *type*, but `boolean` given                                             |
| true                           | "number"                       | false                     | Boolean object `Boolean(true)`. `unknown[]` expected for *array*, but `boolean` given                  |
| `[1,2,3]`                      | true                           | false                     | Boolean object `Boolean(true)`. `string` expected for *type*, but `boolean` given                      |
| null                           | "number"                       | false                     | Null. `unknown[]` expected for *array*, but `null` given                                               |
| `[1,2,3]`                      | null                           | false                     | Null. `string` expected for *type*, but `null` given                                                   |
| undefined                      | "number"                       | false                     | Undefined. `unknown[]` expected for *array*, but `undefined` given                                     |
| `[1,2,3]`                      | undefined                      | false                     | Undefined. `string` expected for *type*, but `undefined` given                                         |
| Symbol()                       | "number"                       | false                     | Symbol. `unknown[]` expected for *array*, but `symbol` given                                           |
| `[1,2,3]`                      | Symbol()                       | false                     | Symbol. `string` expected for *type*, but `symbol` given                                               |
| /./                            | "number"                       | false                     | RegExp. `unknown[]` expected for *array*, but `regExp` given                                           |
| `[1,2,3]`                      | /./                            | false                     | RegExp. `string` expected for *type*, but `regExp` given                                               |
| /^Roland$/i                    | "number"                       | false                     | RegExp with flags. `unknown[]` expected for *array*, but `regExp` given                                |
| `[1,2,3]`                      | /^Roland$/i                    | false                     | RegExp with flags. `string` expected for *type*, but `regExp` given                                    |
| `{}`                           | "number"                       | false                     | Empty plain object. `unknown[]` expected for *array*, but `object` given                               |
| `[1,2,3]`                      | `{}`                           | false                     | Empty plain object. `string` expected for *type*, but `object` given                                   |
| `{"dev":"Roland Milto"}`       | "number"                       | false                     | Non-empty plain object. `unknown[]` expected for *array*, but `object` given                           |
| `[1,2,3]`                      | `{"dev":"Roland Milto"}`       | false                     | Non-empty plain object. `string` expected for *type*, but `object` given                               |
| Date(2026-02-06T12:15:54.132Z) | "number"                       | false                     | `new Date()` object. `unknown[]` expected for *array*, but `date` given                                |
| `[1,2,3]`                      | Date(2026-02-06T12:15:54.132Z) | false                     | `new Date()` object. `string` expected for *type*, but `date` given                                    |
| Date(Invalid)                  | "number"                       | false                     | Invalid Date object. `unknown[]` expected for *array*, but `date` given                                |
| `[1,2,3]`                      | Date(Invalid)                  | false                     | Invalid Date object. `string` expected for *type*, but `date` given                                    |
| Error                          | "number"                       | false                     | `new Error()` object. `unknown[]` expected for *array*, but `error` given                              |
| `[1,2,3]`                      | Error                          | false                     | `new Error()` object. `string` expected for *type*, but `error` given                                  |
| new Map()                      | "number"                       | false                     | Empty map `new Map()`. `unknown[]` expected for *array*, but `map` given                               |
| `[1,2,3]`                      | new Map()                      | false                     | Empty map `new Map()`. `string` expected for *type*, but `map` given                                   |
| new Set()                      | "number"                       | false                     | Empty set `new Set()`. `unknown[]` expected for *array*, but `set` given                               |
| `[1,2,3]`                      | new Set()                      | false                     | Empty set `new Set()`. `string` expected for *type*, but `set` given                                   |
| new Map([["k", "v"]])          | "number"                       | false                     | Non-empty map `new Map([['k', 'v']])`. `unknown[]` expected for *array*, but `map` given               |
| `[1,2,3]`                      | new Map([["k", "v"]])          | false                     | Non-empty map `new Map([['k', 'v']])`. `string` expected for *type*, but `map` given                   |
| new Set([1, 2, 3])             | "number"                       | false                     | Non-empty set `new Set([1, 2, 3])`. `unknown[]` expected for *array*, but `set` given                  |
| `[1,2,3]`                      | new Set([1, 2, 3])             | false                     | Non-empty set `new Set([1, 2, 3])`. `string` expected for *type*, but `set` given                      |
| [Object: null prototype] {}    | "number"                       | false                     | Object without prototype (Object.create(null)). `unknown[]` expected for *array*, but `object` given   |
| `[1,2,3]`                      | [Object: null prototype] {}    | false                     | Object without prototype (Object.create(null)). `string` expected for *type*, but `object` given       |
| `[]`                           | "number"                       | false                     | Empty array. `unknown[]` expected for *array*, but `array` given                                       |
| `[1,2,3]`                      | `[]`                           | false                     | Empty array. `string` expected for *type*, but `array` given                                           |
| `[null]`                       | "number"                       | false                     | Array with `undefined` (but returning `[null]`). `unknown[]` expected for *array*, but `array` given   |
| `[1,2,3]`                      | `[null]`                       | false                     | Array with `undefined` (but returning `[null]`). `string` expected for *type*, but `array` given       |
| `[null,null,null]`             | "number"                       | false                     | Sparse array (length 3, empty slots). `unknown[]` expected for *array*, but `array` given              |
| `[1,2,3]`                      | `[null,null,null]`             | false                     | Sparse array (length 3, empty slots). `string` expected for *type*, but `array` given                  |
| `[["nested"]]`                 | "number"                       | false                     | Nested array. `unknown[]` expected for *array*, but `array` given                                      |
| `[1,2,3]`                      | `[["nested"]]`                 | false                     | Nested array. `string` expected for *type*, but `array` given                                          |
| `["Birthday",18,8,1990]`       | "number"                       | false                     | Mixed array. `unknown[]` expected for *array*, but `array` given                                       |
| `[1,2,3]`                      | `["Birthday",18,8,1990]`       | false                     | Mixed array. `string` expected for *type*, but `array` given                                           |
| ()=>{}                         | "number"                       | false                     | Function `() => {}`. `unknown[]` expected for *array*, but `function` given                            |
| `[1,2,3]`                      | ()=>{}                         | false                     | Function `() => {}`. `string` expected for *type*, but `function` given                                |
| async()=>{}                    | "number"                       | false                     | Async function `async () => {}`. `unknown[]` expected for *array*, but `function` given                |
| `[1,2,3]`                      | async()=>{}                    | false                     | Async function `async () => {}`. `string` expected for *type*, but `function` given                    |
| function*(){yield 1;}          | "number"                       | false                     | Generator function `function* () { yield 1; }`. `unknown[]` expected for *array*, but `function` given |
| `[1,2,3]`                      | function*(){yield 1;}          | false                     | Generator function `function* () { yield 1; }`. `string` expected for *type*, but `function` given     |

<br>

---

<small>The file was generated on 6 February 2026 at 12:15:54 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>