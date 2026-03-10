# isNull

## 说明

确定提供的 `value` 是否为 `null`。

### 使用场景

使用 `isNull` 来验证输入或 API 负载字段，其中 `null` 是有意义的哨兵值，且必须与 `undefined` 或其他值区别处理。

> **给 TypeScript 用户的提示：**
>
> 当你需要区分 `null` 与 `undefined` 以及其他假值时使用 `isNull`；它仅在 `null` 时返回 `true`。

### 优势

- 提供对 `null` 的精确检查，而不会将其与 `undefined` 混为一谈。
- 由于接受 `unknown`，因此对任何输入类型都能可靠工作。
- 简单、快速且无副作用；只返回 `true` 或 `false`。

## 用法

### 语法

函数：

- `isNull(value)`

参数：

- `value`: 要检查是否为 `null` 的值。

### 本地函数导入

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // true
console.log(isNull(b)); // false

if (isNull(a)) {
  // 这里 a 是 null
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isNull(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isNull](../_analysis/isNull.md)

<br>

---

<small>该文件于 31 January 2026 at 15:38:52 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>