# areIndexesFound

## विवरण

`areIndexesFound` जाँचता है कि कोई मान एक non-empty array है या नहीं, जिसके सभी elements वैध indexes हैं; यदि हैं तो
`true` और अन्यथा `false` लौटाता है।

### उपयोग का मामला

उपयोगकर्ता-प्रदत्त या बाहरी डेटा (जैसे, parsed JSON) को validate करें, जिससे अपेक्षा है कि वह indexes की सूची हो, ताकि
उसे arrays को access करने या slice करने से पहले जाँचा जा सके।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> अज्ञात इनपुट को array indexes के रूप में मानने से पहले उसके elements को validate करने के लिए `areIndexesFound` का
> उपयोग करें; यह खाली arrays के लिए और non-index मानों वाले arrays के लिए `false` लौटाता है।

### फायदे

- `true` केवल तब लौटाता है जब इनपुट एक भरा हुआ array हो और हर element एक वैध index हो।
- तेज़ी से विफल होता है: जैसे ही कोई non-index element मिलता है, `false` लौटा देता है।
- मानों को array positions या offsets के रूप में उपयोग करने से पहले guard के तौर पर उपयोगी।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areIndexesFound(array)`

पैरामीटर:

- `array`: Index अनुपालन के लिए जाँचा जाने वाला array।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // यहाँ, `a` को इंडेक्सों की भरी हुई ऐरे के रूप में पुष्टि की जाती है।
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areIndexesFound(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>फ़ाइल 31 जनवरी 2026 को 12:42:01 am बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>