# isSymbol

## 说明

`isSymbol` 用來判斷一個指定个值係毋係 `symbol` 型別；係 symbol 就回傳 `true`，毋係就回傳 `false`。

### 使用场景

在摎一個 `unknown` 值用做唯一識別碼、registry key，或者物件同 map 裡肚个 computed property key 之前，先驗證佢係 `symbol`。

> **给 TypeScript 用户的提示：**
>
> 用 `isSymbol` 先摎 `unknown` 縮小到 `symbol`，正好去呼叫同 symbol 有關个函式，或者用佢做 computed property key。

### 优势

- 提供簡單、可靠个執行期檢查，用來判斷 JavaScript `symbol` 原始型別。
- 幫助在使用 symbol 專用 API 或者拿來做 key 儲存之前，先縮小 `unknown` 值个範圍。
- 透過 `typeof` 來避免誤判；`typeof` 係偵測 `symbol` 值个正統方法。

## 用法

### 语法

函数：

- `isSymbol(value)`

参数：

- `value`: 愛檢查个值。

### 本地函数导入

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input 係符號喺呢度
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

<small>该文件于 30 January 2026 at 14:26:53 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>