# Behavior of `areFalse`

## Expected parameters

| Parameter | Data type | Description                                          |
|:----------|:----------|:-----------------------------------------------------|
| array     | false[]   | The array to check, containing elements of any type. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array`  | Function <br> `areFalse` | Description                                                                                                                                                                                           |
|:------------------------|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `[false]`               | true                     | Single false. `false` expected for *array[0]*, but `boolean` given                                                                                                                                    |
| `[false,false,false]`   | true                     | All false values. `false` expected for *array[0]*, but `boolean` given. `false` expected for *array[1]*, but `boolean` given. `false` expected for *array[2]*, but `boolean` given                    |
| `[false,false]`         | true                     | Two false values. `false` expected for *array[0]*, but `boolean` given. `false` expected for *array[1]*, but `boolean` given                                                                          |
| `[]`                    | false                    | Empty array (not filled)                                                                                                                                                                              |
| `[false,true,false]`    | false                    | Contains true. `false` expected for *array[0]*, but `boolean` given. `false` expected for *array[1]*, but `boolean` given. `false` expected for *array[2]*, but `boolean` given                       |
| `[false,0,false]`       | false                    | Contains falsy number 0 (not false). `false` expected for *array[0]*, but `boolean` given. `false` expected for *array[1]*, but `integer` given. `false` expected for *array[2]*, but `boolean` given |
| `[false,"false",false]` | false                    | Contains string 'false'. `false` expected for *array[0]*, but `boolean` given. `false` expected for *array[1]*, but `string` given. `false` expected for *array[2]*, but `boolean` given              |
| `[false,false,false]`   | false                    | Contains boxed Boolean object. `false` expected for *array[0]*, but `boolean` given. `false` expected for *array[1]*, but `boolean` given. `false` expected for *array[2]*, but `boolean` given       |
| `[false,null,false]`    | false                    | Contains null. `false` expected for *array[0]*, but `boolean` given. `false` expected for *array[1]*, but `null` given. `false` expected for *array[2]*, but `boolean` given                          |
| `[false,null,false]`    | false                    | Contains undefined. `false` expected for *array[0]*, but `boolean` given. `false` expected for *array[1]*, but `undefined` given. `false` expected for *array[2]*, but `boolean` given                |
| `[false,{},false]`      | false                    | Contains object. `false` expected for *array[0]*, but `boolean` given. `false` expected for *array[1]*, but `object` given. `false` expected for *array[2]*, but `boolean` given                      |
| `[false,[],false]`      | false                    | Contains array. `false` expected for *array[0]*, but `boolean` given. `false` expected for *array[1]*, but `array` given. `false` expected for *array[2]*, but `boolean` given                        |

## Default tests

| Parameter <br> `array`         | Function <br> `areFalse` | Description                                                                                          |
|:-------------------------------|:-------------------------|:-----------------------------------------------------------------------------------------------------|
| ""                             | false                    | Empty string. `false[]` expected for *array*, but `string` given                                     |
| " "                            | false                    | Only space string. `false[]` expected for *array*, but `string` given                                |
| "\r"                           | false                    | Carriage return. `false[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                    | Data type returned by `getTypeOf()`. `false[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                    | Two word string. `false[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                    | Non-ASCII (German umlauts). `false[]` expected for *array*, but `string` given                       |
| "你好"                           | false                    | Non-Latin characters. `false[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                    | Emoji string. `false[]` expected for *array*, but `string` given                                     |
| 42                             | false                    | Positive number. `false[]` expected for *array*, but `integer` given                                 |
| -273                           | false                    | Negative number (0 Kelvin). `false[]` expected for *array*, but `integer` given                      |
| NaN                            | false                    | `NaN` (Not a Number). `false[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                    | Positive Infinity. `false[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                    | Negative Infinity. `false[]` expected for *array*, but `number` given                                |
| 0                              | false                    | BigInt zero `0n`. `false[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                    | BigInt `42n`. `false[]` expected for *array*, but `bigint` given                                     |
| true                           | false                    | Boolean. `false[]` expected for *array*, but `boolean` given                                         |
| true                           | false                    | Boolean object `Boolean(true)`. `false[]` expected for *array*, but `boolean` given                  |
| null                           | false                    | Null. `false[]` expected for *array*, but `null` given                                               |
| undefined                      | false                    | Undefined. `false[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                    | Symbol. `false[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                    | RegExp. `false[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                    | RegExp with flags. `false[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                    | Empty plain object. `false[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                    | Non-empty plain object. `false[]` expected for *array*, but `object` given                           |
| Date(2026-01-31T16:15:54.576Z) | false                    | `new Date()` object. `false[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                    | Invalid Date object. `false[]` expected for *array*, but `date` given                                |
| Error                          | false                    | `new Error()` object. `false[]` expected for *array*, but `error` given                              |
| new Map()                      | false                    | Empty map `new Map()`. `false[]` expected for *array*, but `map` given                               |
| new Set()                      | false                    | Empty set `new Set()`. `false[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                    | Non-empty map `new Map([['k', 'v']])`. `false[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                    | Non-empty set `new Set([1, 2, 3])`. `false[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                    | Object without prototype (Object.create(null)). `false[]` expected for *array*, but `object` given   |
| `[]`                           | false                    | Empty array. `false[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                    | Array with `undefined` (but returning `[null]`). `false[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                    | Sparse array (length 3, empty slots). `false[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                    | Nested array. `false[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                    | Mixed array. `false[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                    | Function `() => {}`. `false[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                    | Async function `async () => {}`. `false[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                    | Generator function `function* () { yield 1; }`. `false[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 16:15:54 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>