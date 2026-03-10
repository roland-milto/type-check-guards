# areOfType

## تفصیل

چیک کرتا ہے کہ دی گئی `array` کے تمام عناصر مخصوص `type` کے ہیں یا نہیں۔

### استعمال کا معاملہ

`areOfType` کو نامعلوم ان پٹ (مثلاً parsed JSON، API payloads، user input) کو ویلیڈیٹ کرنے کے لیے استعمال کریں، اس سے
پہلے کہ آپ array کے ہر عنصر پر ٹائپ-مخصوص آپریشنز انجام دیں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> کیونکہ `areOfType` ایک ٹائپ گارڈ ہے، TypeScript `if (areOfType(...)) {}` بلاک کے اندر array کو `Array<DataTypeOf<T>>`
> تک محدود کر دیتا ہے۔

### فوائد

- ایک TypeScript ٹائپ گارڈ فراہم کرتا ہے: جب یہ `true` واپس کرتا ہے تو ان پٹ کو `Array<DataTypeOf<T>>` تک محدود کر دیا
  جاتا ہے۔
- ہر عنصر کو مطلوبہ رن ٹائم ٹائپ کے خلاف ویلیڈیٹ کرتا ہے، جس سے مخلوط-ٹائپ arrays کے پاس ہونے سے بچاؤ ہوتا ہے۔
- فوراً ناکام ہوتا ہے: جیسے ہی کوئی غیر مطابقت رکھنے والا عنصر ملتا ہے `false` واپس کر دیتا ہے۔
- ڈیزائن کے مطابق non-arrays اور خالی arrays کو مسترد کرتا ہے (یہ `isFilledArray` پر منحصر ہے)۔

## استعمال

### نحو

فنکشن:

- `areOfType(array, type)`

پیرامیٹرز:

- `array`: چیک کرنے کے لیے array۔
- `type`: وہ ٹائپ جس کے خلاف array کے ہر عنصر کو چیک کرنا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  //‎‎ values اب number[] ہے
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); //‎ false

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areOfType(array, type)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areOfType](‎../_analysis/areOfType.md‎)

<br>

---

<small>فائل 30 January 2026 at 17:11:58 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>