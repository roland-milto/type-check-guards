# areMaps

## تفصیل

`areMaps` یہ طے کرتا ہے کہ آیا دی گئی array خالی نہیں ہے اور اس کے تمام عناصر `Map` انسٹینسز ہیں۔

### استعمال کا معاملہ

نامعلوم ان پٹ (مثلاً JSON parsing، بیرونی APIs، یا dynamic ذرائع سے) کو `Map` آبجیکٹس کی غیر خالی فہرست سمجھنے سے پہلے
ویلیڈیٹ کریں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> خالی array کے لیے `false` واپس کرتا ہے؛ یہ `true` صرف اسی وقت واپس کرتا ہے جب array بھری ہوئی ہو اور ہر عنصر ایک `Map`
> ہو۔

### فوائد

- یقینی بناتا ہے کہ ہر عنصر ایک `Map` انسٹینس ہے، اور `true` صرف اسی وقت واپس کرتا ہے جب پوری array یہ جانچ پاس کر لے۔
- ڈیزائن کے مطابق خالی arrays کو مسترد کرتا ہے، جس سے “کوئی ڈیٹا نہیں” کو غلطی سے درست ان پٹ کے طور پر قبول ہونے سے روکا
  جاتا ہے۔
- `Map`-مخصوص آپریشنز (مثلاً `.get()`, `.set()`, iteration) کو کسی کلیکشن پر انجام دینے سے پہلے بطور گارڈ مفید ہے۔

## استعمال

### نحو

فنکشن:

- `areMaps(array)`

پیرامیٹرز:

- `array`: چیک کرنے کے لیے array۔

### لوکل فنکشن امپورٹ

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  //‎‎ رن ٹائم پر items کے Map انسٹینسز کی غیر خالی اریے ہونے کی ضمانت ہے
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  //‎‎ ان کے لیے false: خالی اریے، یا ایسی اریے جن میں کوئی بھی غیر Map قدر شامل ہو
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areMaps(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areMaps](‎../_analysis/areMaps.md‎)

<br>

---

<small>فائل 31 January 2026 at 16:15:09 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>