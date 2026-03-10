# isFloat

## 说明

`isFloat` 會判斷指定个 `value` 是毋是有限个浮點數（一个毋是整數个 `number`）。

### 使用场景

驗證使用者提供个數值輸入，要求愛有小數（比論：價錢、度量、比率），而且拒絕整數、`NaN` 佮無限大。

> **给 TypeScript 用户的提示：**
>
> 當你需要只接受有限、毋是整數个數值輸入時，用 `isFloat`；伊會拒絕整數佮無限（非有限）个數字。

### 优势

- 干焦會回傳 `true`，只針對有限、毋是整數个數字（排除整數、`NaN`、`Infinity`、`-Infinity`）。
- 啥物輸入型態攏會當用（`unknown`），透過檢查 `typeof value === "number"` 來安全縮小型態。
- 用內建个數值防呆（`Number.isInteger`、`Number.isFinite`），行為穩定、較好預測。

## 用法

### 语法

函数：

- `isFloat(value)`

参数：

- `value`: 欲檢查个值，看伊敢是浮點數。

### 本地函数导入

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // value 是一个 number（运行时）；伊是有限的，嘛毋是整数
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isFloat(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isFloat](../_analysis/isFloat.md)

<br>

---

<small>该文件于 30 January 2026 at 16:08:54 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>