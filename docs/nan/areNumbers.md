# areNumbers

## 说明

`areNumbers` 會檢查一个值敢是無空的陣列，而且內底所有元素攏是數字。

### 使用场景

驗證使用者提供抑是 API 提供的資料，確保伊是一个無空的數字陣列，才來計算加總、平均抑是其他數字彙總。

> **给 TypeScript 用户的提示：**
>
> 用 `areNumbers` 來驗證未知的陣列，才來做數字計算；空陣列抑是陣列內底有任何一个非數字的值，攏會回傳 `false`。

### 优势

- 只有當輸入是一个無空的陣列，而且逐个元素攏是數字的時陣，才會回傳 `true`。
- 會拒絕空陣列佮非陣列的輸入，避免出現假陽性。
- 做數字運算（比論講加總、算平均）進前當做保護檢查，會當避免執行期錯誤。

## 用法

### 语法

函数：

- `areNumbers(array)`

参数：

- `array`: 欲檢查內底敢有數字元素的陣列。

### 本地函数导入

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areNumbers(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>该文件于 30 January 2026 at 13:05:13 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>