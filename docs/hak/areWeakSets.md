# areWeakSets

## 说明

檢查輸入係毋係一個非空陣列，且每一個元素都係 `WeakSet`；只有符合這種情況正會回傳 `true`。

### 使用场景

驗證執行期輸入（例如來自 API、設定檔、抑係使用者提供个資料），確保你有一個非空个 `WeakSet` 實例清單，正好繼續進行依賴
`WeakSet` 行為个邏輯。

> **给 TypeScript 用户的提示：**
>
> 用 `areWeakSets` 來驗證未知輸入，正好將佢當作 `WeakSet[]` 來用。佢對空陣列同非陣列會回傳 `false`。

### 优势

- 確保輸入陣列內底每一個元素都係一個 `WeakSet`。
- 對空陣列會回傳 `false`，避免資料缺失時意外出現「全部都有效」个結果。
- 當輸入毋係一個有內容个陣列（包含 `null`）時，會安全失敗並回傳 `false`。
- 做需要 `WeakSet` 實例个操作之前，用來當作守衛檢查當有用。

## 用法

### 语法

函数：

- `areWeakSets(array)`

参数：

- `array`: 愛檢查係毋係 `WeakSet` 物件个陣列。

### 本地函数导入

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a 係一個毋空个陣列，內底全係 WeakSet 實例
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

<small>该文件于 30 January 2026 at 14:08:41 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>