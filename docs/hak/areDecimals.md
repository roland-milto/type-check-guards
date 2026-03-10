# areDecimals

## 说明

檢查陣列內底所有元素係毋係十進位數字，並且陣列係有填滿个，會回傳 `true` 或 `false`。

### 使用场景

驗證使用者提供个清單（例如 CSV 欄位抑係表單輸入），確保陣列毋係空个，而且每一筆都係十進位值，正好進行剖析抑係計算。

> **给 TypeScript 用户的提示：**
>
> 當你需要快速用布林檢查一個 `unknown[]` 係毋係非空，並且每一個元素都係十進位表示時，使用 `areDecimals`。

### 优势

- 確保輸入係一個有填滿个陣列，先正去驗證項目，避免無意間接受空个清單。
- 用 `isDecimal` 驗證每一個元素，所以摻雜或無效个值會即刻得著 `false` 結果。
- 提供簡單个布林結果（`true`/`false`），適合用做 guard 同早期返回个驗證流程。

## 用法

### 语法

函数：

- `areDecimals(array)`

参数：

- `array`: 愛檢查个陣列。

### 本地函数导入

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // 真
console.log(areDecimals(b)); // 假
console.log(areDecimals(c)); // 假
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areDecimals(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>该文件于 31 January 2026 at 15:57:16 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>