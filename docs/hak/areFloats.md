# areFloats

## 说明

`areFloats` 會檢查一個指定个陣列係毋係有內容，而且佢个所有元素都係浮點數。

### 使用场景

當你收到一個 `unknown[]`（比方講來自 JSON、查詢參數，抑係外部 API）而你需要確保佢係一個有內容个陣列，並且每一項都係浮點數，先去跑數值邏輯（像係平均、插值，抑係統計計算）个時節，就用
`areFloats`。

> **给 TypeScript 用户的提示：**
>
> 用 `areFloats` 來守護 `unknown[]`，再當佢係只包含浮點數个 `number[]` 來用；對空陣列同任何毋係浮點數个元素，佢都會回傳
`false`。

### 优势

- 淨係當輸入係一個毋係空个陣列，而且每一個元素都係浮點數个時節，正會回傳 `true`。
- 快速失敗：一旦發現有毋係浮點數个元素，就會即刻回傳 `false`。
- 幫助你喺做浮點數專用計算之前，先驗證未知輸入。

## 用法

### 语法

函数：

- `areFloats(array)`

参数：

- `array`: 愛檢查係毋係全部都係浮點數元素个陣列。

### 本地函数导入

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // true
console.log(areFloats(b)); // false
console.log(areFloats(c)); // false

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areFloats(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areFloats](../_analysis/areFloats.md)

<br>

---

<small>该文件于 30 January 2026 at 15:57:28 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>