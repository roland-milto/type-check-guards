# getTypeOf

## 说明

`getTypeOf` 会为给定个值返回详细、好读个类型标签，包含更细分个数字类型搭特定个对象种类。

### 使用场景

用 `getTypeOf` 来统一输入校验搭诊断里个类型识别——比方讲，拒绝 `nan`、只接受 `integer` 个 ID、把 `decimal` 这类数字字符串同普通
`string` 区分开来处理，或者记录精确个对象种类，比方讲 `date` 搭 `regexp`。

> **给 TypeScript 用户的提示：**
>
> 返回类型是 `DataTypeAsString | string`。把伊当作描述性标签来用；做分支判断个辰光，可以同已知字面量比较，比方讲 `integer`、
`float`、`nan`、`array`、`null`、`undefined`。

### 优势

- 比 JavaScript 个 `typeof` 返回更细分个类型字符串，包含数字子类型，比方讲 `integer`、`float`、`nan`。
- 明确区分 `null` 搭 `undefined`，分别返回 `null` 搭 `undefined`。
- 能识别常见个数字字符串格式，并且报告成 `binary`、`octal`、`decimal` 或者 `hexadecimal`，而勿是普通个 `string`。
- 也会把数组识别成 `array`，并用 `Object.prototype.toString` 提供更具体个对象类型名（比方讲 `date`、`regexp`、`map`、`set`）。
- 对校验、日志记录搭调试蛮有用，尤其是需要一致、好读个类型标签个场景。

## 用法

### 语法

函数：

- `getTypeOf(value)`

参数：

- `value`: 要判断数据类型个值。

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

<small>该文件于 6 February 2026 at 13:15:44 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>