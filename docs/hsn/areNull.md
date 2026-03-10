# areNull

## 说明

दित्ते गए `array` विच सारे एलिमैंट `null` हण या नئیں, एह चेक करदा ऐ।

### 使用场景

इह वैलिडेट करो कि डेटासेट कॉलम, API फील्ड लिस्ट, या प्लेसहोल्डर ऐरे विच सिरिफ़ `null` वैल्यूज़ ने, उस तोں पह्लां कि तुसी
ओह लॉजिक लगाओ जिहड़ा मानदा ऐ कि सारे एंट्रीज़ जान-बूझ के खाली ने।

> **给 TypeScript 用户的提示：**
>
> `areNull` उस वख्त ਵਰतो जदों तुहानूं सख़्त चेक चाहीदा होवे कि इनपुट इक नॉन-एम्प्टी ऐरे ऐ ते हर एलिमैंट बिलकुल `null`
> ऐ (ना `undefined`, ना फाल्सी वैल्यूज़)।

### 优势

- `true` सिरिफ़ ओह्दो वख्त लौटांदा ऐ जदों हर इक एलिमैंट `null` होवे, इस करके एह सख़्त “सब मैच” गार्ड ऐ।
- नॉन-ऐरे ते खाली ऐरे नूं `false` लौटाके रद्द करदा ऐ, जिस नाल गलत इनपुट ते अकस्मात ट्रूथी नतीजे तोں बचाव होंदा ऐ।
- ओह्दे डेटा नूं प्रोसेस करन तोں पह्लां प्रीकंडीशन चेक वजों वधिया कम करदा ऐ जिहड़ा पूरी तरह `null` होणा लाज़मी होवे।

## 用法

### 语法

函数：

- `areNull(array)`

参数：

- `array`: `null` एलिमैंटां लई चेक करन वास्ते इनपुट ऐरे।

### 本地函数导入

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // true
const allNullB = areNull(b); // false

const notAnArray = areNull(123 as unknown as unknown[]); // false
const empty = areNull([]); // false

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areNull(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areNull](../_analysis/areNull.md)

<br>

---

<small>该文件于 31 January 2026 at 15:43:37 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>