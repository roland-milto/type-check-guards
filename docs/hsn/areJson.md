# areJson

## 说明

चैक करदा ऐ कि ऐरे दे सारे एलिमैंट JSON स्ट्रिंगां नें कि नहीं, ते `true` सिरिफ ओह्दो वक़्त लौटांदा ऐ जदों ऐरे भरी होवे
ते हर आइटम वैध JSON होवे; नहीं तां `false` लौटांदा ऐ।

### 使用场景

आउण वाला डेटा वैलिडेट करो (मिसाल वजों query params, environment variables, जां बाहरी APIs तोں) जिथे तुसीं JSON-encoded
स्ट्रिंगां दी इक ऐरे दी उम्मीद करदे ओ ते खाली ऐरे जां कोई वी गैर-JSON एंट्री रद्द करना चाहुंदे ओ।

> **给 TypeScript 用户的提示：**
>
> `areJson` ओह्दो वक़्त इस्तेमाल करो जदों तुहानूं एह वैलिडेट करना होवे कि इक `unknown[]` विच सिरिफ JSON स्ट्रिंगां ही
> नें, उनांनूं पार्स करन तोں पैह्लां (मिसाल वजों `JSON.parse` नाल)।

### 优势

- `true` सिरिफ ओह्दो वक़्त लौटांदा ऐ जदों हर इक एलिमैंट इक वैध JSON स्ट्रिंग होवे; नहीं तां `false` लौटांदा ऐ।
- जल्दी फेल होंदा ऐ: जिवें ही कोई गैर-JSON एलिमैंट लभे, चैक करना बंद कर दिंदा ऐ।
- डिज़ाइन मुताबिक खाली ऐरे नूं रद्द करदा ऐ, गैर-भरे इनपुट लेई `false` लौटांदा ऐ।

## 用法

### 语法

函数：

- `areJson(array)`

参数：

- `array`: JSON स्ट्रिंग एलिमैंट्स लेई चैक करन वास्ते ऐरे।

### 本地函数导入

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // सही
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // गलत
const empty = areJson([]); // गलत

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areJson(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areJson](../_analysis/areJson.md)

<br>

---

<small>该文件于 30 January 2026 at 16:16:11 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>