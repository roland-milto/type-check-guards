# areOctals

## 说明

`areOctals` 用于判断所提供的值是否为由有效八进制字符串组成的非空数组。

### 使用场景

在验证用户输入、配置值或 API 负载时使用 `areOctals`：当它们必须包含八进制字面量（例如文件权限模式 `0o755`），并且你希望通过返回
`false` 来拒绝空数组或任何无效条目时。

> **给 TypeScript 用户的提示：**
>
> 在转换（例如通过 `Number(...)` 或自定义解析）之前，使用 `areOctals` 来确保你拿到的是一个非空的 `unknown[]`
> ，且其中每个条目都是有效的八进制字符串。

### 优势

- 验证某个值是否为非空数组，且每个元素都是八进制字符串；仅当所有项都通过时才返回 `true`。
- 快速失败：一旦发现非八进制元素就立即返回 `false`。
- 在解析或转换八进制字符串之前作为守卫很有用，可避免运行时错误以及不一致的输入处理。

## 用法

### 语法

函数：

- `areOctals(array)`

参数：

- `array`: 要检查的值。

### 本地函数导入

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value 是一个非空的八进制字符串数组
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areOctals(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areOctals](../_analysis/areOctals.md)

<br>

---

<small>该文件于 30 January 2026 at 14:44:28 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>