# isFalse

## تفصیل

`isFalse` چیک کرتا ہے کہ آیا دی گئی قدر سختی سے بولین لِٹرل `false` کے برابر ہے۔

### استعمال کا معاملہ

نامعلوم ڈیٹا (مثلاً JSON، کوئری پیرامیٹرز، یا صارف اِن پٹ سے) کی توثیق کریں جہاں صرف واضح بولین قدر `false` کو ایک درست
فلیگ سمجھا جانا چاہیے، اور باقی ہر چیز کو مسترد کیا جانا چاہیے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `isFalse` اس وقت استعمال کریں جب آپ کو صرف لِٹرل `false` قبول کرنا ہو اور باقی تمام فالسِی اقدار کو مسترد کرنا ہو؛ یہ
> صرف `value === false` کے لیے `true` واپس کرتا ہے۔

### فوائد

- بغیر کسی کوئرشن کے بولین لِٹرل `false` کے لیے سخت جانچ فراہم کرتا ہے۔
- `false` کو دیگر فالسِی اقدار جیسے `0`, `""`, `null`, اور `undefined` سے ممتاز کرنے میں مدد دیتا ہے۔
- نامعلوم اِن پٹ کی توثیق کرتے وقت نیت کو واضح بنا کر پڑھنے کی سہولت بہتر کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `isFalse(value)`

پیرامیٹرز:

- `value`: وہ قدر جسے چیک کیا جانا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  //‎‎ یہاں input بالکل false ہے
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isFalse(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isFalse](‎../_analysis/isFalse.md‎)

<br>

---

<small>فائل 31 January 2026 at 16:45:00 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>