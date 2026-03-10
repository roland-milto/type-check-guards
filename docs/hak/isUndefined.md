# isUndefined

## 说明

檢查指定个值係毋係 `undefined`。

### 使用场景

用 `isUndefined` 來 guard 可選輸入、偵測缺少个屬性，或者分清「無提供」（`undefined`）同「明確係空」（`null`）。

> **给 TypeScript 用户的提示：**
>
> 當你特別需要偵測 `undefined`（毋係 `null`）个時節，用 `isUndefined`。佢係安全个，因為佢係靠 `typeof value === "undefined"`。

### 优势

- 用 `typeof` 來清楚、明確檢查 `undefined`，避免遇到未宣告變數个邊緣情況。
- 回傳簡單个布林結果（`true`/`false`），適合用在 guard、分支同驗證邏輯。
- 幫助分辨 `undefined` 同其他「空」值，像係 `null`、`0`、`""` 或 `NaN`。

## 用法

### 语法

函数：

- `isUndefined(value)`

参数：

- `value`: 愛檢查个值。

### 本地函数导入

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x 係 undefined 喺呢度
} else {
  // x 唔係 undefined 喺呢度
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isUndefined(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>该文件于 30 January 2026 at 14:02:47 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>