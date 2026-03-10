# isPrimitive

## विवरण

`isPrimitive` यह निर्धारित करता है कि दिया गया मान primitive है या नहीं (`null`, `undefined`, `boolean`, `number`,
`string`, `bigint`, `symbol`)।

### उपयोग का मामला

रनटाइम पर इनपुट्स (जैसे API payload fields, configuration values, या user-provided data) को validate करें ताकि
serializing, logging, या केवल-primitive ऑपरेशन्स लागू करने से पहले यह सुनिश्चित हो सके कि मान primitive है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `unknown` इनपुट्स को objects या functions की तरह ट्रीट करने से पहले उन्हें guard करने के लिए `isPrimitive` का उपयोग
> करें; यह primitives के लिए `true` और objects व functions के लिए `false` लौटाता है।

### फायदे

- किसी मान के JavaScript primitive होने की जाँच के लिए तेज़, allocation-free जाँच।
- `null` को सही तरीके से primitive मानता है (भले ही `typeof null` `"object"` हो)।
- केवल-ऑब्जेक्ट ऑपरेशन्स करने से पहले `unknown` मानों को narrow करने में मदद करता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isPrimitive(value)`

पैरामीटर:

- `value`: primitive प्रकार के लिए जाँचने वाला मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isPrimitive(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 11:56:22 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>