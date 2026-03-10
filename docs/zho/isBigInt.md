# isBigInt

## 说明

`isBigInt` 用于检查给定值是否为 `bigint` 类型：对 BigInt 原始值返回 `true`，否则返回 `false`。

### 使用场景

在执行 BigInt 特定计算或将其存储到仅接受 BigInt 的字段之前，验证并收窄来自无类型来源（例如 JSON 解析、用户输入、外部 API）的值。

> **给 TypeScript 用户的提示：**
>
> 在进行需要 BigInt 操作数的 BigInt 算术运算（例如 `+`、`*`）之前，使用 `isBigInt` 将 `unknown` 收窄为 `bigint`。

### 优势

- 为 `bigint` 原始类型提供简单、可靠的运行时检查。
- 在执行仅适用于 BigInt 的操作之前，帮助将 `unknown` 值收窄。
- 避免误判：普通数字、字符串和其他类型会返回 `false`。

## 用法

### 语法

函数：

- `isBigInt(value)`

参数：

- `value`: 要检查的值。

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

console.log(isBigInt(10n)); // 真
console.log(isBigInt(10));  // 假
console.log(isBigInt("10")); // 假

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isBigInt(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>该文件于 2026年1月31日 23:33:55 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>