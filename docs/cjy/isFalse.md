# isFalse

## 说明

`isFalse` 检查给定个值是不是同布尔字面量 `false` 严格相等。

### 使用场景

验证未知数据（比如来自 JSON、query params 或者用户输入），只把明确个布尔值 `false` 当作有效标志，其他一概要拒绝。

> **给 TypeScript 用户的提示：**
>
> 当你只想接受字面量 `false`，并且拒绝所有其他假值个辰光，用 `isFalse`；伊只会对 `value === false` 返回 `true`。

### 优势

- 提供对布尔字面量 `false` 个严格检查，毋使强制转换。
- 帮你区分 `false` 同其他假值，比如 `0`、`""`、`null` 还有 `undefined`。
- 验证未知输入时，通过把意图讲明白，提升可读性。

## 用法

### 语法

函数：

- `isFalse(value)`

参数：

- `value`: 要检查个值。

### 本地函数导入

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // 这搭 input 就正经是 false
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isFalse(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isFalse](../_analysis/isFalse.md)

<br>

---

<small>该文件于 31 January 2026 at 16:21:07 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>