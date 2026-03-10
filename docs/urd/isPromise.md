# isPromise

## تفصیل

یہ تعین کرتا ہے کہ دی گئی قدر `Promise` ہے یا نہیں۔

### استعمال کا معاملہ

نامعلوم اِن پٹس کو `Promise` کے طور پر برتنے سے پہلے ان کی توثیق کے لیے `isPromise` استعمال کریں، مثلاً جب پلگ اِنز،
ڈائنامک امپورٹس، یا ڈھیلے ٹائپ والی APIs سے واپس آنے والی قدروں کو ہینڈل کیا جا رہا ہو۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `isPromise`، `instanceof Promise` کے ذریعے چیک کرتا ہے، اس لیے یہ صرف حقیقی `Promise` انسٹینسز کے لیے `true` واپس کرتا
> ہے (عام thenables کے لیے نہیں)۔

### فوائد

- یہ جانچنے کے لیے ایک سادہ رن ٹائم چیک فراہم کرتا ہے کہ آیا کوئی قدر `Promise` ہے۔
- ان کوڈ راستوں کی حفاظت میں مدد کرتا ہے جنہیں ایک حقیقی `Promise` انسٹینس درکار ہو، اور قابلِ پیش گوئی طور پر `true` یا
  `false` واپس کرتا ہے۔
- “thenable” آبجیکٹس (مثلاً، `{ then() {} }`) سے غلط مثبت نتائج سے بچاتا ہے، کیونکہ یہ ایک حقیقی `Promise` انسٹینس کا
  تقاضا کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `isPromise(value)`

پیرامیٹرز:

- `value`: جس قدر کی جانچ کی جانی ہے۔

### لوکل فنکشن امپورٹ

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); //‎ درست
console.log(isPromise(b)); //‎ غلط
console.log(isPromise(123)); //‎ غلط
console.log(isPromise(null)); //‎ غلط

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isPromise(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isPromise](‎../_analysis/isPromise.md‎)

<br>

---

<small>فائل 30 January 2026 at 23:54:45 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>