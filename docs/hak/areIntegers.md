# areIntegers

## 说明

`areIntegers` 用來判斷一個指定陣列裡肚个所有元素係毋係整數；係就回傳 `true`，毋係就回傳 `false`。

### 使用场景

當你个邏輯需要一個有內容个整數清單（例如：IDs、計數器、分頁 offset、抑係陣列索引）个時節，用 `areIntegers`
來驗證使用者提供抑係外部資料（例如：query parameters、JSON payloads、CSV rows）。

> **给 TypeScript 用户的提示：**
>
> 用 `areIntegers` 做 `unknown[]` 輸入个 runtime guard，正好當佢當做淨係包含整數个 `number[]` 來用。若係回傳 `false`
> ，表示輸入毋係一個有內容个陣列，抑係至少有一個元素毋係整數。

### 优势

- 淨係當逐個元素都係整數个時節正會回傳 `true`；無係整數就回傳 `false`。
- 幫手在做淨整數操作（例如：索引、計數、ID）之前，先驗證毋知个輸入。
- 會當緊遽失敗：一發現有毋係整數个元素就停止檢查。

## 用法

### 语法

函数：

- `areIntegers(array)`

参数：

- `array`: 愛檢查係毋係整數元素个陣列。

### 本地函数导入

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // chin
console.log(areIntegers(b)); // chin
console.log(areIntegers(c)); // m̄-sī

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areIntegers(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>该文件于 31 January 2026 at 00:58:25 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>