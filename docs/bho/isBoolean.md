# isBoolean

## विवरण

तय करेला कि दिहल मान `boolean` बा कि ना।

### उपयोग

बाहरी भा बिना टाइप वाला डेटा (जइसे, environment variables, JSON payloads, query parameters) के वैधता जाँच करीं, ताकि
conditional logic में इस्तेमाल करे से पहिले मान `boolean` होखे के पक्का हो जाव।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> बूलियन ऑपरेशन लगावे से पहिले `unknown` के `boolean` में संकुचित करे खातिर `isBoolean` के इस्तेमाल करीं।

### फायदे

- `typeof` के इस्तेमाल से सरल आ तेज रनटाइम जाँच।
- बूलियन-विशेष लॉजिक से पहिले अनजान इनपुट के वैधता जाँच में मदद करेला।
- एक ठोस आ अनुमानित `boolean` नतीजा (`true`/`false`) लौटावेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `isBoolean(value)`

पैरामीटर:

- `value`: जवन मान के जाँचल जाई।

### लोकल फंक्शन इम्पोर्ट

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input इहाँ boolean बा
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.isBoolean(value)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>ई फाइल 30 January 2026 at 14:35:41 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>