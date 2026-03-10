# areUndefined

## 说明

`areUndefined` 會檢查傳入的陣列內底敢逐个元素攏是 `undefined`。

### 使用场景

驗證一个可選結果的清單內底無任何實際的值（干焦 `undefined`），比喻講做 mapping 查找了後，無著的項目用 `undefined`
代表，閣你想確認所有查找攏失敗。

> **给 TypeScript 用户的提示：**
>
> 當你需要斷言一个 `unknown[]` 內底干焦有 `undefined` 值的時陣，用 `areUndefined`；因為內部有 `isFilledArray`
> 檢查，所以對空陣列佮非陣列／無效輸入會回傳 `false`。

### 优势

- 透過 `isFilledArray` 要求陣列內有值，對非陣列佮空陣列會回傳 `false`。
- 確保逐个元素攏是 `undefined`，毋是干焦一部份，予意圖較明確。
- 當做守衛式（guard-style）判斷式來驗證未知輸入的集合，真好用。

## 用法

### 语法

函数：

- `areUndefined(array)`

参数：

- `array`: 欲檢查內底元素敢攏是 `undefined` 的陣列。

### 本地函数导入

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// 注意：空陣列會回傳 false
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

<small>该文件于 30 January 2026 at 13:56:58 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>