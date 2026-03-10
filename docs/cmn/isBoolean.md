# isBoolean

## 说明

判断给定值是否为 `boolean`。

### 使用场景

验证外部或无类型的数据（例如：环境变量、JSON 负载、查询参数），以确保在用于条件逻辑之前该值为 `boolean`。

> **给 TypeScript 用户的提示：**
>
> 在应用布尔运算之前，使用 `isBoolean` 将 `unknown` 缩小为 `boolean`。

### 优势

- 使用 `typeof` 进行简单且快速的运行时检查。
- 在执行特定于布尔值的逻辑之前，有助于验证未知输入。
- 返回可预测的 `boolean` 结果（`true`/`false`）。

## 用法

### 语法

函数：

- `isBoolean(value)`

参数：

- `value`: 要检查的值。

### 本地函数导入

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // 此处 input 是布尔值
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isBoolean(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>该文件于 30 January 2026 at 14:36:00 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>