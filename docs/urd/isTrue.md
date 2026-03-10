# isTrue

## تفصیل

`isTrue` یہ طے کرتا ہے کہ آیا دی گئی قدر سختی سے `true` کے برابر ہے.

### استعمال کا معاملہ

`isTrue` کو فلیگز، فیچر ٹوگلز، یا کنفیگریشن قدروں کی توثیق کے لیے استعمال کریں جہاں صرف لِٹرل `true` ہی قبول کیا جانا
چاہیے اور باقی ہر چیز کو `false` سمجھا جائے.

> **TypeScript صارفین کے لیے نوٹ:**
>
> `isTrue` اس وقت استعمال کریں جب آپ کو صرف بولین لِٹرل `true` قبول کرنا ہو، محض truthy قدریں نہیں.

### فوائد

- بولین لِٹرل `true` کے لیے سخت جانچ فراہم کرتا ہے (کوئی کوئرسن نہیں).
- `true` کو `1`, `"true"`, یا `{}` جیسی truthy قدروں سے ممتاز کرنے میں مدد دیتا ہے.
- سادہ، قابلِ پیش گوئی رویہ جو گارڈز اور ویلیڈیشن پائپ لائنز کے لیے موزوں ہے.

## استعمال

### نحو

فنکشن:

- `isTrue(value)`

پیرامیٹرز:

- `value`: چیک کرنے کے لیے قدر.

### لوکل فنکشن امپورٹ

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      //‎ درست
const b = isTrue(1);         //‎ غلط
const c = isTrue("true");   //‎ غلط

if (isTrue(a)) {
  //‎‎ یہاں a درست ہے
}
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isTrue(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isTrue](‎../_analysis/isTrue.md‎)

<br>

---

<small>فائل 30 January 2026 at 13:46:43 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>