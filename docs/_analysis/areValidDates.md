# Behavior of `areValidDates`

## Expected parameters

| Parameter | Data type | Description                                                |
|:----------|:----------|:-----------------------------------------------------------|
| array     | date[]    | The array to check, potentially containing `Date` objects. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array`                                    | Function <br> `areValidDates` | Description                                                                                       |
|:----------------------------------------------------------|:------------------------------|:--------------------------------------------------------------------------------------------------|
| `["2026-01-30T16:50:10.367Z"]`                            | true                          | Single valid date                                                                                 |
| `["2026-01-30T16:50:10.367Z","1970-01-01T00:00:00.000Z"]` | true                          | Multiple valid dates                                                                              |
| `["2025-12-17T00:00:00.000Z","2026-01-01T00:00:00.000Z"]` | true                          | Valid ISO dates                                                                                   |
| `[]`                                                      | false                         | Empty array (not filled)                                                                          |
| `["2026-01-30T16:50:10.367Z","not a date"]`               | false                         | Contains string. `date` expected for *array[1]*, but `string` given                               |
| `["2026-01-30T16:50:10.367Z",1769791810367]`              | false                         | Contains timestamp number. `date` expected for *array[1]*, but `integer` given                    |
| `[null]`                                                  | false                         | Contains invalid Date                                                                             |
| `["2026-01-30T16:50:10.367Z",null]`                       | false                         | Contains one invalid Date among valid ones                                                        |
| `[{"getTime":"() => Date.now()"}]`                        | false                         | Contains Date-like object (not Date instance). `date` expected for *array[0]*, but `object` given |

## Default tests

| Parameter <br> `array`         | Function <br> `areValidDates` | Description                                                                                         |
|:-------------------------------|:------------------------------|:----------------------------------------------------------------------------------------------------|
| ""                             | false                         | Empty string. `date[]` expected for *array*, but `string` given                                     |
| " "                            | false                         | Only space string. `date[]` expected for *array*, but `string` given                                |
| "\r"                           | false                         | Carriage return. `date[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                         | Data type returned by `getTypeOf()`. `date[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                         | Two word string. `date[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                         | Non-ASCII (German umlauts). `date[]` expected for *array*, but `string` given                       |
| "你好"                           | false                         | Non-Latin characters. `date[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                         | Emoji string. `date[]` expected for *array*, but `string` given                                     |
| 42                             | false                         | Positive number. `date[]` expected for *array*, but `integer` given                                 |
| -273                           | false                         | Negative number (0 Kelvin). `date[]` expected for *array*, but `integer` given                      |
| NaN                            | false                         | `NaN` (Not a Number). `date[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                         | Positive Infinity. `date[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                         | Negative Infinity. `date[]` expected for *array*, but `number` given                                |
| 0                              | false                         | BigInt zero `0n`. `date[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                         | BigInt `42n`. `date[]` expected for *array*, but `bigint` given                                     |
| true                           | false                         | Boolean. `date[]` expected for *array*, but `boolean` given                                         |
| true                           | false                         | Boolean object `Boolean(true)`. `date[]` expected for *array*, but `boolean` given                  |
| null                           | false                         | Null. `date[]` expected for *array*, but `null` given                                               |
| undefined                      | false                         | Undefined. `date[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                         | Symbol. `date[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                         | RegExp. `date[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                         | RegExp with flags. `date[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                         | Empty plain object. `date[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                         | Non-empty plain object. `date[]` expected for *array*, but `object` given                           |
| Date(2026-01-30T16:50:10.364Z) | false                         | `new Date()` object. `date[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                         | Invalid Date object. `date[]` expected for *array*, but `date` given                                |
| Error                          | false                         | `new Error()` object. `date[]` expected for *array*, but `error` given                              |
| new Map()                      | false                         | Empty map `new Map()`. `date[]` expected for *array*, but `map` given                               |
| new Set()                      | false                         | Empty set `new Set()`. `date[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                         | Non-empty map `new Map([['k', 'v']])`. `date[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                         | Non-empty set `new Set([1, 2, 3])`. `date[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                         | Object without prototype (Object.create(null)). `date[]` expected for *array*, but `object` given   |
| `[]`                           | false                         | Empty array. `date[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                         | Array with `undefined` (but returning `[null]`). `date[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                         | Sparse array (length 3, empty slots). `date[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                         | Nested array. `date[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                         | Mixed array. `date[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                         | Function `() => {}`. `date[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                         | Async function `async () => {}`. `date[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                         | Generator function `function* () { yield 1; }`. `date[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 16:50:10 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>