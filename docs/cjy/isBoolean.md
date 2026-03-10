# isBoolean

## 说明

判斷一個指定个值係毋係 `boolean`。

### 使用场景

驗證外部或者無型別个資料（例如：環境變數、JSON payloads、query parameters），確保喺用喺條件邏輯之前，該值係 `boolean`。

> **给 TypeScript 用户的提示：**
>
> 用 `isBoolean` 先將 `unknown` 縮窄到 `boolean`，再來做布林運算。

### 优势

- 用 `typeof` 做簡單又快速个執行期檢查。
- 幫助喺做布林值相關邏輯之前驗證未知輸入。
- 回傳可預期个 `boolean` 結果（`true`/`false`）。

## 用法

### 语法

函数：

- `isBoolean(value)`

参数：

- `value`: 欲檢查个值。

### 本地函数导入

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // 这咧 input 是 boolean
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isBoolean(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>该文件于 30 January 2026 at 14:35:53 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>