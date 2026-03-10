# areTrue

## विवरण

खाली नभएको एरेमा केवल बूलियन `true` मानहरू मात्र छन् कि छैनन् भनेर जाँच गर्छ।

### प्रयोगको केस

अगाडि बढ्नु अघि पूर्वसर्तहरू वा फिचर फ्ल्यागहरूको सेट सबै सक्षम छन् (सबै मानहरू `true` छन्) भन्ने कुरा प्रमाणित गर्न
`areTrue` प्रयोग गर्नुहोस्, र खाली वा गलत ढाँचाका इनपुटहरूलाई पूरा नभएको (`false`) रूपमा व्यवहार गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `areTrue` ले खाली एरेका लागि र कडाइका साथ `true` नभएको कुनै पनि मान समावेश भएका एरेका लागि `false` फर्काउँछ।

### फाइदाहरू

- एरे खाली नभएको अवस्थामा मात्र, प्रत्येक तत्व कडाइका साथ `true` हुँदा `true` फर्काउँछ।
- छिटो असफल हुन्छ: `true` नभएको मान भेट्ने बित्तिकै `false` फर्काउँछ।
- अवैध इनपुटहरू (एरे नभएका वा खाली एरे) लाई `false` फर्काएर अस्वीकार गर्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areTrue(array)`

प्यारामिटरहरू:

- `array`: सबै `true` मानहरू छन् कि छैनन् भनेर जाँच गर्नुपर्ने एरे।

### स्थानीय फङ्सन आयात

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areTrue(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>यो फाइल 30 January 2026 at 13:52:06 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>