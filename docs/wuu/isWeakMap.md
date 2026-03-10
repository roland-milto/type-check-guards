# isWeakMap

## 说明

判断给定个 `value` 是勿是一个 `WeakMap` 实例。

### 使用场景

当侬接收一个 `unknown` 值（比方讲来自公开 API、插件系统、或者动态配置），并且需要在使用 `WeakMap` 特有行为之前先验证伊确实是
`WeakMap`，就用 `isWeakMap`。

> **给 TypeScript 用户的提示：**
>
> `isWeakMap` 会做一个 `instanceof WeakMap` 检查；伊是一个运行时守卫，只有对真正个 `WeakMap` 实例才会返回 `true`。

### 优势

- 简单个运行时检查，用来判断一个值是不是 `WeakMap`。
- 帮侬避免误用需要 `WeakMap` 个 API：伊会返回 `true`/`false`，而勿是抛出异常。
- 支持 `unknown` 输入，模块边界上用起来蛮方便（比方讲解析、外部数据、或者无类型代码）。

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
  // a 在运行辰光是 WeakMap
}

console.log(isWeakMap(a)); // 对
console.log(isWeakMap(b)); // 勿对
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

<small>该文件于 30 January 2026 at 13:27:40 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>