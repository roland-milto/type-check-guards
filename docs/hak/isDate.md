# isDate

## 说明

`isDate` 判斷提供个值係毋係 `Date`，對 `Date` 實例會回傳 `true`，其他情況回傳 `false`。

### 使用场景

喺執行 `Date` 操作（例如格式化、比較，或者呼叫 `toISOString()`）之前，先驗證並縮窄未知值（例如 request data、config
values，或者解析過个 JSON）。

> **给 TypeScript 用户的提示：**
>
> 用 `isDate` 來喺執行期將 `unknown` 縮窄到 `Date`；佢淨係對真正个 `Date` 實例回傳 `true`（毋係日期字串）。

### 优势

- 提供一個簡單个執行期守護，來驗證一個值係毋係 `Date`。
- 透過確保淨係 `Date` 實例會通過驗證，幫助避免型別錯誤。
- 對驗證未知輸入（例如 API payloads）當使用日期專用方法之前當有用。

## 用法

### 语法

函数：

- `isDate(value)`

参数：

- `value`: 愛檢查係毋係 `Date` 型別个值。

### 本地函数导入

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input 係 Date，佇遮
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isDate(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isDate](../_analysis/isDate.md)

<br>

---

<small>该文件于 31 January 2026 at 15:37:24 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>