# areRegExes

## 说明

`areRegExes` 檢查一個值係毋係一個有內容个陣列，而且淨包含 `RegExp` 物件。

### 使用场景

驗證一個設定選項（例如：允許/拒絕 patterns 个清單）係毋係一個毋係空个正則表達式陣列，正好用來做比對。

> **给 TypeScript 用户的提示：**
>
> 用 `areRegExes` 先摎 `unknown` 縮窄做 `RegExp[]`，正好去迭代抑係組合 patterns。

### 优势

- 確保一個值係一個毋係空个陣列，而且每一個元素都係 `RegExp` 實例。
- 提供一個簡單个布林守衛（`true`/`false`），用來驗證使用者輸入抑係設定。
- 幫助避免後續程式碼假設所有項目都支援正則表達式操作時出現執行期錯誤。

## 用法

### 语法

函数：

- `areRegExes(array)`

参数：

- `array`: 愛檢查个值。

### 本地函数导入

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns 係 RegExp 陣列
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areRegExes(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>该文件于 30 January 2026 at 23:18:22 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>