# areStrings

## 说明

`areStrings` 會檢查一个陣列敢是無空而且內底攏是字串，只有佇這種情形才會回傳 `true`。

### 使用场景

驗證外部抑是使用者提供的資料（例如 query params、JSON payloads、CSV 欄位），確保你有一个無空的字串清單，才來處理。

> **给 TypeScript 用户的提示：**
>
> 用 `areStrings` 來驗證未知的陣列，才來套用字串專用的邏輯；空陣列會回傳 `false`。

### 优势

- 確保逐个元素攏是字串，若是混合型陣列就會回傳 `false` 來拒絕。
- 會拒絕空陣列，所以 `true` 只表示是一个無空的字串清單。
- 做字串專用操作（例如 `trim`、`toLowerCase`）進前，做快速的 runtime guard 真好用。

## 用法

### 语法

函数：

- `areStrings(value)`

参数：

- `value`: Expected type `string[]`.

### 本地函数导入

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input tī runtime sī chi̍t ê bô-khong ê string[]
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areStrings(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areStrings](../_analysis/areStrings.md)

<br>

---

<small>该文件于 30 January 2026 at 13:19:29 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>