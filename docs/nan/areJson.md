# areJson

## 说明

檢查一个陣列內底个元素敢攏是 JSON 字串；只有陣列有內容而且逐項攏是有效 JSON 才回傳 `true`；無然回傳 `false`。

### 使用场景

驗證入來个資料（比喻對 query params、環境變數、抑是外部 API）——你預期會是一个用 JSON 編碼个字串陣列，而且想欲拒絕空陣列抑是任何毋是
JSON 个項目。

> **给 TypeScript 用户的提示：**
>
> 當你需要先驗證一个 `unknown[]` 內底敢攏是 JSON 字串，才欲去解析（比喻用 `JSON.parse`）个時陣，會當用 `areJson`。

### 优势

- 干焦會回傳 `true`，只當逐个元素攏是有效个 JSON 字串；無然就回傳 `false`。
- 會當緊煞：一發現有毋是 JSON 个元素就停止檢查。
- 設計上會拒絕空陣列，對無填滿个輸入回傳 `false`。

## 用法

### 语法

函数：

- `areJson(array)`

参数：

- `array`: 欲檢查陣列內底敢攏是 JSON 字串元素个陣列。

### 本地函数导入

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // chin
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // bô sī
const empty = areJson([]); // bô sī

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

<small>该文件于 30 January 2026 at 16:16:48 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>