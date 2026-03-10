# areWeakMaps

## 说明

`areWeakMaps` 會檢查一个值敢是一个無空个陣列，而且內底逐个元素攏是 `WeakMap`；只有符合這个情形才回傳 `true`，其他情形攏回傳
`false`。

### 使用场景

驗證執行期資料（比如解析後个 JSON、外掛輸入、抑是型別較鬆个設定），確保它是一个無空个 `WeakMap` 實例陣列，才好去迭代並呼叫
`WeakMap` 方法；若有任何元素毋是 `WeakMap`，抑是陣列是空个，就會回傳 `false`。

> **给 TypeScript 用户的提示：**
>
> 用 `areWeakMaps` 來驗證未知輸入，才好當做無空个 `WeakMap[]` 來用；空陣列會回傳 `false`。

### 优势

- 確保提供个陣列內底逐个元素攏是 `WeakMap` 實例。
- 對空陣列會回傳 `false`，避免無意間共「無資料」當做有效輸入來接受。
- 做 `WeakMap` 專用操作進前，當做保護檢查，確保所有項目攏符合。

## 用法

### 语法

函数：

- `areWeakMaps(array)`

参数：

- `array`: 欲檢查敢是 `WeakMap` 實例个陣列。

### 本地函数导入

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list sī chi̍t ê bô-khong ê su̍h-chō͘, lāi-bīn sī WeakMap ê si̍t-lē
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // m̄-sī bô-khong ê WeakMap[]
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areWeakMaps(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>该文件于 30 January 2026 at 13:38:30 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>