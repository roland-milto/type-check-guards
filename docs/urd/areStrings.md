# areStrings

## تفصیل

`areStrings` چیک کرتا ہے کہ آیا کوئی array غیر خالی ہے اور اس کے تمام عناصر strings ہیں، اور صرف اسی صورت میں `true`
واپس کرتا ہے۔

### استعمال کا معاملہ

بیرونی یا صارف کی فراہم کردہ ڈیٹا (مثلاً query params، JSON payloads، CSV fields) کی توثیق کریں تاکہ پروسیسنگ سے پہلے یہ
یقینی بنایا جا سکے کہ آپ کے پاس strings کی ایک غیر خالی فہرست ہے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> صرف-string منطق لاگو کرنے سے پہلے نامعلوم arrays کی توثیق کے لیے `areStrings` استعمال کریں؛ یہ خالی arrays کے لیے
`false` واپس کرتا ہے۔

### فوائد

- یقینی بناتا ہے کہ ہر عنصر ایک string ہے اور مخلوط-قسم کی arrays کو `false` واپس کر کے مسترد کرتا ہے۔
- خالی arrays کو مسترد کرتا ہے، اس لیے `true` صرف strings کی غیر خالی فہرست کی نشاندہی کرتا ہے۔
- صرف-string آپریشنز (مثلاً `trim`, `toLowerCase`) انجام دینے سے پہلے ایک فوری runtime guard کے طور پر مفید ہے۔

## استعمال

### نحو

فنکشن:

- `areStrings(value)`

پیرامیٹرز:

- `value`: Expected type `string[]`.

### لوکل فنکشن امپورٹ

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  //‎‎ input رن ٹائم پر ایک غیر خالی string[] ہے
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areStrings(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areStrings](‎../_analysis/areStrings.md‎)

<br>

---

<small>فائل 30 January 2026 at 13:20:56 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>