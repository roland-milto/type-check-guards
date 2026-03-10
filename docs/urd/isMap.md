# isMap

## تفصیل

یہ چیک کرتا ہے کہ دیا گیا `value` ایک `Map` ہے یا نہیں؛ اگر ہے تو `true` اور بصورتِ دیگر `false` واپس کرتا ہے۔

### استعمال کا معاملہ

`isMap` اس وقت استعمال کریں جب آپ کو کوئی `unknown` قدر ملے (مثلاً JSON پارسنگ، بیرونی APIs، یا صارف اِن پٹ سے) اور آپ
کو `Map` آپریشنز انجام دینے سے پہلے یہ یقینی بنانا ہو کہ وہ ایک `Map` ہے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `isMap` ایک رن ٹائم گارڈ ہے جو اس صورت میں `true` واپس کرتا ہے جب قدر `Map` ہو اور بصورتِ دیگر `false`؛ `Map` APIs کو
> کال کرنے سے پہلے `unknown` کو محدود کرنے کے لیے اسے استعمال کریں۔

### فوائد

- یہ تیزی سے رن ٹائم چیک فراہم کرتا ہے کہ آیا کوئی قدر `Map` ہے۔
- یہ اُن کوڈ راستوں کی حفاظت کر کے ٹائپ کی غلطیوں سے بچنے میں مدد دیتا ہے جنہیں `Map` کے طریقوں جیسے `get`, `set`, اور
  `has` کی ضرورت ہوتی ہے۔
- یہ `unknown` اِن پٹس کو ہینڈل کرتے وقت ایک ہلکے پھلکے ویلیڈیشن مرحلے کے طور پر اچھی طرح کام کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `isMap(value)`

پیرامیٹرز:

- `value`: چیک کرنے کے لیے قدر۔

### لوکل فنکشن امپورٹ

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isMap(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isMap](‎../_analysis/isMap.md‎)

<br>

---

<small>فائل 31 January 2026 at 16:42:34 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>