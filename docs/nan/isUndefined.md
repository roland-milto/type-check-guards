# isUndefined

## 说明

檢查一个指定个值敢是 `undefined`。

### 使用场景

用 `isUndefined` 來 guard 可選輸入、偵測欠缺个屬性，抑是區分「無提供」（`undefined`）佮「明確个空」（`null`）。

> **给 TypeScript 用户的提示：**
>
> 當你特別需要偵測 `undefined`（毋是 `null`）个時陣，使用 `isUndefined`。伊是安全个，因為伊是靠
`typeof value === "undefined"`。

### 优势

- `typeof` 來提供清楚、明確个 `undefined` 檢查，避免佇變數無宣告時出現个邊界情形。
- 回傳簡單个布林結果（`true`/`false`），適合做 guard、分支判斷佮驗證邏輯。
- 幫助區分 `undefined` 佮其他「空」值，親像 `null`、`0`、`""`、抑是 `NaN`。

## 用法

### 语法

函数：

- `isUndefined(value)`

参数：

- `value`: 欲檢查个值。

### 本地函数导入

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x tī sī undefined tī
} else {
  // x tī bô sī undefined tī
}

const a = isUndefined(undefined); // chin
const b = isUndefined(null);      // bô
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

<small>该文件于 30 January 2026 at 14:03:41 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>