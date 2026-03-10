# areNumbers

## विवरण

`areNumbers` जाँचता है कि कोई value एक गैर-खाली array है या नहीं, जिसमें सभी elements numbers हैं।

### उपयोग का मामला

totals, averages, या अन्य numeric aggregations की गणना करने से पहले user-provided या API-provided data को validate करें
ताकि यह सुनिश्चित हो सके कि वह numbers का एक गैर-खाली array है।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> numeric calculations करने से पहले unknown arrays को validate करने के लिए `areNumbers` का उपयोग करें; यह खाली arrays के
> लिए और किसी भी non-number value वाले arrays के लिए `false` लौटाता है।

### फायदे

- `true` केवल तब लौटाता है जब इनपुट एक गैर-खाली array हो और हर element एक number हो।
- खाली arrays और non-array inputs को अस्वीकार करके false positives से बचाता है।
- runtime errors से बचने के लिए numeric operations (जैसे, जोड़ना, औसत निकालना) से पहले guard के रूप में उपयोगी।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areNumbers(array)`

पैरामीटर:

- `array`: number elements के लिए जाँचा जाने वाला array।

### लोकल फ़ंक्शन इम्पोर्ट

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

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areNumbers(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 1:04:27 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>