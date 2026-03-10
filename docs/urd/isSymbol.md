# isSymbol

## تفصیل

`isSymbol` یہ طے کرتا ہے کہ دی گئی قدر کی قسم `symbol` ہے یا نہیں؛ symbols کے لیے `true` اور بصورتِ دیگر `false` واپس
کرتا ہے۔

### استعمال کا معاملہ

کسی `unknown` قدر کو منفرد شناخت کنندہ، رجسٹری key، یا objects اور maps میں computed property key کے طور پر استعمال کرنے
سے پہلے یہ تصدیق کریں کہ وہ `symbol` ہے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> symbol سے متعلق فنکشنز کال کرنے یا اسے computed property key کے طور پر استعمال کرنے سے پہلے `unknown` کو `symbol` تک
> محدود (narrow) کرنے کے لیے `isSymbol` استعمال کریں۔

### فوائد

- JavaScript کے `symbol` پرائمٹو ٹائپ کے لیے ایک سادہ اور قابلِ اعتماد رن ٹائم چیک فراہم کرتا ہے۔
- symbol-مخصوص APIs استعمال کرنے یا انہیں keys کے طور پر محفوظ کرنے سے پہلے `unknown` ویلیوز کو محدود (narrow) کرنے میں
  مدد دیتا ہے۔
- `typeof` استعمال کر کے غلط مثبت نتائج سے بچاتا ہے، جو `symbol` ویلیوز کی شناخت کا معیاری طریقہ ہے۔

## استعمال

### نحو

فنکشن:

- `isSymbol(value)`

پیرامیٹرز:

- `value`: وہ قدر جسے چیک کیا جانا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  //‎‎ input یہاں ایک سمبل ہے
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isSymbol(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isSymbol](‎../_analysis/isSymbol.md‎)

<br>

---

<small>فائل 30 January 2026 at 14:29:20 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>