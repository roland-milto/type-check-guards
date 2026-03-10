# isDate

## تفصیل

`isDate` یہ طے کرتا ہے کہ فراہم کردہ قدر `Date` ہے یا نہیں؛ `Date` انسٹینسز کے لیے `true` اور بصورتِ دیگر `false` واپس
کرتا ہے۔

### استعمال کا معاملہ

نامعلوم قدروں (مثلاً ریکوئسٹ ڈیٹا، کنفیگ ویلیوز، یا پارس کیا گیا JSON) کی توثیق کریں اور انہیں محدود (narrow) کریں، اس
سے پہلے کہ `Date` آپریشنز جیسے فارمیٹنگ، موازنہ، یا `toISOString()` کال کرنا انجام دیے جائیں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `isDate` کو رن ٹائم پر `unknown` کو `Date` تک محدود (narrow) کرنے کے لیے استعمال کریں؛ یہ صرف حقیقی `Date` انسٹینسز کے
> لیے `true` واپس کرتا ہے (ڈیٹ اسٹرنگز کے لیے نہیں)۔

### فوائد

- یہ ایک سادہ رن ٹائم گارڈ فراہم کرتا ہے تاکہ یہ تصدیق کی جا سکے کہ آیا کوئی قدر `Date` ہے۔
- یہ اس بات کو یقینی بنا کر ٹائپ ایررز سے بچانے میں مدد کرتا ہے کہ صرف `Date` کی انسٹینسز ہی ویلیڈیشن پاس کریں۔
- یہ نامعلوم اِن پٹس (مثلاً API پے لوڈز) کی توثیق کے لیے مفید ہے، اس سے پہلے کہ تاریخ سے متعلق مخصوص میتھڈز استعمال کیے
  جائیں۔

## استعمال

### نحو

فنکشن:

- `isDate(value)`

پیرامیٹرز:

- `value`: `Date` ٹائپ کے لیے چیک کی جانے والی قدر۔

### لوکل فنکشن امپورٹ

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  //‎‎ یہاں input ایک Date ہے
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isDate(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isDate](‎../_analysis/isDate.md‎)

<br>

---

<small>فائل 31 January 2026 at 15:48:17 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>