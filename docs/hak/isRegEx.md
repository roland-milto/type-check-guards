# isRegEx

## 说明

判斷提供个值係毋係一個 `RegExp` 實例。

### 使用场景

在當作正則表達式來用之前，先驗證使用者提供抑係動態个值（例如：設定、API payload、plugin 輸入）。

> **给 TypeScript 用户的提示：**
>
> 用 `isRegEx` 來縮窄 `unknown`（抑係 union）个值，然後正使用 RegExp 專用个屬性抑係方法；佢淨會對係 `RegExp` 實例个值回傳
`true`。

### 优势

- 提供一隻簡單个執行期型別守衛，來檢查一個值係毋係 `RegExp`。
- 幫助避免程式碼預期係正則表達式時出錯（例如：呼叫 `test`、`exec`，抑係讀取 `source` 之前）。
- 同時支援 regex 字面量同用 `new RegExp(...)` 建立个實例。
- 對毋係 regex 个輸入毋會擲出例外，會回傳清楚个布林結果（`true`/`false`）。

## 用法

### 语法

函数：

- `isRegEx(value)`

参数：

- `value`: 愛檢查个值。

### 本地函数导入

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input 係一隻 RegExp
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isRegEx(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>该文件于 30 January 2026 at 23:29:23 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>