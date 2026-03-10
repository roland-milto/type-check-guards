# isFilledArray

## विवरण

जाँचता है कि `value` कम से कम एक तत्व वाला ऐरे है या नहीं, और `true` या `false` लौटाता है।

### उपयोग का मामला

आने वाले डेटा (जैसे, API पेलोड, फ़ॉर्म मान, कॉन्फ़िगरेशन) को इटरेट करने, पहले तत्व तक पहुँचने, या ऐसी लॉजिक लागू करने से
पहले सत्यापित करने के लिए `isFilledArray` का उपयोग करें, जिसके लिए कम से कम एक आइटम आवश्यक हो।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `isFilledArray` एक रनटाइम गार्ड है जो बूलियन लौटाता है; यह ऐरे के गैर-खाली होने की पुष्टि से आगे तत्वों के प्रकारों को
> संकीर्ण नहीं करता।

### फायदे

- `Array.isArray` और लंबाई जाँच का उपयोग करके गैर-खाली ऐरे के लिए सरल, तेज़ जाँच।
- जब कोड यह मान लेता है कि ऐरे में कम से कम एक तत्व है, तब रनटाइम त्रुटियों से बचने में मदद करता है।
- स्पष्ट बूलियन परिणाम: गैर-खाली ऐरे के लिए `true` और अन्यथा `false` लौटाता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isFilledArray(value)`

पैरामीटर:

- `value`: यह जाँचने के लिए मान कि क्या यह एक गैर-खाली ऐरे है।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // इनपुट रनटाइम पर एक गैर-खाली ऐरे है
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isFilledArray(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>फ़ाइल 6 फ़रवरी 2026 को 11:47:20 am बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>