# areBooleans

## विवरण

`areBooleans` जाँचेला कि दिहल गइल non-empty array में खाली boolean मान बा कि ना, आ अगर बा त `true` लौटावेला, नाहीं त
`false`।

### उपयोग

यूजर-प्रदान कइल भा बाहरी डेटा (जइसे, JSON payloads, query params, config arrays) के validate करीं ताकि non-empty सूची
में खाली booleans होखे, ओकरा बादे boolean logic लगावल जाव भा ओह API में पास कइल जाव जे `boolean[]` के उम्मीद करेला।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `areBooleans` के इस्तेमाल `unknown[]` के `boolean[]` मान के पहिले validate करे खातिर करीं; ई खाली array खातिर `false`
> लौटावेला, एहसे अगर खाली सूची के अनुमति देवे के बा त ओह केस के साफ-साफ handle करीं।

### फायदे

- `true` खाली तबे लौटावेला जब हर तत्व boolean होखे आ इनपुट non-empty array होखे।
- खाली array के अस्वीकार क के ( `false` लौटाके) गलत positive से बचावेला।
- boolean-only ऑपरेशन (जइसे, `every`, `some`, logical reductions) से पहिले runtime guard के रूप में बढ़िया काम करेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areBooleans(array)`

पैरामीटर:

- `array`: boolean तत्व खातिर जाँचल जाए वाला array।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areBooleans(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>ई फाइल 30 January 2026 at 14:39:17 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>