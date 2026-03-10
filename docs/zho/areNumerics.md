# areNumerics

## 说明

`areNumerics` 用于检查某个值是否为非空数组，且所有元素都是数值。

### 使用场景

在计算总和、平均值或其他数值运算之前，使用 `areNumerics` 验证外部或无类型数据（例如 JSON 负载、查询参数、表单输入），确保输入是非空的数值数组；否则返回
`false`。

> **给 TypeScript 用户的提示：**
>
> 在将 `unknown` 输入当作数值数组处理之前，使用 `areNumerics` 进行守卫；对于非数组和空数组它会返回 `false`。

### 优势

- 仅当输入是非空数组且每个元素都是数值时才返回 `true`。
- 快速失败：一旦发现非数值元素就停止检查并返回 `false`。
- 在执行数值运算之前，有助于安全地验证未知输入。

## 用法

### 语法

函数：

- `areNumerics(array)`

参数：

- `array`: 要检查其元素是否为数值的数组。

### 本地函数导入

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // 真
console.log(areNumerics(b)); // 真
console.log(areNumerics(c)); // 假
console.log(areNumerics(d)); // 假
console.log(areNumerics(e)); // 假

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areNumerics(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>该文件于 2026年2月6日 16:08:27 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>