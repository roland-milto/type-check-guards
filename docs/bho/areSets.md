# areSets

## विवरण

जाँचेला कि दिहल गइल गैर-खाली array में खाली `Set` instances ही बा कि ना, अगर बा त `true` आ ना त `false` लौटावेला।

### उपयोग

ई validate करीं कि कवनो value (जइसे, user input, JSON parsing, भा external APIs से) एगो गैर-खाली array बा जे में `Set`
objects बा, हर set के process करे से पहिले।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `areSets` के इस्तेमाल करीं ताकि unknown input के validate कइल जा सके, iterate करे से पहिले आ हर element पर `Set`
> APIs (जइसे, `.size`, `.has`, `.add`) call करे से पहिले।

### फायदे

- `true` खाली तबे लौटावेला जब इनपुट एगो गैर-खाली array होखे आ हर element एगो `Set` instance होखे।
- खाली array खातिर गलत positive से बचावेला, काहे कि array में कवनो element ना होखे त `false` लौटावेला।
- हर element पर `Set`-specific operations करे से पहिले runtime guard के रूप में उपयोगी बा।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areSets(array)`

पैरामीटर:

- `array`: `Set` instances खातिर जाँचल जाए वाला array।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a रनटाइम पर Set के इंस्टेंस के एगो एरे बा
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // false
console.log(areSets(c)); // false
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areSets(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areSets](../_analysis/areSets.md)

<br>

---

<small>ई फाइल 30 January 2026 at 23:12:32 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>