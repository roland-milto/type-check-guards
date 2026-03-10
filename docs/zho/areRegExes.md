# areRegExes

## 说明

`areRegExes` 用于检查某个值是否为已填充的数组，且仅包含 `RegExp` 对象。

### 使用场景

在用于匹配之前，验证某个配置选项（例如允许/拒绝模式列表）是否为非空的正则表达式数组。

> **给 TypeScript 用户的提示：**
>
> 在迭代或组合模式之前，使用 `areRegExes` 将 `unknown` 缩小为 `RegExp[]`。

### 优势

- 确保某个值是非空数组，并且其中每个元素都是 `RegExp` 实例。
- 提供一个简单的布尔守卫（`true`/`false`），用于验证用户输入或配置。
- 有助于防止在后续代码假设所有项都支持正则表达式操作时发生运行时错误。

## 用法

### 语法

函数：

- `areRegExes(array)`

参数：

- `array`: 要检查的值。

### 本地函数导入

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // 此处 patterns 是一个 RegExp 数组
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areRegExes(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>该文件于 2026年1月30日 23:22:39 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>