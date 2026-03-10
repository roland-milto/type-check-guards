# isDecimal

## 说明

`isDecimal` 會檢查一個值是否為十進位字串表示法：前後無空白，且十進位格式有效。

### 使用场景

在解析或儲存之前，驗證表單欄位、API payload、或設定值：必須以十進位字串（可選擇帶正負號）提供，且前後不可有任何空白。

> **给 TypeScript 用户的提示：**
>
> 用 `isDecimal` 先驗證使用者輸入再轉型（例如用 `Number(value)`），特別是當必須拒絕空白字元時。

### 优势

- 嚴格驗證輸入一定是字串，而且符合十進位字面量的格式。
- 拒絕前後空白（包含控制字元），避免解析時產生歧義。
- 跑正規表示式之前先做快速檢查（型別檢查與第一/最後字元）。
- 回傳簡單的布林結果（`true`/`false`），適合用做 guard 與輸入驗證。

## 用法

### 语法

函数：

- `isDecimal(value)`

参数：

- `value`: 欲檢查是否符合十進位字串格式的值。

### 本地函数导入

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v tī sīng-bûn ê chhōaⁿ (iōng sî-kiān kiám-chhàk lâi chèng-bêng)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isDecimal(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>该文件于 31 January 2026 at 15:53:36 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>