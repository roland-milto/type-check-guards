# areSets

## تفصیل

چیک کرتا ہے کہ آیا دی گئی غیر خالی array میں صرف `Set` instances موجود ہیں؛ اگر ہیں تو `true` اور ورنہ `false` واپس کرتا
ہے۔

### استعمال کا معاملہ

اس بات کی توثیق کریں کہ کوئی قدر (مثلاً صارف کے اِن پٹ، JSON parsing، یا بیرونی APIs سے) ایک غیر خالی array ہے جس میں
`Set` آبجیکٹس ہیں، اس سے پہلے کہ ہر set کو پروسیس کیا جائے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `areSets` کو نامعلوم اِن پٹ کی توثیق کے لیے استعمال کریں، تاکہ iterate کرنے اور ہر عنصر پر `Set` APIs (مثلاً `.size`,
`.has`, `.add`) کال کرنے سے پہلے یقین ہو جائے۔

### فوائد

- `true` صرف اسی وقت واپس کرتا ہے جب اِن پٹ ایک غیر خالی array ہو اور ہر عنصر `Set` کی instance ہو۔
- خالی arrays کے لیے غلط مثبت نتائج سے بچاتا ہے کیونکہ جب array میں کوئی عنصر نہ ہو تو `false` واپس کرتا ہے۔
- ہر عنصر پر `Set`-مخصوص آپریشنز کرنے سے پہلے runtime guard کے طور پر مفید ہے۔

## استعمال

### نحو

فنکشن:

- `areSets(array)`

پیرامیٹرز:

- `array`: وہ array جسے `Set` instances کے لیے چیک کرنا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  //‎‎ a رن ٹائم پر Set کی مثالوں کی ایک ارے ہے
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); //‎ غلط
console.log(areSets(c)); //‎ غلط
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areSets(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areSets](‎../_analysis/areSets.md‎)

<br>

---

<small>فائل 30 January 2026 at 23:15:52 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>