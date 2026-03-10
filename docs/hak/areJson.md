# areJson

## 说明

檢查一個陣列个所有元素係毋係 JSON 字串；淨係當陣列有內容而且每一項都係有效 JSON 个時節正回傳 `true`，毋係就回傳 `false`。

### 使用场景

驗證傳入資料（比如來自 query params、environment variables、抑係外部 APIs），你預期係一個用 JSON 編碼个字串陣列，並且想拒絕空陣列抑係任何毋係
JSON 个項目。

> **给 TypeScript 用户的提示：**
>
> 當你需要先驗證一個 `unknown[]` 淨係包含 JSON 字串，正去解析（比如用 `JSON.parse`）个時節，就用 `areJson`。

### 优势

- 淨係當每一個元素都係有效个 JSON 字串个時節正會回傳 `true`；毋係就回傳 `false`。
- 會當下失敗：一發現有毋係 JSON 个元素就停止檢查。
- 按設計會拒絕空陣列，對無填滿个輸入回傳 `false`。

## 用法

### 语法

函数：

- `areJson(array)`

参数：

- `array`: 愛檢查係毋係 JSON 字串元素个陣列。

### 本地函数导入

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // chhîn-chhì
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // chhîⁿ
const empty = areJson([]); // chhîⁿ

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areJson(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areJson](../_analysis/areJson.md)

<br>

---

<small>该文件于 30 January 2026 at 16:15:52 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>