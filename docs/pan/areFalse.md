# areFalse

## ਵਰਣਨ

`areFalse` چیک کردا اے کہ دِتّی گئی array دے سارے عناصر سختی نال boolean `false` نیں یا نہیں۔

### ਵਰਤੋਂ ਦਾ ਮਾਮਲਾ

اگے ودھن توں پہلاں ایہہ validate کرو کہ feature flags، checks، یا guard results دی لسٹ ساریاں `false` نیں (مثلاً، تصدیق
کرو کہ کوئی blocking conditions موجود نہیں).

> **TypeScript ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਸੰਕੇਤ:**
>
> جدوں تہانوں سخت validation دی لوڑ ہووے کہ array خالی نہ ہووے تے صرف boolean ویلیو `false` ہی رکھدی ہووے، اوہدوں
`areFalse` استعمال کرو۔

### ਫਾਇਦੇ

- یقینی بناؤندا اے کہ ہر عنصر سختی نال `false` اے (کوئی truthy/falsey coercion نہیں).
- `isFilledArray` دے ذریعے بھری ہوئی array دی شرط لا کے non-arrays یا خالی arrays لئی `false` واپس کردا اے۔
- کارکردگی لئی پہلا غیر-`false` عنصر ملن تے فوراً رک جاندا اے۔

## ਵਰਤੋਂ

### ਸਿੰਟੈਕਸ

ਫੰਕਸ਼ਨ:

- `areFalse(array)`

ਪੈਰਾਮੀਟਰ:

- `array`: چیک کرن لئی array، جس وچ کسے وی ٹائپ دے عناصر ہو سکدے نیں۔

### ਲੋਕਲ ਫੰਕਸ਼ਨ ਇੰਪੋਰਟ

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // ਸੱਚ
const b = areFalse([false, true, false]);  // ਝੂਠ
const c = areFalse([false, "false", false]); // ਝੂਠ
const d = areFalse([]); // ਝੂਠ
```

### ਗਲੋਬਲ ਓਬਜੈਕਟ ਇੰਪੋਰਟ

ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਗਲੋਬਲ ਓਬਜੈਕਟ ਮੈਥਡ ਵਜੋਂ ਇੰਪੋਰਟ ਕਰਨ ਲਈ ਵਰਤੋਂ ਕਰੋ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ਫਿਰ ਹੇਠਾਂ ਦਿੱਤਾ ਮੈਥਡ ਗਲੋਬਲੀ ਉਪਲਬਧ ਹੋਵੇਗਾ:

- `Type.areFalse(array)`

## ਫੰਕਸ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ

ਇੱਥੇ ਇੱਕ ਟੇਬਲ ਵਿਸ਼ਲੇਸ਼ਣ ਦਸਤਾਵੇਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ ਫੰਕਸ਼ਨਾਂ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪੈਰਾਮੀਟਰ ਪਾਉਣ ਤੇ ਕਿਹੜਾ ਆਉਟਪੁੱਟ ਬਣਦਾ
ਹੈ: [areFalse](‎../_analysis/areFalse.md‎)

<br>

---

<small>ਇਹ ਫਾਈਲ 31 January 2026 at 16:18:12 (UTC) ਨੂੰ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ਦੀ ਵਰਤੋਂ ਨਾਲ *
*[Roland Milto](https://roland-milto.de/)** ਵੱਲੋਂ ਬਣਾਈ ਗਈ।</small>