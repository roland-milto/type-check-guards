# areArrays

## تفصیل

`areArrays` یہ طے کرتا ہے کہ آیا کوئی ویلیو ایک بھرا ہوا دو بُعدی اَرے ہے جس کے تمام آئٹمز اَرے ہیں۔

### استعمال کا معاملہ

قطاری یا میٹرکس جیسی اِن پٹس (مثلاً CSV rows، grid data، یا grouped lists) پر row/column آپریشنز کرنے سے پہلے اُن کی
توثیق کے لیے `areArrays` استعمال کریں؛ اگر اِن پٹ اَرے نہیں ہے، خالی ہے، یا اس میں کوئی بھی غیر اَرے عنصر موجود ہے تو یہ
`false` واپس کرتا ہے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> جب آپ کو یہ یقینی بنانا ہو کہ کوئی ویلیو غیر خالی 2D اَرے ہے اور نیسٹڈ اَریز پر اٹریٹ کرنے یا اِنڈیکس کرنے سے پہلے ہر
> قطار ایک اَرے ہے، تو `areArrays` استعمال کریں۔

### فوائد

- یہ تصدیق کرتا ہے کہ اِن پٹ ایک غیر خالی دو بُعدی اَرے ہے جس میں ہر عنصر خود ایک اَرے ہے۔
- ایک سادہ بولین نتیجہ (`true`/`false`) واپس کرتا ہے جو گارڈز اور ابتدائی اخراج کے لیے موزوں ہے۔
- رن ٹائم غلطیوں سے بچانے میں مدد دیتا ہے جب بعد کا کوڈ نیسٹڈ اَرے آپریشنز فرض کرتا ہے (مثلاً قطاروں پر میپ کرنا)۔

## استعمال

### نحو

فنکشن:

- `areArrays(array)`

پیرامیٹرز:

- `array`: جس اِن پٹ کو چیک کرنا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  //‎‎ value ایک 2D ارے ہے جس کے عناصر ارے ہیں
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areArrays(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areArrays](‎../_analysis/areArrays.md‎)

<br>

---

<small>فائل 6 February 2026 at 13:42:03 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>