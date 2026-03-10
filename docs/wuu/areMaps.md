# areMaps

## 说明

`areMaps` 用来判断给定个数组是不是非空，而且里向所有元素侪是 `Map` 实例。

### 使用场景

在把未知输入（比如从 JSON 解析、外部 API、或者动态来源）当作非空个 `Map` 对象列表来用之前，先做验证。

> **给 TypeScript 用户的提示：**
>
> 空数组会返回 `false`；只有当数组里向有内容，而且每个元素侪是 `Map`，辰会返回 `true`。

### 优势

- 确保每个元素侪是一个 `Map` 实例，只有当整个数组通过检查辰会返回 `true`。
- 按设计拒绝空数组，防止误把“没数据”当作有效输入来接受。
- 适合作为执行 `Map` 专用操作（比如 `.get()`、`.set()`、迭代）之前个守卫，用来对一组集合做检查。

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
  // items 一定是运行辰光保证是非空个 Map 实例数组
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // 对伊是假：空数组，或者数组里向有任一非 Map 个值
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

<small>该文件于 31 January 2026 at 16:15:18 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>