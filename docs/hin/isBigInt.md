# isBigInt

## विवरण

`isBigInt` जाँचता है कि दिया गया मान `bigint` प्रकार का है या नहीं; BigInt प्रिमिटिव्स के लिए `true` और अन्यथा `false`
लौटाता है।

### उपयोग का मामला

BigInt-विशिष्ट गणनाएँ करने या उन्हें केवल-BigInt फ़ील्ड्स में संग्रहीत करने से पहले, बिना-टाइप वाले स्रोतों (जैसे, JSON
parsing, user input, external APIs) से आने वाले मानों को सत्यापित और संकीर्ण (narrow) करें।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> BigInt अंकगणित (जैसे, `+`, `*`) करने से पहले `unknown` को `bigint` तक संकीर्ण (narrow) करने के लिए `isBigInt` का उपयोग
> करें, क्योंकि इसके लिए BigInt operands आवश्यक होते हैं।

### फायदे

- `bigint` प्रिमिटिव प्रकार के लिए एक सरल, विश्वसनीय रनटाइम जाँच प्रदान करता है।
- BigInt-केवल ऑपरेशन्स करने से पहले `unknown` मानों को संकीर्ण (narrow) करने में मदद करता है।
- गलत सकारात्मक परिणामों से बचाता है: सामान्य numbers, strings, और अन्य प्रकार `false` लौटाते हैं।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isBigInt(value)`

पैरामीटर:

- `value`: जाँचने के लिए मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // सही
console.log(isBigInt(10));  // गलत
console.log(isBigInt("10")); // गलत
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isBigInt(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>फ़ाइल 31 जनवरी 2026 को 11:31:58 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>