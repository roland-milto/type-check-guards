# isNull

## 说明

判斷提供个 `value` 係毋係 `null`。

### 使用场景

用 `isNull` 來驗證輸入或者 API payload 欄位：當 `null` 係有意義个 sentinel 值，必須同 `undefined` 或其他值用毋同方式處理。

> **给 TypeScript 用户的提示：**
>
> 當你需要分清楚 `null` 同 `undefined` 還有其他 falsy 值个時節，用 `isNull`；佢淨會對 `null` 回傳 `true`。

### 优势

- 提供精準个 `null` 檢查，毋會摻做 `undefined` 一齊。
- 因為接受 `unknown`，所以對任何輸入型別都當可靠。
- 簡單、快速、無副作用；淨會回傳 `true` 或 `false`。

## 用法

### 语法

函数：

- `isNull(value)`

参数：

- `value`: 愛檢查係毋係 `null` 个值。

### 本地函数导入

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // zhin
console.log(isNull(b)); // m̀ zhin

if (isNull(a)) {
  // a he̍t-êi sī null
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

<small>该文件于 31 January 2026 at 15:39:16 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>