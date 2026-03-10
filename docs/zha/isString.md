# isString

## 说明

`isString` 用来判断给定个值是否为字符串。

### 使用场景

在运行时验证用户输入、API 载荷字段或配置值，确保某个值是字符串后再应用字符串操作（例如：去空格、分割、大小写转换）。

> **以下为 TypeScript 用法：**
>
> 用 `isString` 在调用字符串方法之前验证 `unknown` 或类型不严格个值；只有当 `typeof value === "string"` 时才返回 `true`。

### 优点

- `typeof` 用来做简单又快速个检查。
- 返回可预测个布尔结果：字符串为 `true`，其他为 `false`。
- 空字符串同非空字符串都适用。
- 在做字符串专用操作之前，作为轻量级运行时守卫很有用。

## 用法

### 语法

函数：

- `isString(value)`

参数：

- `value`: 要测试是否为字符串类型个值。

### 本地函数导入

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input liux laengz mbouj
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isString(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isString](../_analysis/isString.md)

<br>

---

<small>此文件于 30 January 2026 at 13:16:22 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>