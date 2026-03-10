# isRegEx

## 说明

判断所提供的值是否为 `RegExp` 实例。

### 使用场景

在把用户提供或动态的值（例如：配置、API 载荷、插件输入）当作正则表达式处理之前，先进行验证。

> **给 TypeScript 用户的提示：**
>
> 使用 `isRegEx` 来缩小 `unknown`（或联合类型）值的范围，再去使用 RegExp 专用的属性或方法；它只会在值是 `RegExp` 实例时返回
`true`。

### 优势

- 提供一个简单的运行时类型守卫，用来检查一个值是不是 `RegExp`。
- 帮助防止当代码预期是正则表达式时发生错误（例如：在调用 `test`、`exec`，或读取 `source` 之前）。
- 同时适用于正则字面量以及通过 `new RegExp(...)` 创建的实例。
- 对非正则输入不会抛出异常，而是返回清楚的布尔结果（`true`/`false`）。

## 用法

### 语法

函数：

- `isRegEx(value)`

参数：

- `value`: 欲检查的值。

### 本地函数导入

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input tī RegExp tī-chū
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isRegEx(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>该文件于 30 January 2026 at 23:30:15 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>