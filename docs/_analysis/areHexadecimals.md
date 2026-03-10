# Behavior of `areHexadecimals`

## Expected parameters

| Parameter | Data type     | Description                                              |
|:----------|:--------------|:---------------------------------------------------------|
| array     | hexadecimal[] | The array to be checked for hexadecimal string elements. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array`         | Function <br> `areHexadecimals` | Description                                                                                       |
|:-------------------------------|:--------------------------------|:--------------------------------------------------------------------------------------------------|
| `["0x1A"]`                     | true                            | Single valid hex literal                                                                          |
| `["0x1A","0X3f","-0xB2"]`      | true                            | Multiple valid hex literals (case-insensitive, signed)                                            |
| `["0x0","0xdeadBEEF","+0x7f"]` | true                            | Various valid hex forms                                                                           |
| `[]`                           | false                           | Empty array (not filled)                                                                          |
| `["0x1A","0x3G","0xB2"]`       | false                           | Contains invalid hex digit. `hexadecimal` expected for *array[1]*, but `string` given             |
| `["0x1A","1A2B"]`              | false                           | Contains missing-prefix value. `hexadecimal` expected for *array[1]*, but `string` given          |
| `["0x1A"," 0x3f"]`             | false                           | Contains leading whitespace (invalid). `hexadecimal` expected for *array[1]*, but `string` given  |
| `["0x1A","0x3f "]`             | false                           | Contains trailing whitespace (invalid). `hexadecimal` expected for *array[1]*, but `string` given |
| `["0x1A",26]`                  | false                           | Contains number (non-string, invalid). `hexadecimal` expected for *array[1]*, but `integer` given |
| `["0x1A",null]`                | false                           | Contains null. `hexadecimal` expected for *array[1]*, but `null` given                            |
| `["0x1A",null]`                | false                           | Contains undefined. `hexadecimal` expected for *array[1]*, but `undefined` given                  |

## Default tests

| Parameter <br> `array`         | Function <br> `areHexadecimals` | Description                                                                                                |
|:-------------------------------|:--------------------------------|:-----------------------------------------------------------------------------------------------------------|
| ""                             | false                           | Empty string. `hexadecimal[]` expected for *array*, but `string` given                                     |
| " "                            | false                           | Only space string. `hexadecimal[]` expected for *array*, but `string` given                                |
| "\r"                           | false                           | Carriage return. `hexadecimal[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                           | Data type returned by `getTypeOf()`. `hexadecimal[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                           | Two word string. `hexadecimal[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                           | Non-ASCII (German umlauts). `hexadecimal[]` expected for *array*, but `string` given                       |
| "你好"                           | false                           | Non-Latin characters. `hexadecimal[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                           | Emoji string. `hexadecimal[]` expected for *array*, but `string` given                                     |
| 42                             | false                           | Positive number. `hexadecimal[]` expected for *array*, but `integer` given                                 |
| -273                           | false                           | Negative number (0 Kelvin). `hexadecimal[]` expected for *array*, but `integer` given                      |
| NaN                            | false                           | `NaN` (Not a Number). `hexadecimal[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                           | Positive Infinity. `hexadecimal[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                           | Negative Infinity. `hexadecimal[]` expected for *array*, but `number` given                                |
| 0                              | false                           | BigInt zero `0n`. `hexadecimal[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                           | BigInt `42n`. `hexadecimal[]` expected for *array*, but `bigint` given                                     |
| true                           | false                           | Boolean. `hexadecimal[]` expected for *array*, but `boolean` given                                         |
| true                           | false                           | Boolean object `Boolean(true)`. `hexadecimal[]` expected for *array*, but `boolean` given                  |
| null                           | false                           | Null. `hexadecimal[]` expected for *array*, but `null` given                                               |
| undefined                      | false                           | Undefined. `hexadecimal[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                           | Symbol. `hexadecimal[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                           | RegExp. `hexadecimal[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                           | RegExp with flags. `hexadecimal[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                           | Empty plain object. `hexadecimal[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                           | Non-empty plain object. `hexadecimal[]` expected for *array*, but `object` given                           |
| Date(2026-01-31T23:05:04.332Z) | false                           | `new Date()` object. `hexadecimal[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                           | Invalid Date object. `hexadecimal[]` expected for *array*, but `date` given                                |
| Error                          | false                           | `new Error()` object. `hexadecimal[]` expected for *array*, but `error` given                              |
| new Map()                      | false                           | Empty map `new Map()`. `hexadecimal[]` expected for *array*, but `map` given                               |
| new Set()                      | false                           | Empty set `new Set()`. `hexadecimal[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                           | Non-empty map `new Map([['k', 'v']])`. `hexadecimal[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                           | Non-empty set `new Set([1, 2, 3])`. `hexadecimal[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                           | Object without prototype (Object.create(null)). `hexadecimal[]` expected for *array*, but `object` given   |
| `[]`                           | false                           | Empty array. `hexadecimal[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                           | Array with `undefined` (but returning `[null]`). `hexadecimal[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                           | Sparse array (length 3, empty slots). `hexadecimal[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                           | Nested array. `hexadecimal[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                           | Mixed array. `hexadecimal[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                           | Function `() => {}`. `hexadecimal[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                           | Async function `async () => {}`. `hexadecimal[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                           | Generator function `function* () { yield 1; }`. `hexadecimal[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 23:05:04 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>