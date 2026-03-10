# isObject

## تفصیل

یہ طے کرتا ہے کہ دی گئی `value` ایک `object` ہے یا نہیں (`null` کے علاوہ)۔

### استعمال کا معاملہ

`isObject` کو نامعلوم inputs (مثلاً parsed JSON، API responses، event payloads) کی توثیق کے لیے استعمال کریں، properties
تک رسائی سے پہلے یہ یقینی بنانے کے لیے کہ قدر ایک object ہے اور `null` نہیں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `isObject` ایک runtime guard ہے جو boolean واپس کرتا ہے؛ یہ کسی مخصوص object shape تک narrow نہیں کرتا۔ جب آپ کو مضبوط
> typing درکار ہو تو اسے اضافی چیکس (مثلاً property کی موجودگی) کے ساتھ ملائیں۔

### فوائد

- `true` صرف اُن غیر-`null` قدروں کے لیے واپس کرتا ہے جن کا `typeof` `"object"` ہو۔
- JavaScript کی عام غلطی سے بچاتا ہے جہاں `null` کو بصورتِ دیگر ایک object سمجھ لیا جاتا ہے۔
- سادہ objects اور built-in object instances (مثلاً `Date`, `RegExp`) کے لیے کام کرتا ہے۔
- سادہ، تیز runtime چیک جو defensive programming اور input validation کے لیے موزوں ہے۔

## استعمال

### نحو

فنکشن:

- `isObject(value)`

پیرامیٹرز:

- `value`: وہ قدر جسے `object` ہونے کے لیے چیک کیا جانا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  //‎‎ input رن ٹائم پر ایک غیر-خالی آبجیکٹ ہے
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isObject(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isObject](‎../_analysis/isObject.md‎)

<br>

---

<small>فائل 31 January 2026 at 00:26:17 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>