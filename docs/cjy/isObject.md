# isObject

## 说明

判断给定个 `value` 是不是 `object`（排除 `null`）。

### 使用场景

用 `isObject` 来校验未知输入（比如解析个 JSON、API 响应、事件 payload），喺访问属性之前先确保个值是对象而且唔系 `null`。

> **给 TypeScript 用户的提示：**
>
> `isObject` 是个运行时 guard，会返回 boolean；佢不会收窄到某一种具体对象形状。你需要更强类型个时候，要配合额外检查（比如属性是否存在）。

### 优势

- 只会对 `typeof` 是 `"object"` 个非 `null` 值返回 `true`。
- 避免常见个 JavaScript 坑：`null` 本来会畀当成对象。
- 对普通对象同内置对象实例都好使（比如 `Date`、`RegExp`）。
- 简单、快个运行时检查，适合防御式编程同输入校验。

## 用法

### 语法

函数：

- `isObject(value)`

参数：

- `value`: 要检查是不是 `object` 个值。

### 本地函数导入

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input 係运行时嘅非空对象
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

<small>该文件于 31 January 2026 at 00:17:54 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>