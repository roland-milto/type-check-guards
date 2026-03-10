# isNaN

## تفصیل

فراہم کردہ `value` کے `number` قسم کا `NaN` ہونے کا تعین کرتا ہے، بغیر سٹرنگز کو تبدیل کیے۔

### استعمال کا معاملہ

غیر معتبر یا ڈھیلے ٹائپ والے اِن پٹ (مثلاً API payloads، فارم ویلیوز، parsed JSON) کی توثیق کریں تاکہ خاص `NaN` قدر کا
پتا لگایا جا سکے اور اسے واضح طور پر ہینڈل کیا جا سکے، جبکہ غیر عددی اِن پٹس کو `NaN` نہ سمجھا جائے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `isNaN` اُس وقت استعمال کریں جب آپ کو خاص عددی قدر `NaN` کا پتا لگانا ہو اور ساتھ ہی یہ یقینی بنانا ہو کہ اِن پٹ واقعی
`number` ہے (سٹرنگ سے عدد میں تبدیلی کے بغیر)۔

### فوائد

- یہ جانچتا ہے کہ کوئی قدر `NaN` ہے یا نہیں، بغیر غیر عددی اقدار (مثلاً سٹرنگز) کو عدد میں تبدیل کیے۔
- `true` صرف اُن اقدار کے لیے واپس کرتا ہے جو بیک وقت `number` قسم کی بھی ہوں اور `NaN` بھی۔
- `unknown` اِن پٹس کے لیے محفوظ ہے اور ضمنی تبدیلیوں سے ہونے والے غلط مثبت نتائج سے بچاتا ہے۔

## استعمال

### نحو

فنکشن:

- `isNaN(value)`

پیرامیٹرز:

- `value`: وہ قدر جسے جانچا جانا ہے کہ آیا یہ `number` قسم کا `NaN` ہے۔

### لوکل فنکشن امپورٹ

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); //‎ درست
console.log(isNaN(b)); //‎ غلط
console.log(isNaN(c)); //‎ غلط

if (isNaN(a)) {
  //‎‎ a ایک عدد ہے اور خاص طور پر NaN ہے
}
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isNaN(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isNaN](‎../_analysis/isNaN.md‎)

<br>

---

<small>فائل 30 January 2026 at 15:48:34 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>