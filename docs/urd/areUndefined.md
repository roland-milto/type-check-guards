# areUndefined

## تفصیل

`areUndefined` چیک کرتا ہے کہ فراہم کردہ array میں ہر عنصر `undefined` ہے یا نہیں۔

### استعمال کا معاملہ

یہ توثیق کریں کہ optional نتائج کی فہرست میں کوئی حقیقی قدر موجود نہیں (صرف `undefined`)، مثلاً lookups کو map کرنے کے
بعد جہاں missing entries کو `undefined` کے طور پر ظاہر کیا جاتا ہے، اور آپ یہ تصدیق کرنا چاہتے ہیں کہ تمام lookups ناکام
ہوئے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> جب آپ کو یہ ثابت کرنا ہو کہ ایک `unknown[]` میں صرف `undefined` اقدار موجود ہیں تو `areUndefined` استعمال کریں؛
> اندرونی `isFilledArray` چیک کی وجہ سے یہ خالی arrays اور non-array/غلط inputs کے لیے `false` واپس کرتا ہے۔

### فوائد

- `isFilledArray` کے ذریعے بھری ہوئی array کی شرط لگا کر non-arrays اور خالی arrays کے لیے `false` واپس کرتا ہے۔
- یقینی بناتا ہے کہ ہر عنصر `undefined` ہو، صرف کچھ نہیں، جس سے مقصد واضح ہو جاتا ہے۔
- نامعلوم input collections کی توثیق کرتے وقت guard-style predicate کے طور پر مفید ہے۔

## استعمال

### نحو

فنکشن:

- `areUndefined(array)`

پیرامیٹرز:

- `array`: `undefined` عناصر کے لیے چیک کرنے والی array۔

### لوکل فنکشن امپورٹ

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); //‎ درست
const r2 = areUndefined(b); //‎ غلط
const r3 = areUndefined(c); //‎ غلط

//‎‎ نوٹ: خالی ارے کے لیے false واپس کرتا ہے
const r4 = areUndefined([]); //‎ غلط
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areUndefined(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areUndefined](‎../_analysis/areUndefined.md‎)

<br>

---

<small>فائل 30 January 2026 at 13:58:35 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>