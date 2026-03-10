# isEmpty

## 说明

判断给定个值是不是空：对 `null`、`undefined`、空/纯空白字符串、空数组、空 `Map`/`Set`，或者无自有可枚举属性个对象返回 `true`。

### 使用场景

用 `isEmpty` 来校验输入、侦测缺失/空白值，覆盖多种数据类型（比方讲表单字段、API payload、配置对象）：里向 `null`、`undefined`
、纯空白字符串、空集合、无属性对象都应该当作空。

> **给 TypeScript 用户的提示：**
>
> `isEmpty` 是个返回布尔值个工具（不是 TypeScript 个类型谓词），所以自家弗会缩窄类型；用来做校验/分支判断，比起编译期缩窄更合适。

### 优势

- 把 `null` 跟 `undefined` 当作空值检查里个 `true`。
- 先把字符串去脱空白再检查长度，纯空白字符串也算空。
- 支持常见容器类型（数组、`Map`、`Set`）跟无自有可枚举属性个普通对象。
- 用 `hasOwnProperty` 检查，避免把继承来个属性算进去。
- 返回简单个布尔结果（`true`/`false`），适合用来做守卫跟校验。

## 用法

### 语法

函数：

- `isEmpty(value)`

参数：

- `value`: 要检查是不是空个值。

### 本地函数导入

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isEmpty(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>该文件于 6 February 2026 at 16:21:37 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>