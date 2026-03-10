# isFinite

## 说明

判斷指定的 `value` 敢是有限的 `number`。

### 使用场景

使用 `isFinite` 來驗證未知的輸入（比論講對 JSON、表單抑是 API 來的）了後才進行數值計算，確保該值是真正、有限的數字。

> **给 TypeScript 用户的提示：**
>
> `isFinite` 只有對有限數字才回傳 `true`；對 `NaN`、`Infinity` 佮任何非數字的值攏回傳 `false`。

### 优势

- 使用內建的 `Number.isFinite` 來做可靠的有限性檢查。
- 只有對有限數字才回傳 `true`；對 `NaN`、`Infinity` 以及非數字輸入回傳 `false`。
- 簡單、無副作用的判斷式，適合用佇驗證佮防護邏輯。

## 用法

### 语法

函数：

- `isFinite(value)`

参数：

- `value`: 欲檢查伊敢是有限的值。

### 本地函数导入

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers sī: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value tī sī chi̍t ê ū-hān ê sù-jī
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

<small>该文件于 30 January 2026 at 16:30:51 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>