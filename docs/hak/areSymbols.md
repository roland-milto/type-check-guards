# areSymbols

## 说明

檢查輸入係毋係一個有內容个陣列，而且元素全部都係 symbol，回傳 `true` 或 `false`。

### 使用场景

驗證設定欄位（比方講：用 symbol 表示个唯一 key 清單）係一個非空陣列，而且淨包含 symbol，正拿去用喺需要 `symbol[]` 个 API。

> **给 TypeScript 用户的提示：**
>
> 用 `areSymbols` 來驗證未知輸入，正好當作 `symbol[]` 來用；對非陣列同空陣列會回傳 `false`。

### 优势

- 單在輸入係一個非空个陣列，還過每一個元素都係 symbol 時，正會回傳 `true`。
- 透過內部个 filled-array 檢查，拒絕非陣列同空陣列，避免出現誤判。
- 做得當作執行期个型別守衛，用來驗證淨係 symbol 个清單，方便後續處理之前先檢查。

## 用法

### 语法

函数：

- `areSymbols(array)`

参数：

- `array`: 愛檢查係毋係包含 symbol 元素个陣列。

### 本地函数导入

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a 係執行時个淨符號陣列
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areSymbols(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>该文件于 30 January 2026 at 14:21:47 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>