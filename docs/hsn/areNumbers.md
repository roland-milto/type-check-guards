# areNumbers

## 说明

`areNumbers` चेक करदा ऐ कि कोई वैल्यू इक गैर-खाली ऐरे ऐ जिथे सारे एलिमेंट नंबर नें।

### 使用场景

यूज़र-वळों दित्ते होए या API-वळों दित्ते होए डेटा नूं वैलिडेट करो तां जो एह यकीनी बने कि एह नंबरां दा इक गैर-खाली ऐरे ऐ,
कुल, औसत, या होर न्यूमेरिक एग्रीगेशन कड्ढण तोں पह्लां।

> **给 TypeScript 用户的提示：**
>
> `areNumbers` नूं अनजाण (unknown) ऐरेआं नूं न्यूमेरिक कैलकुलेशना तोں पह्लां वैलिडेट करन लेई इस्तेमाल करो; एह खाली ऐरेआं
> लेई ते ओह्ना ऐरेआं लेई `false` लौटांदा ऐ जिन्हां विच कोई वी गैर-नंबर वैल्यू होवे।

### 优势

- `true` सिरिफ ओह्दो वक़्त लौटांदा ऐ जदों इनपुट इक गैर-खाली ऐरे होवे ते हर एलिमेंट नंबर होवे।
- खाली ऐरे ते गैर-ऐरे इनपुटां नूं रद्द करके गलत पॉज़िटिव्स तोں बचांदा ऐ।
- न्यूमेरिक ऑपरेशना (जिवें जोड़, औसत) तोں पह्लां गार्ड वजों फायदेमंद ऐ तां जो रनटाइम एररां तोں बच्या जा सके।

## 用法

### 语法

函数：

- `areNumbers(array)`

参数：

- `array`: ओह ऐरे जिसनूं नंबर एलिमेंटां लेई चेक कीता जावैगा।

### 本地函数导入

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areNumbers(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>该文件于 30 January 2026 at 13:04:38 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>