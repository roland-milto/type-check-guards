# isWeakMap

## 说明

判斷指定 ê `value` 敢是一个 `WeakMap` 實例。

### 使用场景

當你接受一个 `unknown` 值（例如：來自公開 API、plugin 系統、抑是動態設定）而且需要先確認伊是 `WeakMap`，才使用 `WeakMap` 專用
ê 行為，這時就用 `isWeakMap`。

> **给 TypeScript 用户的提示：**
>
> `isWeakMap` 會做一个 `instanceof WeakMap` 檢查；這是一个執行時守衛，干焦對真正 ê `WeakMap` 實例才會回傳 `true`。

### 优势

- 簡單 ê 執行時檢查，判斷一个值敢是 `WeakMap`。
- 透過回傳 `true`/`false` 來幫助防止誤用需要 `WeakMap` ê API，毋免用拋出例外。
- 會當處理 `unknown` 輸入，佇模組邊界（例如：解析、外部資料、抑是無型別 ê 程式碼）特別方便。

## 用法

### 语法

函数：

- `isWeakMap(value)`

参数：

- `value`: 欲檢查 ê 值。

### 本地函数导入

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a tī runtime sī WeakMap
}

console.log(isWeakMap(a)); // chin
console.log(isWeakMap(b)); // bô
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isWeakMap(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>该文件于 30 January 2026 at 13:26:02 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>