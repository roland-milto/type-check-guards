# areNumerics

## 说明

`areNumerics` 检查一个值是不是非空数组，而且里向所有元素都系数字。

### 使用场景

用 `areNumerics` 来验证外部或者无类型个数据（比如 JSON payload、query 参数、表单输入），再去算总和、平均数或者别个数字运算；保证输入系个非空数字数组，否则就返回
`false`。

> **给 TypeScript 用户的提示：**
>
> 用 `areNumerics` 来守护 `unknown` 输入，再把伊当作数字数组来用；对非数组同空数组，伊会返回 `false`。

### 优势

- 只有输入系个非空数组，而且每个元素都系数字个辰光，才会返回 `true`。
- 快速失败：一旦发现有非数字个元素，就立刻停止检查并返回 `false`。
- 帮侬在做数字运算之前，安全咁验证未知输入。

## 用法

### 语法

函数：

- `areNumerics(array)`

参数：

- `array`: 要检查里向元素是不是数字个数组。

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
console.log(sumUnknown([10, "20", 30])); // 空

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

<small>该文件于 6 February 2026 at 16:04:25 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>