# isDecimal

## 说明

`isDecimal` 用来检查一个值是不是十进制字符串表示：前后勿带空白，并且十进制格式有效。

### 使用场景

校验表单字段、API 载荷或者配置值：伊拉必须用十进制字符串（可以带正负号）提供，周围一点空白也勿许有，然后再去解析或者存储。

> **给 TypeScript 用户的提示：**
>
> 用 `isDecimal` 来先校验用户输入，再去转换（比方讲用 `Number(value)`），特别是当必须拒绝空白个辰光。

### 优势

- 严格校验输入一定是字符串，并且符合十进制字面量模式。
- 拒绝前后空白（包括控制字符），避免解析含糊勿清。
- 跑正则之前先做快速预检查（类型检查同首末字符检查）。
- 返回简单个布尔结果（`true`/`false`），适合用来做守卫同输入校验。

## 用法

### 语法

函数：

- `isDecimal(value)`

参数：

- `value`: 要检查个值，看伊是不是十进制字符串格式。

### 本地函数导入

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // 迭个辰光 v 是字符串（运行辰光验证过）
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

<small>该文件于 31 January 2026 at 15:55:22 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>