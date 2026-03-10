# isMap

## 说明

检查给定的 `value` 是否为 `Map`；如果是则返回 `true`，否则返回 `false`。

### 使用场景

当你接收到一个 `unknown` 值（例如来自 JSON 解析、外部 API 或用户输入）并且需要在执行 `Map` 操作之前确保它是 `Map` 时，使用
`isMap`。

> **给 TypeScript 用户的提示：**
>
> `isMap` 是一个运行时守卫：当值是 `Map` 时返回 `true`，否则返回 `false`；在调用 `Map` API 之前，用它来缩小 `unknown` 的类型范围。

### 优势

- 提供一种快速的运行时检查，用于判断某个值是否为 `Map`。
- 通过保护需要 `Map` 方法（如 `get`、`set`、`has`）的代码路径，帮助防止类型错误。
- 在处理 `unknown` 输入时，作为轻量级验证步骤非常适用。

## 用法

### 语法

函数：

- `isMap(value)`

参数：

- `value`: 要检查的值。

### 本地函数导入

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isMap(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isMap](../_analysis/isMap.md)

<br>

---

<small>该文件于 31 January 2026 at 16:04:01 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>