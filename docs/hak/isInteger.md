# isInteger

## 说明

判斷指定个 `value` 係毋係安全整數 number。

### 使用场景

在用佢做陣列索引、分頁、計數器抑係資料庫 ID 之前，先驗證毋可信个輸入（例如 query params、JSON payloads、environment
variables）係毋係整數。

> **给 TypeScript 用户的提示：**
>
> 用 `isInteger` 來驗證未知輸入，正好當佢做數字整數來用；佢淨係對 `typeof value === "number"` 而且
`Number.isSafeInteger(value)` 个值回傳 `true`。

### 优势

- 同時檢查型別同數字安全性：淨係當輸入係 number 而且係安全整數个時節正會回傳 `true`。
- 避免數字強制轉型个常見陷阱：像 "5" 這兜字串會正確回傳 `false`。
- 拒絕非整數同毋安全个整數，適合用在 ID、計數器同陣列索引。

## 用法

### 语法

函数：

- `isInteger(value)`

参数：

- `value`: 愛檢查係毋係整數狀態个值。

### 本地函数导入

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // chin
const b = isInteger(-100);   // chin
const c = isInteger("5");    // m̄-chin
const d = isInteger(5.5);    // m̄-chin
const e = isInteger(null);   // m̄-chin

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isInteger(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isInteger](../_analysis/isInteger.md)

<br>

---

<small>该文件于 31 January 2026 at 00:49:55 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>