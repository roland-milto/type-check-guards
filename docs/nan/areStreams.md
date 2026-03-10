# areStreams

## 说明

`areStreams` 會判斷一个值敢是一个有內容个陣列，而且內底逐个元素攏是一个 `Stream`。

### 使用场景

佇 pipe、resume，抑是其他需要當作一組來操作進前，先驗證使用者提供抑是動態建立个集合（例：幾个讀檔 stream）。

> **给 TypeScript 用户的提示：**
>
> 用 `areStreams` 來驗證未知輸入，才會當作 `Stream[]` 來用；伊干焦佇值是一个無空个陣列，而且逐个元素攏是一个 `Stream` 時才會回傳
`true`。

### 优势

- 確保輸入是一个有內容个陣列，內底逐个元素攏是一个 `Stream`。
- 提供簡單个 `true`/`false` 守門，予你處理進前先驗證 stream 集合。
- 快速失敗：一發現有非 `Stream` 个元素，隨時就回傳 `false`。
- 幫助避免程式假設全部項目攏是 `Stream` 實例時發生執行期錯誤。

## 用法

### 语法

函数：

- `areStreams(array)`

参数：

- `array`: 欲檢查看覓是毋是 Stream 物件个陣列。

### 本地函数导入

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input sī chi̍t ê ū chhiong-si̍t ê Stream objek ê chū-liāu
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areStreams(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areStreams](../_analysis/areStreams.md)

<br>

---

<small>该文件于 30 January 2026 at 23:34:51 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>