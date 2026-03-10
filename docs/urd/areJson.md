# areJson

## تفصیل

چیک کرتا ہے کہ آیا array کے تمام عناصر JSON سٹرنگز ہیں، اور `true` صرف اسی صورت میں واپس کرتا ہے جب array بھری ہوئی ہو
اور ہر آئٹم درست JSON ہو؛ ورنہ `false` واپس کرتا ہے۔

### استعمال کا معاملہ

آنے والے ڈیٹا کی توثیق کریں (مثلاً query params، environment variables، یا external APIs سے) جہاں آپ کو JSON-encoded
سٹرنگز کی ایک array متوقع ہو اور آپ خالی arrays یا کسی بھی غیر-JSON اندراج کو مسترد کرنا چاہتے ہوں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `areJson` اس وقت استعمال کریں جب آپ کو یہ تصدیق کرنی ہو کہ ایک `unknown[]` میں پارس کرنے سے پہلے صرف JSON سٹرنگز موجود
> ہیں (مثلاً `JSON.parse` کے ساتھ)۔

### فوائد

- `true` صرف اسی وقت واپس کرتا ہے جب ہر عنصر ایک درست JSON سٹرنگ ہو؛ ورنہ `false` واپس کرتا ہے۔
- فوراً ناکام ہوتا ہے: جیسے ہی کوئی غیر-JSON عنصر ملتا ہے چیک کرنا بند کر دیتا ہے۔
- ڈیزائن کے مطابق خالی arrays کو مسترد کرتا ہے، غیر بھری ہوئی input کے لیے `false` واپس کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `areJson(array)`

پیرامیٹرز:

- `array`: وہ array جسے JSON سٹرنگ عناصر کے لیے چیک کرنا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); //‎ درست
const mixed = areJson(["{\"a\":1}", 123 as unknown]); //‎ غلط
const empty = areJson([]); //‎ غلط

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areJson(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areJson](‎../_analysis/areJson.md‎)

<br>

---

<small>فائل 30 January 2026 at 16:18:07 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>