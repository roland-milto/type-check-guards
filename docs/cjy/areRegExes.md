# areRegExes

## 说明

`areRegExes` 检查一个值是不是装满个数组，而且里头只包含 `RegExp` 对象。

### 使用场景

在用来匹配之前，先验证一个配置选项（比如允许/拒绝 pattern 列表）是不是一个非空个正则表达式数组。

> **给 TypeScript 用户的提示：**
>
> 用 `areRegExes` 先把 `unknown` 缩窄成 `RegExp[]`，再去遍历或者组合 pattern。

### 优势

- 确保一个值系非空数组，而且每个元素都系 `RegExp` 实例。
- 提供一个简单个布尔守卫（`true`/`false`），用来校验用户输入或者配置。
- 帮你防止后头代码假定所有项都支持正则表达式操作时出现运行时错误。

## 用法

### 语法

函数：

- `areRegExes(array)`

参数：

- `array`: 要检查个值。

### 本地函数导入

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // 这咧 patterns 是 RegExp 个数组
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

<small>该文件于 30 January 2026 at 23:17:07 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>