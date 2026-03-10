# isObject

## 说明

判斷指定 ê `value` 敢是 `object`（排除 `null`）。

### 使用场景

用 `isObject` 來驗證未知 ê 輸入（例：解析後 ê JSON、API 回應、事件 payload），佇存取屬性以前先確保該值是物件而且毋是 `null`。

> **给 TypeScript 用户的提示：**
>
> `isObject` 是一個執行期 guard，會回傳 boolean；伊無會縮窄到特定 ê 物件形狀。當你需要較強 ê 型別時，請佮其他檢查（例：屬性敢有存在）做伙用。

### 优势

- 干焦會當 `typeof` 是 `"object"` 而且毋是 `null` ê 值，才會回傳 `true`。
- 防止常見 ê JavaScript 陷阱：`null` 若無另外處理，會予人當做是物件。
- 對一般物件佮內建物件實例（例：`Date`、`RegExp`）攏會當用。
- 簡單、快速 ê 執行期檢查，適合用佇防禦式程式設計佮輸入驗證。

## 用法

### 语法

函数：

- `isObject(value)`

参数：

- `value`: 欲檢查看覓敢是 `object` ê 值。

### 本地函数导入

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input tī sī chi̍t ê bô null ê object tī runtime
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

<small>该文件于 31 January 2026 at 00:19:27 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>