# areOfType

## 说明

检查给定 `array` 里向所有元素是不是都属于指定 `type`。

### 使用场景

用 `areOfType` 来校验未知输入（比方讲解析出来个 JSON、API payload、用户输入），再对数组里向每个元素做类型相关个操作。

> **给 TypeScript 用户的提示：**
>
> 因为 `areOfType` 是个类型守卫，TypeScript 会勒 `if (areOfType(...)) {}` 代码块里向把数组收窄到 `Array<DataTypeOf<T>>`。

### 优势

- 提供 TypeScript 类型守卫：当伊返回 `true` 个辰光，输入会收窄到 `Array<DataTypeOf<T>>`。
- 对数组里向每个元素按请求个运行时类型做校验，防止混合类型数组通过。
- 快速失败：一旦发现有勿匹配个元素，立刻返回 `false`。
- 按设计拒绝非数组同空数组（依赖 `isFilledArray`）。

## 用法

### 语法

函数：

- `areOfType(array, type)`

参数：

- `array`: 要检查个数组。
- `type`: 要拿来同数组里向每个元素对照检查个类型。

### 本地函数导入

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values 现今是 number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // 假

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

<small>该文件于 30 January 2026 at 17:12:06 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>