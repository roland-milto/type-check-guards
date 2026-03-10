# areTrue

## विवरण

जाँचेला कि खाली ना होखे वाला array में खाली boolean `true` मान ही बा कि ना।

### उपयोग

`areTrue` के इस्तेमाल करीं ताकि आगे बढ़े से पहिले preconditions भा feature flags के सेट में सब enabled बा कि ना (सब मान
`true` बा) validate कइल जा सके, आ खाली भा खराब input के satisfied ना मानल जाव (`false`)।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `areTrue` खाली array खातिर आ ओह array खातिर जेकरा में कवनो मान सख्ती से `true` ना होखे, `false` लौटावेला।

### फायदे

- खाली ना होखे वाला array में हर element सख्ती से `true` होखे तभिए `true` लौटावेला।
- जल्दी फेल हो जाला: जइसे ही कवनो non-`true` मान मिलेला, तुरते `false` लौटावेला।
- गलत input (array ना होखे या खाली array) के `false` लौटा के अस्वीकार करेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areTrue(array)`

पैरामीटर:

- `array`: सब `true` मान खातिर जाँच करे वाला array।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areTrue(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>ई फाइल 30 January 2026 at 13:50:33 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>