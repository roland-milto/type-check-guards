# isDecimal

## 说明

`isDecimal` 用来检查一个值係咪十进制字符串表示：前后冇空白，而且十进制格式有效。

### 使用场景

校验表单字段、API 载荷或者配置值：必须以十进制字符串（可选带正负号）提供，周围唔允许有任何空白；喺解析或者存储之前先验证。

> **给 TypeScript 用户的提示：**
>
> 用 `isDecimal` 喺转换之前校验用户输入（比如用 `Number(value)`），尤其係必须拒绝空白嘅时候。

### 优势

- 严格验证输入一定系字符串，而且要符合十进制字面量嘅格式。
- 拒绝前后空白（包括控制字符），避免解析时出现含糊唔清嘅情况。
- 喺跑正则之前先做快速预检查（类型检查同首尾字符检查）。
- 返回简单嘅布尔结果（`true`/`false`），适合用作守卫同输入校验。

## 用法

### 语法

函数：

- `isDecimal(value)`

参数：

- `value`: 要检查係咪符合十进制字符串格式嘅值。

### 本地函数导入

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v 这块儿系个字符串（运行时验证过哩）
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

<small>该文件于 31 January 2026 at 15:51:39 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>