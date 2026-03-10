# isNumeric

## تفصیل

`isNumeric` یہ طے کرتا ہے کہ آیا دی گئی `value` کو `NUMERIC_TYPES` کے مقابلے میں اس کی حل شدہ قسم چیک کر کے عددی سمجھا
جاتا ہے۔

### استعمال کا معاملہ

عددی عملیات انجام دینے سے پہلے ان پٹس (مثلاً API payloads، فارم ویلیوز، کنفیگریشن) کی توثیق کے لیے `isNumeric` استعمال
کریں، اور `NUMERIC_TYPES` کے مطابق عددی جیسے اقسام (مثلاً `BigInt`) کو مستقل طور پر قبول کریں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `isNumeric` ایک boolean واپس کرنے والا predicate ہے؛ اسے رن ٹائم چیک کے طور پر سمجھیں کہ آیا کوئی قدر لائبریری کی جانب
> سے متعین عددی قسموں کے سیٹ میں شامل ہے۔

### فوائد

- عددی شناخت کی منطق کو مرکزی بنانے اور کوڈبیس میں چیکس کو یکساں رکھنے کے لیے `getTypeOf` کے ساتھ `NUMERIC_TYPES`
  استعمال کرتا ہے۔
- آسان برانچنگ اور گارڈ طرز کے استعمال کے لیے ایک سادہ boolean (`true`/`false`) واپس کرتا ہے۔
- `NUMERIC_TYPES` میں متعین کے مطابق متعدد عددی نمائندگیوں (مثلاً `number`, `BigInt`) کی حمایت کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `isNumeric(value)`

پیرامیٹرز:

- `value`: عددی قسم کے لیے چیک کرنے والی قدر۔

### لوکل فنکشن امپورٹ

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    //‎‎ لائبریری کے ٹائپ قواعد کے مطابق v کو عددی سمجھا جاتا ہے
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isNumeric(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isNumeric](‎../_analysis/isNumeric.md‎)

<br>

---

<small>فائل 6 February 2026 at 15:55:13 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>