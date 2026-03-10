# isDecimal

## 说明

`isDecimal` 檢查一個值係毋係十進位字串表示法：無前後空白，還過十進位格式有效。

### 使用场景

驗證表單欄位、API payload，抑係設定值：必須用十進位字串（可能有正負號）提供，周圍毋使有任何空白，喺解析抑係儲存之前先檢查。

> **给 TypeScript 用户的提示：**
>
> 用 `isDecimal` 先驗證使用者輸入，正轉換（比方講用 `Number(value)`）之前，特別係要求一定愛拒絕空白个時節。

### 优势

- 嚴格驗證輸入係毋係字串，還過符合十進位字面量个樣式。
- 拒絕前後空白（包含控制字元），避免解析時產生模糊。
- 喺跑正則表達式之前，先做快速預檢（型別檢查同第一/最後字元檢查）。
- 回傳簡單个布林結果（`true`/`false`），適合用做 guard 同輸入驗證。

## 用法

### 语法

函数：

- `isDecimal(value)`

参数：

- `value`: 愛檢查係毋係十進位字串格式个值。

### 本地函数导入

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v 係字串（執行時驗證過）
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

<small>该文件于 31 January 2026 at 15:52:29 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>