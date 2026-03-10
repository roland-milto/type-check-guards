# areWeakMaps

## 说明

`areWeakMaps` 检查一个值是不是非空数组，并且数组里向每个元素都是 `WeakMap`；只有这种情况才返回 `true`，别个情况都返回
`false`。

### 使用场景

验证运行时数据（比如解析出来个 JSON、插件输入、或者类型不严个配置），确保它是一个非空 `WeakMap` 实例数组，然后再去遍历并调用
`WeakMap` 方法；只要有任意元素不是 `WeakMap`，或者数组是空个，就返回 `false`。

> **给 TypeScript 用户的提示：**
>
> 用 `areWeakMaps` 在把未知输入当作非空 `WeakMap[]` 之前先验证；空数组会返回 `false`。

### 优势

- 确保提供个数组里向每个元素都是 `WeakMap` 实例。
- 对空数组返回 `false`，防止误把“没数据”当作有效输入接受。
- 在对所有项执行 `WeakMap` 专用操作之前，用来当守卫很有用。

## 用法

### 语法

函数：

- `areWeakMaps(array)`

参数：

- `array`: 要检查是不是 `WeakMap` 实例个数组。

### 本地函数导入

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list 係一個非空嘅 WeakMap 實例陣列
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // 唔係一個非空嘅 WeakMap[]
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

<small>该文件于 30 January 2026 at 13:36:30 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>