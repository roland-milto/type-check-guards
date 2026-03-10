# Behavior of `isPlainObject`

## Expected parameters

| Parameter | Data type   | Description                                |
|:----------|:------------|:-------------------------------------------|
| value     | plainObject | The value to test for plain object status. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value`         | Function <br> `isPlainObject` | Description                                                                                       |
|:-------------------------------|:------------------------------|:--------------------------------------------------------------------------------------------------|
| `{}`                           | true                          | Object literal (plain). `plainObject` expected for *value*, but `object` given                    |
| `{"a":1}`                      | true                          | Object literal with property (plain). `plainObject` expected for *value*, but `object` given      |
| `{}`                           | true                          | Object constructor (plain). `plainObject` expected for *value*, but `object` given                |
| [Object: null prototype] {}    | true                          | Object.create(null) (not [object Object]). `plainObject` expected for *value*, but `object` given |
| `[]`                           | false                         | Array (not plain object). `plainObject` expected for *value*, but `array` given                   |
| Date(2026-02-06T12:16:02.492Z) | false                         | Date (not plain object). `plainObject` expected for *value*, but `date` given                     |
| /./                            | false                         | RegExp (not plain object). `plainObject` expected for *value*, but `regExp` given                 |
| new Map()                      | false                         | Map (not plain object). `plainObject` expected for *value*, but `map` given                       |
| new Set()                      | false                         | Set (not plain object). `plainObject` expected for *value*, but `set` given                       |
| ()=>({})                       | false                         | Function (not plain object). `plainObject` expected for *value*, but `function` given             |

## Default tests

| Parameter <br> `value`         | Function <br> `isPlainObject` | Description                                                                                              |
|:-------------------------------|:------------------------------|:---------------------------------------------------------------------------------------------------------|
| ""                             | false                         | Empty string. `plainObject` expected for *value*, but `string` given                                     |
| " "                            | false                         | Only space string. `plainObject` expected for *value*, but `string` given                                |
| "\r"                           | false                         | Carriage return. `plainObject` expected for *value*, but `string` given                                  |
| "integer"                      | false                         | Data type returned by `getTypeOf()`. `plainObject` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                         | Two word string. `plainObject` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                         | Non-ASCII (German umlauts). `plainObject` expected for *value*, but `string` given                       |
| "你好"                           | false                         | Non-Latin characters. `plainObject` expected for *value*, but `string` given                             |
| "🙂"                           | false                         | Emoji string. `plainObject` expected for *value*, but `string` given                                     |
| 42                             | false                         | Positive number. `plainObject` expected for *value*, but `integer` given                                 |
| -273                           | false                         | Negative number (0 Kelvin). `plainObject` expected for *value*, but `integer` given                      |
| NaN                            | false                         | `NaN` (Not a Number). `plainObject` expected for *value*, but `nan` given                                |
| Infinity                       | false                         | Positive Infinity. `plainObject` expected for *value*, but `number` given                                |
| -Infinity                      | false                         | Negative Infinity. `plainObject` expected for *value*, but `number` given                                |
| 0                              | false                         | BigInt zero `0n`. `plainObject` expected for *value*, but `bigint` given                                 |
| 42                             | false                         | BigInt `42n`. `plainObject` expected for *value*, but `bigint` given                                     |
| true                           | false                         | Boolean. `plainObject` expected for *value*, but `boolean` given                                         |
| true                           | false                         | Boolean object `Boolean(true)`. `plainObject` expected for *value*, but `boolean` given                  |
| null                           | false                         | Null. `plainObject` expected for *value*, but `null` given                                               |
| undefined                      | false                         | Undefined. `plainObject` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                         | Symbol. `plainObject` expected for *value*, but `symbol` given                                           |
| /./                            | false                         | RegExp. `plainObject` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                         | RegExp with flags. `plainObject` expected for *value*, but `regExp` given                                |
| `{}`                           | true                          | Empty plain object. `plainObject` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | true                          | Non-empty plain object. `plainObject` expected for *value*, but `object` given                           |
| Date(2026-02-06T12:16:02.487Z) | false                         | `new Date()` object. `plainObject` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                         | Invalid Date object. `plainObject` expected for *value*, but `date` given                                |
| Error                          | false                         | `new Error()` object. `plainObject` expected for *value*, but `error` given                              |
| new Map()                      | false                         | Empty map `new Map()`. `plainObject` expected for *value*, but `map` given                               |
| new Set()                      | false                         | Empty set `new Set()`. `plainObject` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                         | Non-empty map `new Map([['k', 'v']])`. `plainObject` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                         | Non-empty set `new Set([1, 2, 3])`. `plainObject` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | true                          | Object without prototype (Object.create(null)). `plainObject` expected for *value*, but `object` given   |
| `[]`                           | false                         | Empty array. `plainObject` expected for *value*, but `array` given                                       |
| `[null]`                       | false                         | Array with `undefined` (but returning `[null]`). `plainObject` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                         | Sparse array (length 3, empty slots). `plainObject` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                         | Nested array. `plainObject` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                         | Mixed array. `plainObject` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                         | Function `() => {}`. `plainObject` expected for *value*, but `function` given                            |
| async()=>{}                    | false                         | Async function `async () => {}`. `plainObject` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                         | Generator function `function* () { yield 1; }`. `plainObject` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 6 February 2026 at 12:16:02 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>