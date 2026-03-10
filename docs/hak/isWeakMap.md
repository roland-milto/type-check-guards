# isWeakMap

## 说明

判斷指定个 `value` 係毋係一個 `WeakMap` 實例。

### 使用场景

當你接受一個 `unknown` 值（例如：來自公開 API、外掛系統、抑係動態設定），而且需要先確認佢係 `WeakMap`，正好用 `WeakMap`
專用个行為時，就用 `isWeakMap`。

> **给 TypeScript 用户的提示：**
>
> `isWeakMap` 會做一個 `instanceof WeakMap` 檢查；佢係一個執行期守衛，淨會對真正个 `WeakMap` 實例回傳 `true`。

### 优势

- 簡單个執行期檢查，判斷一個值係毋係 `WeakMap`。
- 透過回傳 `true`/`false` 來幫助避免誤用需要 `WeakMap` 个 API，毋會用丟出例外个方式。
- 做得處理 `unknown` 輸入，模組邊界（例如：解析、外部資料、抑係無型別个程式碼）用起來當方便。

## 用法

### 语法

函数：

- `isWeakMap(value)`

参数：

- `value`: 愛檢查个值。

### 本地函数导入

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a 係執行時个 WeakMap
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
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

<small>该文件于 30 January 2026 at 13:25:07 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>