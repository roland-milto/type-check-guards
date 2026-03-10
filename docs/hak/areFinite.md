# areFinite

## 说明

`areFinite` 會檢查一個值係毋係毋係空个陣列，而且佢个元素全部都係有限个數字；若係就回傳 `true`，毋係就回傳 `false`。

### 使用场景

在做計算之前先驗證數字輸入陣列（例如：圖表序列、座標清單、量測樣本），確保淨係當所有值都係有限个數字時結果正會係 `true`。

> **给 TypeScript 用户的提示：**
>
> 當你需要確保一個陣列毋係空个，而且淨包含有限个數字時，就用 `areFinite`；對空陣列同包含 `NaN` 或無限大个陣列，佢會回傳
`false`。

### 优势

- 淨係當輸入係一個毋係空个陣列，而且每一個元素都係有限个數字時，正會回傳 `true`。
- 透過對每一個元素做 `isFinite` 檢查，會拒絕 `Infinity`、`-Infinity` 同 `NaN`。
- 提供簡單个布林結果（`true`/`false`），適合用做 guard 同驗證流程。

## 用法

### 语法

函数：

- `areFinite(array)`

参数：

- `array`: 愛檢查个陣列，用來判斷佢所有元素係毋係都係有限數。

### 本地函数导入

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // true
console.log(areFinite(b)); // false
console.log(areFinite(c)); // false

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areFinite(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areFinite](../_analysis/areFinite.md)

<br>

---

<small>该文件于 30 January 2026 at 16:34:46 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>