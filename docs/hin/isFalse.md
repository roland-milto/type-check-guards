# isFalse

## विवरण

`isFalse` जाँचता है कि दिया गया मान बूलियन लिटरल `false` के सख्त रूप से बराबर है या नहीं।

### उपयोग का मामला

अज्ञात डेटा (जैसे JSON, क्वेरी पैरामीटर्स, या उपयोगकर्ता इनपुट से) का सत्यापन करें, जहाँ केवल स्पष्ट बूलियन मान `false`
को वैध फ़्लैग माना जाना चाहिए, और बाकी सब कुछ अस्वीकार किया जाना चाहिए।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `isFalse` का उपयोग तब करें जब आपको केवल लिटरल `false` स्वीकार करना हो और अन्य सभी falsy मानों को अस्वीकार करना हो; यह
> केवल `value === false` के लिए `true` लौटाता है।

### फायदे

- बिना किसी कोएर्शन के बूलियन लिटरल `false` के लिए सख्त जाँच प्रदान करता है।
- `false` को `0`, `""`, `null`, और `undefined` जैसे अन्य falsy मानों से अलग पहचानने में मदद करता है।
- अज्ञात इनपुट का सत्यापन करते समय इरादे को स्पष्ट करके पठनीयता में सुधार करता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `isFalse(value)`

पैरामीटर:

- `value`: जाँचा जाने वाला मान।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input yahaan bilkul false hai
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.isFalse(value)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>फ़ाइल 31 जनवरी 2026 को 4:21:44 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>