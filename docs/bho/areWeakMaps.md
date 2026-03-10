# areWeakMaps

## विवरण

`areWeakMaps` जाँचेला कि कवनो value non-empty array बा कि ना, आ ओहमें हर element `WeakMap` बा कि ना; खाली ओही हालत में
`true` लौटावेला, नाहीं त `false`।

### उपयोग

Runtime data (जइसे parsed JSON, plugin inputs, भा loosely typed configuration) के validate करीं ताकि iterate करे आ
`WeakMap` methods call करे से पहिले ई पक्का हो जाव कि ई `WeakMap` instances के non-empty array बा; अगर कवनो element
`WeakMap` ना होखे भा array खाली होखे त `false` लौटावेला।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> Unknown input के non-empty `WeakMap[]` मान के इस्तेमाल करे से पहिले validate करे खातिर `areWeakMaps` के उपयोग करीं; ई
> खाली arrays खातिर `false` लौटावेला।

### फायदे

- दिहल गइल array में हर element के `WeakMap` instance होखे के पक्का करेला।
- खाली array खातिर `false` लौटावेला, जेकरा से “no data” के गलती से valid input मान लिहल ना जाला।
- `WeakMap`-specific operations करे से पहिले सभ items पर guard के रूप में उपयोगी बा।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areWeakMaps(array)`

पैरामीटर:

- `array`: `WeakMap` instances खातिर जाँच करे वाला array।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list WeakMap के instance सभ के non-empty array बा
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // non-empty WeakMap[] नइखे
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areWeakMaps(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>ई फाइल 30 January 2026 at 13:36:13 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>