# areErrors

## 说明

Check करै सै कि array खाली ना हो अर उसमां सिरफ `Error` objects हों, अर `true` या `false` लौटावै सै।

### 使用场景

Runtime तै मिल्या `unknown[]` (जैसे aggregated failures, validation results, या deserialized data) नै iterate करन तै
पैहले, log करन तै पैहले, या दुबारा throw करन तै पैहले validate करयो कि यो `Error` objects की non-empty list सै।

> **给 TypeScript 用户的提示：**
>
> `areErrors` `true` सिरफ भरया होया array खातर दे सै जद हर item `Error` हो; खाली array खातर या जद कोई तत्व `Error` ना हो
> त `false` दे सै।

### 优势

- हर तत्व के `Error` इंस्टेंस होणो सुनिश्चित करै सै, जिणसै सुरक्षित error handling अर logging हो सै।
- खाली arrays नै reject करै सै, जिणसै गलती तै “कोई error ना” वाली स्थिति नै valid error list समझण तै बचाव हो सै।
- `unknown[]` inputs (जैसे APIs या `catch` blocks तै) के साथ deal करदे टाइम runtime guard के रूप में बढ़िया काम करै सै।

## 用法

### 语法

函数：

- `areErrors(array)`

参数：

- `array`: `Error` objects खातर check करणी वाली array।

### 本地函数导入

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value Error objects ka non-empty array hai
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areErrors(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areErrors](../_analysis/areErrors.md)

<br>

---

<small>该文件于 6 February 2026 at 12:33:56 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>