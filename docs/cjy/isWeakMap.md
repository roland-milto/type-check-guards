# isWeakMap

## 说明

判断给定个 `value` 是不是一个 `WeakMap` 实例。

### 使用场景

当你接收一个 `unknown` 值（比如来自公共 API、插件系统，或者动态配置），并且在用 `WeakMap` 特有行为之前需要先确认它是
`WeakMap` 时，就用 `isWeakMap`。

> **给 TypeScript 用户的提示：**
>
> `isWeakMap` 会做一个 `instanceof WeakMap` 检查；它是个运行时守卫，只有真个 `WeakMap` 实例才会返回 `true`。

### 优势

- 简单个运行时检查，用来判断一个值是不是 `WeakMap`。
- 通过返回 `true`/`false` 而不是抛异常，帮你防止误用那些要求 `WeakMap` 个 API。
- 支持 `unknown` 输入，模块边界上用起来方便（比如解析、外部数据，或者无类型代码）。

## 用法

### 语法

函数：

- `isWeakMap(value)`

参数：

- `value`: 要检查个值。

### 本地函数导入

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a 运行时系 WeakMap
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isWeakMap(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>该文件于 30 January 2026 at 13:24:30 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>