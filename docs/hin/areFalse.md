# areFalse

## विवरण

`areFalse` जांचता है कि दिए गए array के सभी तत्व सख्ती से boolean `false` हैं या नहीं।

### उपयोग का मामला

आगे बढ़ने से पहले यह सत्यापित करें कि feature flags, checks, या guard results की सूची में सभी `false` हैं (उदाहरण के
लिए, यह पुष्टि करना कि कोई blocking conditions मौजूद नहीं हैं)।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> जब आपको सख्त validation चाहिए कि कोई array non-empty हो और उसमें केवल boolean मान `false` ही हों, तब `areFalse` का
> उपयोग करें।

### फायदे

- यह सुनिश्चित करता है कि हर तत्व सख्ती से `false` हो (कोई truthy/falsey coercion नहीं)।
- `isFilledArray` के माध्यम से भरा हुआ array आवश्यक करके non-arrays या खाली arrays के लिए `false` लौटाता है।
- दक्षता के लिए पहले non-`false` तत्व पर ही जल्दी रुक जाता है।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `areFalse(array)`

पैरामीटर:

- `array`: जांचने के लिए array, जिसमें किसी भी प्रकार के तत्व हो सकते हैं।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // सत्य
const b = areFalse([false, true, false]);  // असत्य
const c = areFalse([false, "false", false]); // असत्य
const d = areFalse([]); // असत्य
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.areFalse(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>फ़ाइल 31 जनवरी 2026 को 4:17:11 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>