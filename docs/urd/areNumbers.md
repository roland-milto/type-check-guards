# areNumbers

## تفصیل

`areNumbers` یہ چیک کرتا ہے کہ آیا کوئی قدر ایک غیر خالی array ہے جس کے تمام عناصر numbers ہیں۔

### استعمال کا معاملہ

صارف کی فراہم کردہ یا API کی فراہم کردہ ڈیٹا کی توثیق کریں تاکہ یہ یقینی بنایا جا سکے کہ یہ totals، averages، یا دیگر
عددی aggregations نکالنے سے پہلے numbers کی ایک غیر خالی array ہے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> عددی حسابات کرنے سے پہلے نامعلوم arrays کی توثیق کے لیے `areNumbers` استعمال کریں؛ یہ خالی arrays کے لیے اور ایسے
> arrays کے لیے جن میں کوئی بھی non-number قدر ہو، `false` واپس کرتا ہے۔

### فوائد

- `true` صرف اسی وقت واپس کرتا ہے جب اِن پٹ ایک غیر خالی array ہو اور ہر عنصر ایک number ہو۔
- خالی arrays اور non-array اِن پٹس کو مسترد کر کے غلط مثبت نتائج سے بچاتا ہے۔
- رن ٹائم غلطیوں سے بچنے کے لیے عددی عملیات (مثلاً جمع کرنا، اوسط نکالنا) سے پہلے بطور guard مفید ہے۔

## استعمال

### نحو

فنکشن:

- `areNumbers(array)`

پیرامیٹرز:

- `array`: وہ array جس میں number عناصر کی جانچ کی جائے گی۔

### لوکل فنکشن امپورٹ

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areNumbers(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areNumbers](‎../_analysis/areNumbers.md‎)

<br>

---

<small>فائل 30 January 2026 at 13:06:24 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>