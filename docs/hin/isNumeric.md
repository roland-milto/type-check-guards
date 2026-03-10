# isNumeric

## विवरण

`isNumeric` यह निर्धारित करता है कि दिया गया `value` संख्यात्मक माना जाता है या नहीं, इसके लिए उसके resolved type को
`NUMERIC_TYPES` के विरुद्ध जाँचता है।

### उपयोग का मामला

संख्यात्मक ऑपरेशन्स करने से पहले इनपुट्स (जैसे, API payloads, form values, configuration) को वैलिडेट करने के लिए
`isNumeric` का उपयोग करें, और `NUMERIC_TYPES` के अनुसार संख्यात्मक-जैसे प्रकारों (जैसे `BigInt`) को सुसंगत रूप से
स्वीकार करें।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `isNumeric` एक बूलियन-रिटर्निंग प्रेडिकेट है; इसे इस बात की रनटाइम जाँच के रूप में मानें कि कोई मान लाइब्रेरी-परिभाषित
> संख्यात्मक प्रकार सेट से संबंधित है या नहीं।

### फायदे

- संख्यात्मक पहचान लॉजिक को केंद्रीकृत करने और पूरे कोडबेस में जाँचों को सुसंगत रखने के लिए `getTypeOf` और
  `NUMERIC_TYPES` का उपयोग करता है।
- आसान ब्रांचिंग और गार्ड-स्टाइल उपयोग के लिए एक सरल बूलियन (`true`/`false`) लौटाता है।
- `NUMERIC_TYPES` द्वारा परिभाषित अनुसार कई संख्यात्मक प्रतिनिधित्वों (जैसे, `number`, `BigInt`) का समर्थन करता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isNumeric(value)`

पैरामीटर:

- `value`: संख्यात्मक प्रकार के लिए जाँचने वाला मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v को लाइब्रेरी के टाइप नियमों के अनुसार संख्यात्मक माना जाता है
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isNumeric(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>फ़ाइल 6 फ़रवरी 2026 को 3:52:47 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>