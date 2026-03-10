# isWeakSet

## 说明

判斷所提供个 `value` 係毋係一個物件个 `WeakSet`。

### 使用场景

當你接受無型別个輸入（例如：來自外部 API、動態設定，或者 `unknown` 值），而且你需要在使用 `WeakSet` 專用操作之前先驗證佢係
`WeakSet`，就用 `isWeakSet`。

> **给 TypeScript 用户的提示：**
>
> 用 `isWeakSet` 來在執行時將一個 `unknown` 值縮窄到 `WeakSet<object>`；注意 `WeakSet` 淨做得包含物件參照。

### 优势

- 提供一個簡單个執行時檢查，用來判斷一個值係毋係 `WeakSet`。
- 透過確保淨係將 `WeakSet` 實例當做 `WeakSet` 來處理，幫助避免型別錯誤。
- 對任何 `unknown` 輸入都做得用，並且會回傳清楚个布林結果（`true`/`false`）。

## 用法

### 语法

函数：

- `isWeakSet(value)`

参数：

- `value`: 愛檢查个值。

### 本地函数导入

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // chhin
console.log(isWeakSet(b)); // m̄-sī

if (isWeakSet(a)) {
  // a tī runtime sî WeakSet
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isWeakSet(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>该文件于 30 January 2026 at 14:14:51 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>