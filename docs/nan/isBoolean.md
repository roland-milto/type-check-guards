# isBoolean

## 说明

判斷一个指定个值敢是 `boolean`。

### 使用场景

驗證外部抑是無型別个資料（例：環境變數、JSON payloads、query parameters），確保一个值是 `boolean`，才用佇條件邏輯內底。

> **给 TypeScript 用户的提示：**
>
> 用 `isBoolean` 先共 `unknown` 縮窄做 `boolean`，才來用布林運算。

### 优势

- 用 `typeof` 做簡單閣快速个執行期檢查。
- 幫助佇做布林值專用邏輯進前，先驗證未知个輸入。
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
  // input tī sī boolean ê
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

<small>该文件于 30 January 2026 at 14:37:13 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>