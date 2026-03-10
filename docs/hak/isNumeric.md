# isNumeric

## 说明

`isNumeric` 會判斷指定个 `value` 係毋係算做數字：透過檢查佢解析出來个型別有無落在 `NUMERIC_TYPES` 內底。

### 使用场景

用 `isNumeric` 來驗證輸入（例如 API payload、表單值、設定），在做數字運算以前先確定；同時照 `NUMERIC_TYPES` 一致个規則接受「像數字」个型別（像係
`BigInt`）。

> **给 TypeScript 用户的提示：**
>
> `isNumeric` 係一個回傳布林值个 predicate；把佢當做執行期檢查：判斷一個值係毋係屬於這個函式庫定義个數字型別集合。

### 优势

- 使用 `getTypeOf` 加上 `NUMERIC_TYPES` 來集中數字偵測邏輯，保持整個程式碼庫个檢查一致。
- 回傳簡單个布林值（`true`/`false`），方便做分支判斷同守衛式用法。
- 支援多種數字表示法（例如 `number`、`BigInt`），照 `NUMERIC_TYPES` 內底个定義。

## 用法

### 语法

函数：

- `isNumeric(value)`

参数：

- `value`: 愛檢查係毋係數字型別个值。

### 本地函数导入

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v 係按這隻 library 个 type 規則來看做 numeric
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isNumeric(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>该文件于 6 February 2026 at 15:52:42 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>