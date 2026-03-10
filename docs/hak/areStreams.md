# areStreams

## 说明

`areStreams` 判斷一個值係毋係一個有填滿个陣列，而且裡背每一個元素都係 `Stream`。

### 使用场景

在進行 pipe、resume，或者其他以群組方式操作之前，先驗證使用者提供个或者動態建立个集合（例如：多個檔案讀取 stream）。

> **给 TypeScript 用户的提示：**
>
> 用 `areStreams` 在當作 `Stream[]` 之前先驗證未知輸入；佢淨在值係非空陣列而且每一個元素都係 `Stream` 時，正會回傳 `true`。

### 优势

- 確保輸入係一個有填滿个陣列，裡背每一個元素都係 `Stream`。
- 提供簡單个 `true`/`false` 防護，用來在處理之前驗證 stream 集合。
- 快速失敗：一旦發現有非 `Stream` 个元素，就會即刻回傳 `false`。
- 幫助避免當程式碼假設所有項目都係 `Stream` 實例時發生執行期錯誤。

## 用法

### 语法

函数：

- `areStreams(array)`

参数：

- `array`: 愛檢查係毋係 Stream 物件个陣列。

### 本地函数导入

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input sî chhiong chhiong ê Stream objek ê chhiong chhiong ê chhiong chhiong
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

<small>该文件于 30 January 2026 at 23:33:55 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>