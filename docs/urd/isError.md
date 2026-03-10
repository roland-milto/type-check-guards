# isError

## تفصیل

یہ چیک کرتا ہے کہ دی گئی `value`، `Error` کی instance ہے یا نہیں۔

### استعمال کا معاملہ

`isError` اس وقت استعمال کریں جب آپ کو کوئی `unknown` قدر ملے (مثلاً `catch` بلاک، کسی callback، یا کسی بیرونی لائبریری
سے) اور آپ کو `message`، `name`، یا `stack` پڑھنے سے پہلے محفوظ طریقے سے یہ طے کرنا ہو کہ آیا یہ `Error` ہے یا نہیں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `unknown` قدروں (مثلاً `catch` سے) کو `Error` سمجھنے سے پہلے محفوظ بنانے کے لیے `isError` استعمال کریں۔

### فوائد

- یہ جانچنے کے لیے ایک سادہ رن ٹائم چیک فراہم کرتا ہے کہ آیا کوئی قدر `Error` کی instance ہے۔
- `message` یا `stack` جیسی `Error` خصوصیات تک رسائی سے پہلے نامعلوم اِن پٹس کو محدود (narrow) کرنے میں مدد دیتا ہے۔
- `catch`، بیرونی APIs، یا بغیر ٹائپ والے ذرائع سے آنے والی قدروں کو ہینڈل کرتے وقت رن ٹائم exceptions کے خطرے کو کم
  کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `isError(value)`

پیرامیٹرز:

- `value`: `Error` ٹائپ کے مقابلے میں چیک کرنے کے لیے قدر۔

### لوکل فنکشن امپورٹ

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isError(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isError](‎../_analysis/isError.md‎)

<br>

---

<small>فائل 6 February 2026 at 12:47:34 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>