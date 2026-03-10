# areWeakMaps

## 说明

`areWeakMaps` 會檢查一個值係毋係非空个陣列，而且陣列內底每一個元素都係 `WeakMap`；只有喺這種情況下回傳 `true`，其他情況都回傳
`false`。

### 使用场景

驗證執行期資料（例如：解析後个 JSON、外掛輸入、抑係型別較鬆个設定），確保佢係一個非空个 `WeakMap` 實例陣列，先好去迭代並呼叫
`WeakMap` 方法；若係任何元素毋係 `WeakMap`，抑係陣列係空个，就回傳 `false`。

> **给 TypeScript 用户的提示：**
>
> 用 `areWeakMaps` 來驗證未知輸入，正正式式當佢係非空个 `WeakMap[]` 之前先檢查；對空陣列佢會回傳 `false`。

### 优势

- 確保提供个陣列內底每一個元素都係一個 `WeakMap` 實例。
- 對空陣列會回傳 `false`，避免無意間把「無資料」當做有效輸入。
- 做為守衛相當有用：喺對所有項目執行 `WeakMap` 專用操作之前先檢查。

## 用法

### 语法

函数：

- `areWeakMaps(array)`

参数：

- `array`: 愛檢查係毋係 `WeakMap` 實例个陣列。

### 本地函数导入

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list係一個毋空个WeakMap實例陣列
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // 毋係一個毋空个WeakMap[]
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

<small>该文件于 30 January 2026 at 13:37:18 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>