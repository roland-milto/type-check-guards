# areFalse

## 说明

`areFalse` 會檢查傳入个陣列內底係毋係全部元素都嚴格等於布林值 `false`。

### 使用场景

喺繼續之前，驗證一份 feature flags、檢查結果或者 guard 結果清單係毋係全部都係 `false`（例如：確認無任何阻擋條件存在）。

> **给 TypeScript 用户的提示：**
>
> 當你需要嚴格驗證一個陣列毋係空个，而且淨包含布林值 `false` 時，使用 `areFalse`。

### 优势

- 確保逐個元素都嚴格係 `false`（毋會做 truthy/falsey 轉換）。
- 透過 `isFilledArray` 要求陣列一定有內容，所以對非陣列或者空陣列會回傳 `false`。
- 為著效率，遇著第一個唔係 `false` 個元素就會提早停止。

## 用法

### 语法

函数：

- `areFalse(array)`

参数：

- `array`: 愛檢查个陣列，內底元素可以係任何型別。

### 本地函数导入

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // chin
const b = areFalse([false, true, false]);  // m̄-chin
const c = areFalse([false, "false", false]); // m̄-chin
const d = areFalse([]); // m̄-chin
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areFalse(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areFalse](../_analysis/areFalse.md)

<br>

---

<small>该文件于 31 January 2026 at 16:17:05 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>