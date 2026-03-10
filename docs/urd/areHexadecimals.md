# areHexadecimals

## تفصیل

یہ چیک کرتا ہے کہ آیا array کے تمام عناصر ہیکساڈیسیمل سٹرنگز ہیں، اور `true` صرف غیر خالی arrays کے لیے واپس کرتا ہے
جہاں ہر آئٹم درست ہو۔

### استعمال کا معاملہ

`areHexadecimals` کو استعمال کریں تاکہ صارف کے ان پٹ یا بیرونی ڈیٹا (مثلاً IDs، checksums، یا بغیر ابتدائی '#' کے color
codes) کی توثیق کی جا سکے، اس سے پہلے کہ ہیکساڈیسیمل parsing یا مزید processing کی جائے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `areHexadecimals` کو استعمال کریں تاکہ parsing یا values کو convert کرنے سے پہلے نامعلوم ان پٹ کی توثیق کی جا سکے (
> مثال کے طور پر، `parseInt(value, 16)` یا BigInt conversions سے پہلے)۔

### فوائد

- یہ تصدیق کرتا ہے کہ ہر عنصر ایک ہیکساڈیسیمل سٹرنگ ہے اور `true` صرف اسی وقت واپس کرتا ہے جب تمام آئٹمز مطابقت رکھتے
  ہوں۔
- ڈیزائن کے مطابق خالی arrays کو مسترد کرتا ہے، اور ان پٹ ڈیٹا موجود نہ ہونے کی صورت میں `false` واپس کرتا ہے۔
- ایک سادہ boolean نتیجہ (`true`/`false`) فراہم کرتا ہے جو guards اور early-return validation کے لیے موزوں ہے۔

## استعمال

### نحو

فنکشن:

- `areHexadecimals(array)`

پیرامیٹرز:

- `array`: وہ array جسے ہیکساڈیسیمل سٹرنگ عناصر کے لیے چیک کیا جانا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areHexadecimals(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areHexadecimals](‎../_analysis/areHexadecimals.md‎)

<br>

---

<small>فائل 31 January 2026 at 23:08:24 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>