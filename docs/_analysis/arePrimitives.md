# Behavior of `arePrimitives`

## Expected parameters

| Parameter | Data type   | Description                                             |
|:----------|:------------|:--------------------------------------------------------|
| array     | primitive[] | The array to be checked for elements of primitive type. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array` | Function <br> `arePrimitives` | Description                                                                                                                                                                                                                                                           |
|:-----------------------|:------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `[1,"string",true]`    | true                          | Mixed primitives (number, string, boolean). `primitive` expected for *array[0]*, but `integer` given. `primitive` expected for *array[1]*, but `string` given. `primitive` expected for *array[2]*, but `boolean` given                                               |
| `[null,null,null]`     | true                          | Null, undefined, symbol. `primitive` expected for *array[0]*, but `null` given. `primitive` expected for *array[1]*, but `undefined` given. `primitive` expected for *array[2]*, but `symbol` given                                                                   |
| `[Unserializable]`     | true                          | BigInt, string, number, boolean. `primitive` expected for *array[0]*, but `bigint` given. `primitive` expected for *array[1]*, but `binary` given. `primitive` expected for *array[2]*, but `integer` given. `primitive` expected for *array[3]*, but `boolean` given |
| `[]`                   | false                         | Empty array (not filled)                                                                                                                                                                                                                                              |
| `[1,{},false]`         | false                         | Contains object. `primitive` expected for *array[0]*, but `integer` given. `primitive` expected for *array[1]*, but `object` given. `primitive` expected for *array[2]*, but `boolean` given                                                                          |
| `[1,[],false]`         | false                         | Contains array. `primitive` expected for *array[0]*, but `integer` given. `primitive` expected for *array[1]*, but `array` given. `primitive` expected for *array[2]*, but `boolean` given                                                                            |
| `[1,"() => {}",false]` | false                         | Contains function. `primitive` expected for *array[0]*, but `integer` given. `primitive` expected for *array[1]*, but `function` given. `primitive` expected for *array[2]*, but `boolean` given                                                                      |
| `[1,2,false]`          | false                         | Contains boxed number object. `primitive` expected for *array[0]*, but `integer` given. `primitive` expected for *array[1]*, but `number` given. `primitive` expected for *array[2]*, but `boolean` given                                                             |
| `[1,"x",false]`        | false                         | Contains boxed string object. `primitive` expected for *array[0]*, but `integer` given. `primitive` expected for *array[1]*, but `string` given. `primitive` expected for *array[2]*, but `boolean` given                                                             |

## Default tests

| Parameter <br> `array`         | Function <br> `arePrimitives` | Description                                                                                              |
|:-------------------------------|:------------------------------|:---------------------------------------------------------------------------------------------------------|
| ""                             | false                         | Empty string. `primitive[]` expected for *array*, but `string` given                                     |
| " "                            | false                         | Only space string. `primitive[]` expected for *array*, but `string` given                                |
| "\r"                           | false                         | Carriage return. `primitive[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                         | Data type returned by `getTypeOf()`. `primitive[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                         | Two word string. `primitive[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                         | Non-ASCII (German umlauts). `primitive[]` expected for *array*, but `string` given                       |
| "你好"                           | false                         | Non-Latin characters. `primitive[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                         | Emoji string. `primitive[]` expected for *array*, but `string` given                                     |
| 42                             | false                         | Positive number. `primitive[]` expected for *array*, but `integer` given                                 |
| -273                           | false                         | Negative number (0 Kelvin). `primitive[]` expected for *array*, but `integer` given                      |
| NaN                            | false                         | `NaN` (Not a Number). `primitive[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                         | Positive Infinity. `primitive[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                         | Negative Infinity. `primitive[]` expected for *array*, but `number` given                                |
| 0                              | false                         | BigInt zero `0n`. `primitive[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                         | BigInt `42n`. `primitive[]` expected for *array*, but `bigint` given                                     |
| true                           | false                         | Boolean. `primitive[]` expected for *array*, but `boolean` given                                         |
| true                           | false                         | Boolean object `Boolean(true)`. `primitive[]` expected for *array*, but `boolean` given                  |
| null                           | false                         | Null. `primitive[]` expected for *array*, but `null` given                                               |
| undefined                      | false                         | Undefined. `primitive[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                         | Symbol. `primitive[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                         | RegExp. `primitive[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                         | RegExp with flags. `primitive[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                         | Empty plain object. `primitive[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                         | Non-empty plain object. `primitive[]` expected for *array*, but `object` given                           |
| Date(2026-01-31T00:07:37.345Z) | false                         | `new Date()` object. `primitive[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                         | Invalid Date object. `primitive[]` expected for *array*, but `date` given                                |
| Error                          | false                         | `new Error()` object. `primitive[]` expected for *array*, but `error` given                              |
| new Map()                      | false                         | Empty map `new Map()`. `primitive[]` expected for *array*, but `map` given                               |
| new Set()                      | false                         | Empty set `new Set()`. `primitive[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                         | Non-empty map `new Map([['k', 'v']])`. `primitive[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                         | Non-empty set `new Set([1, 2, 3])`. `primitive[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                         | Object without prototype (Object.create(null)). `primitive[]` expected for *array*, but `object` given   |
| `[]`                           | false                         | Empty array. `primitive[]` expected for *array*, but `array` given                                       |
| `[null]`                       | true                          | Array with `undefined` (but returning `[null]`). `primitive[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | true                          | Sparse array (length 3, empty slots). `primitive[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                         | Nested array. `primitive[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | true                          | Mixed array. `primitive[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                         | Function `() => {}`. `primitive[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                         | Async function `async () => {}`. `primitive[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                         | Generator function `function* () { yield 1; }`. `primitive[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 00:07:37 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>