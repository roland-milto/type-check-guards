# areBuffers

## تفصیل

`areBuffers` چیک کرتا ہے کہ آیا فراہم کردہ value ایک غیر خالی، بھری ہوئی array ہے جس میں ہر عنصر ایک `Buffer` ہے؛ اگر
ایسا ہو تو `true` اور بصورتِ دیگر `false` واپس کرتا ہے۔

### استعمال کا معاملہ

آنے والی chunk arrays (مثلاً streams، file uploads، یا network packets سے) کی توثیق کریں تاکہ concatenating، decoding،
یا انہیں cryptographic یا binary-processing فنکشنز کو پاس کرنے سے پہلے یہ یقینی ہو جائے کہ تمام حصے `Buffer` instances
ہیں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `areBuffers` کو `unknown[]` کی توثیق کے لیے استعمال کریں اس سے پہلے کہ آپ Buffer-specific APIs جیسے `Buffer.concat` کو
> کال کریں، تاکہ فنکشن صرف اسی وقت `true` واپس کرے جب ہر عنصر ایک `Buffer` ہو۔

### فوائد

- یقینی بناتا ہے کہ اِن پٹ میں موجود ہر عنصر Node.js `Buffer` کی ایک instance ہے، اور صرف اسی صورت میں `true` واپس کرتا
  ہے جب پوری array میچ کرے۔
- غیر معتبر اِن پٹس کو ابتدا ہی میں مسترد کرتا ہے کیونکہ یہ ایک غیر خالی، بھری ہوئی array کا تقاضا کرتا ہے؛ خالی arrays
  یا non-arrays کے لیے `false` واپس کرتا ہے۔
- Buffer-only آپریشنز (مثلاً concatenation، hashing، binary protocols) انجام دینے سے پہلے بطور guard مفید ہے۔

## استعمال

### نحو

فنکشن:

- `areBuffers(array)`

پیرامیٹرز:

- `array`: وہ array جسے buffer instances کے لیے چیک کیا جانا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areBuffers(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areBuffers](‎../_analysis/areBuffers.md‎)

<br>

---

<small>فائل 31 January 2026 at 16:27:51 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>