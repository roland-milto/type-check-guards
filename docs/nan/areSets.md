# areSets

## 说明

檢查一个指定的無空陣列內底敢攏是 `Set` 實例；若是就回傳 `true`，無是就回傳 `false`。

### 使用场景

處理逐个 set 進前，先驗證一个值（例如來自使用者輸入、JSON 解析、抑是外部 API）敢是無空的 `Set` 物件陣列。

> **给 TypeScript 用户的提示：**
>
> 用 `areSets` 來驗證未知的輸入，才來迭代並對逐个元素呼叫 `Set` 的 API（例如 `.size`、`.has`、`.add`）。

### 优势

- 干焦輸入是無空的陣列而且逐个元素攏是 `Set` 實例的時陣，才會回傳 `true`。
- 陣列若是無元素，會回傳 `false`，避免空陣列造成誤判。
- 做逐个元素的 `Set` 專用操作進前，做 runtime guard 真好用。

## 用法

### 语法

函数：

- `areSets(array)`

参数：

- `array`: 欲檢查看覓敢是 `Set` 實例的陣列。

### 本地函数导入

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a sī chi̍t ê Set ê si̍t-lē liân-chhù ê chhù-liāu (runtime)
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // bô
console.log(areSets(c)); // bô
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areSets(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areSets](../_analysis/areSets.md)

<br>

---

<small>该文件于 30 January 2026 at 23:14:31 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>