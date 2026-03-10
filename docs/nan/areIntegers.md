# areIntegers

## 说明

`areIntegers` 會判斷一个指定的陣列內底敢攏是整數；若是就回傳 `true`，若無就回傳 `false`。

### 使用场景

當你的邏輯需要一个有值的整數清單（例：ID、計數器、分頁 offset、抑是陣列索引）時，會當用 `areIntegers` 來驗證使用者提供抑是外部資料（例：query
參數、JSON payload、CSV 資料列）。

> **给 TypeScript 用户的提示：**
>
> 佇把 `unknown[]` 的輸入當做只包含整數的 `number[]` 來用進前，會當用 `areIntegers` 做 runtime guard。若回傳 `false`
> ，表示輸入毋是一个有值的陣列，抑是至少有一个元素毋是整數。

### 优势

- 干焦當逐个元素攏是整數的時陣才會回傳 `true`；若無就回傳 `false`。
- 會當佇做只允許整數的操作（例：索引、計數、ID）進前，協助驗證毋知影的輸入。
- 快速失敗：一發現有非整數的元素就停止檢查。

## 用法

### 语法

函数：

- `areIntegers(array)`

参数：

- `array`: 欲檢查敢有整數元素的陣列。

### 本地函数导入

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // 真
console.log(areIntegers(b)); // 真
console.log(areIntegers(c)); // 假

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

<small>该文件于 31 January 2026 at 00:59:36 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>