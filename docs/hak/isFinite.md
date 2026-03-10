# isFinite

## 说明

判斷指定个 `value` 係毋係有限个 `number`。

### 使用场景

用 `isFinite` 來驗證未知輸入（比論講：來自 JSON、表單、抑係 API）以後正做數值計算，確保該值係真正、有限个數字。

> **给 TypeScript 用户的提示：**
>
> `isFinite` 淨對有限个數字回傳 `true`；對 `NaN`、`Infinity` 還有任何非數字个值回傳 `false`。

### 优势

- 使用內建个 `Number.isFinite` 來做可靠个有限性檢查。
- 淨對有限个數字回傳 `true`；對 `NaN`、`Infinity` 還有非數字輸入回傳 `false`。
- 簡單、無副作用个判斷函式，適合用在驗證同防護邏輯。

## 用法

### 语法

函数：

- `isFinite(value)`

参数：

- `value`: 愛檢查係毋係有限个值。

### 本地函数导入

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers係: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value喺呢度係一個有限嘅數字
  const doubled = value * 2;
  console.log(doubled);
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isFinite(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isFinite](../_analysis/isFinite.md)

<br>

---

<small>该文件于 30 January 2026 at 16:29:54 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>