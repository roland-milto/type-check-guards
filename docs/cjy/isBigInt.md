# isBigInt

## 说明

`isBigInt` 检查给定个值是不是 `bigint` 类型；对 BigInt 原始值返回 `true`，否则返回 `false`。

### 使用场景

喺做 BigInt 专用计算，或者存入只接受 BigInt 个字段之前，先验证并缩窄来自无类型来源（比如 JSON 解析、用户输入、外部 API）个值。

> **给 TypeScript 用户的提示：**
>
> 用 `isBigInt` 先把 `unknown` 缩窄到 `bigint`，再做 BigInt 算术（比如 `+`、`*`）；呢啲运算要求操作数都系 BigInt。

### 优势

- `bigint` 原始类型提供简单、可靠个运行时检查。
- 帮你喺做只支持 BigInt 个操作之前，把 `unknown` 值缩窄。
- 避免误判：普通数字、字符串同其他类型都会返回 `false`。

## 用法

### 语法

函数：

- `isBigInt(value)`

参数：

- `value`: 要检查个值。

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

<small>该文件于 31 January 2026 at 23:31:26 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>