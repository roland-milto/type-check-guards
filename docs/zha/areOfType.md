# areOfType

## 说明

检查给定 `array` 的所有元素是否都是指定的 `type`。

### 使用场景

在对数组的每个元素执行特定类型操作之前，使用 `areOfType` 来验证未知输入（例如解析后的 JSON、API 载荷、用户输入）。

> **以下为 TypeScript 用法：**
>
> 由于 `areOfType` 是类型守卫，TypeScript 会在 `if (areOfType(...)) {}` 代码块内将数组收窄为 `Array<DataTypeOf<T>>`。

### 优点

- 提供 TypeScript 类型守卫：当其返回 `true` 时，输入会被收窄为 `Array<DataTypeOf<T>>`。
- 对每个元素按所请求的运行时类型进行验证，防止混合类型数组通过检查。
- 快速失败：一旦发现不匹配的元素就立即返回 `false`。
- 按设计拒绝非数组与空数组（依赖 `isFilledArray`）。

## 用法

### 语法

函数：

- `areOfType(array, type)`

参数：

- `array`: 要检查的数组。
- `type`: 用于对数组中每个元素进行检查的类型。

### 本地函数导入

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values aeuq ndaej mbouj number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areOfType(array, type)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areOfType](../_analysis/areOfType.md)

<br>

---

<small>此文件于 30 January 2026 at 17:12:08 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>