# isDecimal

## 说明

`isDecimal` 用于检查某个值是否为十进制字符串表示：不包含前后空白，并且具有有效的十进制格式。

### 使用场景

在解析或存储之前，校验表单字段、API 负载或配置值：它们必须以十进制字符串（可选带符号）的形式提供，并且周围不能有任何空白。

> **给 TypeScript 用户的提示：**
>
> 在将用户输入转换为数值（例如使用 `Number(value)`）之前使用 `isDecimal` 进行校验，尤其是在必须拒绝空白字符的情况下。

### 优势

- 严格验证输入是否为字符串，并且匹配十进制字面量模式。
- 拒绝前后空白（包括控制字符），以避免解析歧义。
- 在运行正则表达式之前进行快速预检查（类型检查以及首/尾字符检查）。
- 返回简单的布尔结果（`true`/`false`），适用于守卫与输入校验。

## 用法

### 语法

函数：

- `isDecimal(value)`

参数：

- `value`: 要检查其是否符合十进制字符串格式的值。

### 本地函数导入

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // 这里的 v 是字符串（运行时已验证）
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isDecimal(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>该文件于 31 January 2026 at 15:51:44 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>