# areNumbers

## 说明

`areNumbers` 檢查一個值係毋係無空个陣列，而且裡背所有元素都係數字。

### 使用场景

驗證使用者提供抑係 API 提供个資料，確保佢係一個無空个數字陣列，正來計算加總、平均抑係其他數值彙總。

> **给 TypeScript 用户的提示：**
>
> 用 `areNumbers` 來驗證未知个陣列，正做數值計算；佢對空陣列同包含任何非數字值个陣列會回傳 `false`。

### 优势

- 單淨係當輸入係一個無空个陣列，並且每一個元素都係數字个時節，正會回傳 `true`。
- 透過拒絕空陣列同非陣列輸入，避免出現誤判（false positives）。
- 做數值運算（例如加總、平均）之前當作 guard 來用，避免 runtime errors。

## 用法

### 语法

函数：

- `areNumbers(array)`

参数：

- `array`: 愛檢查係毋係都係數字元素个陣列。

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

<small>该文件于 30 January 2026 at 13:04:20 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>