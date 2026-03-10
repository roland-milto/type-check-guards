# getTypeOf

## 说明

`getTypeOf` 会为给定个值返回一个详细、好读个类型标签，包括更细个数字类型跟特定个对象种类。

### 使用场景

用 `getTypeOf` 来统一输入校验跟诊断里个类型识别——比方讲拒绝 `nan`、只接受 `integer` 个 ID、把 `decimal` 这类数字字符串跟普通
`string` 区分开来处理，或者记录更精确个对象种类，比方讲 `date` 跟 `regexp`。

> **给 TypeScript 用户的提示：**
>
> 返回类型是 `DataTypeAsString | string`。把它当作描述性标签来用；做分支判断时，可以跟已知字面量比对，比方讲 `integer`、
`float`、`nan`、`array`、`null`、`undefined`。

### 优势

- 返个比 JavaScript 个 `typeof` 更细个类型字符串，里向还包括数字子类型，比方讲 `integer`、`float`、`nan`。
- 明明白白地区分 `null` 跟 `undefined`，分别返作 `null` 跟 `undefined`。
- 能识别常见个数字字符串格式，报告成 `binary`、`octal`、`decimal` 或者 `hexadecimal`，而不是光返个 `string`。
- 把数组识别成 `array`，并用 `Object.prototype.toString` 提供更具体个对象类型名（比方讲 `date`、`regexp`、`map`、`set`）。
- 做校验、日志、调试时好用，需要一致、好读个类型标签个场景都合适。

## 用法

### 语法

函数：

- `getTypeOf(value)`

参数：

- `value`: 要判定数据类型个值。

### 本地函数导入

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// 例子检查
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.getTypeOf(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>该文件于 6 February 2026 at 13:05:38 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>