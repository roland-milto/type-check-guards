# isTrue

## 说明

`isTrue` 用于判断给定值是否与 `true` 严格相等。

### 使用场景

使用 `isTrue` 来验证标志位、功能开关或配置值：仅应接受字面量 `true`，其他所有值都必须被视为 `false`。

> **给 TypeScript 用户的提示：**
>
> 当你需要只接受布尔字面量 `true`（而不仅仅是真值）时，使用 `isTrue`。

### 优势

- 对布尔字面量 `true` 提供严格检查（不进行类型强制转换）。
- 有助于将 `true` 与诸如 `1`、`"true"` 或 `{}` 等真值区分开来。
- 行为简单且可预测，适用于守卫与验证流水线。

## 用法

### 语法

函数：

- `isTrue(value)`

参数：

- `value`: 要检查的值。

### 本地函数导入

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // 真
const b = isTrue(1);         // 假
const c = isTrue("true");   // 假

if (isTrue(a)) {
  // 这里 a 为真
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isTrue(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isTrue](../_analysis/isTrue.md)

<br>

---

<small>该文件于 30 January 2026 at 13:41:56 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>