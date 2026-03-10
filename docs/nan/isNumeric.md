# isNumeric

## 说明

`isNumeric` 會判斷一个指定个 `value` 敢會當算是數字：它會檢查解析出來个型別，並佮 `NUMERIC_TYPES` 比對。

### 使用场景

使用 `isNumeric` 來驗證輸入（例如 API payloads、表單值、設定），佇做數字運算進前先檢查，並照 `NUMERIC_TYPES` 一致性接受數字樣个型別（像是
`BigInt`）。

> **给 TypeScript 用户的提示：**
>
> `isNumeric` 是一个回傳布林值个謂詞；你應該共它當做執行期檢查，來判斷一个值敢屬佇這个函式庫所定義个數字型別集合。

### 优势

- 使用 `getTypeOf` 加上 `NUMERIC_TYPES` 來集中數字偵測邏輯，予檢查佇整个程式碼庫內保持一致。
- 回傳一个簡單个布林值（`true`/`false`），方便做分支判斷佮守衛式用法。
- 支援多種數字表示法（例如 `number`、`BigInt`），照 `NUMERIC_TYPES` 內底所定義。

## 用法

### 语法

函数：

- `isNumeric(value)`

参数：

- `value`: 欲檢查敢是數字型別个值。

### 本地函数导入

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // 根據這个函式庫个型別規則，v 會當做是數值
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

<small>该文件于 6 February 2026 at 15:53:42 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>