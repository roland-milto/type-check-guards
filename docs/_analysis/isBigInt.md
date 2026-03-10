# Behavior of `isBigInt`

## Expected parameters

| Parameter | Data type | Description         |
|:----------|:----------|:--------------------|
| value     | bigint    | The value to check. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `value` | Function <br> `isBigInt` | Description                                                                                  |
|:-----------------------|:-------------------------|:---------------------------------------------------------------------------------------------|
| 0                      | true                     | BigInt zero                                                                                  |
| 1                      | true                     | BigInt one                                                                                   |
| -1                     | true                     | Negative BigInt                                                                              |
| 10                     | true                     | BigInt ten                                                                                   |
| 9007199254740993       | true                     | BigInt larger than MAX_SAFE_INTEGER                                                          |
| 0                      | false                    | Number zero (not BigInt). `bigint` expected for *value*, but `integer` given                 |
| 10                     | false                    | Number ten (not BigInt). `bigint` expected for *value*, but `integer` given                  |
| "10"                   | false                    | String '10' (not BigInt). `bigint` expected for *value*, but `binary` given                  |
| 10                     | true                     | BigInt created from string (still BigInt)                                                    |
| `[Unserializable]`     | false                    | Boxed BigInt object (not typeof 'bigint'). `bigint` expected for *value*, but `bigInt` given |

## Default tests

| Parameter <br> `value`         | Function <br> `isBigInt` | Description                                                                                         |
|:-------------------------------|:-------------------------|:----------------------------------------------------------------------------------------------------|
| ""                             | false                    | Empty string. `bigint` expected for *value*, but `string` given                                     |
| " "                            | false                    | Only space string. `bigint` expected for *value*, but `string` given                                |
| "\r"                           | false                    | Carriage return. `bigint` expected for *value*, but `string` given                                  |
| "integer"                      | false                    | Data type returned by `getTypeOf()`. `bigint` expected for *value*, but `string` given              |
| "Roland Milto"                 | false                    | Two word string. `bigint` expected for *value*, but `string` given                                  |
| "äöüß"                         | false                    | Non-ASCII (German umlauts). `bigint` expected for *value*, but `string` given                       |
| "你好"                           | false                    | Non-Latin characters. `bigint` expected for *value*, but `string` given                             |
| "🙂"                           | false                    | Emoji string. `bigint` expected for *value*, but `string` given                                     |
| 42                             | false                    | Positive number. `bigint` expected for *value*, but `integer` given                                 |
| -273                           | false                    | Negative number (0 Kelvin). `bigint` expected for *value*, but `integer` given                      |
| NaN                            | false                    | `NaN` (Not a Number). `bigint` expected for *value*, but `nan` given                                |
| Infinity                       | false                    | Positive Infinity. `bigint` expected for *value*, but `number` given                                |
| -Infinity                      | false                    | Negative Infinity. `bigint` expected for *value*, but `number` given                                |
| 0                              | true                     | BigInt zero `0n`                                                                                    |
| 42                             | true                     | BigInt `42n`                                                                                        |
| true                           | false                    | Boolean. `bigint` expected for *value*, but `boolean` given                                         |
| true                           | false                    | Boolean object `Boolean(true)`. `bigint` expected for *value*, but `boolean` given                  |
| null                           | false                    | Null. `bigint` expected for *value*, but `null` given                                               |
| undefined                      | false                    | Undefined. `bigint` expected for *value*, but `undefined` given                                     |
| Symbol()                       | false                    | Symbol. `bigint` expected for *value*, but `symbol` given                                           |
| /./                            | false                    | RegExp. `bigint` expected for *value*, but `regExp` given                                           |
| /^Roland$/i                    | false                    | RegExp with flags. `bigint` expected for *value*, but `regExp` given                                |
| `{}`                           | false                    | Empty plain object. `bigint` expected for *value*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                    | Non-empty plain object. `bigint` expected for *value*, but `object` given                           |
| Date(2026-01-31T23:30:51.547Z) | false                    | `new Date()` object. `bigint` expected for *value*, but `date` given                                |
| Date(Invalid)                  | false                    | Invalid Date object. `bigint` expected for *value*, but `date` given                                |
| Error                          | false                    | `new Error()` object. `bigint` expected for *value*, but `error` given                              |
| new Map()                      | false                    | Empty map `new Map()`. `bigint` expected for *value*, but `map` given                               |
| new Set()                      | false                    | Empty set `new Set()`. `bigint` expected for *value*, but `set` given                               |
| new Map([["k", "v"]])          | false                    | Non-empty map `new Map([['k', 'v']])`. `bigint` expected for *value*, but `map` given               |
| new Set([1, 2, 3])             | false                    | Non-empty set `new Set([1, 2, 3])`. `bigint` expected for *value*, but `set` given                  |
| [Object: null prototype] {}    | false                    | Object without prototype (Object.create(null)). `bigint` expected for *value*, but `object` given   |
| `[]`                           | false                    | Empty array. `bigint` expected for *value*, but `array` given                                       |
| `[null]`                       | false                    | Array with `undefined` (but returning `[null]`). `bigint` expected for *value*, but `array` given   |
| `[null,null,null]`             | false                    | Sparse array (length 3, empty slots). `bigint` expected for *value*, but `array` given              |
| `[["nested"]]`                 | false                    | Nested array. `bigint` expected for *value*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                    | Mixed array. `bigint` expected for *value*, but `array` given                                       |
| ()=>{}                         | false                    | Function `() => {}`. `bigint` expected for *value*, but `function` given                            |
| async()=>{}                    | false                    | Async function `async () => {}`. `bigint` expected for *value*, but `function` given                |
| function*(){yield 1;}          | false                    | Generator function `function* () { yield 1; }`. `bigint` expected for *value*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 23:30:51 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>