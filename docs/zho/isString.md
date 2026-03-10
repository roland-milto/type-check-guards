# isString

## 说明

`isString` 用于判断给定值是否为字符串。

### 使用场景

在运行时验证用户输入、API 负载字段或配置值，确保某个值是字符串后再应用字符串操作（例如：去除首尾空白、分割、大小写转换）。

> **给 TypeScript 用户的提示：**
>
> 在调用字符串方法之前，使用 `isString` 来验证 `unknown` 或类型较宽松的值；仅当 `typeof value === "string"` 时才返回
`true`。

### 优势

- 使用 `typeof` 进行简单快速的检查。
- 返回可预测的布尔结果：字符串为 `true`，否则为 `false`。
- 对空字符串和非空字符串都适用。
- 在执行字符串特定操作之前，作为轻量级运行时守卫很有用。

## 用法

### 语法

函数：

- `isString(value)`

参数：

- `value`: 要测试其是否为字符串类型的值。

### 本地函数导入

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // 此处 input 是字符串
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

<small>该文件于 2026年1月30日 13:16:22 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>