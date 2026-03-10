# isFinite

## विवरण

निर्धारित करता है कि दिया गया `value` एक सीमित `number` है या नहीं।

### उपयोग का मामला

संख्यात्मक गणनाएँ करने से पहले अज्ञात इनपुट (जैसे JSON, फ़ॉर्म, या APIs से) को मान्य करने के लिए `isFinite` का उपयोग
करें, ताकि यह सुनिश्चित हो सके कि मान एक वास्तविक, सीमित संख्या है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `isFinite` केवल सीमित संख्याओं के लिए `true` लौटाता है; यह `NaN`, `Infinity`, और किसी भी गैर-संख्या मान के लिए `false`
> लौटाता है।

### फायदे

- विश्वसनीय सीमितता जाँच के लिए बिल्ट-इन `Number.isFinite` का उपयोग करता है।
- केवल सीमित संख्याओं के लिए `true` लौटाता है; `NaN`, `Infinity`, और गैर-संख्या इनपुट के लिए `false` लौटाता है।
- मान्यकरण और गार्डिंग लॉजिक के लिए उपयुक्त, सरल और बिना साइड-इफेक्ट वाला प्रेडिकेट।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isFinite(value)`

पैरामीटर:

- `value`: सीमितता जाँचने के लिए मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers है: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // यहाँ value एक सीमित संख्या है
  const doubled = value * 2;
  console.log(doubled);
}
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isFinite(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 4:30:00 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>