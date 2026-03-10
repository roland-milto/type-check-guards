# isFloat

## 说明

`isFloat` 用來判斷指定个 `value` 係毋係有限个浮點數（一个毋係整數个 `number`）。

### 使用场景

驗證使用者提供个數值輸入，要求一定愛有小數部分（例如：價錢、量度、比率），並且拒絕整數、`NaN` 同無限大。

> **给 TypeScript 用户的提示：**
>
> 當你需要淨係接受有限、非整數个數值輸入時用 `isFloat`；佢會拒絕整數同非有限个數字。

### 优势

- 淨係對有限、非整數个數字先會回傳 `true`（排除整數、`NaN`、`Infinity` 同 `-Infinity`）。
- 做得過任何輸入型別（`unknown`），透過檢查 `typeof value === "number"` 安全縮窄型別。
- 使用內建个數值防護（`Number.isInteger`、`Number.isFinite`），行為可預期。

## 用法

### 语法

函数：

- `isFloat(value)`

参数：

- `value`: 愛檢查个值：看佢係毋係浮點數。

### 本地函数导入

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // value sî ngî su-ji̍p chhî-sî; i sî ū-hān ê, mā m̄-sî chêng-sò͘
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

<small>该文件于 30 January 2026 at 16:07:46 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>