# isArray

## تفصیل

`isArray` چیک کرتا ہے کہ آیا دی گئی ویلیو ایک اَرے ہے اور اگر ہے تو `true` واپس کرتا ہے، ورنہ `false`۔

### استعمال کا معاملہ

نامعلوم ڈیٹا (مثلاً parsed JSON یا API responses) کی توثیق کریں تاکہ کسی ویلیو کے اَرے ہونے کو یقینی بنایا جا سکے، اس سے
پہلے کہ آپ اس پر iterate کریں، indexing کریں، یا `.length` تک رسائی کریں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> جب آپ کو اَریز کے لیے رن ٹائم چیک کی ضرورت ہو تو `isArray` استعمال کریں؛ یہ ایک بولین واپس کرتا ہے اور `unknown`
> ویلیوز کے ساتھ کال کرنا محفوظ ہے۔

### فوائد

- مختلف ریلمز (مثلاً iframes) میں قابلِ اعتماد طور پر اَرے کی شناخت کے لیے بلٹ اِن `Array.isArray` استعمال کرتا ہے۔
- گارڈز اور برانچنگ لاجک کے لیے موزوں ایک سادہ بولین نتیجہ (`true`/`false`) واپس کرتا ہے۔
- کسی بھی اِن پٹ ٹائپ کے ساتھ کام کرتا ہے کیونکہ پیرامیٹر `unknown` ہے۔

## استعمال

### نحو

فنکشن:

- `isArray(value)`

پیرامیٹرز:

- `value`: چیک کی جانے والی ویلیو۔

### لوکل فنکشن امپورٹ

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  //‎‎ input رن ٹائم پر ایک ارے ہے
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isArray(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isArray](‎../_analysis/isArray.md‎)

<br>

---

<small>فائل 6 February 2026 at 11:32:32 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>