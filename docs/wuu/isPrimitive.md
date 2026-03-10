# isPrimitive

## 说明

`isPrimitive` 用来判断给定个值是不是原始类型（`null`、`undefined`、`boolean`、`number`、`string`、`bigint`、`symbol`）。

### 使用场景

运行时校验输入（比方讲 API payload 字段、配置值、或者用户提供个数据），确保一个值是原始类型，然后再去序列化、打日志、或者应用只针对原始类型个操作。

> **给 TypeScript 用户的提示：**
>
> 用 `isPrimitive` 来保护 `unknown` 输入，等你要把伊当作对象或者函数来用之前先判断；对原始类型返回 `true`，对对象跟函数返回
`false`。

### 优势

- 快速、无分配地检查一个值是不是 JavaScript 原始类型。
- 正确把 `null` 当作原始类型（尽管 `typeof null` 是 `"object"`）。
- 帮你在做只针对对象的操作之前，把 `unknown` 值范围收窄。

## 用法

### 语法

函数：

- `isPrimitive(value)`

参数：

- `value`: 要检查是不是原始类型个值。

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

<small>该文件于 30 January 2026 at 23:58:26 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>