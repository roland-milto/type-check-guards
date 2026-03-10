# areMaps

## 说明

`areMaps` 判斷一個指定个陣列係毋係非空，並且佢个全部元素都係 `Map` 實例。

### 使用场景

喺當作非空个 `Map` 物件清單來用之前，先驗證未知輸入（例如 JSON 解析、外部 API、抑或動態來源）。

> **给 TypeScript 用户的提示：**
>
> 對空陣列會回傳 `false`；淨係當陣列有填滿而且每一個元素都係 `Map` 先會回傳 `true`。

### 优势

- 確保逐個元素都係 `Map` 實例，淨係當成個陣列全部通過檢查先會回傳 `true`。
- 設計上會拒絕空陣列，避免唔小心將「無資料」當作有效輸入。
- 適合作為防護，喺對一個集合做 `Map` 專用操作（例如 `.get()`、`.set()`、迭代）之前先檢查。

## 用法

### 语法

函数：

- `areMaps(array)`

参数：

- `array`: 愛檢查个陣列。

### 本地函数导入

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items 係保證係一個唔空嘅 Map 實例陣列（執行時）
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // 對於：空陣列，或者陣列入面包含任何唔係 Map 嘅值，會係 false
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

<small>该文件于 31 January 2026 at 16:12:37 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>