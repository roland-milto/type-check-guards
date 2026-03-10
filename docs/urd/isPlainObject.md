# isPlainObject

## تفصیل

یہ جانچتا ہے کہ دیا گیا `value` ایک سادہ آبجیکٹ ہے یا نہیں، اور اگر ہے تو `true` ورنہ `false` واپس کرتا ہے۔

### استعمال کا معاملہ

اس بات کی توثیق کریں کہ کوئی `unknown` input (مثلاً parsed JSON، بیرونی ڈیٹا، یا function arguments) کلیدیں پڑھنے یا اسے
typed configuration آبجیکٹ میں map کرنے سے پہلے ایک سادہ آبجیکٹ ہے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `isPlainObject` `unknown` کو record-like آبجیکٹ سمجھنے سے پہلے narrow کرنے کے لیے مفید ہے؛ یہ صرف اُن قدروں کے لیے
`true` واپس کرتا ہے جن کا internal tag `[object Object]` ہو۔

### فوائد

- یہ جانچنے کے لیے ایک سادہ اور قابلِ اعتماد طریقہ فراہم کرتا ہے کہ آیا کوئی قدر ایک سادہ آبجیکٹ (یعنی `Object` / `{}`)
  ہے یا نہیں، اور `true` یا `false` واپس کرتا ہے۔
- سادہ آبجیکٹس کو arrays، functions، `null`، اور دیگر غیر-سادہ آبجیکٹ اقسام سے ممتاز کرنے میں مدد دیتا ہے۔
- TypeScript میں ایک type guard کے طور پر مفید ہے تاکہ آبجیکٹ کی خصوصیات تک رسائی سے پہلے `unknown` قدروں کو محدود (
  narrow) کیا جا سکے۔

## استعمال

### نحو

فنکشن:

- `isPlainObject(value)`

پیرامیٹرز:

- `value`: سادہ آبجیکٹ ہونے کی حیثیت جانچنے کے لیے قدر۔

### لوکل فنکشن امپورٹ

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  //‎‎ input یہاں ایک سادہ آبجیکٹ ہے
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); //‎ درست
console.log(isPlainObject([])); //‎ غلط
console.log(isPlainObject(null)); //‎ غلط
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isPlainObject(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isPlainObject](‎../_analysis/isPlainObject.md‎)

<br>

---

<small>فائل 6 February 2026 at 12:20:24 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>