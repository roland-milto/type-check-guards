# areBuffers

## 说明

`areBuffers` 會檢查提供的值敢是一个無空、內底有填滿的陣列，而且逐个元素攏是一个 `Buffer`；若是就回傳 `true`，無就是回傳
`false`。

### 使用场景

驗證入來的 chunk 陣列（例：對 stream、檔案上傳、抑是網路封包來的），確保所有部份攏是 `Buffer` 實例，才好去做串接、解碼，抑是傳予加密抑是二進位處理的函式。

> **给 TypeScript 用户的提示：**
>
> 用 `areBuffers` 來驗證 `unknown[]`，才去叫用 `Buffer.concat` 這款 Buffer 專用 API，確保干焦當逐个元素攏是一个 `Buffer`
> 的時陣，函式才會回傳 `true`。

### 优势

- 確保輸入內底逐个元素攏是 Node.js `Buffer` 實例，干焦當歸个陣列攏符合的時陣才會回傳 `true`。
- 透早擋掉無效輸入：要求一定愛是一个無空、內底有填滿的陣列；若是空陣列抑是毋是陣列就回傳 `false`。
- 做 buffer 專用操作（例：串接、雜湊、二進位協定）進前當做保護檢查真好用。

## 用法

### 语法

函数：

- `areBuffers(array)`

参数：

- `array`: 欲檢查看覓敢有 `Buffer` 實例的陣列。

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

<small>该文件于 31 January 2026 at 16:26:25 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>