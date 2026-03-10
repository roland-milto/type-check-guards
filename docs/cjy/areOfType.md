# areOfType

## 说明

检查给定 `array` 里所有元素系咪都属于指定嘅 `type`。

### 使用场景

用 `areOfType` 去校验未知输入（例如解析后嘅 JSON、API payload、用户输入），喺对数组每个元素执行特定类型操作之前先确保类型正确。

> **给 TypeScript 用户的提示：**
>
> 因为 `areOfType` 系一个类型守卫，TypeScript 会喺 `if (areOfType(...)) {}` 代码块入面将数组收窄到
`Array<DataTypeOf<T>>`。

### 优势

- 提供一个 TypeScript 类型守卫：当佢返回 `true` 时，输入会收窄到 `Array<DataTypeOf<T>>`。
- 对数组里每个元素都按请求嘅运行时类型做校验，防止混合类型数组通过。
- 快速失败：一旦发现有唔匹配嘅元素就即刻返回 `false`。
- 按设计拒绝非数组同空数组（依赖 `isFilledArray`）。

## 用法

### 语法

函数：

- `areOfType(array, type)`

参数：

- `array`: 要检查嘅数组。
- `type`: 用来同数组里每个元素对照检查嘅类型。

### 本地函数导入

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values 现下系 number[]
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

<small>该文件于 30 January 2026 at 17:08:57 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>