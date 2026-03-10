# Behavior of `areNumbers`

## Expected parameters

| Parameter | Data type | Description                                  |
|:----------|:----------|:---------------------------------------------|
| array     | number[]  | The array to be checked for number elements. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array`                 | Function <br> `areNumbers` | Description                                                                          |
|:---------------------------------------|:---------------------------|:-------------------------------------------------------------------------------------|
| `[0]`                                  | true                       | Single number: zero                                                                  |
| `[1,2,3]`                              | true                       | Integers                                                                             |
| `[10.5,-3,0]`                          | true                       | Mixed: float, negative, zero                                                         |
| `[0,0]`                                | true                       | Negative zero and zero                                                               |
| `[2.220446049250313e-16,1]`            | true                       | EPSILON and 1                                                                        |
| `[5e-324,1]`                           | true                       | MIN_VALUE and 1                                                                      |
| `[9007199254740991,-9007199254740991]` | true                       | Safe integer boundaries                                                              |
| `[1.7976931348623157e+308,1]`          | true                       | MAX_VALUE and 1                                                                      |
| `[]`                                   | false                      | Empty array (not filled)                                                             |
| `["NaN"]`                              | false                      | Contains NaN                                                                         |
| `["Infinity"]`                         | false                      | Contains Infinity                                                                    |
| `["-Infinity"]`                        | false                      | Contains -Infinity                                                                   |
| `[1,"2",3]`                            | false                      | Contains number as string                                                            |
| `[1," 2 ",3]`                          | false                      | Contains trimmed number string. `number` expected for *array[1]*, but `string` given |
| `[1,2,3]`                              | true                       | Contains boxed Number object `Number(2)`                                             |
| `[1,{},3]`                             | false                      | Contains object. `number` expected for *array[1]*, but `object` given                |
| `[1,null,3]`                           | false                      | Contains null. `number` expected for *array[1]*, but `null` given                    |
| `[1,null,3]`                           | false                      | Contains undefined. `number` expected for *array[1]*, but `undefined` given          |

## Default tests

| Parameter <br> `array`         | Function <br> `areNumbers` | Description                                                                                           |
|:-------------------------------|:---------------------------|:------------------------------------------------------------------------------------------------------|
| ""                             | false                      | Empty string. `number[]` expected for *array*, but `string` given                                     |
| " "                            | false                      | Only space string. `number[]` expected for *array*, but `string` given                                |
| "\r"                           | false                      | Carriage return. `number[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                      | Data type returned by `getTypeOf()`. `number[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                      | Two word string. `number[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                      | Non-ASCII (German umlauts). `number[]` expected for *array*, but `string` given                       |
| "你好"                           | false                      | Non-Latin characters. `number[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                      | Emoji string. `number[]` expected for *array*, but `string` given                                     |
| 42                             | false                      | Positive number. `number[]` expected for *array*, but `integer` given                                 |
| -273                           | false                      | Negative number (0 Kelvin). `number[]` expected for *array*, but `integer` given                      |
| NaN                            | false                      | `NaN` (Not a Number). `number[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                      | Positive Infinity. `number[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                      | Negative Infinity. `number[]` expected for *array*, but `number` given                                |
| 0                              | false                      | BigInt zero `0n`. `number[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                      | BigInt `42n`. `number[]` expected for *array*, but `bigint` given                                     |
| true                           | false                      | Boolean. `number[]` expected for *array*, but `boolean` given                                         |
| true                           | false                      | Boolean object `Boolean(true)`. `number[]` expected for *array*, but `boolean` given                  |
| null                           | false                      | Null. `number[]` expected for *array*, but `null` given                                               |
| undefined                      | false                      | Undefined. `number[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                      | Symbol. `number[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                      | RegExp. `number[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                      | RegExp with flags. `number[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                      | Empty plain object. `number[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                      | Non-empty plain object. `number[]` expected for *array*, but `object` given                           |
| Date(2026-01-30T13:03:14.763Z) | false                      | `new Date()` object. `number[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                      | Invalid Date object. `number[]` expected for *array*, but `date` given                                |
| Error                          | false                      | `new Error()` object. `number[]` expected for *array*, but `error` given                              |
| new Map()                      | false                      | Empty map `new Map()`. `number[]` expected for *array*, but `map` given                               |
| new Set()                      | false                      | Empty set `new Set()`. `number[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                      | Non-empty map `new Map([['k', 'v']])`. `number[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                      | Non-empty set `new Set([1, 2, 3])`. `number[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                      | Object without prototype (Object.create(null)). `number[]` expected for *array*, but `object` given   |
| `[]`                           | false                      | Empty array. `number[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                      | Array with `undefined` (but returning `[null]`). `number[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                      | Sparse array (length 3, empty slots). `number[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                      | Nested array. `number[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                      | Mixed array. `number[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                      | Function `() => {}`. `number[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                      | Async function `async () => {}`. `number[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                      | Generator function `function* () { yield 1; }`. `number[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 13:03:14 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>