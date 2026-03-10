# isSymbol

## 说明

`isSymbol` 用來判斷指定个值敢是 `symbol` 型別；若是 symbol 就回傳 `true`，無是就回傳 `false`。

### 使用场景

佇共一个 `unknown` 值當做獨一無二个識別子、registry key，抑是物件佮 map 內底个計算屬性 key 來用進前，先驗證伊敢是 `symbol`。

> **给 TypeScript 用户的提示：**
>
> 用 `isSymbol` 先共 `unknown` 縮小做 `symbol`，才來呼叫佮 symbol 相關个函式，抑是共伊當做計算屬性 key 來用。

### 优势

- 提供簡單、可靠个執行期檢查，用來判斷 JavaScript `symbol` 原始型別。
- 幫助佇使用 symbol 專用 API 或當做 key 來儲存進前，先縮小 `unknown` 值个型別範圍。
- 用 `typeof` 來避免誤判；`typeof` 是偵測 `symbol` 值个標準方法。

## 用法

### 语法

函数：

- `isSymbol(value)`

参数：

- `value`: 欲檢查个值。

### 本地函数导入

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input tī sīng-hōe ê sî-bū
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isSymbol(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>该文件于 30 January 2026 at 14:27:52 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>