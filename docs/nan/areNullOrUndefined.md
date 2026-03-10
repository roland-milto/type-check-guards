# areNullOrUndefined

## 说明

檢查指定 ê 陣列內底敢攏是 `null` 抑是 `undefined`。

### 使用场景

驗證一个可選欄位 ê 清單內底無任何實際 ê 值（干焦 `null`/`undefined`），才決定欲跳過處理，抑是顯示「無提供任何值」ê 狀態。

> **给 TypeScript 用户的提示：**
>
> 當你需要確認一个陣列內底干焦有欠缺值（`null`/`undefined`）ê 時陣，會當用 `areNullOrUndefined`。注意：對空陣列伊會回傳
`false`。

### 优势

- 干焦會當逐个元素攏是 `null` 抑是 `undefined` ê 時陣才會回傳 `true`。
- 對空陣列會回傳 `false`，通好分辨「無資料」佮「攏是欠缺值」。
- 會當配合 `unknown[]` 使用，予你佇縮窄型別進前用起來較安全。

## 用法

### 语法

函数：

- `areNullOrUndefined(array)`

参数：

- `array`: 欲檢查 ê 陣列。

### 本地函数导入

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areNullOrUndefined(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>该文件于 31 January 2026 at 00:30:32 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>