# Behavior of `isRegEx`

## Expected parameters

| Parameter | Data type | Description              |
|:----------|:----------|:-------------------------|
| value     | regexp    | The value to be checked. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value` | Function <br> `isRegEx` | Description                                                                                 |
|:-----------------------|:------------------------|:--------------------------------------------------------------------------------------------|
| /abc/                  | true                    | RegExp literal. `regexp` expected for *value*, but `regExp` given                           |
| /abc/                  | true                    | RegExp constructor. `regexp` expected for *value*, but `regExp` given                       |
| /^abc$/i               | true                    | RegExp with flags. `regexp` expected for *value*, but `regExp` given                        |
| "/abc/"                | false                   | String that looks like RegExp. `regexp` expected for *value*, but `string` given            |
| "abc"                  | false                   | Plain string (not RegExp). `regexp` expected for *value*, but `string` given                |
| `{}`                   | false                   | Object (not RegExp). `regexp` expected for *value*, but `object` given                      |
| ()=>/abc/              | false                   | Function returning RegExp (not RegExp). `regexp` expected for *value*, but `function` given |

## Default tests

| Parameter <br> `value`         | Function <br> `isRegEx` | Description                                                                                         |
|:-------------------------------|:------------------------|:----------------------------------------------------------------------------------------------------|
| ""                             | false                   | Empty string. `regexp` expected for *value*, but `string` given                                     |
| " "                            | false                   | Only space string. `regexp` expected for *value*, but `string` given                                |
| "\r"                           | false                   | Carriage return. `regexp` expected for *value*, but `string` given                                  |
| "integer"                      | false                   | Data type returned by `getTypeOf()`. `regexp` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                   | Two word string. `regexp` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                   | Non-ASCII (German umlauts). `regexp` expected for *value*, but `string` given                       |
| "你好"                           | false                   | Non-Latin characters. `regexp` expected for *value*, but `string` given                             |
| "🙂"                           | false                   | Emoji string. `regexp` expected for *value*, but `string` given                                     |
| 42                             | false                   | Positive number. `regexp` expected for *value*, but `integer` given                                 |
| -273                           | false                   | Negative number (0 Kelvin). `regexp` expected for *value*, but `integer` given                      |
| NaN                            | false                   | `NaN` (Not a Number). `regexp` expected for *value*, but `nan` given                                |
| Infinity                       | false                   | Positive Infinity. `regexp` expected for *value*, but `number` given                                |
| -Infinity                      | false                   | Negative Infinity. `regexp` expected for *value*, but `number` given                                |
| 0                              | false                   | BigInt zero `0n`. `regexp` expected for *value*, but `bigint` given                                 |
| 42                             | false                   | BigInt `42n`. `regexp` expected for *value*, but `bigint` given                                     |
| true                           | false                   | Boolean. `regexp` expected for *value*, but `boolean` given                                         |
| true                           | false                   | Boolean object `Boolean(true)`. `regexp` expected for *value*, but `boolean` given                  |
| null                           | false                   | Null. `regexp` expected for *value*, but `null` given                                               |
| undefined                      | false                   | Undefined. `regexp` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                   | Symbol. `regexp` expected for *value*, but `symbol` given                                           |
| /./                            | true                    | RegExp. `regexp` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | true                    | RegExp with flags. `regexp` expected for *value*, but `regExp` given                                |
| `{}`                           | false                   | Empty plain object. `regexp` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                   | Non-empty plain object. `regexp` expected for *value*, but `object` given                           |
| Date(2026-01-30T23:28:13.845Z) | false                   | `new Date()` object. `regexp` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                   | Invalid Date object. `regexp` expected for *value*, but `date` given                                |
| Error                          | false                   | `new Error()` object. `regexp` expected for *value*, but `error` given                              |
| new Map()                      | false                   | Empty map `new Map()`. `regexp` expected for *value*, but `map` given                               |
| new Set()                      | false                   | Empty set `new Set()`. `regexp` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                   | Non-empty map `new Map([['k', 'v']])`. `regexp` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                   | Non-empty set `new Set([1, 2, 3])`. `regexp` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                   | Object without prototype (Object.create(null)). `regexp` expected for *value*, but `object` given   |
| `[]`                           | false                   | Empty array. `regexp` expected for *value*, but `array` given                                       |
| `[null]`                       | false                   | Array with `undefined` (but returning `[null]`). `regexp` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                   | Sparse array (length 3, empty slots). `regexp` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                   | Nested array. `regexp` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                   | Mixed array. `regexp` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                   | Function `() => {}`. `regexp` expected for *value*, but `function` given                            |
| async()=>{}                    | false                   | Async function `async () => {}`. `regexp` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                   | Generator function `function* () { yield 1; }`. `regexp` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 30 January 2026 at 23:28:13 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>