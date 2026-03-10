# areHexadecimals

## 说明

檢查陣列裡背所有元素係毋係十六進制字串；淨係對非空陣列而且每一項都有效个情況下先回傳 `true`。

### 使用场景

用 `areHexadecimals` 來驗證使用者輸入或者外部資料（例如：ID、checksum、無帶前置 '#' 个色碼），再進行十六進制解析或者後續處理。

> **给 TypeScript 用户的提示：**
>
> 用 `areHexadecimals` 先驗證未知輸入，正來解析或者轉換值（比方講：做 `parseInt(value, 16)` 之前，或者做 BigInt 轉換之前）。

### 优势

- 驗證逐個元素係毋係十六進制字串，淨係當所有項目都符合先會回傳 `true`。
- 設計上會拒絕空陣列，對於缺少輸入資料會回傳 `false`。
- 提供簡單个布林結果（`true`/`false`），適合用做 guard 同早期返回个驗證。

## 用法

### 语法

函数：

- `areHexadecimals(array)`

参数：

- `array`: 愛檢查个陣列，用來確認裡背个元素係毋係十六進制字串。

### 本地函数导入

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areHexadecimals(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>该文件于 31 January 2026 at 23:06:16 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>