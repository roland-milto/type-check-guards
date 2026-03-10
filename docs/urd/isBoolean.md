# isBoolean

## تفصیل

یہ طے کرتا ہے کہ دی گئی قدر `boolean` ہے یا نہیں۔

### استعمال کا معاملہ

بیرونی یا غیر ٹائپ شدہ ڈیٹا (مثلاً، ماحول کے متغیرات، JSON پے لوڈز، کوئری پیرامیٹرز) کی توثیق کریں تاکہ مشروط منطق میں
استعمال کرنے سے پہلے یہ یقینی بنایا جا سکے کہ قدر `boolean` ہے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> بولین آپریشنز لاگو کرنے سے پہلے `unknown` کو `boolean` تک محدود کرنے کے لیے `isBoolean` استعمال کریں۔

### فوائد

- `typeof` استعمال کرتے ہوئے سادہ اور تیز رن ٹائم چیک۔
- بولین سے متعلق مخصوص منطق سے پہلے نامعلوم اِن پٹ کی توثیق میں مدد کرتا ہے۔
- ایک قابلِ پیش گوئی `boolean` نتیجہ (`true`/`false`) واپس کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `isBoolean(value)`

پیرامیٹرز:

- `value`: وہ قدر جسے چیک کیا جانا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  //‎‎ input یہاں boolean ہے
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isBoolean(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isBoolean](‎../_analysis/isBoolean.md‎)

<br>

---

<small>فائل 30 January 2026 at 14:38:19 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>