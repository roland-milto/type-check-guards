# isObject

## 说明

判斷指定个 `value` 係毋係 `object`（排除 `null`）。

### 使用场景

用 `isObject` 來驗證未知輸入（例如解析後个 JSON、API 回應、事件 payload），在存取屬性之前先確保該值係物件而且毋係 `null`。

> **给 TypeScript 用户的提示：**
>
> `isObject` 係一個執行期 guard，會回傳 boolean；佢毋會收窄到特定个物件形狀。當你需要較強个型別時，請同其他檢查（例如屬性存在性）配合使用。

### 优势

- 淨係對 `null` 以外、而且 `typeof` 係 `"object"` 个值正會回傳 `true`。
- 避免常見个 JavaScript 陷阱：`null` 本來會分做物件。
- 對一般物件同內建物件實例（例如 `Date`、`RegExp`）都有效。
- 簡單、快速个執行期檢查，適合用在防禦式程式設計同輸入驗證。

## 用法

### 语法

函数：

- `isObject(value)`

参数：

- `value`: 愛檢查係毋係 `object` 个值。

### 本地函数导入

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input 係執行時个非空物件
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isObject(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isObject](../_analysis/isObject.md)

<br>

---

<small>该文件于 31 January 2026 at 00:18:32 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>