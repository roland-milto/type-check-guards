# isUndefined

## تفصیل

چیک کرتا ہے کہ آیا دی گئی قدر `undefined` ہے۔

### استعمال کا معاملہ

`isUndefined` کو اختیاری اِن پٹس کی حفاظت (guard) کے لیے، غائب پراپرٹیز کا پتا لگانے کے لیے، یا “فراہم نہیں کیا گیا” (
`undefined`) اور “واضح طور پر خالی” (`null`) کے درمیان فرق کرنے کے لیے استعمال کریں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `isUndefined` اس وقت استعمال کریں جب آپ کو خاص طور پر `undefined` (نہ کہ `null`) کا پتا لگانا ہو۔ یہ محفوظ ہے کیونکہ
> یہ `typeof value === "undefined"` پر انحصار کرتا ہے۔

### فوائد

- `typeof` استعمال کرتے ہوئے `undefined` کے لیے ایک واضح اور صریح چیک فراہم کرتا ہے، اور غیر اعلان شدہ متغیرات کے ساتھ
  آنے والے کنارے کے معاملات سے بچاتا ہے۔
- ایک سادہ بولین نتیجہ (`true`/`false`) واپس کرتا ہے جو گارڈز، برانچنگ، اور ویلیڈیشن لاجک کے لیے موزوں ہے۔
- `undefined` کو دیگر “خالی” قدروں جیسے `null`, `0`, `""`, یا `NaN` سے ممتاز کرنے میں مدد دیتا ہے۔

## استعمال

### نحو

فنکشن:

- `isUndefined(value)`

پیرامیٹرز:

- `value`: چیک کی جانے والی قدر۔

### لوکل فنکشن امپورٹ

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  //‎‎ x یہاں undefined ہے
} else {
  //‎‎ x یہاں undefined نہیں ہے
}

const a = isUndefined(undefined); //‎ true
const b = isUndefined(null);      //‎ false

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isUndefined(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isUndefined](‎../_analysis/isUndefined.md‎)

<br>

---

<small>فائل 30 January 2026 at 14:04:53 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>