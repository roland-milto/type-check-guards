# areOctals

## 说明

`areOctals` 判斷提供的值敢是一个無空的陣列，內底攏是有效的八進位字串。

### 使用场景

當你欲驗證使用者輸入、設定值、抑是 API payload 必須包含八進位字面量（比論檔案權限模式像 `0o755`），而且你想欲拒絕空陣列抑是任何無效的項目（回傳
`false`）的時陣，就用 `areOctals`。

> **给 TypeScript 用户的提示：**
>
> 用 `areOctals` 來確保你有一个無空的 `unknown[]`，而且逐个項目攏是有效的八進位字串，才來轉換（比論用 `Number(...)`
> 抑是自訂解析）。

### 优势

- 驗證一个值是一个無空的陣列，內底逐个元素攏是八進位字串，只有當所有項目攏通過才會回傳 `true`。
- 快速失敗：一旦揣著無是八進位的元素，隨時回傳 `false`。
- 做解析抑是轉換八進位字串進前的保護很有用，通避免執行期錯誤佮輸入處理無一致。

## 用法

### 语法

函数：

- `areOctals(array)`

参数：

- `array`: 欲檢查的值。

### 本地函数导入

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value 是一个無空的八進位字串陣列
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areOctals(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areOctals](../_analysis/areOctals.md)

<br>

---

<small>该文件于 30 January 2026 at 14:57:29 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>