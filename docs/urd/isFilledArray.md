# isFilledArray

## تفصیل

یہ جانچتا ہے کہ آیا `value` کم از کم ایک عنصر کے ساتھ ایک array ہے، اور `true` یا `false` واپس کرتا ہے۔

### استعمال کا معاملہ

`isFilledArray` کو آنے والے ڈیٹا (مثلاً API payloads، فارم ویلیوز، کنفیگریشن) کی توثیق کے لیے استعمال کریں، اس سے پہلے
کہ آپ iterate کریں، پہلے عنصر تک رسائی حاصل کریں، یا ایسی منطق لاگو کریں جس کے لیے کم از کم ایک آئٹم درکار ہو۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `isFilledArray` ایک runtime guard ہے جو boolean واپس کرتا ہے؛ یہ اس بات کی تصدیق سے آگے کہ array غیر خالی ہے، عنصر کی
> اقسام کو مزید narrow نہیں کرتا۔

### فوائد

- `Array.isArray` اور لمبائی کی جانچ کے ذریعے غیر خالی array کے لیے سادہ، تیز چیک۔
- جب کوڈ یہ فرض کرے کہ array میں کم از کم ایک عنصر موجود ہے تو runtime errors سے بچنے میں مدد دیتا ہے۔
- واضح boolean نتیجہ: غیر خالی arrays کے لیے `true` اور بصورتِ دیگر `false` واپس کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `isFilledArray(value)`

پیرامیٹرز:

- `value`: وہ قدر جسے یہ جانچنے کے لیے چیک کرنا ہے کہ آیا یہ ایک غیر خالی array ہے۔

### لوکل فنکشن امپورٹ

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  //‎‎ رن ٹائم پر input ایک غیر خالی ارے ہے
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isFilledArray(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isFilledArray](‎../_analysis/isFilledArray.md‎)

<br>

---

<small>فائل 6 February 2026 at 11:49:18 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>