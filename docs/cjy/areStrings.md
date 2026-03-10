# areStrings

## 说明

`areStrings` 检查一个数组是否非空并且所有元素都是字符串，只有在这种情况下才返回 `true`。

### 使用场景

验证外部或用户提供的数据（例如查询参数、JSON 载荷、CSV 字段），确保在处理之前你拿到的是一个非空的字符串列表。

> **给 TypeScript 用户的提示：**
>
> 用 `areStrings` 来验证未知数组，再去应用只对字符串生效的逻辑；空数组会返回 `false`。

### 优势

- 确保每个元素都是字符串，并通过返回 `false` 来拒绝混合类型数组。
- 拒绝空数组，所以 `true` 只表示一个非空的字符串列表。
- 适合作为执行仅限字符串操作（例如 `trim`、`toLowerCase`）之前的快速运行时守卫。

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
  // input 运行时系一个非空个 string[]
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

<small>该文件于 30 January 2026 at 13:17:32 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>