# isPrimitive

## تفصیل

`isPrimitive` یہ طے کرتا ہے کہ دی گئی قدر primitive ہے یا نہیں (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`)۔

### استعمال کا معاملہ

رن ٹائم پر اِن پٹس کی توثیق کریں (مثلاً API payload فیلڈز، کنفیگریشن ویلیوز، یا صارف کی فراہم کردہ ڈیٹا) تاکہ سیریلائز
کرنے، لاگ کرنے، یا صرف primitive والی کارروائیاں لاگو کرنے سے پہلے یہ یقینی بنایا جا سکے کہ قدر primitive ہے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `unknown` اِن پٹس کو آبجیکٹس یا فنکشنز سمجھنے سے پہلے گارڈ کرنے کے لیے `isPrimitive` استعمال کریں؛ یہ primitives کے
> لیے `true` اور آبجیکٹس اور فنکشنز کے لیے `false` واپس کرتا ہے۔

### فوائد

- یہ جانچنے کے لیے تیز، الاٹمنٹ سے پاک چیک کہ آیا کوئی قدر JavaScript primitive ہے۔
- `null` کو درست طور پر primitive سمجھتا ہے (حالانکہ `typeof null` `"object"` ہوتا ہے)۔
- صرف آبجیکٹ والی کارروائیاں کرنے سے پہلے `unknown` قدروں کو محدود (narrow) کرنے میں مدد دیتا ہے۔

## استعمال

### نحو

فنکشن:

- `isPrimitive(value)`

پیرامیٹرز:

- `value`: primitive قسم کے لیے چیک کرنے والی قدر۔

### لوکل فنکشن امپورٹ

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isPrimitive(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isPrimitive](‎../_analysis/isPrimitive.md‎)

<br>

---

<small>فائل 30 January 2026 at 23:58:19 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>