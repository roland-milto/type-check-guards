# areBigInts

## 说明

`areBigInts` 會判斷一个值敢是一个非空的陣列，而且內底干焦包含 `bigint` 值。

### 使用场景

驗證未知輸入（例如：解析後的類 JSON 資料、API payload，抑是型別標做 `unknown` 的函式參數），確保它是一个非空、而且元素攏是
`bigint` 的陣列才來處理；干焦當全部元素攏是 `bigint` 才回傳 `true`，無就回傳 `false`。

> **给 TypeScript 用户的提示：**
>
> 佇對未知輸入做 `bigint` 專用操作（例如：算術、比較）進前，先用 `areBigInts` 做 runtime guard。

### 优势

- 確保逐个元素攏是 `bigint`，干焦當歸个陣列攏符合才會回傳 `true`。
- 照設計會拒絕非陣列佮空陣列（透過 `isFilledArray`），避免無意間接受無效的輸入。
- 快速失敗：一發現有非 `bigint` 的元素就會隨時回傳 `false`。

## 用法

### 语法

函数：

- `areBigInts(array)`

参数：

- `array`: 欲檢查的值。

### 本地函数导入

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // chin
console.log(areBigInts(b)); // m̄-sī
console.log(areBigInts(c)); // m̄-sī
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areBigInts(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>该文件于 31 January 2026 at 23:26:49 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>