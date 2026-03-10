# isNaN

## 说明

判断提供个 `value` 是不是 `number` 类型个 `NaN`，毋会把字符串转换。

### 使用场景

验证唔可信或者类型松散个输入（比如 API payload、表单值、解析后个 JSON），用来检测特殊个 `NaN` 值并明确处理；同时把非数字输入当作唔是
`NaN`。

> **给 TypeScript 用户的提示：**
>
> 当你需要识别特殊个数字值 `NaN`，同时又要保证输入确实是 `number`（毋做字符串转数字）个时候，用 `isNaN`。

### 优势

- 检查一个值是不是 `NaN`，毋使把非数字（比如字符串）强制转换成数字。
- 只有当值既是 `number` 类型又是 `NaN` 的时候才返回 `true`。
- 对 `unknown` 输入安全，避免因为隐式转换造成的误判。

## 用法

### 语法

函数：

- `isNaN(value)`

参数：

- `value`: 要检查个值，看佢是不是 `number` 类型个 `NaN`。

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
  // a 係一个数，况且专门就係 NaN
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

<small>该文件于 30 January 2026 at 15:45:28 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>