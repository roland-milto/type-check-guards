# isFalse

## 说明

`isFalse` 檢查指定个值係毋係同布林字面值 `false` 嚴格相等。

### 使用场景

驗證未知資料（例如來自 JSON、查詢參數、抑係使用者輸入），當中淨有明確个布林值 `false` 應該當作有效旗標，其他全部都愛拒絕。

> **给 TypeScript 用户的提示：**
>
> 當你需要淨接受字面值 `false`，並拒絕所有其他假值時，用 `isFalse`；佢淨喺 `value === false` 時正會回傳 `true`。

### 优势

- 提供對布林字面值 `false` 做嚴格檢查，無強制轉型。
- 幫助區分 `false` 同其他假值（falsy）像係 `0`、`""`、`null` 同 `undefined`。
- 透過喺驗證未知輸入時明確表達意圖，提升可讀性。

## 用法

### 语法

函数：

- `isFalse(value)`

参数：

- `value`: 愛檢查个值。

### 本地函数导入

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input 係正經係 false 喺呢度
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

<small>该文件于 31 January 2026 at 16:21:38 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>