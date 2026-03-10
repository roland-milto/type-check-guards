# areUndefined

## 说明

`areUndefined` 檢查提供个陣列內底係毋係每一個元素都係 `undefined`。

### 使用场景

驗證一個可選結果个清單無任何實際值（淨係 `undefined`），比方講做 lookup 映射以後，無著个項目用 `undefined` 表示，你想確認全部
lookup 都失敗。

> **给 TypeScript 用户的提示：**
>
> 當你需要斷言一個 `unknown[]` 淨包含 `undefined` 值个時節，用 `areUndefined`；因為內部有 `isFilledArray`
> 檢查，對空陣列同非陣列/無效輸入會回傳 `false`。

### 优势

- 透過 `isFilledArray` 要求陣列愛有值，對非陣列同空陣列會回傳 `false`。
- 確保每一個元素都係 `undefined`，毋係淨係部分係，意圖更明確。
- 當做 guard 風格个 predicate 來驗證未知輸入个集合當有用。

## 用法

### 语法

函数：

- `areUndefined(array)`

参数：

- `array`: 愛檢查係毋係有 `undefined` 元素个陣列。

### 本地函数导入

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Chù-ì: đối chhṳ false chhi̍t-khìng ê chhòng-li̍t
const r4 = areUndefined([]); // false
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areUndefined(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>该文件于 30 January 2026 at 13:55:55 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>