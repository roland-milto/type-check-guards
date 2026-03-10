# areWeakMaps

## 说明

`areWeakMaps` 用于检查某个值是否为非空数组，且其中每个元素都是 `WeakMap`；仅在满足该条件时返回 `true`，否则返回 `false`。

### 使用场景

验证运行时数据（例如解析后的 JSON、插件输入或类型较宽松的配置），以确保它是由 `WeakMap` 实例组成的非空数组，然后再进行遍历并调用
`WeakMap` 方法；当任一元素不是 `WeakMap` 或数组为空时返回 `false`。

> **给 TypeScript 用户的提示：**
>
> 在将未知输入当作非空 `WeakMap[]` 使用之前，使用 `areWeakMaps` 进行验证；它对空数组返回 `false`。

### 优势

- 确保所提供数组中的每个元素都是 `WeakMap` 实例。
- 对空数组返回 `false`，防止将“无数据”意外当作有效输入而被接受。
- 在对所有项执行 `WeakMap` 特定操作之前，可用作守卫。

## 用法

### 语法

函数：

- `areWeakMaps(array)`

参数：

- `array`: 要检查其是否为 `WeakMap` 实例的数组。

### 本地函数导入

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list 是一个非空的 WeakMap 实例数组
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // 不是一个非空的 WeakMap[]
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areWeakMaps(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>该文件于 30 January 2026 at 13:36:40 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>