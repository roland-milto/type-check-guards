# areErrors

## تفصیل

چیک کرتا ہے کہ آیا کوئی array خالی نہیں ہے اور اس میں صرف `Error` آبجیکٹس ہیں، اور `true` یا `false` واپس کرتا ہے۔

### استعمال کا معاملہ

اس بات کی توثیق کریں کہ runtime پر فراہم کردہ `unknown[]` (مثلاً جمع شدہ ناکامیاں، ویلیڈیشن نتائج، یا deserialized ڈیٹا)
پر iterate کرنے، لاگ کرنے، یا دوبارہ throw کرنے سے پہلے `Error` آبجیکٹس کی ایک غیر خالی فہرست ہے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `areErrors` صرف اسی صورت میں `true` واپس کرتا ہے جب array بھری ہوئی ہو اور ہر آئٹم ایک `Error` ہو؛ خالی array کے لیے
> یا اگر کوئی عنصر `Error` نہ ہو تو یہ `false` واپس کرتا ہے۔

### فوائد

- یقینی بناتا ہے کہ ہر عنصر `Error` کی ایک instance ہے، جس سے محفوظ ایرر ہینڈلنگ اور لاگنگ ممکن ہوتی ہے۔
- خالی arrays کو مسترد کرتا ہے، جس سے غلطی سے “کوئی ایرر نہیں” والی حالت کو درست ایرر لسٹ سمجھ لینے سے بچاؤ ہوتا ہے۔
- `unknown[]` ان پٹس (مثلاً APIs یا `catch` بلاکس سے) کے ساتھ کام کرتے وقت runtime guard کے طور پر اچھی طرح کام کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `areErrors(array)`

پیرامیٹرز:

- `array`: `Error` آبجیکٹس کے لیے چیک کرنے والی array۔

### لوکل فنکشن امپورٹ

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  //‎‎ value Error آبجیکٹس کی غیر خالی صف ہے
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areErrors(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areErrors](‎../_analysis/areErrors.md‎)

<br>

---

<small>فائل 6 February 2026 at 12:36:05 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>