# isObject

## 说明

判断给定的 `value` 是否为 `object`（不包括 `null`）。

### 使用场景

在访问属性之前，使用 `isObject` 校验未知输入（例如解析后的 JSON、API 响应、事件载荷），确保该值是对象而不是 `null`。

> **给 TypeScript 用户的提示：**
>
> `isObject` 是一个运行时守卫，返回布尔值；它不会将类型收窄到特定的对象形状。当你需要更强的类型约束时，请结合额外检查（例如属性是否存在）。

### 优势

- 仅对 `typeof` 为 `"object"` 且非 `null` 的值返回 `true`。
- 避免常见的 JavaScript 陷阱：否则 `null` 会被当作对象处理。
- 适用于普通对象以及内置对象实例（例如 `Date`、`RegExp`）。
- 简单、快速的运行时检查，适合用于防御式编程与输入校验。

## 用法

### 语法

函数：

- `isObject(value)`

参数：

- `value`: 要检查其是否为 `object` 的值。

### 本地函数导入

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input 在运行时是一个非空对象
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isObject(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isObject](../_analysis/isObject.md)

<br>

---

<small>该文件于 2026年1月31日 00:26:32 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>