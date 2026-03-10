# arePromises

## विवरण

`arePromises` ले array भित्रका सबै तत्वहरू `Promise` instance हुन् कि होइनन् भनेर निर्धारण गर्छ।

### प्रयोगको केस

गतिशील रूपमा बनाइएको वा बाह्य रूपमा उपलब्ध गराइएको सूचीमा समेकन (जस्तै `Promise.all` सँग) गर्नु अघि त्यसमा केवल promises
मात्र छन् भन्ने मान्यकरण गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> `Promise.all` वा अन्य promise-मात्र अपरेसनहरू कल गर्नु अघि `unknown[]` लाई मान्यकरण गर्न `arePromises` प्रयोग
> गर्नुहोस्; यसले खाली array हरूका लागि `false` फर्काउँछ।

### फाइदाहरू

- Promise-विशिष्ट तर्क लागू गर्नु अघि प्रत्येक तत्व `Promise` हो भन्ने सुनिश्चित गर्छ।
- भरिएका नभएका (खाली) array हरूका लागि `false` फर्काउँछ, जसले खाली इनपुटका लागि अस्पष्ट नतिजा हुनबाट रोक्छ।
- बाह्य स्रोतबाट आएको `unknown[]` सँग काम गर्दा runtime guard का रूपमा उपयोगी हुन्छ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `arePromises(array)`

प्यारामिटरहरू:

- `array`: Promise instance हरू छन् कि छैनन् भनेर जाँच गर्नुपर्ने array।

### स्थानीय फङ्सन आयात

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values रनटाइममा Promise इन्स्टेन्सहरूको एरे हो
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.arePromises(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>यो फाइल 30 January 2026 at 23:49:13 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>