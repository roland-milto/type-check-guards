# areStrings

## 说明

`areStrings` 用于检查一个数组是否为非空且其所有元素都是字符串；仅在这种情况下返回 `true`。

### 使用场景

验证外部或用户提供的数据（例如查询参数、JSON 负载、CSV 字段），以确保在处理之前你拥有一个非空的字符串列表。

> **给 TypeScript 用户的提示：**
>
> 在应用仅适用于字符串的逻辑之前，使用 `areStrings` 来验证未知数组；它对空数组会返回 `false`。

### 优势

- 确保每个元素都是字符串，并通过返回 `false` 拒绝混合类型数组。
- 拒绝空数组，因此 `true` 只表示一个非空的字符串列表。
- 适合作为在执行仅适用于字符串的操作（例如 `trim`、`toLowerCase`）之前的快速运行时守卫。

## 用法

### 语法

函数：

- `areStrings(value)`

参数：

- `value`: Expected type `string[]`.

### 本地函数导入

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input 在运行时是一个非空的 string[]
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areStrings(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areStrings](../_analysis/areStrings.md)

<br>

---

<small>该文件于 2026年1月30日 13:21:11 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>