# isError

## 说明

檢查指定个 `value` 係毋係 `Error` 个實例。

### 使用场景

當你收到一個 `unknown` 值（像係來自 `catch` 區塊、callback，抑係外部函式庫），而你需要安全判斷佢係毋係 `Error`，再去讀取
`message`、`name` 抑係 `stack` 時，就用 `isError`。

> **给 TypeScript 用户的提示：**
>
> 用 `isError` 來守護 `unknown` 值（例如來自 `catch`），在當佢當做 `Error` 之前先做檢查。

### 优势

- 提供一個簡單个執行時檢查，來判斷一個值係毋係 `Error` 實例。
- 幫助在存取 `Error` 个屬性（像係 `message` 或 `stack`）之前，先縮窄未知輸入个型別。
- 處理來自 `catch`、外部 API，抑係無型別來源个值時，降低執行時例外个風險。

## 用法

### 语法

函数：

- `isError(value)`

参数：

- `value`: 用來同 `Error` 型別比對檢查个值。

### 本地函数导入

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isError(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isError](../_analysis/isError.md)

<br>

---

<small>该文件于 6 February 2026 at 12:45:31 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>