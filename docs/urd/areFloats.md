# areFloats

## تفصیل

`areFloats` چیک کرتا ہے کہ آیا دی گئی array بھری ہوئی ہے اور اس کے تمام عناصر float ہیں۔

### استعمال کا معاملہ

`areFloats` اس وقت استعمال کریں جب آپ کو کوئی `unknown[]` ملے (مثلاً JSON، query parameters، یا external APIs سے) اور آپ
کو یہ یقینی بنانا ہو کہ یہ ایک بھری ہوئی array ہے جس میں ہر آئٹم float ہے، اس سے پہلے کہ آپ عددی منطق جیسے averaging،
interpolation، یا statistical calculations چلائیں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `areFloats` کو `unknown[]` پر guard کے طور پر استعمال کریں قبل اس کے کہ اسے صرف floats پر مشتمل `number[]` سمجھا جائے؛
> یہ خالی arrays کے لیے اور کسی بھی غیر-float عنصر کی صورت میں `false` واپس کرتا ہے۔

### فوائد

- `true` صرف اسی وقت واپس کرتا ہے جب ان پٹ ایک غیر خالی array ہو اور اس کا ہر عنصر float ہو۔
- فوراً ناکام ہوتا ہے: جیسے ہی کوئی غیر-float عنصر ملتا ہے `false` واپس کر دیتا ہے۔
- float سے متعلق مخصوص حسابات کرنے سے پہلے نامعلوم ان پٹ کی توثیق میں مدد کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `areFloats(array)`

پیرامیٹرز:

- `array`: float عناصر کے لیے چیک کرنے والی array۔

### لوکل فنکشن امپورٹ

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); //‎ درست
console.log(areFloats(b)); //‎ غلط
console.log(areFloats(c)); //‎ غلط

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); //‎ 1.75
console.log(sumFloats([1, 2])); //‎ null

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areFloats(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areFloats](‎../_analysis/areFloats.md‎)

<br>

---

<small>فائل 30 January 2026 at 16:00:17 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>