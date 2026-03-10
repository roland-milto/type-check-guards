# areRegExes

## 说明

`areRegExes` 會檢查一个值敢是一个有填滿的陣列，而且內底干焦包含 `RegExp` 物件。

### 使用场景

驗證一个設定選項（比喻講：允許/拒絕 patterns 的清單）敢是一个無空的正規表示式陣列，才用伊來做比對。

> **给 TypeScript 用户的提示：**
>
> 用 `areRegExes` 先共 `unknown` 縮窄做 `RegExp[]`，才來迭代抑是組合 patterns。

### 优势

- 確保一个值是一个無空的陣列，而且內底每一个元素攏是 `RegExp` 的實例。
- 提供簡單的布爾守衛（`true`/`false`），用來驗證使用者輸入抑是設定。
- 幫助防止後續程式碼假設所有項目攏支援正規表示式操作時發生執行期錯誤。

## 用法

### 语法

函数：

- `areRegExes(array)`

参数：

- `array`: 欲檢查的值。

### 本地函数导入

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns tī sī chi̍t ê RegExp ê chi̍t ê chū-liāu
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

<small>该文件于 30 January 2026 at 23:20:10 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>