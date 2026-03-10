# isSet

## تفصیل

یہ تعین کرتا ہے کہ آیا دی گئی قدر `Set` ہے۔

### استعمال کا معاملہ

بیرونی ذرائع (مثلاً JSON parsing، صارف کا ان پٹ، یا تھرڈ پارٹی APIs) سے آنے والے ان پٹس کی توثیق کریں تاکہ `Set` آپریشنز
انجام دینے سے پہلے یہ یقینی بنایا جا سکے کہ قدر `Set` ہے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `unknown` قدروں کو محدود (narrow) کرنے کے لیے `isSet` استعمال کریں، اس سے پہلے کہ آپ `Set`-مخصوص APIs جیسے `.add`،
`.has`، یا `.size` کو کال کریں۔

### فوائد

- یہ تصدیق کرنے کے لیے ایک سادہ رن ٹائم چیک فراہم کرتا ہے کہ آیا کوئی قدر `Set` ہے۔
- جب کوئی قدر `Set` نہ ہو تو ابتدائی برانچنگ کی اجازت دے کر ٹائپ کی غلطیوں سے بچنے میں مدد کرتا ہے۔
- کسی بھی `Set` مواد (خالی یا بھرا ہوا) کے ساتھ کام کرتا ہے اور مستقل طور پر `true`/`false` واپس کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `isSet(value)`

پیرامیٹرز:

- `value`: چیک کرنے کے لیے قدر۔

### لوکل فنکشن امپورٹ

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  //‎‎ a رن ٹائم پر ایک Set ہے
  console.log(a.size);
}

console.log(isSet(b)); //‎ false
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isSet(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isSet](‎../_analysis/isSet.md‎)

<br>

---

<small>فائل 30 January 2026 at 23:11:42 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>