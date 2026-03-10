# areOctals

## 说明

`areOctals` 判斷提供个值係毋係一個毋會空、且內容都係有效八進位字串个陣列。

### 使用场景

當你驗證使用者輸入、設定值、抑係 API payload，內容一定愛包含八進位字面量（例如檔案權限模式 `0o755`），而且你想拒絕空陣列抑係任何無效項目、並回傳
`false` 个時節，就用 `areOctals`。

> **给 TypeScript 用户的提示：**
>
> 用 `areOctals` 來確保你有一個毋會空个 `unknown[]`，而且每一個項目都係有效个八進位字串，正好去做轉換（例如用 `Number(...)`
> 抑係自家个解析）。

### 优势

- 驗證一隻值係毋係一個毋會空个陣列，且每一個元素都係八進位字串；淨係當所有項目都通過个時節先會回傳 `true`。
- 快速失敗：一旦發現有毋係八進位个元素，馬上回傳 `false`。
- 做解析抑係轉換八進位字串之前當做守衛當好用，避免執行期錯誤同輸入處理毋一致。

## 用法

### 语法

函数：

- `areOctals(array)`

参数：

- `array`: 愛檢查个值。

### 本地函数导入

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value係一個毋會空个八進位字串陣列
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

<small>该文件于 30 January 2026 at 14:46:16 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>