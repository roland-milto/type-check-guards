# isObject

## 说明

判断给定个 `value` 是不是 `object`（排除 `null`）。

### 使用场景

用 `isObject` 来校验未知输入（比方讲解析出来个 JSON、API 响应、事件 payload），访问属性之前先保证个值是对象而且弗是 `null`。

> **给 TypeScript 用户的提示：**
>
> `isObject` 是个运行时 guard，会返回 boolean；伊弗会收窄到某一种特定个对象形状。要更强个类型约束，侬需要搭额外检查（比方讲检查属性是不是存在）一道用。

### 优势

- 只对非 `null` 而且 `typeof` 是 `"object"` 个值返回 `true`。
- 避免 JavaScript 里向来个坑：`null` 会畀当成功对象。
- 对普通对象搭内置对象实例（比方讲 `Date`、`RegExp`）都好用。
- 简单、快个运行时检查，适合防御式编程搭输入校验。

## 用法

### 语法

函数：

- `isObject(value)`

参数：

- `value`: 要检查个值，看伊是不是 `object`。

### 本地函数导入

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input 勒是运行辰光里向个非空对象
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

<small>该文件于 31 January 2026 at 00:26:26 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>