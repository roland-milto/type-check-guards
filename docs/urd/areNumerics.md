# areNumerics

## تفصیل

`areNumerics` یہ چیک کرتا ہے کہ آیا کوئی قدر ایک غیر خالی array ہے جس کے تمام عناصر عددی ہیں۔

### استعمال کا معاملہ

`areNumerics` کو بیرونی یا بغیر ٹائپ والے ڈیٹا (مثلاً JSON payloads، query parameters، form input) کی توثیق کے لیے
استعمال کریں، جمع، اوسط، یا دیگر عددی عملیات کرنے سے پہلے، تاکہ یہ یقینی ہو کہ ان پٹ ایک غیر خالی عددی array ہے؛ بصورت
دیگر `false` واپس کرتا ہے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `areNumerics` کو `unknown` ان پٹ کو عددی array سمجھنے سے پہلے گارڈ کے طور پر استعمال کریں؛ یہ non-arrays اور خالی
> arrays کے لیے `false` واپس کرتا ہے۔

### فوائد

- `true` صرف اسی وقت واپس کرتا ہے جب ان پٹ ایک غیر خالی array ہو اور ہر عنصر عددی ہو۔
- فوراً ناکام: جیسے ہی کوئی غیر عددی عنصر ملتا ہے چیک کرنا روک دیتا ہے اور `false` واپس کرتا ہے۔
- عددی عملیات انجام دینے سے پہلے نامعلوم ان پٹ کی محفوظ طریقے سے توثیق کرنے میں مدد دیتا ہے۔

## استعمال

### نحو

فنکشن:

- `areNumerics(array)`

پیرامیٹرز:

- `array`: وہ array جس میں عددی عناصر کی جانچ کرنی ہے۔

### لوکل فنکشن امپورٹ

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); //‎ درست
console.log(areNumerics(b)); //‎ درست
console.log(areNumerics(c)); //‎ غلط
console.log(areNumerics(d)); //‎ غلط
console.log(areNumerics(e)); //‎ غلط

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); //‎ 60
console.log(sumUnknown([10, "20", 30])); //‎ null
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areNumerics(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areNumerics](‎../_analysis/areNumerics.md‎)

<br>

---

<small>فائل 6 February 2026 at 16:08:06 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>