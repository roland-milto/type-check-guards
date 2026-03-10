# areNaNs

## 说明

`areNaNs` चैक करदा ऐ के ऐरे दे सारे एलिमैंट `NaN` नें या नहीं, अते `true` सिरिफ ओह्दो वक़्त वापस करदा ऐ जदों हर इक
एलिमैंट `NaN` होवे।

### 使用场景

आउंदी डेटा नूं वैलिडेट करो जिथे `NaN` नूं sentinel वैल्यू वजों इस्तेमाल कीता जांदा ऐ अते तुहानूं यकीनी बनाना होवे के
पूरी ऐरे सिरिफ `NaN` ते मुश्तमिल ऐ (मिसाल वजों, पूरी तरह missing न्यूमैरिक सीरीज़ नूं डिटेक्ट करना)।

> **给 TypeScript 用户的提示：**
>
> `areNaNs` उस वक़्त इस्तेमाल करो जदों तुहानूं ए वैलिडेट करना होवे के ऐरे च सिरिफ न्यूमैरिक `NaN` वैल्यू ही ऐ (
> स्ट्रिंग-टू-नंबर coercion तोں बगैर)।

### 优势

- `true` सिरिफ ओह्दो वक़्त वापस करदा ऐ जदों हर इक एलिमैंट `NaN` होवे (सख़्त सारे-एलिमैंट चैक)।
- स्ट्रिंगां नूं नंबरां च नहीं बदलदा; "NaN" वरगे वैल्यूज़ गैर-`NaN` रहंदे नें अते नतीजा `false` बना देंदे नें।
- भरियां न होइयां ऐरेज़ (non-filled arrays) लेई `false` वापस करदा ऐ, जिस नाल खाली इनपुट ते गल्ती नाल `true` होण तोں बचाव
  होंदा ऐ।

## 用法

### 语法

函数：

- `areNaNs(array)`

参数：

- `array`: `NaN` वैल्यूज़ लेई चैक करन वास्ते ऐरे।

### 本地函数导入

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // साँचो
const b = areNaNs([NaN, 1, NaN]); // झूठो
const c = areNaNs([NaN, "NaN", NaN]); // झूठो
const d = areNaNs([NaN, null, NaN]); // झूठो
const e = areNaNs([] as unknown[]); // झूठो
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areNaNs(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>该文件于 30 January 2026 at 15:51:44 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>