# isWeakMap

## 说明

判断给定的 `value` 是否为 `WeakMap` 实例。

### 使用场景

当你接收一个 `unknown` 值（例如来自公共 API、插件系统或动态配置）并且需要在使用 `WeakMap` 特有行为之前验证它确实是
`WeakMap` 时，使用 `isWeakMap`。

> **给 TypeScript 用户的提示：**
>
> `isWeakMap` 会执行 `instanceof WeakMap` 检查；它是一个运行时守卫，仅对真实的 `WeakMap` 实例返回 `true`。

### 优势

- 用于在运行时简单检查某个值是否为 `WeakMap`。
- 通过返回 `true`/`false` 而不是抛出异常，帮助防止误用那些需要 `WeakMap` 的 API。
- 可用于 `unknown` 输入，使其在模块边界（例如解析、外部数据或无类型代码）处更方便。

## 用法

### 语法

函数：

- `isWeakMap(value)`

参数：

- `value`: 要检查的值。

### 本地函数导入

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a 在运行时是一个 WeakMap
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

<small>该文件于 30 January 2026 at 13:24:33 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>