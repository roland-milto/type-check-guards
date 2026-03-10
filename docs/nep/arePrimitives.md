# arePrimitives

## विवरण

`arePrimitives` ले प्रदान गरिएको, खाली नभएको एरेका सबै तत्वहरू प्रिमिटिभ प्रकार हुन् कि होइनन् भनेर मूल्याङ्कन गर्छ।

### प्रयोगको केस

सिरियलाइज, ह्यास, लग, वा वस्तुहरू प्राप्त गर्नु नहुने API हरूमा पास गर्नु अघि, आउने डेटा (जस्तै, query parameters, CSV
row values, वा IDs/tags को सूची) मा केवल प्रिमिटिभ मानहरू मात्र छन् भनेर प्रमाणीकरण गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> थप प्रशोधन अघि `unknown[]` मा केवल प्रिमिटिभ मानहरू (string, number, bigint, boolean, symbol, undefined, वा null)
> मात्र छन् भन्ने सुनिश्चित गर्नुपर्दा `arePrimitives` प्रयोग गर्नुहोस्।

### फाइदाहरू

- हरेक तत्व प्रिमिटिभ मान हुँदा मात्र `true` फर्काउँछ, जसले “कुनै वस्तु/फङ्सन छैन” प्रकारका एरेहरूका लागि कडा गार्ड
  बनाउँछ।
- छिट्टै असफल हुन्छ: प्रिमिटिभ नभएको तत्व भेटिने बित्तिकै `false` फर्काउँछ।
- एरे नभएका इनपुट र खाली एरेका लागि पनि `false` फर्काउँछ (filled-array जाँचमार्फत), जसले अवैध इनपुटलाई गल्तीले
  स्वीकारिनबाट रोक्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `arePrimitives(array)`

प्यारामिटरहरू:

- `array`: प्रिमिटिभ प्रकारका तत्वहरू छन् कि छैनन् भनेर जाँच गर्नुपर्ने एरे।

### स्थानीय फङ्सन आयात

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // सत्य
const r2 = arePrimitives(b); // सत्य
const r3 = arePrimitives(c); // असत्य
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.arePrimitives(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>यो फाइल 31 January 2026 at 00:05:43 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>