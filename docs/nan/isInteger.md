# isInteger

## 说明

判斷指定的 `value` 敢是安全的整數數字。

### 使用场景

佇使用做整數（例如陣列索引、分頁、計數器、資料庫 ID）以前，先驗證無信任的輸入（例如 query params、JSON payloads、environment
variables）。

> **给 TypeScript 用户的提示：**
>
> 用 `isInteger` 來驗證未知的輸入，才來當做數字整數使用；伊干焦會佇 `typeof value === "number"` 而且
`Number.isSafeInteger(value)` 的時陣回傳 `true`。

### 优势

- 檢查型別佮數字安全性：干焦當輸入是數字而且是安全整數的時陣才會回傳 `true`。
- 防止數字強制轉型的常見陷阱：像 "5" 這款字串會正確回傳 `false`。
- 拒絕非整數佮無安全的整數，適合用佇 ID、計數器、陣列索引。

## 用法

### 语法

函数：

- `isInteger(value)`

参数：

- `value`: 欲檢查敢是整數的值。

### 本地函数导入

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // sī
const b = isInteger(-100);   // sī
const c = isInteger("5");    // m̄-sī
const d = isInteger(5.5);    // m̄-sī
const e = isInteger(null);   // m̄-sī

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

<small>该文件于 31 January 2026 at 00:50:42 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>