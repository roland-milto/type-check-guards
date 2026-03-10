# arePlainObjects

## تفصیل

چیک کرتا ہے کہ آیا ارے کے تمام عناصر سادہ آبجیکٹس ہیں، اور صرف اسی صورت میں `true` واپس کرتا ہے جب ہر عنصر اہل ہو۔

### استعمال کا معاملہ

بیرونی یا غیر ٹائپ شدہ ڈیٹا (مثلاً پارس کیا گیا JSON، API پے لوڈز، فارم سبمشنز) کو ویلیڈیٹ کریں تاکہ یہ یقینی بنایا جا
سکے کہ آپ کو ایک نان-ایمپٹی ارے موصول ہوئی ہے جس میں ہر اندراج ایک سادہ آبجیکٹ ہے، اس سے پہلے کہ آپ اس پر اٹریٹ کریں اور
پراپرٹیز پڑھیں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> TypeScript میں `arePlainObjects` استعمال کریں تاکہ نامعلوم ان پٹ کو `Record<string, unknown>[]` (یا زیادہ سخت آبجیکٹ
> شکل) کے طور پر برتنے سے پہلے ویلیڈیٹ کیا جا سکے۔

### فوائد

- یقینی بناتا ہے کہ ان پٹ ارے کا ہر عنصر ایک سادہ آبجیکٹ ہے، اور صرف اسی صورت میں `true` واپس کرتا ہے جب تمام آئٹمز
  مطابقت رکھیں۔
- غلط ان پٹس (نان-ارے یا خالی ارے) کو جلدی مسترد کرتا ہے اور `false` واپس کرتا ہے۔
- آبجیکٹ-لِٹرل آبجیکٹس اور `Object.create(null)` آبجیکٹس دونوں کو درست سادہ آبجیکٹس کے طور پر سمجھتا ہے۔

## استعمال

### نحو

فنکشن:

- `arePlainObjects(array)`

پیرامیٹرز:

- `array`: وہ ارے جسے سادہ آبجیکٹ عناصر کے لیے چیک کیا جانا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); //‎ درست
const b = arePlainObjects([{}, Object.create(null)]); //‎ درست
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); //‎ غلط
const d = arePlainObjects([] as unknown[]); //‎ غلط
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.arePlainObjects(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [arePlainObjects](‎../_analysis/arePlainObjects.md‎)

<br>

---

<small>فائل 30 January 2026 at 16:56:26 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>