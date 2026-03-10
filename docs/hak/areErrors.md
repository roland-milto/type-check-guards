# areErrors

## 说明

檢查一個陣列係毋係非空，並且淨包含 `Error` 物件，回傳 `true` 或 `false`。

### 使用场景

在迭代、記錄日誌或重新拋出之前，驗證運行時提供个 `unknown[]`（例如彙總失敗、驗證結果，或者反序列化資料）係一個非空个 `Error`
物件清單。

> **给 TypeScript 用户的提示：**
>
> `areErrors` 淨會對一個有內容个陣列、而且每一項都係 `Error` 時回傳 `true`；若係空陣列，或者有任何元素毋係 `Error`，就會回傳
`false`。

### 优势

- 確保逐個元素都係一個 `Error` 實例，方便安全个錯誤處理同記錄日誌。
- 拒絕空陣列，避免意外个「無錯誤」狀態當做有效个錯誤清單。
- 處理 `unknown[]` 輸入（例如來自 API 或 `catch` 區塊）時，做運行時守衛當好用。

## 用法

### 语法

函数：

- `areErrors(array)`

参数：

- `array`: 愛檢查个陣列，看看有無 `Error` 物件。

### 本地函数导入

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value係一個無空个Error物件陣列
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areErrors(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areErrors](../_analysis/areErrors.md)

<br>

---

<small>该文件于 6 February 2026 at 12:33:39 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>