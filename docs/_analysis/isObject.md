# Behavior of `isObject`

## Expected parameters

| Parameter | Data type | Description                                    |
|:----------|:----------|:-----------------------------------------------|
| value     | object    | The value to be checked for being an `object`. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value`         | Function <br> `isObject` | Description                                                                                       |
|:-------------------------------|:-------------------------|:--------------------------------------------------------------------------------------------------|
| `{}`                           | true                     | Plain object                                                                                      |
| `{"a":1}`                      | true                     | Plain object with property                                                                        |
| `[]`                           | true                     | Array (typeof === 'object'). `object` expected for *value*, but `array` given                     |
| Date(2026-01-31T00:25:59.070Z) | true                     | Date object. `object` expected for *value*, but `date` given                                      |
| /./                            | true                     | RegExp object. `object` expected for *value*, but `regExp` given                                  |
| new Map()                      | true                     | Map object. `object` expected for *value*, but `map` given                                        |
| new Set()                      | true                     | Set object. `object` expected for *value*, but `set` given                                        |
| [Object: null prototype] {}    | true                     | Object without prototype                                                                          |
| null                           | false                    | Null (special case, not object). `object` expected for *value*, but `null` given                  |
| 42                             | false                    | Number (not object). `object` expected for *value*, but `integer` given                           |
| "Hello"                        | false                    | String (not object). `object` expected for *value*, but `string` given                            |
| true                           | false                    | Boolean (not object). `object` expected for *value*, but `boolean` given                          |
| ()=>{}                         | false                    | Function (typeof === 'function', not object). `object` expected for *value*, but `function` given |

## Default tests

| Parameter <br> `value`         | Function <br> `isObject` | Description                                                                                         |
|:-------------------------------|:-------------------------|:----------------------------------------------------------------------------------------------------|
| ""                             | false                    | Empty string. `object` expected for *value*, but `string` given                                     |
| " "                            | false                    | Only space string. `object` expected for *value*, but `string` given                                |
| "\r"                           | false                    | Carriage return. `object` expected for *value*, but `string` given                                  |
| "integer"                      | false                    | Data type returned by `getTypeOf()`. `object` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                    | Two word string. `object` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                    | Non-ASCII (German umlauts). `object` expected for *value*, but `string` given                       |
| "你好"                           | false                    | Non-Latin characters. `object` expected for *value*, but `string` given                             |
| "🙂"                           | false                    | Emoji string. `object` expected for *value*, but `string` given                                     |
| 42                             | false                    | Positive number. `object` expected for *value*, but `integer` given                                 |
| -273                           | false                    | Negative number (0 Kelvin). `object` expected for *value*, but `integer` given                      |
| NaN                            | false                    | `NaN` (Not a Number). `object` expected for *value*, but `nan` given                                |
| Infinity                       | false                    | Positive Infinity. `object` expected for *value*, but `number` given                                |
| -Infinity                      | false                    | Negative Infinity. `object` expected for *value*, but `number` given                                |
| 0                              | false                    | BigInt zero `0n`. `object` expected for *value*, but `bigint` given                                 |
| 42                             | false                    | BigInt `42n`. `object` expected for *value*, but `bigint` given                                     |
| true                           | false                    | Boolean. `object` expected for *value*, but `boolean` given                                         |
| true                           | false                    | Boolean object `Boolean(true)`. `object` expected for *value*, but `boolean` given                  |
| null                           | false                    | Null. `object` expected for *value*, but `null` given                                               |
| undefined                      | false                    | Undefined. `object` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                    | Symbol. `object` expected for *value*, but `symbol` given                                           |
| /./                            | true                     | RegExp. `object` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | true                     | RegExp with flags. `object` expected for *value*, but `regExp` given                                |
| `{}`                           | true                     | Empty plain object                                                                                  |
| `{"dev":"Roland Milto"}`       | true                     | Non-empty plain object                                                                              |
| Date(2026-01-31T00:25:59.067Z) | true                     | `new Date()` object. `object` expected for *value*, but `date` given                                |
| Date(Invalid)                  | true                     | Invalid Date object. `object` expected for *value*, but `date` given                                |
| Error                          | true                     | `new Error()` object. `object` expected for *value*, but `error` given                              |
| new Map()                      | true                     | Empty map `new Map()`. `object` expected for *value*, but `map` given                               |
| new Set()                      | true                     | Empty set `new Set()`. `object` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | true                     | Non-empty map `new Map([['k', 'v']])`. `object` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | true                     | Non-empty set `new Set([1, 2, 3])`. `object` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | true                     | Object without prototype (Object.create(null))                                                      |
| `[]`                           | true                     | Empty array. `object` expected for *value*, but `array` given                                       |
| `[null]`                       | true                     | Array with `undefined` (but returning `[null]`). `object` expected for *value*, but `array` given   |
| `[null,null,null]`             | true                     | Sparse array (length 3, empty slots). `object` expected for *value*, but `array` given              |
| `[["nested"]]`                 | true                     | Nested array. `object` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | true                     | Mixed array. `object` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                    | Function `() => {}`. `object` expected for *value*, but `function` given                            |
| async()=>{}                    | false                    | Async function `async () => {}`. `object` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                    | Generator function `function* () { yield 1; }`. `object` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 00:25:59 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>