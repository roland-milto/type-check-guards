# areObjects

## تفصیل

`areObjects` چیک کرتا ہے کہ آیا فراہم کردہ بھرا ہوا array صرف objects پر مشتمل ہے۔

### استعمال کا معاملہ

`areObjects` اس وقت استعمال کریں جب آپ کو کوئی نامعلوم array ملے (مثلاً JSON parsing یا external APIs سے) اور آپ کو
iterate کرنے اور object properties تک رسائی سے پہلے یہ یقینی بنانا ہو کہ یہ خالی نہیں ہے اور ہر عنصر ایک object ہے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `areObjects` کو `unknown[]` کی توثیق کے لیے استعمال کریں اس سے پہلے کہ آپ آئٹمز کو objects سمجھ کر استعمال کریں؛ یہ
> خالی arrays کے لیے `false` واپس کرتا ہے۔

### فوائد

- `true` صرف اسی وقت واپس کرتا ہے جب اِن پٹ ایک بھرا ہوا array ہو اور ہر عنصر ایک object ہو۔
- جیسے ہی کوئی غیر-object عنصر ملتا ہے فوراً رک جاتا ہے اور `false` واپس کرتا ہے۔
- object سے متعلق مخصوص آپریشنز کرنے سے پہلے نامعلوم اِن پٹ کی توثیق میں مدد کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `areObjects(array)`

پیرامیٹرز:

- `array`: وہ array جسے object عناصر کے لیے چیک کیا جانا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  //‎‎ value اشیاء کی بھری ہوئی صف ہے
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areObjects(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areObjects](‎../_analysis/areObjects.md‎)

<br>

---

<small>فائل 31 January 2026 at 00:10:54 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>