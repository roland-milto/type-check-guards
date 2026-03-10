# areBigInts

## 说明

`areBigInts` 用来判断一个值系唔系非空数组，而且数组入面全部都系 `bigint` 值。

### 使用场景

验证未知输入（例如：解析出来嘅类 JSON 数据、API 载荷，或者类型标注为 `unknown` 嘅函数参数），确保佢系一个非空嘅 `bigint`
数组再处理；只有当全部元素都系 `bigint` 嗰阵先返回 `true`，否则返回 `false`。

> **给 TypeScript 用户的提示：**
>
> 喺对未知输入做只限 `bigint` 嘅操作（例如：算术、比较）之前，用 `areBigInts` 做运行时守卫。

### 优势

- 确保每个元素都系 `bigint`，只有当成个数组全部匹配嗰阵先返回 `true`。
- 按设计（通过 `isFilledArray`）拒绝非数组同空数组，防止唔小心接受无效输入。
- 快速失败：一旦发现有唔系 `bigint` 嘅元素，就即刻返回 `false`。

## 用法

### 语法

函数：

- `areBigInts(array)`

参数：

- `array`: 要检查嘅值。

### 本地函数导入

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // 真
console.log(areBigInts(b)); // 假
console.log(areBigInts(c)); // 假
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areBigInts(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>该文件于 31 January 2026 at 23:25:25 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>