# areBinaries

## 说明

檢查提供个值敢是無空个有效二進位字串陣列，只有當所有項目攏通過驗證才回傳 `true`。

### 使用场景

當你收著一个未知个清單（例如對 JSON、表單、抑是 API 來），而且需要先確定伊是無空个二進位字串陣列，才來解析抑是處理，就會用
`areBinaries`。

> **给 TypeScript 用户的提示：**
>
> 用 `areBinaries` 來驗證未知輸入，才去共二進位字串轉做 numbers/BigInts；伊會確保陣列無空，而且逐个元素攏是有效个二進位字串。

### 优势

- 驗證一个值是一个無空个陣列，而且逐个元素攏是有效个二進位字串。
- 回傳一个簡單个布林結果（`true`/`false`），適合用做守衛、提早回傳，佮輸入驗證。
- 透過拒絕含有任何非二進位項目个陣列，防止後續解析錯誤。

## 用法

### 语法

函数：

- `areBinaries(array)`

参数：

- `array`: 欲檢查个值。

### 本地函数导入

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // 真
console.log(areBinaries(b)); // 假
console.log(areBinaries([])); // 假
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areBinaries(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>该文件于 31 January 2026 at 23:15:20 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>