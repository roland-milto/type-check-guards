# areFilledArrays

## 说明

`areFilledArrays` 用嚟检查一个二维数组系唔系空嘅，并且佢所有子数组都唔系空嘅。

### 使用场景

用 `areFilledArrays` 去验证表格/矩阵类输入（比如 CSV 行、网格数据、分组结果），咁你就可以安全噉假设至少有一个子数组，而且冇任何子数组系空嘅。

> **给 TypeScript 用户的提示：**
>
> 当你需要确保一个二维数组至少有一行，而且每一行至少有一个元素，先至去遍历或者用下标访问嘅时候，就用 `areFilledArrays`。

### 优势

- 验证外层数组唔系空嘅，而且每个内层数组都唔系空嘅；只有两样条件都满足先会返回 `true`。
- 子数组入面可以系任何元素类型（比如数字、字符串、对象、嵌套数组），因为佢只检查数组有冇“装满/有内容”，唔检查元素内容本身。
- 提供一个简单嘅布尔结果（`true`/`false`），适合喺处理二维数据之前做守卫判断。

## 用法

### 语法

函数：

- `areFilledArrays(array)`

参数：

- `array`: 要检查嘅二维数组。

### 本地函数导入

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // 真
console.log(areFilledArrays(b)); // 真
console.log(areFilledArrays(c)); // 真
console.log(areFilledArrays(d)); // 假
console.log(areFilledArrays(e)); // 假
console.log(areFilledArrays(f)); // 假

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areFilledArrays(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>该文件于 6 February 2026 at 11:55:53 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>