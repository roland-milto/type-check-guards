# isFilledArray

## 说明

检查 `value` 是不是一个至少有一个元素个数组，并返回 `true` 或 `false`。

### 使用场景

用 `isFilledArray` 来校验传进来个数据（比方讲 API payload、表单值、配置），再去迭代、访问第一个元素，或者应用需要至少一个条目个逻辑。

> **给 TypeScript 用户的提示：**
>
> `isFilledArray` 是一个运行时 guard，会返回一个 boolean；伊除脱确认数组非空以外，并勿会进一步收窄元素类型。

### 优势

- 用 `Array.isArray` 搭配长度检查，简单又快咾检查一个非空数组。
- 帮侬避免当代码假设数组里至少有一个元素时出现运行时错误。
- 布尔结果清爽明了：非空数组返回 `true`，否则返回 `false`。

## 用法

### 语法

函数：

- `isFilledArray(value)`

参数：

- `value`: 要检查个值，看伊是不是一个非空数组。

### 本地函数导入

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input 係运行辰光一只非空数组
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isFilledArray(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>该文件于 6 February 2026 at 11:49:28 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>