# areNumbers

## विवरण

`areNumbers` जाँचेला कि कवनो value एगो गैर-खाली array बा कि ना, जेकर सभे elements number बा।

### उपयोग

user-provided भा API-provided data के validate करीं ताकि compute करे से पहिले ई पक्का हो सके कि ई numbers के एगो
गैर-खाली array बा—फेर totals, averages, भा अउरी numeric aggregations निकाले में काम आवे।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> unknown arrays पर numeric calculations करे से पहिले validate करे खातिर `areNumbers` के इस्तेमाल करीं; ई खाली arrays
> खातिर आ अइसन arrays खातिर जेह में कवनो non-number value होखे, `false` लौटावेला।

### फायदे

- `true` खाली तबहीं लौटावेला जब इनपुट एगो गैर-खाली array होखे आ हर element number होखे।
- खाली arrays आ non-array इनपुट के reject क के false positives से बचावेला।
- numeric operations (जइसे जोड़ल, average निकालल) से पहिले guard के रूप में काम आवेला, ताकि runtime errors से बचल जा
  सके।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areNumbers(array)`

पैरामीटर:

- `array`: number elements खातिर जाँच करे वाला array।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areNumbers(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>ई फाइल 30 January 2026 at 13:03:32 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>