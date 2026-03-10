# isEmpty

## تفصیل

یہ طے کرتا ہے کہ دی گئی قدر خالی ہے یا نہیں، اور `null`، `undefined`، خالی/whitespace strings، خالی arrays، خالی `Map`/
`Set`، یا ایسے objects جن میں اپنی کوئی enumerable properties نہ ہوں کے لیے `true` واپس کرتا ہے۔

### استعمال کا معاملہ

`isEmpty` کو inputs کی توثیق اور متعدد data types میں missing/blank values کی شناخت کے لیے استعمال کریں (مثلاً form
fields، API payloads، configuration objects) جہاں `null`، `undefined`، whitespace strings، خالی collections، اور بغیر
properties والے objects کو خالی سمجھا جانا چاہیے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `isEmpty` ایک boolean واپس کرنے والی utility ہے (TypeScript type predicate نہیں)، اس لیے یہ خود بخود types کو narrow
> نہیں کرتی؛ اسے compile-time narrowing کے بجائے validation/branching کے لیے استعمال کریں۔

### فوائد

- خالی پن کی جانچ کے لیے `null` اور `undefined` کو `true` سمجھتا ہے۔
- لمبائی چیک کرنے سے پہلے trim کر کے صرف whitespace والی strings کو خالی سمجھتا ہے۔
- عام container اقسام (arrays، `Map`، `Set`) اور ایسے plain objects کو سپورٹ کرتا ہے جن میں اپنی کوئی enumerable
  properties نہ ہوں۔
- `hasOwnProperty` چیکس استعمال کر کے inherited properties کو گننے سے بچتا ہے۔
- guards اور validation کے لیے موزوں ایک سادہ boolean نتیجہ (`true`/`false`) واپس کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `isEmpty(value)`

پیرامیٹرز:

- `value`: خالی پن جانچنے کے لیے قدر۔

### لوکل فنکشن امپورٹ

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isEmpty(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isEmpty](‎../_analysis/isEmpty.md‎)

<br>

---

<small>فائل 6 February 2026 at 16:21:25 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>