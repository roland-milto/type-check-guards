# getTypeOf

## 说明

`getTypeOf` 会为给定值返回详细、便于阅读的类型标签，包括更精细的数值类型以及特定的对象种类。

### 使用场景

使用 `getTypeOf` 来规范化输入校验与诊断中的类型检测——例如，拒绝 `nan`、只接受 `integer` 类型的 ID、将 `decimal` 这类数字字符串与普通
`string` 区分处理，或记录诸如 `date` 与 `regexp` 这类精确的对象种类。

> **给 TypeScript 用户的提示：**
>
> 返回类型是 `DataTypeAsString | string`。将其视为描述性标签；在分支判断时可与已知字面量进行比较，例如 `integer`、`float`、
`nan`、`array`、`null` 和 `undefined`。

### 优势

- 返回比 JavaScript 的 `typeof` 更细粒度的类型字符串，包括 `integer`、`float` 和 `nan` 等数值子类型。
- 将 `null` 和 `undefined` 明确区分并分别报告为 `null` 和 `undefined`。
- 它会检测常见的数字字符串格式，并将其报告为 `binary`、`octal`、`decimal` 或 `hexadecimal`，而不是普通的 `string`。
- 还能将数组识别为 `array`，并使用 `Object.prototype.toString` 提供更具体的对象类型名称（例如 `date`、`regexp`、`map`、
  `set`）。
- 在需要一致、易读的类型标签的校验、日志记录和调试场景中非常有用。

## 用法

### 语法

函数：

- `getTypeOf(value)`

参数：

- `value`: 要确定其数据类型的值。

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

// 示例检查
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

<small>该文件于 2026年2月6日 13:15:54 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>