# isNullOrUndefined

## 说明

检查给定值是否为 `null` 或 `undefined`。

### 使用场景

当你需要将 `null` 和 `undefined` 都视为“无值”时使用 `isNullOrUndefined`，例如校验可选输入、规范化 API
载荷，或在解引用可能缺失的值之前保护代码路径。

> **给 TypeScript 用户的提示：**
>
> 在访问属性或调用方法之前，使用 `isNullOrUndefined` 来防护缺失值；它仅在 `null` 和 `undefined` 时返回 `true`。

### 优势

- 提供一个清晰、可复用的守卫，用于在同一处检测 `null` 和 `undefined`。
- 返回一个简单的布尔值（`true`/`false`），便于在条件判断和校验中组合使用。
- 在访问属性或调用方法之前检查缺失值，从而帮助避免常见的运行时错误。

## 用法

### 语法

函数：

- `isNullOrUndefined(value)`

参数：

- `value`: 要检查是否为 `null` 或 `undefined` 的值。

### 本地函数导入

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // 处理缺失值
}

console.log(isNullOrUndefined(b)); // 真
console.log(isNullOrUndefined(c)); // 假

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isNullOrUndefined(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>该文件于 2026年1月31日 00:35:56 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>