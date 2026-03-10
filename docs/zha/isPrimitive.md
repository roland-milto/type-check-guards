# isPrimitive

## 说明

`isPrimitive` daengz ndei rox aen value laengh primitive (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### 使用场景

Runtime validate inputs (daengz API payload fields, configuration values, raeuz user-provided data) ndei rox aen value
laengh primitive, caeuq youq serialize, logging, raeuz apply primitive-only operations.

> **以下为 TypeScript 用法：**
>
> Yongh `isPrimitive` laengh guard `unknown` inputs, caeuq youq daengz ndei laengh objects raeuz functions; raeuz daengz
`true` for primitives, raeuz daengz `false` for objects raeuz functions.

### 优点

- Kauq, allocation-free laengh daengz ndei rox miz aen JavaScript primitive.
- Cingqzengz daengz `null` laengh primitive (daengz `typeof null` laengh `"object"`).
- Bouxcoz youq ndei `unknown` gyaeuj mbouj gwnz, caeuq youq object-only operations.

## 用法

### 语法

函数：

- `isPrimitive(value)`

参数：

- `value`: Gyaeuj ndei rox primitive type.

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

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isPrimitive(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>此文件于 30 January 2026 at 23:58:28 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>