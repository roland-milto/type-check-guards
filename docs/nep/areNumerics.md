# areNumerics

## विवरण

`areNumerics` ले कुनै मान गैर-खाली एरे हो र सबै तत्वहरू संख्यात्मक छन् कि छैनन् भनेर जाँच गर्छ।

### प्रयोगको केस

योग, औसत, वा अन्य संख्यात्मक अपरेसनहरू गणना गर्नु अघि बाह्य वा टाइप नभएको डेटा (जस्तै JSON payloads, query parameters,
form input) लाई प्रमाणीकरण गर्न `areNumerics` प्रयोग गर्नुहोस्, ताकि इनपुट गैर-खाली संख्यात्मक एरे हो भन्ने सुनिश्चित
होस् र अन्यथा `false` फर्कियोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `unknown` इनपुटलाई संख्यात्मक एरेको रूपमा व्यवहार गर्नु अघि गार्ड गर्न `areNumerics` प्रयोग गर्नुहोस्; यसले गैर-एरे र
> खाली एरेका लागि `false` फर्काउँछ।

### फाइदाहरू

- इनपुट गैर-खाली एरे हुँदा र प्रत्येक तत्व संख्यात्मक हुँदा मात्र `true` फर्काउँछ।
- छिटो असफल हुन्छ: गैर-संख्यात्मक तत्व भेटिने बित्तिकै जाँच रोक्छ र `false` फर्काउँछ।
- संख्यात्मक अपरेसनहरू गर्नु अघि अज्ञात इनपुटलाई सुरक्षित रूपमा प्रमाणीकरण गर्न मद्दत गर्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areNumerics(array)`

प्यारामिटरहरू:

- `array`: संख्यात्मक तत्वहरू छन् कि छैनन् भनेर जाँच गर्ने एरे।

### स्थानीय फङ्सन आयात

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // सत्य
console.log(areNumerics(b)); // सत्य
console.log(areNumerics(c)); // असत्य
console.log(areNumerics(d)); // असत्य
console.log(areNumerics(e)); // असत्य

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // ६०
console.log(sumUnknown([10, "20", 30])); // शून्य
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areNumerics(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>यो फाइल 6 February 2026 at 16:06:28 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>