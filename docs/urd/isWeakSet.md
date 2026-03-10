# isWeakSet

## تفصیل

یہ تعین کرتا ہے کہ دی گئی `value` اشیاء کا `WeakSet` ہے یا نہیں۔

### استعمال کا معاملہ

جب آپ غیر ٹائپ شدہ اِن پٹ (مثلاً بیرونی APIs، ڈائنامک کنفیگریشن، یا `unknown` قدروں سے) قبول کر رہے ہوں اور آپ کو
`WeakSet`-مخصوص آپریشنز استعمال کرنے سے پہلے یہ تصدیق کرنی ہو کہ یہ ایک `WeakSet` ہے، تو `isWeakSet` استعمال کریں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `isWeakSet` کو رن ٹائم پر کسی `unknown` قدر کو `WeakSet<object>` تک محدود (narrow) کرنے کے لیے استعمال کریں؛ نوٹ کریں
> کہ `WeakSet` میں صرف آبجیکٹ ریفرنسز ہی شامل ہو سکتے ہیں۔

### فوائد

- یہ جانچنے کے لیے ایک سادہ رن ٹائم چیک فراہم کرتا ہے کہ آیا کوئی قدر `WeakSet` ہے۔
- یہ یقینی بنا کر ٹائپ کی غلطیوں سے بچنے میں مدد کرتا ہے کہ صرف `WeakSet` کی مثالوں کو ہی اسی طرح سمجھا جائے۔
- کسی بھی `unknown` اِن پٹ کے ساتھ کام کرتا ہے اور ایک واضح بولین نتیجہ (`true`/`false`) واپس کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `isWeakSet(value)`

پیرامیٹرز:

- `value`: وہ قدر جسے چیک کیا جانا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); //‎ درست
console.log(isWeakSet(b)); //‎ غلط

if (isWeakSet(a)) {
  //‎‎ a رن ٹائم پر ایک WeakSet ہے
}
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isWeakSet(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isWeakSet](‎../_analysis/isWeakSet.md‎)

<br>

---

<small>فائل 30 January 2026 at 14:19:46 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>