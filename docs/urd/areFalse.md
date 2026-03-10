# areFalse

## تفصیل

`areFalse` چیک کرتا ہے کہ فراہم کردہ array میں تمام عناصر سختی سے boolean `false` ہیں یا نہیں۔

### استعمال کا معاملہ

آگے بڑھنے سے پہلے یہ تصدیق کریں کہ feature flags، checks، یا guard results کی فہرست میں سب کچھ `false` ہے (مثلاً یہ
یقینی بنانے کے لیے کہ کوئی blocking conditions موجود نہیں ہیں)۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> جب آپ کو سخت validation کی ضرورت ہو کہ array خالی نہ ہو اور اس میں صرف boolean قدر `false` ہی موجود ہو تو `areFalse`
> استعمال کریں۔

### فوائد

- یقینی بناتا ہے کہ ہر عنصر سختی سے `false` ہو (truthy/falsey coercion کے بغیر)۔
- `isFilledArray` کے ذریعے بھرا ہوا array لازمی قرار دے کر non-arrays یا خالی arrays کے لیے `false` واپس کرتا ہے۔
- کارکردگی کے لیے پہلے ہی non-`false` عنصر پر جلدی رک جاتا ہے۔

## استعمال

### نحو

فنکشن:

- `areFalse(array)`

پیرامیٹرز:

- `array`: چیک کرنے کے لیے array، جس میں کسی بھی قسم کے عناصر شامل ہو سکتے ہیں۔

### لوکل فنکشن امپورٹ

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); //‎ درست
const b = areFalse([false, true, false]);  //‎ غلط
const c = areFalse([false, "false", false]); //‎ غلط
const d = areFalse([]); //‎ غلط
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areFalse(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areFalse](‎../_analysis/areFalse.md‎)

<br>

---

<small>فائل 31 January 2026 at 16:18:58 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>