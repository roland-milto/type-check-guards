# isDecimal

## تفصیل

`isDecimal` چیک کرتا ہے کہ آیا کوئی قدر decimal سٹرنگ کی نمائندگی ہے جس میں کوئی ابتدائی/آخری whitespace نہ ہو اور
decimal فارمیٹ درست ہو۔

### استعمال کا معاملہ

فارم فیلڈز، API payloads، یا کنفیگریشن ویلیوز کی توثیق کریں جنہیں decimal سٹرنگ (اختیاری طور پر signed) کے طور پر بغیر
کسی اردگرد whitespace کے فراہم کرنا ضروری ہو، پارس یا اسٹور کرنے سے پہلے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `isDecimal` کو یوزر ان پٹ کو تبدیل کرنے سے پہلے ویلیڈیٹ کرنے کے لیے استعمال کریں (مثلاً `Number(value)` کے ساتھ)، خاص
> طور پر جب whitespace کو مسترد کرنا ضروری ہو۔

### فوائد

- سختی سے تصدیق کرتا ہے کہ ان پٹ ایک سٹرنگ ہے اور ایک decimal-literal پیٹرن سے میل کھاتا ہے۔
- ابہام والی پارسنگ سے بچنے کے لیے ابتدائی اور آخری whitespace (بشمول کنٹرول کریکٹرز) کو مسترد کرتا ہے۔
- regex چلانے سے پہلے تیز pre-checks (ٹائپ چیک اور پہلا/آخری کریکٹر) انجام دیتا ہے۔
- ایک سادہ boolean نتیجہ (`true`/`false`) واپس کرتا ہے جو guards اور ان پٹ ویلیڈیشن کے لیے موزوں ہے۔

## استعمال

### نحو

فنکشن:

- `isDecimal(value)`

پیرامیٹرز:

- `value`: decimal سٹرنگ فارمیٹ کے لیے چیک کرنے والی قدر۔

### لوکل فنکشن امپورٹ

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    //‎‎ v یہاں ایک سٹرنگ ہے (رن ٹائم پر توثیق شدہ)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isDecimal(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isDecimal](‎../_analysis/isDecimal.md‎)

<br>

---

<small>فائل 31 January 2026 at 15:55:10 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>