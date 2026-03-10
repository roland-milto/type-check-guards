# isNull

## 说明

判斷提供 ê `value` 敢是 `null`。

### 使用场景

用 `isNull` 來驗證輸入抑是 API payload 欄位，當 `null` 是有意義 ê sentinel 值，而且一定愛用無仝方式處理，毋是像 `undefined`
抑是其他值。

> **给 TypeScript 用户的提示：**
>
> 當你需要區別 `null` 跟 `undefined` 以及其他 falsy 值 ê 時，使用 `isNull`；伊干焦對 `null` 才回傳 `true`。

### 优势

- 提供精確檢查 `null`，毋會摻做 `undefined`。
- 對任何輸入型態攏可靠，因為伊接受 `unknown`。
- 簡單、快速、無副作用；干焦回傳 `true` 抑是 `false`。

## 用法

### 语法

函数：

- `isNull(value)`

参数：

- `value`: 欲檢查敢是 `null` ê 值。

### 本地函数导入

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // chin
console.log(isNull(b)); // m̄-sī

if (isNull(a)) {
  // a tī null tī
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isNull(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isNull](../_analysis/isNull.md)

<br>

---

<small>该文件于 31 January 2026 at 15:40:09 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>