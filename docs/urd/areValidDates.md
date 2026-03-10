# areValidDates

## تفصیل

یہ طے کرتا ہے کہ آیا ایک ارے غیر خالی ہے اور مکمل طور پر درست `Date` آبجیکٹس پر مشتمل ہے۔

### استعمال کا معاملہ

تاریخ پر مبنی آپریشنز (سورٹنگ، رینج چیکس، فارمیٹنگ) انجام دینے سے پہلے صارف کی فراہم کردہ یا API کی فراہم کردہ ارے کو
ویلیڈیٹ کرنے کے لیے `areValidDates` استعمال کریں، تاکہ یہ یقینی ہو کہ تمام اندراجات حقیقی، درست `Date` آبجیکٹس ہیں اور
فہرست خالی نہیں ہے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `areValidDates` خالی ارے کے لیے `false` واپس کرتا ہے؛ اسے ویلیڈیشن مرحلے کے طور پر استعمال کرنے سے پہلے یقینی بنائیں
> کہ ارے کا غیر خالی ہونا مطلوب ہے۔

### فوائد

- `true` صرف اسی وقت واپس کرتا ہے جب ہر عنصر ایک درست `Date` انسٹینس ہو (کوئی غیر درست تاریخیں جیسے
  `new Date('invalid')` نہیں)۔
- خالی ان پٹ کو `false` واپس کر کے مسترد کرتا ہے، تاکہ آپ صرف بامعنی، غیر خالی تاریخوں کی فہرستیں قبول کریں۔
- ایک سادہ بولین گارڈ طرز کی جانچ فراہم کرتا ہے جسے دوسری ویلیڈیشنز کے ساتھ جوڑنا آسان ہے۔

## استعمال

### نحو

فنکشن:

- `areValidDates(array)`

پیرامیٹرز:

- `array`: چیک کرنے کے لیے ارے، جس میں ممکنہ طور پر `Date` آبجیکٹس شامل ہوں۔

### لوکل فنکشن امپورٹ

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); //‎ درست
console.log(areValidDates(b)); //‎ غلط
console.log(areValidDates(c)); //‎ غلط
console.log(areValidDates(d)); //‎ غلط

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areValidDates(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areValidDates](‎../_analysis/areValidDates.md‎)

<br>

---

<small>فائل 30 January 2026 at 14:34:31 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>