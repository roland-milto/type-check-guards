# isNumeric

## 说明

`isNumeric` 通过将给定 `value` 的解析类型与 `NUMERIC_TYPES` 进行比对，来判断该值是否被视为数值。

### 使用场景

在执行数值运算之前，使用 `isNumeric` 来验证输入（例如 API 载荷、表单值、配置），并根据 `NUMERIC_TYPES` 一致地接受类数值类型（例如
`BigInt`）。

> **给 TypeScript 用户的提示：**
>
> `isNumeric` 是一个返回布尔值的谓词；将其视为运行时检查，用于判断某个值是否属于该库定义的数值类型集合。

### 优势

- 使用 `getTypeOf` 与 `NUMERIC_TYPES` 来集中数值检测逻辑，并在整个代码库中保持检查一致性。
- 返回一个简单的布尔值（`true`/`false`），便于分支判断与守卫式用法。
- 支持多种数值表示（例如 `number`、`BigInt`），具体由 `NUMERIC_TYPES` 定义。

## 用法

### 语法

函数：

- `isNumeric(value)`

参数：

- `value`: 要检查其是否为数值类型的值。

### 本地函数导入

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // 根据该库的类型规则，v 被视为数值
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isNumeric(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>该文件于 2026年2月6日 15:55:28 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>