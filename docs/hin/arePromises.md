# arePromises

## विवरण

`arePromises` यह निर्धारित करता है कि किसी array के सभी तत्व `Promise` instances हैं या नहीं।

### उपयोग का मामला

यह सत्यापित करें कि dynamically बनाई गई या बाहरी रूप से प्रदान की गई सूची में उन्हें aggregate करने से पहले (उदा.,
`Promise.all` के साथ) केवल promises ही शामिल हैं।

> **TypeScript उपयोगकर्ताओं के लिए संकेत:**
>
> `Promise.all` या अन्य केवल-promise ऑपरेशन्स कॉल करने से पहले `unknown[]` को validate करने के लिए `arePromises` का
> उपयोग करें; यह empty arrays के लिए `false` लौटाता है।

### फायदे

- यह सुनिश्चित करता है कि promise-विशिष्ट लॉजिक के साथ आगे बढ़ने से पहले हर तत्व एक `Promise` हो।
- भरी न हुई (empty) arrays के लिए `false` लौटाता है, जिससे खाली इनपुट के लिए अस्पष्ट परिणामों से बचाव होता है।
- बाहरी स्रोतों से आए `unknown[]` के साथ काम करते समय runtime guard के रूप में उपयोगी।

## उपयोग

### सिंटैक्स

फ़ंक्शन:

- `arePromises(array)`

पैरामीटर:

- `array`: `Promise` instances की जाँच करने के लिए array।

### लोकल फ़ंक्शन इम्पोर्ट

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values रनटाइम पर Promise इंस्टेंसों की एक ऐरे है
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फ़ंक्शन्स को ग्लोबल ऑब्जेक्ट मेथड्स के रूप में इम्पोर्ट करने के लिए उपयोग करें:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबली उपलब्ध होगा:

- `Type.arePromises(array)`

## फ़ंक्शन विश्लेषण

यहाँ एक तालिकाबद्ध विश्लेषण दस्तावेज़ित है कि फ़ंक्शन्स में अलग-अलग पैरामीटर देने पर कौन-सा आउटपुट बनता
है: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>फ़ाइल 30 जनवरी 2026 को 11:48:26 pm बजे (UTC) को *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनाई गई।</small>