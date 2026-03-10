# isInteger

## 说明

判斷畀定个 `value` 係咪安全整數數字。

### 使用场景

喺用佢做陣列索引、分頁、計數器或者資料庫 ID 之前，先驗證唔可信輸入（例如 query params、JSON payloads、environment variables）。

> **给 TypeScript 用户的提示：**
>
> 用 `isInteger` 喺當你將未知輸入當做數值整數之前做驗證；佢只有喺 `typeof value === "number"` 同
`Number.isSafeInteger(value)` 都成立个時候先會回傳 `true`。

### 优势

- 同時檢查類型同數值安全性：只有當輸入係數字而且係安全整數時先會回傳 `true`。
- 避免數值強制轉型常見陷阱：好似字串 "5" 會正確回傳 `false`。
- 拒絕非整數同唔安全整數，適合用喺 ID、計數器同陣列索引。

## 用法

### 语法

函数：

- `isInteger(value)`

参数：

- `value`: 要檢查係咪整數狀態个值。

### 本地函数导入

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // 真
const b = isInteger(-100);   // 真
const c = isInteger("5");    // 假
const d = isInteger(5.5);    // 假
const e = isInteger(null);   // 假

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

<small>该文件于 31 January 2026 at 00:49:23 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>