# isString

## 说明

`isString` 用來判斷指定个值係毋係字串。

### 使用场景

喺執行期驗證使用者輸入、API payload 欄位，抑係設定值，確保某个值係字串，正去套用字串操作（例如：去頭尾空白、分割、大小寫轉換）。

> **给 TypeScript 用户的提示：**
>
> 用 `isString` 先驗證 `unknown` 或型別較鬆个值，正去呼叫字串方法；佢淨係喺 `typeof value === "string"` 時回傳 `true`。

### 优势

- 用 `typeof` 做簡單又快个檢查。
- 回傳可預期个布林結果：字串就係 `true`，其他就係 `false`。
- 空字串同非空字串都適用。
- 做字串專用操作之前，當作輕量个執行期防護很有用。

## 用法

### 语法

函数：

- `isString(value)`

参数：

- `value`: 欲測試係毋係字串型別个值。

### 本地函数导入

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // 这咧 input 就系个字符串
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isString(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isString](../_analysis/isString.md)

<br>

---

<small>该文件于 30 January 2026 at 13:13:28 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>