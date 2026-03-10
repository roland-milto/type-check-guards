# areNaNs

## تفصیل

`areNaNs` چیک کرتا ہے کہ آیا ایک array کے تمام عناصر `NaN` ہیں اور صرف اسی صورت میں `true` واپس کرتا ہے جب ہر عنصر `NaN`
ہو۔

### استعمال کا معاملہ

آنے والے ڈیٹا کی توثیق کریں جہاں `NaN` کو sentinel قدر کے طور پر استعمال کیا جاتا ہے اور آپ کو یقینی بنانا ہو کہ پوری
array صرف `NaN` پر مشتمل ہے (مثلاً، مکمل طور پر غائب عددی سیریز کی شناخت کرنا)۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> جب آپ کو یہ تصدیق کرنی ہو کہ ایک array میں صرف عددی `NaN` قدر ہی موجود ہے (اسٹرنگ سے نمبر میں تبدیلی کے بغیر)، تو
`areNaNs` استعمال کریں۔

### فوائد

- `true` صرف اسی وقت واپس کرتا ہے جب ہر عنصر `NaN` ہو (تمام عناصر کی سخت جانچ).
- اسٹرنگز کو نمبروں میں تبدیل نہیں کرتا؛ "NaN" جیسی قدریں غیر-`NaN` رہتی ہیں اور نتیجہ `false` بنا دیتی ہیں۔
- غیر بھری ہوئی arrays کے لیے `false` واپس کرتا ہے، جس سے خالی input پر غلطی سے `true` آنے سے بچاؤ ہوتا ہے۔

## استعمال

### نحو

فنکشن:

- `areNaNs(array)`

پیرامیٹرز:

- `array`: `NaN` قدروں کے لیے چیک کرنے والی array۔

### لوکل فنکشن امپورٹ

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); //‎ درست
const b = areNaNs([NaN, 1, NaN]); //‎ غلط
const c = areNaNs([NaN, "NaN", NaN]); //‎ غلط
const d = areNaNs([NaN, null, NaN]); //‎ غلط
const e = areNaNs([] as unknown[]); //‎ غلط
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areNaNs(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areNaNs](‎../_analysis/areNaNs.md‎)

<br>

---

<small>فائل 30 January 2026 at 15:54:02 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>