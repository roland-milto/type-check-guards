# isFalse

## 说明

`isFalse` check daengz aen value youq strict equal caeuq booleen literal `false`.

### 使用场景

Validate unknown data (e.g., from JSON, query params, or user input) de youq only explicit booleen value `false` should
be treated as a valid flag, caeuq everything else should be rejected.

> **以下为 TypeScript 用法：**
>
> Yongh `isFalse` when you need accept only literal `false` caeuq reject laux other falsy values; it returns `true` only
> for `value === false`.

### 优点

- Boux cungj strict check daengz booleen literal `false` mbouj gyaeuj coercion.
- Cingzcoh `false` caeuq laux falsy values daengz `0`, `""`, `null`, `undefined`.
- Gaeuq raeuj readability, caeuq daengz yienh raemx mbouj gyaeuj when validating unknown input.

## 用法

### 语法

函数：

- `isFalse(value)`

参数：

- `value`: Caih youq daengz check.

### 本地函数导入

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input liu gyaeq laux false neix
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isFalse(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isFalse](../_analysis/isFalse.md)

<br>

---

<small>此文件于 31 January 2026 at 16:45:13 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>