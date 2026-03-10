# isFalse

## 说明

`isFalse` 检查给定值是否与布尔字面量 `false` 严格相等。

### 使用场景

验证未知数据（例如来自 JSON、查询参数或用户输入的数据），在这种情况下只有显式的布尔值 `false` 应被视为有效标志，而其他所有值都应被拒绝。

> **给 TypeScript 用户的提示：**
>
> 当你只需要接受字面量 `false` 并拒绝所有其他假值时使用 `isFalse`；它仅在 `value === false` 时返回 `true`。

### 优势

- 在不进行类型强制转换的情况下，对布尔字面量 `false` 提供严格检查。
- 有助于将 `false` 与其他假值（falsy）区分开来，例如 `0`、`""`、`null` 和 `undefined`。
- 在验证未知输入时，通过明确意图来提升可读性。

## 用法

### 语法

函数：

- `isFalse(value)`

参数：

- `value`: 要检查的值。

### 本地函数导入

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // 这里的 input 恰好是 false
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

<small>该文件于 31 January 2026 at 16:21:12 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>