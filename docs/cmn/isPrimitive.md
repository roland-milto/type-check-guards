# isPrimitive

## 说明

`isPrimitive` 用于判断给定值是否为原始类型（`null`、`undefined`、`boolean`、`number`、`string`、`bigint`、`symbol`）。

### 使用场景

在运行时验证输入（例如 API 载荷字段、配置值或用户提供的数据），以确保在序列化、记录日志或应用仅适用于原始类型的操作之前，该值为原始类型。

> **给 TypeScript 用户的提示：**
>
> 在将 `unknown` 输入当作对象或函数处理之前，使用 `isPrimitive` 进行守卫；对于原始类型它返回 `true`，对于对象和函数返回
`false`。

### 优势

- 快速、无分配地检查某个值是否为 JavaScript 原始类型。
- 正确地将 `null` 视为原始类型（即使 `typeof null` 是 `"object"`）。
- 在执行仅适用于对象的操作之前，帮助收窄 `unknown` 值的类型。

## 用法

### 语法

函数：

- `isPrimitive(value)`

参数：

- `value`: 要检查其是否为原始类型的值。

### 本地函数导入

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isPrimitive(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>该文件于 30 January 2026 at 23:55:47 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>