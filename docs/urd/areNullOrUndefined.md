# areNullOrUndefined

## تفصیل

چیک کرتا ہے کہ دی گئی array کے تمام عناصر `null` یا `undefined` ہیں یا نہیں۔

### استعمال کا معاملہ

یہ جانچیں کہ اختیاری فیلڈز کی فہرست میں کوئی حقیقی قدر موجود نہیں (صرف `null`/`undefined`) ہے، اس سے پہلے کہ آپ پروسیسنگ
چھوڑنے یا “کوئی اقدار فراہم نہیں کی گئیں” والی حالت دکھانے کا فیصلہ کریں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `areNullOrUndefined` اس وقت استعمال کریں جب آپ کو یہ تصدیق کرنی ہو کہ ایک array میں صرف غائب اقدار (`null`/
`undefined`) موجود ہیں۔ نوٹ کریں کہ یہ خالی array کے لیے `false` واپس کرتا ہے۔

### فوائد

- `true` صرف اسی وقت واپس کرتا ہے جب ہر عنصر `null` یا `undefined` ہو۔
- خالی arrays کے لیے `false` واپس کرتا ہے، جس سے “کوئی ڈیٹا نہیں” اور “تمام اقدار غائب ہیں” میں فرق کرنا آسان ہوتا ہے۔
- `unknown[]` کے ساتھ کام کرتا ہے، اس لیے types کو narrow کرنے سے پہلے استعمال کرنا محفوظ ہے۔

## استعمال

### نحو

فنکشن:

- `areNullOrUndefined(array)`

پیرامیٹرز:

- `array`: چیک کرنے کے لیے array۔

### لوکل فنکشن امپورٹ

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
//‎‎ allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
//‎‎ containsValue === false

const empty = areNullOrUndefined([]);
//‎‎ empty === false

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areNullOrUndefined(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areNullOrUndefined](‎../_analysis/areNullOrUndefined.md‎)

<br>

---

<small>فائل 31 January 2026 at 00:31:49 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>