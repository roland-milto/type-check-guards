# isBinary

## 说明

`isBinary` 判斷一個值係毋係二進位字串（做得選擇性加 `0b`/`0B` 前綴），並回傳 `true` 或 `false`。

### 使用场景

驗證使用者提供个字串（例如：表單欄位、CLI 參數、設定值），確保佢兜淨係二進位數字，並做得選擇性帶 `0b`/`0B` 前綴，正來做後續處理。

> **给 TypeScript 用户的提示：**
>
> 在剖析或轉換字串做 `BigInt`/`Number` 之前，先用 `isBinary` 做型別守衛，避免無效輸入。

### 优势

- 接受有抑無抑 `0b`/`0B` 前綴个二進位字串。
- 拒絕空字串同有前後空白（ASCII ≤ 32）个字串。
- 會回傳 `true`/`false`，毋會擲出例外，對毋知个輸入較安全。

## 用法

### 语法

函数：

- `isBinary(value)`

参数：

- `value`: 愛檢查个值。

### 本地函数导入

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // zhin
const b = isBinary("1010");   // zhin
const c = isBinary("0b1020"); // m̀hai
const d = isBinary(0b1010);     // m̀hai

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isBinary(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isBinary](../_analysis/isBinary.md)

<br>

---

<small>该文件于 31 January 2026 at 23:09:53 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>