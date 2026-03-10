# areTrue

## विवरण

जाँचता है कि क्या एक गैर-खाली ऐरे में केवल बूलियन `true` मान ही हैं।

### उपयोग का मामला

`areTrue` का उपयोग यह सत्यापित करने के लिए करें कि पूर्व-शर्तों या फीचर फ्लैग्स का एक सेट सभी सक्षम हैं (सभी मान `true`
हैं) इससे पहले कि आगे बढ़ें, जबकि खाली या गलत-स्वरूप इनपुट को असंतुष्ट (`false`) माना जाए।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `areTrue` खाली ऐरे के लिए और उन ऐरे के लिए `false` लौटाता है जिनमें कोई भी मान सख्ती से `true` नहीं है।

### फायदे

- केवल तब `true` लौटाता है जब हर तत्व सख्ती से `true` हो और ऐरे खाली न हो।
- तेज़ी से विफल होता है: जैसे ही कोई गैर-`true` मान मिलता है, तुरंत `false` लौटा देता है।
- अमान्य इनपुट (गैर-ऐरे या खाली ऐरे) को `false` लौटाकर अस्वीकार करता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areTrue(array)`

पैरामीटर:

- `array`: सभी `true` मानों की जाँच के लिए ऐरे।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areTrue(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 1:51:21 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>