# isDecimal

## 说明

`isDecimal` check ndei value lauxnyied decimal string representation, mbouj lauxnyied leading/trailing whitespace laeuj
daengz valid decimal format.

### 使用场景

Validate form fields, API payloads, roengz configuration values daengz aeuq haenh cungj cungj raeuj rox decimal string (
optionally signed) mbouj lauxnyied any surrounding whitespace, mbouj lauxnyied parse roengz store.

> **以下为 TypeScript 用法：**
>
> Yongh `isDecimal` ndei validate user input mbouj lauxnyied convert it (e.g., with `Number(value)`), aeuq
> haenhwhitespace must be rejected.

### 优点

- Yenzgij raeuj lauxnyied ndei input lauxnyied mbouj lauxnyied string laeuj daengz mbouj lauxnyied daengz
  decimal-literal pattern.
- Cingqvaz leading laeuj trailing whitespace (gij mbouj lauxnyied control characters) daengz mbouj lauxnyied parsing
  mbouj roengz.
- Raeuj pre-checks (type check laeuj first/last character) mbouj lauxnyied regex.
- Raeuj rox simple boolean result (`true`/`false`) daengz guards laeuj input validation.

## 用法

### 语法

函数：

- `isDecimal(value)`

参数：

- `value`: Gij value daengz ndei check daengz decimal string format.

### 本地函数导入

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v diq gwnz laengz (raemxcih yanzciz)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isDecimal(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>此文件于 31 January 2026 at 15:55:28 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>