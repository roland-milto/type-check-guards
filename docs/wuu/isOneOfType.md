# isOneOfType

## 说明

`isOneOfType` 用来判断给定个 `value` 是否至少匹配提供个类型字符串里个一个；只要有匹配就返回 `true`，否则返回 `false`。

### 使用场景

对松散类型或者外部数据（比如解析出来个 JSON、查询参数）做校验：允许多个可接受个运行时类型（比如 `number` 或 `string`
），再继续后头个逻辑。

> **给 TypeScript 用户的提示：**
>
> 当侬想做运行时检查，确认一个值符合若干允许类型里个任意一个时，用 `isOneOfType`；只要至少一个类型匹配就返回 `true`，否则返回
`false`。

### 优势

- 一趟调用里向多个允许类型做检查，头一个匹配就返回 `true`。
- 提供简单个布尔结果，搭配条件逻辑同早返回用起来蛮顺手。
- 支持 `unknown` 输入，适合用在运行时边界（比如外部数据、用户输入）。

## 用法

### 语法

函数：

- `isOneOfType(value, types)`

参数：

- `value`: 要拿来同指定类型做对照检查个值。
- `types`: 类型字符串个数组，用来表示该值可能个类型。

### 本地函数导入

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input 实际运行辰光是个对象
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

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

<small>该文件于 6 February 2026 at 13:59:20 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>