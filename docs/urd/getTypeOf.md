# getTypeOf

## تفصیل

`getTypeOf` دی گئی قدر کے لیے ایک تفصیلی، انسان کے لیے قابلِ فہم ٹائپ لیبل واپس کرتا ہے، جس میں بہتر عددی اقسام اور
مخصوص آبجیکٹ کی اقسام شامل ہیں۔

### استعمال کا معاملہ

ان پٹ validation اور diagnostics میں ٹائپ کی شناخت کو یکساں بنانے کے لیے `getTypeOf` استعمال کریں—مثلاً `nan` کو مسترد
کرنے کے لیے، صرف `integer` IDs قبول کرنے کے لیے، عددی اسٹرنگز جیسے `decimal` کو سادہ `string` سے مختلف طور پر ہینڈل کرنے
کے لیے، یا `date` اور `regexp` جیسی درست آبجیکٹ اقسام کو لاگ کرنے کے لیے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> واپسی کی ٹائپ `DataTypeAsString | string` ہے۔ اسے ایک وضاحتی لیبل سمجھیں؛ branching کرتے وقت `integer`, `float`,
`nan`, `array`, `null`, اور `undefined` جیسے معلوم literals کے ساتھ compare کریں۔

### فوائد

- JavaScript کے `typeof` کے مقابلے میں زیادہ باریک نوعیت کی ٹائپ اسٹرنگ واپس کرتا ہے، جس میں عددی ذیلی اقسام جیسے
  `integer`, `float`, اور `nan` شامل ہیں۔
- `null` اور `undefined` کو واضح طور پر `null` اور `undefined` کے طور پر الگ کرتا ہے۔
- یہ عام عددی اسٹرنگ فارمیٹس کو شناخت کرتا ہے اور انہیں سادہ `string` کے بجائے `binary`, `octal`, `decimal`, یا
  `hexadecimal` کے طور پر رپورٹ کرتا ہے۔
- یہ arrays کو بھی `array` کے طور پر شناخت کرتا ہے اور مخصوص آبجیکٹ ٹائپ نام فراہم کرنے کے لیے
  `Object.prototype.toString` استعمال کرتا ہے (مثلاً `date`, `regexp`, `map`, `set`)۔
- یہ validation، logging، اور debugging کے لیے بہت مفید ہے جہاں مستقل، انسان کے لیے قابلِ فہم ٹائپ لیبلز درکار ہوں۔

## استعمال

### نحو

فنکشن:

- `getTypeOf(value)`

پیرامیٹرز:

- `value`: وہ قدر جس کے لیے ڈیٹا ٹائپ معلوم کرنا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

//‎‎ مثال کے طور پر جانچیں
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.getTypeOf(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [getTypeOf](‎../_analysis/getTypeOf.md‎)

<br>

---

<small>فائل 6 February 2026 at 13:15:31 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>