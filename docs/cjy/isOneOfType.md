# isOneOfType

## 说明

`isOneOfType` 用来判断给定嘞 `value` 至少同提供嘞类型字符串里头一个匹配；要是有任意一个匹配就返回 `true`，要不就返回
`false`。

### 使用场景

在继续后头逻辑之前，用多个可接受嘞运行时类型（比如 `number` 或 `string`）来校验类型比较松散或者外部来嘞数据（比如解析出来嘞
JSON、查询参数）。

> **给 TypeScript 用户的提示：**
>
> 当你想在运行时检查一个值是不是匹配好几个允许嘞类型里头任意一个时，就用 `isOneOfType`；只要至少有一个类型匹配就返回
`true`，要不就返回 `false`。

### 优势

- 一次调用就能把一个值同多个允许嘞类型对照检查，头一个匹配上就返回 `true`。
- 能同 `unknown` 输入一块用，适合用在运行时边界（比如外部数据、用户输入）。
- 结果就一个简单嘞布尔值（`true`/`false`），同条件逻辑、提前返回配合起来很顺手。

## 用法

### 语法

函数：

- `isOneOfType(value, types)`

参数：

- `value`: 要同指定类型进行检查嘞值。
- `types`: 类型字符串数组，表示这个值可能嘞类型。

### 本地函数导入

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input 喺运行时系一个对象
}

console.log(isOneOfType(3, ["number", "string"])); // 真
console.log(isOneOfType("hello", ["number", "boolean"])); // 假

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isOneOfType(value, types)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>该文件于 31 January 2026 at 23:42:44 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>