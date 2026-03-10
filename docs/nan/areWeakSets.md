# areWeakSets

## 说明

檢查輸入敢是一个無空的陣列，而且每一个元素攏是一个 `WeakSet`；只有佇這種情形才回傳 `true`。

### 使用场景

驗證執行期的輸入（親像 API、設定、抑是使用者提供的資料），確保你有一个無空的 `WeakSet` 實例清單，才繼續進行倚賴 `WeakSet`
行為的邏輯。

> **给 TypeScript 用户的提示：**
>
> 用 `areWeakSets` 來驗證未知的輸入，才會當做 `WeakSet[]` 來用。伊對空陣列佮非陣列攏會回傳 `false`。

### 优势

- 確保輸入陣列內底每一个元素攏是一个 `WeakSet`。
- 對空陣列回傳 `false`，避免資料無來的時陣意外出現「攏有效」的結果。
- 當輸入毋是一个有內容的陣列（包含 `null`）的時陣，安全失敗並回傳 `false`。
- 做需要 `WeakSet` 實例的操作進前，當做 guard 真好用。

## 用法

### 语法

函数：

- `areWeakSets(array)`

参数：

- `array`: 欲檢查內底敢有 `WeakSet` 物件的陣列。

### 本地函数导入

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a 是一个无空的 WeakSet 实例数组
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areWeakSets(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>该文件于 30 January 2026 at 14:09:53 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>