# areNullOrUndefined

## 说明

檢查指定个陣列入背所有元素係毋係都係 `null` 或 `undefined`。

### 使用场景

驗證一列可選欄位係毋係無實際值（淨係 `null`/`undefined`），再決定係毋係跳過處理，抑係顯示「無提供任何值」个狀態。

> **给 TypeScript 用户的提示：**
>
> 當你需要確認一個陣列淨係包含缺值（`null`/`undefined`）个時節，就用 `areNullOrUndefined`。注意：對空陣列佢會回傳 `false`。

### 优势

- 淨係當每隻元素都係 `null` 或 `undefined` 時先會回傳 `true`。
- 對空陣列會回傳 `false`，幫你分清楚「無資料」同「全部都係缺值」。
- 支援 `unknown[]`，喺收窄型別之前用都安全。

## 用法

### 语法

函数：

- `areNullOrUndefined(array)`

参数：

- `array`: 愛檢查个陣列。

### 本地函数导入

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areNullOrUndefined(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>该文件于 31 January 2026 at 00:29:46 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>