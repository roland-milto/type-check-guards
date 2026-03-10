# areValidDates

## 说明

पता लगांदा ऐ कि ऐरे गैर-खाली ऐ अते पूरी तरह वैध `Date` ऑब्जेक्टां तोں बनी होई ऐ।

### 使用场景

यूज़र-वळों दित्तियां या API-वळों दित्तियां ऐरेज़ नूं तारीख-आधारित ऑपरेशनां (सॉर्टिंग, रेंज चेक, फॉर्मैटिंग) तोں पहिलां
वैलिडेट करन लई `areValidDates` इस्तेमाल करो, तां जो यकीन हो जावे कि सारे एंट्रीज़ असली, वैध `Date` ऑब्जेक्ट नें अते
लिस्ट खाली नें।

> **给 TypeScript 用户的提示：**
>
> `areValidDates` खाली ऐरे लई `false` लौटांदा ऐ; इस नूं वैलिडेशन स्टेप वजों भरोसा करन तोں पहिलां यकीनी बनाओ कि ऐरे वाकई
> गैर-खाली होण लई ही बनायी गई ऐ।

### 优势

- `true` सिरिफ ओह्दो वक़्त लौटांदा ऐ जदों हर एलिमैंट इक वैध `Date` इंस्टैंस होवे (कोई अमान्य तारीखां जियां
  `new Date('invalid')` न हों)।
- खाली इनपुट नूं `false` लौटाके रद्द करदा ऐ, इस नाल तुसां सिरिफ मतलबदार, गैर-खाली तारीख़ लिस्टां नूं ही कबूल करदे ओ।
- इक सादा बूलियन गार्ड-स्टाइल चेक दिंदा ऐ जेहड़ा होर वैलिडेशनां दे नाल आसानी नाल जोड़या जा सकदा ऐ।

## 用法

### 语法

函数：

- `areValidDates(array)`

参数：

- `array`: चेक करन लई ऐरे, जेह्दे विच `Date` ऑब्जेक्ट हो सकदे नें।

### 本地函数导入

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // साँचो
console.log(areValidDates(b)); // झूठो
console.log(areValidDates(c)); // झूठो
console.log(areValidDates(d)); // झूठो

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areValidDates(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>该文件于 30 January 2026 at 14:32:11 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>