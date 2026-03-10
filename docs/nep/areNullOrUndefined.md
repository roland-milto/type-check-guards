# areNullOrUndefined

## विवरण

दिइएको एरेका सबै तत्वहरू `null` वा `undefined` छन् कि छैनन् भनेर जाँच गर्छ।

### प्रयोगको केस

प्रक्रिया नगर्ने निर्णय गर्न वा “कुनै मान प्रदान गरिएको छैन” भन्ने अवस्था देखाउनुअघि, वैकल्पिक फिल्डहरूको सूचीमा कुनै
वास्तविक मान छैन (केवल `null`/`undefined` मात्र) भनेर प्रमाणीकरण गर्नुहोस्।

> **TypeScript प्रयोगकर्ताहरूका लागि संकेत:**
>
> एरेमा केवल हराइरहेका मानहरू (`null`/`undefined`) मात्र छन् भनेर पुष्टि गर्नुपर्ने बेला `areNullOrUndefined` प्रयोग
> गर्नुहोस्। ध्यान दिनुहोस्, खाली एरेका लागि यसले `false` फर्काउँछ।

### फाइदाहरू

- हरेक तत्व `null` वा `undefined` हुँदा मात्र `true` फर्काउँछ।
- खाली एरेका लागि `false` फर्काउँछ, जसले “डाटा छैन” र “सबै मानहरू हराइरहेका छन्” बीच फरक छुट्याउन मद्दत गर्छ।
- `unknown[]` सँग काम गर्छ, जसले प्रकारहरू संकुचित (narrow) गर्नु अघि प्रयोग गर्न सुरक्षित बनाउँछ।

## प्रयोग

### सिन्ट्याक्स

फङ्सन:

- `areNullOrUndefined(array)`

प्यारामिटरहरू:

- `array`: जाँच गर्नुपर्ने एरे।

### स्थानीय फङ्सन आयात

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### ग्लोबल अब्जेक्ट आयात

फङ्सनहरूलाई ग्लोबल अब्जेक्ट मेथडका रूपमा आयात गर्न प्रयोग गर्नुहोस्:

```ts
import "@type-check/guards/register-global-object.mjs";
```

त्यसपछि निम्न मेथड ग्लोबली उपलब्ध हुनेछ:

- `Type.areNullOrUndefined(array)`

## फङ्सन विश्लेषण

फङ्सनहरूमा फरक-फरक प्यारामिटरहरू राख्दा कस्तो आउटपुट निस्कन्छ भन्ने तालिकाबद्ध विश्लेषण यहाँ दस्तावेज गरिएको
छ: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>यो फाइल 31 January 2026 at 00:30:35 (UTC) मा *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** को प्रयोग गरेर *
*[Roland Milto](https://roland-milto.de/)** द्वारा सिर्जना गरिएको हो।</small>