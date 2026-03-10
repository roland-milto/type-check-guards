# isString

## 说明

`isString` 會判斷一個指定个值敢係字串。

### 使用场景

佇 runtime 驗證使用者輸入、API payload 欄位、抑是設定值，確定一個值係字串了後才來做字串操作（例：trim、split、大小寫轉換）。

> **给 TypeScript 用户的提示：**
>
> 用 `isString` 來驗證 `unknown` 抑是型態較鬆个值，才來呼叫字串方法；伊干焦佇 `typeof value === "string"` 時才會回傳
`true`。

### 优势

- 用 `typeof` 來做簡單閣快速个檢查。
- 會回傳可預期个布林結果：字串就係 `true`，毋係就係 `false`。
- 空字串抑是有內容个字串攏會當用。
- 做字串專用操作進前，當做輕量个 runtime guard 真有用。

## 用法

### 语法

函数：

- `isString(value)`

参数：

- `value`: 欲測試看覓係毋係字串型態个值。

### 本地函数导入

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input tī sī chi̍t ê chûi-jīng ê sî
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

<small>该文件于 30 January 2026 at 13:14:56 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>