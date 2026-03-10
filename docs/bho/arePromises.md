# arePromises

## विवरण

`arePromises` तय करेला कि array के सभे तत्व `Promise` instance बाड़ें कि ना।

### उपयोग

ई जांचीं कि dynamically बनल भा बाहरी रूप से दिहल सूची में खाली promises ही बाड़ें, ओकरा बादे ओहनी के एक साथ जोड़ीं (
जइसे, `Promise.all` से)।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `Promise.all` भा अउरी promise-खाली ऑपरेशन कॉल करे से पहिले `unknown[]` के वैध ठहरावे खातिर `arePromises` के इस्तेमाल
> करीं; ई खाली array खातिर `false` लौटावेला।

### फायदे

- ई सुनिश्चित करेला कि हर तत्व `Promise` बा, तबे रउआ promise-विशेष लॉजिक के साथ आगे बढ़ीं।
- खाली (non-filled) array खातिर `false` लौटावेला, जे खाली इनपुट पर अस्पष्ट नतीजा से बचावेला।
- बाहरी स्रोत से आइल `unknown[]` के साथ काम करत घरी runtime guard के रूप में उपयोगी बा।

## उपयोग

### सिंटैक्स

फंक्शन:

- `arePromises(array)`

पैरामीटर:

- `array`: `Promise` instance के जांच खातिर array।

### लोकल फंक्शन इम्पोर्ट

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values runtime me Promise instance ke array baa
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.arePromises(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>ई फाइल 30 January 2026 at 23:47:34 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>