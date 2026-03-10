# arePromises

## 说明

`arePromises` 用來判斷一个陣列內底的所有元素敢攏是 `Promise` 實例。

### 使用场景

驗證一个動態建立抑是外部提供的清單內底敢攏是 promises，才來做彙整（例如用 `Promise.all`）。

> **给 TypeScript 用户的提示：**
>
> 用 `arePromises` 先驗證 `unknown[]`，才去呼叫 `Promise.all` 抑是其他只接受 promise 的操作；空陣列會回傳 `false`。

### 优势

- 確保你進行 promise 專用邏輯之前，每一个元素攏是一个 `Promise`。
- 對無填滿的陣列回傳 `false`，避免空輸入產生模糊的結果。
- 當你對外部來源的 `unknown[]` 做處理時，做為執行期的 guard 真好用。

## 用法

### 语法

函数：

- `arePromises(array)`

参数：

- `array`: 欲檢查是不是 `Promise` 實例的陣列。

### 本地函数导入

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values 是運行時的 Promise 實例陣列
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

<small>该文件于 30 January 2026 at 23:49:13 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>