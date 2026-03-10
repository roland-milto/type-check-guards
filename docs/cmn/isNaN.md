# isNaN

## 说明

在不转换字符串的情况下，判断提供的 `value` 是否为 `number` 类型的 `NaN`。

### 使用场景

验证不受信任或类型较宽松的输入（例如 API 载荷、表单值、解析后的 JSON），以检测特殊的 `NaN` 值并显式处理它，同时将非数字输入视为非
`NaN`。

> **给 TypeScript 用户的提示：**
>
> 当你需要检测特殊的数值 `NaN`，同时确保输入确实是 `number`（不进行字符串到数字的转换）时，请使用 `isNaN`。

### 优势

- 在不将非数字（例如字符串）强制转换为数字的情况下，检查某个值是否为 `NaN`。
- 仅当值同时属于 `number` 类型且为 `NaN` 时才返回 `true`。
- 对 `unknown` 输入安全，并避免因隐式转换导致的误判。

## 用法

### 语法

函数：

- `isNaN(value)`

参数：

- `value`: 要检查的值，用于判断它是否为 `number` 类型的 `NaN`。

### 本地函数导入

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // 真
console.log(isNaN(b)); // 假
console.log(isNaN(c)); // 假

if (isNaN(a)) {
  // a 是一个数字，并且具体来说是 NaN
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isNaN(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isNaN](../_analysis/isNaN.md)

<br>

---

<small>该文件于 30 January 2026 at 15:45:32 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>