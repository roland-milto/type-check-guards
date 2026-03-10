# areBooleans

## تفصیل

`areBooleans` یہ چیک کرتا ہے کہ آیا دی گئی غیر خالی array میں صرف boolean قدریں موجود ہیں؛ اگر ہیں تو `true` واپس کرتا
ہے ورنہ `false`۔

### استعمال کا معاملہ

صارف کی فراہم کردہ یا بیرونی ڈیٹا (مثلاً JSON payloads، query params، config arrays) کی توثیق کریں تاکہ یہ یقینی بنایا
جا سکے کہ ایک غیر خالی فہرست میں صرف booleans ہیں، اس سے پہلے کہ boolean logic لاگو کی جائے یا اسے اُن APIs کو پاس کیا
جائے جو `boolean[]` کی توقع کرتی ہیں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `areBooleans` کو `unknown[]` کی توثیق کے لیے استعمال کریں قبل اس کے کہ اسے `boolean[]` سمجھا جائے؛ یہ خالی arrays کے
> لیے `false` واپس کرتا ہے، اس لیے اگر خالی فہرست کی اجازت ہونی چاہیے تو اس صورت کو واضح طور پر ہینڈل کریں۔

### فوائد

- `true` صرف اسی وقت واپس کرتا ہے جب ہر عنصر ایک boolean ہو اور اِن پٹ ایک غیر خالی array ہو۔
- خالی arrays کو مسترد کر کے ( `false` واپس کر کے) غلط مثبت نتائج سے بچاتا ہے۔
- boolean-only آپریشنز (مثلاً `every`, `some`, منطقی reductions) سے پہلے runtime guard کے طور پر اچھی طرح کام کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `areBooleans(array)`

پیرامیٹرز:

- `array`: وہ array جسے boolean عناصر کے لیے چیک کیا جانا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areBooleans(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areBooleans](‎../_analysis/areBooleans.md‎)

<br>

---

<small>فائل 30 January 2026 at 14:43:00 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>