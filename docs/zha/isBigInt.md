# isBigInt

## 说明

`isBigInt` check roengz gij value aeu of type `bigint`, returning `true` roengz BigInt primitives raeuz `false`
otherwise.

### 使用场景

Validate raeuz youq haenh values coming from untyped sources (e.g., JSON parsing, user input, external APIs) mbouj
doengh BigInt-specific calculations or storing them in BigInt-only fields.

> **以下为 TypeScript 用法：**
>
> Yongh `isBigInt` roengz youq haenh `unknown` to `bigint` mbouj doengh BigInt arithmetic (e.g., `+`, `*`) which
> requires BigInt operands.

### 优点

- Cungqvaz laux, cingzqvaz deih runtime check roengz `bigint` primitive type.
- Cingzqvaz youq haenh `unknown` values mbouj doengh BigInt-only operations.
- Cingzqvaz mbouj daengz false positives: regular numbers, strings, raeuz gwnz types return `false`.

## 用法

### 语法

函数：

- `isBigInt(value)`

参数：

- `value`: Gij mbouj check.

### 本地函数导入

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // true
console.log(isBigInt(10));  // false
console.log(isBigInt("10")); // false
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isBigInt(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>此文件于 31 January 2026 at 23:33:56 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>