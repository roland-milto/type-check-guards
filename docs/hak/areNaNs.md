# areNaNs

## 说明

`areNaNs` 會檢查陣列內底係毋係全部元素都係 `NaN`，淨係當每一個元素都係 `NaN` 正會回傳 `true`。

### 使用场景

驗證傳入資料：當 `NaN` 做哨兵值（sentinel value）使用，而且你一定愛確保整個陣列完全淨係由 `NaN` 組成（例如：偵測一條全部缺值个數值序列）。

> **给 TypeScript 用户的提示：**
>
> 當你需要驗證一個陣列淨包含數值个 `NaN`（毋做字串轉數字个強制轉換）个時節，使用 `areNaNs`。

### 优势

- 單淨係當陣列內底每一個元素都係 `NaN`（嚴格逐個元素檢查）正會回傳 `true`。
- 毋會摎字串強制轉做數字；像 "NaN" 這兜值會保持做非 `NaN`，結果會變做 `false`。
- 對無填滿个陣列會回傳 `false`，避免空輸入意外回傳 `true`。

## 用法

### 语法

函数：

- `areNaNs(array)`

参数：

- `array`: 愛檢查係毋係 `NaN` 值个陣列。

### 本地函数导入

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // chhin
const b = areNaNs([NaN, 1, NaN]); // m̄-chhin
const c = areNaNs([NaN, "NaN", NaN]); // m̄-chhin
const d = areNaNs([NaN, null, NaN]); // m̄-chhin
const e = areNaNs([] as unknown[]); // m̄-chhin
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areNaNs(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>该文件于 30 January 2026 at 15:51:32 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>