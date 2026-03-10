# isFalse

## 说明

`isFalse` 檢查一個給定的值敢是嚴格等於布林字面量 `false`。

### 使用场景

驗證未知資料（例如：來自 JSON、查詢參數、抑是使用者輸入），只允許明確的布林值 `false` 當做有效旗標，其他攏應該拒絕。

> **给 TypeScript 用户的提示：**
>
> 當你需要只接受字面量 `false` 而且拒絕所有其他偽值時，使用 `isFalse`；伊只有佇 `value === false` 的時陣才會回傳 `true`。

### 优势

- 提供嚴格檢查布林字面量 `false`，無強制轉型。
- 幫助區分 `false` 跟其他偽值（falsy）像是 `0`、`""`、`null`、`undefined`。
- 透過明確表達意圖，佇驗證未知輸入時提升可讀性。

## 用法

### 语法

函数：

- `isFalse(value)`

参数：

- `value`: 欲檢查的值。

### 本地函数导入

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input tī-tio̍h sī false tī chia
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isFalse(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isFalse](../_analysis/isFalse.md)

<br>

---

<small>该文件于 31 January 2026 at 16:43:46 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>