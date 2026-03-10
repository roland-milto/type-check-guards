# isOneOfType

## 说明

`isOneOfType` 用于判断给定的 `value` 是否至少匹配所提供的某一个类型字符串；若找到任意匹配则返回 `true`，否则返回 `false`。

### 使用场景

在继续执行后续逻辑之前，通过允许多个可接受的运行时类型（例如 `number` 或 `string`）来验证宽松类型或外部数据（例如解析后的
JSON、查询参数）。

> **给 TypeScript 用户的提示：**
>
> 当你需要在运行时检查某个值是否匹配多个允许类型中的任意一种时使用 `isOneOfType`；只要至少有一种类型匹配就返回 `true`
> ，否则返回 `false`。

### 优势

- 在一次调用中将某个值与多个允许的类型进行检查，在首次匹配时返回 `true`。
- 它提供一个简单的布尔结果，便于与条件逻辑和提前返回组合使用。
- 它可用于 `unknown` 输入，使其在运行时边界（例如外部数据、用户输入）处很有用。

## 用法

### 语法

函数：

- `isOneOfType(value, types)`

参数：

- `value`: 要根据指定类型进行检查的值。
- `types`: 由类型字符串组成的数组，用于表示该值可能的类型。

### 本地函数导入

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input 在运行时是一个对象
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

<small>该文件于 2026年2月6日 13:59:27 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>