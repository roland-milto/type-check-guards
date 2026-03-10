# areSets

## 说明

檢查一個指定个非空陣列係毋係淨包含 `Set` 實例；係个話回傳 `true`，毋係就回傳 `false`。

### 使用场景

處理每一個 set 之前，先驗證一個值（例如來自使用者輸入、JSON 解析、抑係外部 API）係一個非空个 `Set` 物件陣列。

> **给 TypeScript 用户的提示：**
>
> 用 `areSets` 先驗證未知輸入，正去迭代並對每一個元素呼叫 `Set` API（例如 `.size`、`.has`、`.add`）。

### 优势

- 淨係當輸入係一個非空个陣列，而且每一個元素都係 `Set` 實例个時節，正會回傳 `true`。
- 透過當陣列無元素个時節回傳 `false`，避免空陣列造成假陽性。
- 做每一個元素个 `Set` 專用操作之前，當作執行期防護（runtime guard）當有用。

## 用法

### 语法

函数：

- `areSets(array)`

参数：

- `array`: 愛檢查係毋係 `Set` 實例个陣列。

### 本地函数导入

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a 係陣列，裡肚係 Set 實例（執行時）
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // false
console.log(areSets(c)); // false
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areSets(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areSets](../_analysis/areSets.md)

<br>

---

<small>该文件于 30 January 2026 at 23:13:30 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>