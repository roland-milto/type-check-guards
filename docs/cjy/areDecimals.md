# areDecimals

## 说明

檢查陣列入面所有元素係咪十進制數字，而且陣列係已填滿，並回傳 `true` 或 `false`。

### 使用场景

驗證用戶提供嘅清單（例如 CSV 欄位或表單輸入），確保陣列唔係空，而且每一項都係十進制值，先至進行解析或計算。

> **给 TypeScript 用户的提示：**
>
> 當你需要快速用布林值檢查一個 `unknown[]` 係非空，而且每個元素都係十進制表示時，就用 `areDecimals`。

### 优势

- 喺驗證項目之前，確保輸入係一個已填滿嘅陣列，避免唔小心接受空清單。
- 用 `isDecimal` 驗證每一個元素，所以一有混合或無效值就會即刻回傳 `false`。
- 提供簡單嘅布林結果（`true`/`false`），適合用喺 guard 同提早 return 嘅驗證流程。

## 用法

### 语法

函数：

- `areDecimals(array)`

参数：

- `array`: 要檢查嘅陣列。

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

<small>该文件于 31 January 2026 at 15:56:38 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>