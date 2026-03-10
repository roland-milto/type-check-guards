# areBigInts

## تفصیل

`areBigInts` یہ طے کرتا ہے کہ آیا کوئی قدر ایک غیر خالی array ہے جس میں صرف `bigint` قدریں شامل ہیں۔

### استعمال کا معاملہ

نامعلوم input (مثلاً parsed JSON-like ڈیٹا، API payloads، یا `unknown` کے طور پر typed فنکشن parameters) کی توثیق کریں
تاکہ پروسیسنگ سے پہلے یہ یقینی بنایا جا سکے کہ یہ `bigint` قدروں کی ایک غیر خالی array ہے؛ صرف اسی وقت `true` واپس کرتا
ہے جب تمام عناصر `bigint` ہوں، ورنہ `false`۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> نامعلوم input پر `bigint`-صرف آپریشنز (مثلاً حسابی عمل، موازنہ) انجام دینے سے پہلے `areBigInts` کو runtime guard کے
> طور پر استعمال کریں۔

### فوائد

- یقینی بناتا ہے کہ ہر عنصر ایک `bigint` ہے، اور صرف اسی وقت `true` واپس کرتا ہے جب پوری array مطابقت رکھتی ہو۔
- ڈیزائن کے مطابق non-arrays اور خالی arrays کو مسترد کرتا ہے ( `isFilledArray` کے ذریعے)، جس سے غلط inputs کی غیر ارادی
  قبولیت روکی جاتی ہے۔
- فاسٹ فیل: جیسے ہی کوئی non-`bigint` عنصر ملتا ہے فوراً `false` واپس کر دیتا ہے۔

## استعمال

### نحو

فنکشن:

- `areBigInts(array)`

پیرامیٹرز:

- `array`: چیک کرنے کے لیے قدر۔

### لوکل فنکشن امپورٹ

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); //‎ درست
console.log(areBigInts(b)); //‎ غلط
console.log(areBigInts(c)); //‎ غلط
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areBigInts(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areBigInts](‎../_analysis/areBigInts.md‎)

<br>

---

<small>فائل 31 January 2026 at 23:27:48 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>