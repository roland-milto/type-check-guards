# areMaps

## 说明

`areMaps` 用于判断给定数组是否为非空，并且其所有元素都是 `Map` 实例。

### 使用场景

在将未知输入（例如来自 JSON 解析、外部 API 或动态来源）当作非空的 `Map` 对象列表来处理之前，先进行校验。

> **给 TypeScript 用户的提示：**
>
> 对空数组返回 `false`；只有当数组非空且每个元素都是 `Map` 时才返回 `true`。

### 优势

- 确保每个元素都是 `Map` 实例，只有当整个数组都通过检查时才返回 `true`。
- 按设计拒绝空数组，防止将“无数据”意外当作有效输入接受。
- 适合作为在集合上执行 `Map` 专用操作（例如 `.get()`、`.set()`、迭代）之前的守卫。

## 用法

### 语法

函数：

- `areMaps(array)`

参数：

- `array`: 要检查的数组。

### 本地函数导入

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // 在运行时，items 保证是一个非空的 Map 实例数组
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // 对于：空数组，或包含任何非 Map 值的数组，返回 false
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areMaps(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areMaps](../_analysis/areMaps.md)

<br>

---

<small>该文件于 31 January 2026 at 16:12:00 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>