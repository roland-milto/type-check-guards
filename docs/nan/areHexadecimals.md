# areHexadecimals

## 说明

檢查陣列內底的所有元素敢攏是十六進位字串；干焦對非空陣列而且每一項攏有效的時陣才回傳 `true`。

### 使用场景

用 `areHexadecimals` 來驗證使用者輸入抑是外部資料（例如：IDs、checksums、無帶開頭 '#' 的色碼），才來做十六進位解析抑是進一步處理。

> **给 TypeScript 用户的提示：**
>
> 用 `areHexadecimals` 來驗證未知的輸入，才來解析抑是轉換數值（比喻講：佇 `parseInt(value, 16)` 以前，抑是 BigInt 轉換以前）。

### 优势

- 驗證逐个元素攏是十六進位字串，干焦當所有項目攏符合的時陣才會回傳 `true`。
- 設計上會拒絕空陣列，對欠缺的輸入資料會回傳 `false`。
- 提供簡單的布林結果（`true`/`false`），適合用做 guard 佮提早回傳的驗證。

## 用法

### 语法

函数：

- `areHexadecimals(array)`

参数：

- `array`: 欲檢查內底敢有十六進位字串元素的陣列。

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

<small>该文件于 31 January 2026 at 23:07:10 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>