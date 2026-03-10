# isPromise

## 说明

判斷指定个值係毋係 `Promise`。

### 使用场景

當你愛先驗證未知輸入，正當佢係 `Promise` 來處理个時節，就做得用 `isPromise`；例如處理外掛回傳个值、動態 import，或者型別較鬆个
API。

> **给 TypeScript 用户的提示：**
>
> `isPromise` 係用 `instanceof Promise` 來檢查，所以佢淨會對真正个 `Promise` 實例回傳 `true`（毋係一般个 thenable）。

### 优势

- 提供一個簡單个執行期檢查，來判斷一個值係毋係 `Promise`。
- 幫助保護需要真正 `Promise` 實例个程式路徑，會穩定地回傳 `true` 或 `false`。
- 透過要求一定係真正个 `Promise` 實例，避免對「thenable」物件（例如 `{ then() {} }`）產生誤判。

## 用法

### 语法

函数：

- `isPromise(value)`

参数：

- `value`: 愛檢查个值。

### 本地函数导入

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // 真
console.log(isPromise(b)); // 假
console.log(isPromise(123)); // 假
console.log(isPromise(null)); // 假

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isPromise(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isPromise](../_analysis/isPromise.md)

<br>

---

<small>该文件于 30 January 2026 at 23:52:52 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>