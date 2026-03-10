# areMaps

## 说明

`areMaps` 會判斷一個指定个陣列敢是無空，閣攏是由 `Map` 實例所組成。

### 使用场景

佇把未知輸入（例如 JSON 解析、外部 API、抑是動態來源）當做無空个 `Map` 物件清單來使用以前，先做驗證。

> **给 TypeScript 用户的提示：**
>
> 若是空陣列會回傳 `false`；干焦當陣列有資料而且逐个元素攏是 `Map` 才會回傳 `true`。

### 优势

- 確保逐个元素攏是 `Map` 實例，干焦當歸个陣列攏通過檢查才會回傳 `true`。
- 設計上會拒絕空陣列，避免無意間把「無資料」當做有效輸入來接受。
- 適合作為先行防護，才來對一組集合做 `Map` 專用操作（例如 `.get()`、`.set()`、走訪迭代）。

## 用法

### 语法

函数：

- `areMaps(array)`

参数：

- `array`: 欲檢查个陣列。

### 本地函数导入

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items 保證佇執行時是一个無空的 Map 實例陣列
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // 會回傳 false：空陣列，抑是陣列內底有任何無是 Map 的值
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areMaps(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areMaps](../_analysis/areMaps.md)

<br>

---

<small>该文件于 31 January 2026 at 16:13:41 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>