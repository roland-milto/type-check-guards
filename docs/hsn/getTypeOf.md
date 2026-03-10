# getTypeOf

## 说明

`getTypeOf` kisi bhi value ke liye tafsīlī, insān-padhne layak type label wapas kare hai, jisme refined numeric types
aur khaas object kinds shāmil hai.

### 使用场景

Input validation aur diagnostics me type detection normalize karne khātir `getTypeOf` ka istemāl karo—misāl ke taur par
`nan` reject karna, sirf `integer` IDs accept karna, numeric strings jaise `decimal` ko plain `string` se alag treat
karna, ya `date` aur `regexp` jaise precise object kinds log karna.

> **给 TypeScript 用户的提示：**
>
> Return type `DataTypeAsString | string` hai. Isne ek descriptive label samjho; branching me known literals jaise
`integer`, `float`, `nan`, `array`, `null`, aur `undefined` se compare karo.

### 优势

- JavaScript-ā `typeof` se zyada barīk type string wapas kare hai, jisme numeric subtypes jaise `integer`, `float`, aur
  `nan` bhi shāmil hai.
- `null` aur `undefined` ne saaf taur par `null` aur `undefined` ke roop me alag kare hai.
- Aam numeric string formats pehchān ke unhe seedha `string` bolne ke bajāy `binary`, `octal`, `decimal`, ya
  `hexadecimal` ke roop me report kare hai.
- Arrays ne `array` ke roop me pehchāne hai aur `Object.prototype.toString` ka istemāl karke khaas object type nām dewe
  hai (jaise `date`, `regexp`, `map`, `set`).
- Validation, logging, aur debugging me kaam āwe hai jahan ek jaisā, insān-padhne layak type labels chāhiye.

## 用法

### 语法

函数：

- `getTypeOf(value)`

参数：

- `value`: Woh value jiske data type ka pata lagānā hai.

### 本地函数导入

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// मिसाल जाँच
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.getTypeOf(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>该文件于 6 February 2026 at 13:06:56 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>