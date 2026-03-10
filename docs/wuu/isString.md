# isString

## 说明

`isString` 用来判断给定个值是不是字符串。

### 使用场景

运行时校验用户输入、API payload 字段，或者配置值，确保某个值是字符串，再去做字符串操作（比方讲 trim、split、大小写转换）。

> **给 TypeScript 用户的提示：**
>
> 用 `isString` 来校验 `unknown` 或者类型比较松个值，再去调用字符串方法；只有当 `typeof value === "string"` 个辰光才会返回
`true`。

### 优势

- 用 `typeof` 做简单又快个检查。
- 返回结果蛮可预期：字符串就 `true`，否则就 `false`。
- 空字符串同非空字符串都适用。
- 做字符串专用操作之前，当作轻量级运行时守卫蛮有用。

## 用法

### 语法

函数：

- `isString(value)`

参数：

- `value`: 要测试是不是字符串类型个值。

### 本地函数导入

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input 係一隻字串（string）
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isString(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isString](../_analysis/isString.md)

<br>

---

<small>该文件于 30 January 2026 at 13:16:17 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>