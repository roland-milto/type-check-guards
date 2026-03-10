# areIntegers

## विवरण

`areIntegers` तय करेला कि दिहल गइल एरे में सभे तत्व पूर्णांक बा कि ना, आ अगर बा त `true` लौटावेला आ ना त `false`।

### उपयोग

जब रउआँ के लॉजिक के IDs, काउंटर, पेजिनेशन ऑफसेट, भा एरे इंडेक्स जइसन पूर्णांक मान के भरल सूची चाहीं, तब यूजर-देहल भा
बाहरी डेटा (जइसे, क्वेरी पैरामीटर, JSON पेलोड, CSV रो) के वैध ठहरावे खातिर `areIntegers` के इस्तेमाल करीं।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> `unknown[]` इनपुट के `number[]` (जेमे खाली पूर्णांक होखे) मान के इस्तेमाल करे से पहिले `areIntegers` के रनटाइम गार्ड
> के रूप में इस्तेमाल करीं। अगर ई `false` लौटावे, त इनपुट या त भरल एरे नइखे भा कम से कम एगो गैर-पूर्णांक मान रखेला।

### फायदे

- `true` खाली तबे लौटावेला जब हर तत्व पूर्णांक होखे; ना त `false` लौटावेला।
- पूर्णांक-खाली ऑपरेशन (जइसे, इंडेक्सिंग, गिनती, IDs) करे से पहिले अनजान इनपुट के वैध ठहरावे में मदद करेला।
- जल्दी फेल हो जाला: जइसे ही कवनो गैर-पूर्णांक तत्व मिलेला, जांच रोक देला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areIntegers(array)`

पैरामीटर:

- `array`: पूर्णांक तत्व खातिर जांचे वाला एरे।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // सही
console.log(areIntegers(b)); // सही
console.log(areIntegers(c)); // गलत

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areIntegers(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>ई फाइल 31 January 2026 at 00:57:28 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>