# areOfType

## 说明

检查给定 `array` 中的所有元素是否都是指定的 `type`。

### 使用场景

在对数组的每个元素执行特定类型操作之前，使用 `areOfType` 来验证未知输入（例如解析后的 JSON、API 负载、用户输入）。

> **给 TypeScript 用户的提示：**
>
> 由于 `areOfType` 是一个类型守卫，TypeScript 会在 `if (areOfType(...)) {}` 代码块内将数组收窄为 `Array<DataTypeOf<T>>`。

### 优势

- 提供一个 TypeScript 类型守卫：当它返回 `true` 时，输入会被收窄为 `Array<DataTypeOf<T>>`。
- 针对所请求的运行时类型验证每个元素，防止混合类型数组通过校验。
- 快速失败：一旦发现不匹配的元素就立即返回 `false`。
- 按设计拒绝非数组和空数组（取决于 `isFilledArray`）。

## 用法

### 语法

函数：

- `areOfType(array, type)`

参数：

- `array`: 要检查的数组。
- `type`: 用于与数组中每个元素进行检查的类型。

### 本地函数导入

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values 现在是 number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areOfType(array, type)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areOfType](../_analysis/areOfType.md)

<br>

---

<small>该文件于 2026年1月30日 17:12:13 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>