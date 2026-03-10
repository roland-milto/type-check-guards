# areStrings

## 说明

`areStrings` 检查一个数组是不是非空，并且里向所有元素侪是字符串；只有符合这两点才返回 `true`。

### 使用场景

验证外部或者用户提供个数据（比如 query params、JSON payloads、CSV fields），确保你拿到个是非空个字符串列表，再进行处理。

> **给 TypeScript 用户的提示：**
>
> 用 `areStrings` 来验证未知数组，再去应用只对字符串个逻辑；对空数组会返回 `false`。

### 优势

- 确保每个元素侪是字符串，并通过返回 `false` 来拒绝混合类型数组。
- 拒绝空数组，所以 `true` 只表示是非空个字符串列表。
- 适合作为快速个运行时守卫，先检查再做只对字符串个操作（比如 `trim`、`toLowerCase`）。

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
  // input 在运行辰光是一个非空个 string[]
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

<small>该文件于 30 January 2026 at 13:21:04 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>