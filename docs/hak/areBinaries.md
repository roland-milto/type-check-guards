# areBinaries

## 说明

檢查提供个值係毋係一個毋係空个有效二進位字串陣列，只有當所有項目都通過驗證時正回傳 `true`。

### 使用场景

當你收到一份未知个清單（例如來自 JSON、表單抑係 API），而且需要喺解析抑係處理之前確定佢係一個毋係空个二進位字串陣列時，就用
`areBinaries`。

> **给 TypeScript 用户的提示：**
>
> 用 `areBinaries` 先驗證未知輸入，正去摎二進位字串轉做 numbers/BigInts；佢會確保陣列毋係空个，而且每一個元素都係有效个二進位字串。

### 优势

- 驗證一隻值係一個毋係空个陣列，佢裡背每一個元素都係有效个二進位字串。
- 回傳一個簡單个布林結果（`true`/`false`），適合用做守衛、提早回傳同輸入驗證。
- 透過拒絕包含任何毋係二進位項目个陣列，避免後續解析出錯。

## 用法

### 语法

函数：

- `areBinaries(array)`

参数：

- `array`: 愛檢查个值。

### 本地函数导入

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // 真
console.log(areBinaries(b)); // 毋係
console.log(areBinaries([])); // 毋係
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

<small>该文件于 31 January 2026 at 23:14:38 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>