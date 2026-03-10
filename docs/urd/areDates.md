# areDates

## تفصیل

`areDates` یہ طے کرتا ہے کہ آیا دی گئی array بھری ہوئی ہے اور اس میں صرف `Date` objects موجود ہیں، اور `true` صرف اسی
وقت واپس کرتا ہے جب تمام عناصر درست تاریخیں ہوں۔

### استعمال کا معاملہ

نامعلوم ان پٹ (مثلاً parsed JSON، فارم ڈیٹا، API payloads) کی توثیق کے لیے `areDates` استعمال کریں، اس سے پہلے کہ تاریخ
سے متعلق منطق چلائیں جیسے وقت کے لحاظ سے sort کرنا، formatting کرنا، یا ranges کا حساب لگانا۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `true` صرف غیر خالی arrays کے لیے واپس کرتا ہے جن میں ہر عنصر `Date` ہو؛ خالی arrays کے لیے `false` آتا ہے۔

### فوائد

- مواد کی توثیق سے پہلے یہ یقینی بناتا ہے کہ array خالی نہیں ہے، جس سے خالی ان پٹس کے لیے `true` آنے سے بچاؤ ہوتا ہے۔
- ہر عنصر کے `Date` instance ہونے کی تصدیق کرتا ہے، اور پہلی عدم مطابقت پر فوراً `false` واپس کرتا ہے۔
- array کے آئٹمز پر تاریخ سے متعلق مخصوص آپریشنز کرنے سے پہلے guard-اسٹائل چیک کے طور پر مفید ہے۔

## استعمال

### نحو

فنکشن:

- `areDates(array)`

پیرامیٹرز:

- `array`: `Date` objects کے لیے چیک کی جانے والی array۔

### لوکل فنکشن امپورٹ

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); //‎ درست
console.log(areDates(b)); //‎ غلط
console.log(areDates(c)); //‎ غلط

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areDates(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areDates](‎../_analysis/areDates.md‎)

<br>

---

<small>فائل 31 January 2026 at 15:32:51 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>