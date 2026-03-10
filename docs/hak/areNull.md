# areNull

## 说明

檢查指定个 `array` 裡肚係毋係所有元素都係 `null`。

### 使用场景

喺套用假設所有項目都係刻意留空个邏輯之前，先驗證資料集欄位、API 欄位清單，抑係佔位陣列係毋係淨係包含 `null` 值。

> **给 TypeScript 用户的提示：**
>
> 當你需要嚴格檢查輸入係一隻非空陣列，而且每隻元素都正正係 `null`（毋係 `undefined`，毋係假值）个時節，用 `areNull`。

### 优势

- 淨係當每隻元素都係 `null` 嗰陣先會回傳 `true`，做得著一個嚴格个「全部符合」守衛。
- 對非陣列同空陣列會回傳 `false`，避免喺無效輸入上意外得到真值結果。
- 好適合作為前置條件檢查，用喺處理必須完全係 `null` 个資料之前。

## 用法

### 语法

函数：

- `areNull(array)`

参数：

- `array`: 用來檢查係毋係全部元素都係 `null` 个輸入陣列。

### 本地函数导入

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // chhin
const allNullB = areNull(b); // m̄-sī

const notAnArray = areNull(123 as unknown as unknown[]); // m̄-sī
const empty = areNull([]); // m̄-sī

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areNull(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areNull](../_analysis/areNull.md)

<br>

---

<small>该文件于 31 January 2026 at 15:43:19 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>