# areMaps

## 说明

`areMaps` 用来判断给定个数组是否非空，并且里头所有元素都是 `Map` 实例。

### 使用场景

在把未知输入（比如 JSON 解析、外部 API、或者动态来源）当作非空个 `Map` 对象列表来用之前，先验证一遍。

> **给 TypeScript 用户的提示：**
>
> 空数组会返回 `false`；只有当数组里有内容并且每个元素都是 `Map` 时才会返回 `true`。

### 优势

- 确保每个元素都是一个 `Map` 实例，只有当整个数组都通过检查时才返回 `true`。
- 按设计拒绝空数组，防止把“无数据”意外当作有效输入来接受。
- 适合作为在集合上执行 `Map` 专用操作（例如 `.get()`、`.set()`、遍历）之前的守卫。

## 用法

### 语法

函数：

- `areMaps(array)`

参数：

- `array`: 要检查个数组。

### 本地函数导入

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items 肯定系运行时一个非空个 Map 实例数组
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // 对：空数组，或者数组里头有任何非 Map 值，都会返 false
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