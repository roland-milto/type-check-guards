# areBooleans

## 说明

`areBooleans` 用来检查给定嗰非空数组里向是不是全系布尔值；如果系就返回 `true`，否则返回 `false`。

### 使用场景

校验用户提供或者外部数据（比如 JSON 载荷、查询参数、配置数组），保证一个非空列表里向只包含布尔值，再去套用布尔逻辑或者传给需要
`boolean[]` 嗰 API。

> **给 TypeScript 用户的提示：**
>
> 用 `areBooleans` 先把 `unknown[]` 校验一遍再当作 `boolean[]` 来用；它对空数组会返回 `false`，所以要是允许空列表，就得把这情况单独处理清楚。

### 优势

- 只有当每个元素都系布尔值而且输入系个非空数组嗰辰，才返回 `true`。
- 通过拒绝空数组（返回 `false`）来防止误判。
- 当作运行时守卫用起蛮好，先检查再做只接受布尔值嗰操作（比如 `every`、`some`、逻辑归约）。

## 用法

### 语法

函数：

- `areBooleans(array)`

参数：

- `array`: 要检查里向有冇布尔元素嗰数组。

### 本地函数导入

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areBooleans(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>该文件于 30 January 2026 at 14:39:34 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>