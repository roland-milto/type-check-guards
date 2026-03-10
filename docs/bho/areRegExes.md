# areRegExes

## विवरण

`areRegExes` जांचेला कि कवनो मान एगो भरल array ह कि ना, जवना में खाली `RegExp` ऑब्जेक्ट होखें।

### उपयोग

कवनो कॉन्फिगरेशन विकल्प (जइसे, allow/deny patterns के सूची) के matching खातिर इस्तेमाल करे से पहिले ई validate करीं कि ऊ
regular expressions के एगो गैर-खाली array ह।

> **TypeScript उपयोगकर्ता खातिर संकेत:**
>
> Iterate करे भा patterns compose करे से पहिले `unknown` के `RegExp[]` में narrow करे खातिर `areRegExes` के इस्तेमाल
> करीं।

### फायदे

- ई सुनिश्चित करेला कि कवनो मान एगो गैर-खाली array होखे जवना में हर तत्व एगो `RegExp` instance होखे।
- यूजर इनपुट भा कॉन्फिगरेशन के वैध ठहरावे खातिर एगो सरल boolean guard (`true`/`false`) देला।
- बाद के कोड जब मानेला कि सभे आइटम regular-expression ऑपरेशन सपोर्ट करेला, तब runtime error से बचावे में मदद करेला।

## उपयोग

### सिंटैक्स

फंक्शन:

- `areRegExes(array)`

पैरामीटर:

- `array`: जवन मान के जांचल जाई।

### लोकल फंक्शन इम्पोर्ट

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // इहाँ patterns RegExp के array बा
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन सभ के ग्लोबल ऑब्जेक्ट मेथड के रूप में इम्पोर्ट करे खातिर उपयोग करीं:

```ts
import "@type-check/guards/register-global-object.mjs";
```

तब निम्नलिखित मेथड ग्लोबल रूप से उपलब्ध होई:

- `Type.areRegExes(array)`

## फंक्शन विश्लेषण

फंक्शन सभ में अलग-अलग पैरामीटर देला पर कइसन आउटपुट आवेला, एकरा के तालिका के रूप में इहाँ दस्तावेज कइल गइल
बा: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>ई फाइल 30 January 2026 at 23:16:54 (UTC) के *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** के उपयोग से *
*[Roland Milto](https://roland-milto.de/)** द्वारा बनावल गइल।</small>