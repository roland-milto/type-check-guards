# isBoolean

## 说明

判斷一個指定个值係毋係 `boolean`。

### 使用场景

驗證外部抑係無型別个資料（例如：環境變數、JSON payloads、query parameters），確保一個值係 `boolean`，正用在條件判斷邏輯裡肚。

> **给 TypeScript 用户的提示：**
>
> 用 `isBoolean` 先摎 `unknown` 縮窄做 `boolean`，正來做布林值運算。

### 优势

- 用 `typeof` 做簡單又快速个執行期檢查。
- 幫助在做布林值相關邏輯之前，先驗證未知輸入。
- 會回傳可預期个 `boolean` 結果（`true`/`false`）。

## 用法

### 语法

函数：

- `isBoolean(value)`

参数：

- `value`: 愛檢查个值。

### 本地函数导入

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input 係 boolean 喺呢度
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

<small>该文件于 30 January 2026 at 14:36:25 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>