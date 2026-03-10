# areWeakSets

## विवरण

जाँचेला कि इनपुट एगो गैर-खाली ऐरे बा कि ना जहाँ हर तत्व `WeakSet` बा, आ खाली ओही हालत में `true` लौटावेला।

### उपयोग

रनटाइम इनपुट (जइसे API, कॉन्फिगरेशन, भा यूजर-देहल डेटा) के वैलिडेट करीं ताकि आगे बढ़े से पहिले आपके लगे `WeakSet`
इंस्टेंस के एगो गैर-खाली सूची होखे, खासकर जब लॉजिक `WeakSet` के बिहेवियर पर निर्भर होखे।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `areWeakSets` के इस्तेमाल करीं ताकि अनजान इनपुट के `WeakSet[]` मान के पहिले वैलिडेट कइल जा सके। ई खाली ऐरे आ गैर-ऐरे
> खातिर `false` लौटावेला।

### फायदे

- इनपुट ऐरे के हर तत्व के `WeakSet` होखे के सुनिश्चित करेला।
- खाली ऐरे खातिर `false` लौटावेला, जेकरा से डेटा ना होखे पर गलती से “सब वैध” नतीजा ना आवे।
- इनपुट भरल ऐरे ना होखे (जइसे `null` समेत) त सुरक्षित तरीका से `false` लौटाके फेल हो जाला।
- `WeakSet` इंस्टेंस के जरूरत वाला ऑपरेशन करे से पहिले गार्ड के रूप में उपयोगी बा।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areWeakSets(array)`

पैरामीटर:

- `array`: `WeakSet` ऑब्जेक्ट खातिर जाँचल जाए वाला ऐरे।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a WeakSet के instance सभ के गैर-खाली array ह
}

console.log(areWeakSets(a)); // सही
console.log(areWeakSets(b)); // गलत
console.log(areWeakSets(c)); // गलत
console.log(areWeakSets(null as unknown)); // गलत

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areWeakSets(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>ई फाइल 30 January 2026 at 14:07:42 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>