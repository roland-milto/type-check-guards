# areRegExes

## تفصیل

`areRegExes` چیک کرتا ہے کہ آیا کوئی قدر ایک بھری ہوئی array ہے جس میں صرف `RegExp` objects شامل ہیں۔

### استعمال کا معاملہ

یہ توثیق کریں کہ کوئی configuration option (مثلاً allow/deny patterns کی فہرست) استعمال کرنے سے پہلے regular expressions
کی ایک غیر خالی array ہے تاکہ اسے matching کے لیے استعمال کیا جا سکے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `areRegExes` استعمال کریں تاکہ iterate کرنے یا patterns کو compose کرنے سے پہلے `unknown` کو `RegExp[]` تک narrow کیا
> جا سکے۔

### فوائد

- یقینی بناتا ہے کہ کوئی قدر ایک غیر خالی array ہے جس میں ہر عنصر `RegExp` کی instance ہے۔
- صارف کے input یا configuration کی توثیق کے لیے ایک سادہ boolean guard (`true`/`false`) فراہم کرتا ہے۔
- بعد کے کوڈ میں جب یہ فرض کیا جائے کہ تمام items regular-expression operations کو سپورٹ کرتے ہیں تو runtime errors سے
  بچنے میں مدد دیتا ہے۔

## استعمال

### نحو

فنکشن:

- `areRegExes(array)`

پیرامیٹرز:

- `array`: وہ قدر جسے چیک کیا جانا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  //‎‎ یہاں patterns، RegExp کی ایک array ہے
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areRegExes(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areRegExes](‎../_analysis/areRegExes.md‎)

<br>

---

<small>فائل 30 January 2026 at 23:22:27 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>