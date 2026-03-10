# arePromises

## تفصیل

`arePromises` یہ طے کرتا ہے کہ آیا ایک array کے تمام عناصر `Promise` کی instances ہیں۔

### استعمال کا معاملہ

یہ توثیق کریں کہ متحرک طور پر بنائی گئی یا بیرونی طور پر فراہم کردہ فہرست میں جمع کرنے سے پہلے (مثلاً `Promise.all` کے
ساتھ) صرف promises شامل ہیں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `arePromises` کو `unknown[]` کی توثیق کے لیے `Promise.all` یا دیگر صرف-وعدہ آپریشنز کو کال کرنے سے پہلے استعمال کریں؛
> یہ خالی arrays کے لیے `false` واپس کرتا ہے۔

### فوائد

- یہ یقینی بناتا ہے کہ آپ وعدوں سے متعلق مخصوص منطق کے ساتھ آگے بڑھنے سے پہلے ہر عنصر ایک `Promise` ہو۔
- غیر بھری ہوئی arrays کے لیے `false` واپس کرتا ہے، جس سے خالی inputs کے لیے مبہم نتائج سے بچاؤ ہوتا ہے۔
- بیرونی ذرائع سے آنے والے `unknown[]` کے ساتھ کام کرتے وقت runtime guard کے طور پر مفید ہے۔

## استعمال

### نحو

فنکشن:

- `arePromises(array)`

پیرامیٹرز:

- `array`: Promise کی instances کے لیے چیک کرنے والی array۔

### لوکل فنکشن امپورٹ

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  //‎‎ values رن ٹائم پر Promise کی مثالوں کی ایک صف ہے
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.arePromises(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [arePromises](‎../_analysis/arePromises.md‎)

<br>

---

<small>فائل 30 January 2026 at 23:50:24 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>