# arePromises

## 说明

`arePromises` 用來判斷一個陣列裡肚个所有元素係毋係都係 `Promise` 實例。

### 使用场景

驗證一個動態建立抑係外部提供个清單係毋係淨包含 promises，正好去彙整佢兜（例如用 `Promise.all`）。

> **给 TypeScript 用户的提示：**
>
> 用 `arePromises` 先驗證 `unknown[]`，正好去呼叫 `Promise.all` 或其他淨 promise 才用得个操作；對空陣列會回傳 `false`。

### 优势

- 確保你進行同 promise 有關个邏輯之前，每一個元素都係一個 `Promise`。
- 對無填滿（空）个陣列會回傳 `false`，避免對空輸入產生模稜兩可个結果。
- 當你處理來自外部來源个 `unknown[]` 時，做為執行期（runtime）个防護判斷當有用。

## 用法

### 语法

函数：

- `arePromises(array)`

参数：

- `array`: 愛檢查係毋係 `Promise` 實例个陣列。

### 本地函数导入

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values係運行時个 Promise 實例陣列
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.arePromises(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [arePromises](../_analysis/arePromises.md)

<br>

---

<small>该文件于 30 January 2026 at 23:48:20 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>