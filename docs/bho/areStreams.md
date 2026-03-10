# areStreams

## विवरण

`areStreams` तय करेला कि कवनो वैल्यू एगो भरल ऐरे बा कि ना, जवना में हर तत्व `Stream` बा।

### उपयोग

यूजर देहल भा डायनामिक तरीका से बनावल कलेक्शन (जइसे, कई गो फाइल रीड स्ट्रीम) के वैलिडेट करीं, पाइप करे, रिज्यूम करे, भा
समूह के रूप में उनकरा पर कवनो ऑपरेशन करे से पहिले।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `areStreams` के इस्तेमाल अनजान इनपुट के वैलिडेट करे खातिर करीं, ओकरा के `Stream[]` मान के पहिले; ई `true` खाली तबे
> लौटावेला जब वैल्यू एगो गैर-खाली ऐरे होखे आ हर तत्व `Stream` होखे।

### फायदे

- ई सुनिश्चित करेला कि इनपुट एगो भरल (खाली ना) ऐरे बा जवना में हर तत्व `Stream` बा।
- प्रोसेस करे से पहिले स्ट्रीम कलेक्शन के वैलिडेट करे खातिर सरल `true`/`false` गार्ड देला।
- जल्दी फेल हो जाला: जइसे ही कवनो गैर-`Stream` तत्व मिलेला, तुरते `false` लौटा देला।
- जब कोड मानेला कि सभ आइटम `Stream` इंस्टेंस बा, त रनटाइम एरर से बचे में मदद करेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areStreams(array)`

पैरामीटर:

- `array`: Stream ऑब्जेक्ट खातिर जाँचल जाए वाला ऐरे।

### लोकल फंक्शन इम्पोर्ट

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input Stream objects के भरल array ह
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areStreams(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>ई फाइल 30 January 2026 at 23:32:57 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>