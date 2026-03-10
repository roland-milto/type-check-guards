# isBoolean

## 说明

判断给定个值是不是 `boolean`。

### 使用场景

验证外部或者无类型个数据（比如环境变量、JSON 载荷、查询参数），确保值是 `boolean`，再用到条件逻辑里。

> **给 TypeScript 用户的提示：**
>
> 用 `isBoolean` 先把 `unknown` 缩小到 `boolean`，再做布尔运算。

### 优势

- 用 `typeof` 做简单又快个运行时检查。
- 帮侬在做布尔相关逻辑之前先验证未知输入。
- 返回可预期个 `boolean` 结果（`true`/`false`）。

## 用法

### 语法

函数：

- `isBoolean(value)`

参数：

- `value`: 要检查个值。

### 本地函数导入

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input 㑚搭是 boolean
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

<small>该文件于 30 January 2026 at 14:38:26 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>