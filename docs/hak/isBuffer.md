# isBuffer

## 说明

檢查一個值係毋係 Node.js `Buffer`，並返回 `true` 或 `false`。

### 使用场景

喺執行時驗證輸入（例如 API payload、檔案資料、或者訊息緩衝區），確保處理之前個值係 `Buffer`；同時喺 Node.js 以外、可能冇
`Buffer` 个環境下，都可以穩定得到 `false`。

> **给 TypeScript 用户的提示：**
>
> 用 `isBuffer` 先將 `unknown` 值收窄到 `Buffer`，再去調用 Buffer 專用方法。

### 优势

- 使用 `Buffer.isBuffer` 安全檢測 Node.js `Buffer` 實例。
- 喺 `Buffer` 唔可用个環境下會返回 `false`，避免執行時錯誤。
- 支援 `unknown` 輸入，適合用來做執行時驗證同類型收窄。

## 用法

### 语法

函数：

- `isBuffer(value)`

参数：

- `value`: 要測試个值。

### 本地函数导入

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // zhin
console.log(isBuffer(b)); // m̀ zhin

if (isBuffer(a)) {
  // a zoi he Buffer
  console.log(a.toString("utf8"));
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isBuffer(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>该文件于 31 January 2026 at 16:31:40 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>