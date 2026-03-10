# isWeakMap

## تفصیل

یہ تعین کرتا ہے کہ دیا گیا `value` ایک `WeakMap` instance ہے یا نہیں۔

### استعمال کا معاملہ

`isWeakMap` اس وقت استعمال کریں جب آپ کوئی `unknown` قدر قبول کرتے ہوں (مثلاً کسی public API، plugin system، یا dynamic
configuration سے) اور `WeakMap`-specific رویّہ استعمال کرنے سے پہلے یہ تصدیق کرنا ہو کہ وہ `WeakMap` ہے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `isWeakMap` ایک `instanceof WeakMap` چیک انجام دیتا ہے؛ یہ ایک رن ٹائم گارڈ ہے جو صرف حقیقی `WeakMap` instances کے لیے
`true` واپس کرتا ہے۔

### فوائد

- یہ جانچنے کے لیے سادہ رن ٹائم چیک کہ آیا کوئی قدر `WeakMap` ہے۔
- `WeakMap` درکار کرنے والی APIs کے غلط استعمال کو روکنے میں مدد دیتا ہے کیونکہ یہ exception پھینکنے کے بجائے `true`/
  `false` واپس کرتا ہے۔
- `unknown` اِن پٹس کے ساتھ کام کرتا ہے، جس سے یہ ماڈیول کی سرحدوں پر (مثلاً parsing، بیرونی ڈیٹا، یا بغیر ٹائپ والے کوڈ
  میں) سہولت فراہم کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `isWeakMap(value)`

پیرامیٹرز:

- `value`: وہ قدر جسے چیک کرنا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  //‎‎ a رن ٹائم پر WeakMap ہے
}

console.log(isWeakMap(a)); //‎ درست
console.log(isWeakMap(b)); //‎ غلط
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isWeakMap(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isWeakMap](‎../_analysis/isWeakMap.md‎)

<br>

---

<small>فائل 30 January 2026 at 13:27:30 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>