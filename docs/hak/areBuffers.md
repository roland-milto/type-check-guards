# areBuffers

## 说明

`areBuffers` 檢查提供个值係毋係一隻非空、填滿个陣列，而且內底逐隻元素都係 `Buffer`；係个話回傳 `true`，毋係就回傳 `false`。

### 使用场景

驗證入來个 chunk 陣列（例如：來自 streams、檔案上傳、抑係網路封包），確保所有部分都係 `Buffer` 實例，正好去做串接、解碼，抑係交分加密或二進位處理函式。

> **给 TypeScript 用户的提示：**
>
> 用 `areBuffers` 來驗證 `unknown[]`，正好去呼叫像 `Buffer.concat` 這兜 Buffer 專用 API，確保函式淨係當逐隻元素都係
`Buffer` 時正會回傳 `true`。

### 优势

- 確保輸入內底个逐隻元素都係 Node.js `Buffer` 實例，淨係當歸隻陣列完全符合時正會回傳 `true`。
- 透過要求一隻非空、填滿个陣列來提早拒絕無效輸入；對空陣列抑係非陣列會回傳 `false`。
- 做 buffer 專用操作（例如：串接、雜湊、二進位協定）之前當做 guard 當有用。

## 用法

### 语法

函数：

- `areBuffers(array)`

参数：

- `array`: 愛檢查係毋係 buffer 實例个陣列。

### 本地函数导入

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areBuffers(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>该文件于 31 January 2026 at 16:25:20 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>