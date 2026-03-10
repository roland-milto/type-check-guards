# areFloats

## 说明

`areFloats` 用来检查指定个数组是不是填满了，而且里向所有元素都系浮点数。

### 使用场景

当侬收到一个 `unknown[]`（比方讲来自 JSON、查询参数或者外部
API），而且侬需要保证伊系一个非空数组、并且每一项都系浮点数，然后再去跑数值逻辑（比如求平均、插值、或者统计计算）个辰光，就用
`areFloats`。

> **给 TypeScript 用户的提示：**
>
> 用 `areFloats` 来守护 `unknown[]`，再把伊当作只包含浮点数个 `number[]` 来用；空数组同任何非浮点数元素都会返回 `false`。

### 优势

- 只有输入系非空数组，而且每个元素都系浮点数个辰光，才会返回 `true`。
- 快速失败：一旦寻着非浮点数元素，立刻返回 `false`。
- 帮侬在做浮点数专用计算之前，先校验未知输入。

## 用法

### 语法

函数：

- `areFloats(array)`

参数：

- `array`: 用来检查里向元素是不是浮点数个数组。

### 本地函数导入

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // 真
console.log(areFloats(b)); // 假
console.log(areFloats(c)); // 假

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areFloats(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areFloats](../_analysis/areFloats.md)

<br>

---

<small>该文件于 30 January 2026 at 15:56:38 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>