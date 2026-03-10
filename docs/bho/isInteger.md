# isInteger

## विवरण

निर्धारित करेला कि दिहल गइल `value` एगो सुरक्षित पूर्णांक नंबर बा कि ना।

### उपयोग

अविश्वसनीय इनपुट (जइसे, query params, JSON payloads, environment variables) के वैलिडेट करीं, ओकरा बादे ओकरा के एरे
इंडेक्स, pagination, काउंटर, भा डेटाबेस IDs खातिर पूर्णांक के रूप में इस्तेमाल करीं।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> अनजान इनपुट के न्यूमेरिक पूर्णांक मान के रूप में इस्तेमाल करे से पहिले वैलिडेट करे खातिर `isInteger` के इस्तेमाल करीं;
> ई `true` खाली ओही मान खातिर लौटावेला जहाँ `typeof value === "number"` आ `Number.isSafeInteger(value)` होखे।

### फायदे

- टाइप आ संख्यात्मक सुरक्षा दुनो के जांचेला: `true` खाली तबे लौटावेला जब इनपुट एगो नंबर होखे आ सुरक्षित पूर्णांक होखे।
- न्यूमेरिक कोएर्शन के आम फंदा से बचावेला: "5" जइसन स्ट्रिंग सही तरीका से `false` लौटावेली।
- गैर-पूर्णांक आ असुरक्षित पूर्णांक के ठुकरावेला, एहसे ई IDs, काउंटर, आ एरे इंडेक्सिंग खातिर उपयुक्त बा।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isInteger(value)`

पैरामीटर:

- `value`: पूर्णांक स्थिति खातिर जांचे वाला मान।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // सही
const b = isInteger(-100);   // सही
const c = isInteger("5");    // गलत
const d = isInteger(5.5);    // गलत
const e = isInteger(null);   // गलत

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isInteger(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>ई फाइल 31 January 2026 at 00:49:12 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>