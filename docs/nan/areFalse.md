# areFalse

## 说明

`areFalse` 會檢查提供的陣列內底，敢攏總元素攏嚴格是布林值 `false`。

### 使用场景

欲繼續進行以前，驗證一份功能旗標、檢查結果抑是 guard 結果攏是 `false`（比喻講：確認無任何會擋路的條件存在）。

> **给 TypeScript 用户的提示：**
>
> 當你需要嚴格驗證一个陣列無空，閣攏總只包含布林值 `false` 的時陣，會當用 `areFalse`。

### 优势

- 確保逐个元素攏嚴格是 `false`（無真偽值強制轉換）。
- 透過 `isFilledArray` 要求陣列愛有內容，對非陣列抑是空陣列會回傳 `false`。
- 為著效率，遇著頭一个無是 `false` 的元素就提早停止。

## 用法

### 语法

函数：

- `areFalse(array)`

参数：

- `array`: 欲檢查的陣列，內底會當包含任何型態的元素。

### 本地函数导入

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // chin
const b = areFalse([false, true, false]);  // m̄-sī chin
const c = areFalse([false, "false", false]); // m̄-sī chin
const d = areFalse([]); // m̄-sī chin

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areFalse(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areFalse](../_analysis/areFalse.md)

<br>

---

<small>该文件于 31 January 2026 at 16:17:57 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>