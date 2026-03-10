# areOctals

## تفصیل

`areOctals` یہ طے کرتا ہے کہ فراہم کردہ قدر درست آکٹل strings کی ایک غیر خالی array ہے یا نہیں۔

### استعمال کا معاملہ

`areOctals` اس وقت استعمال کریں جب آپ user input، configuration values، یا API payloads کی توثیق کر رہے ہوں جن میں آکٹل
literals (مثلاً فائل permission modes جیسے `0o755`) لازماً شامل ہوں، اور آپ خالی arrays یا کسی بھی غلط اندراج کی صورت
میں `false` واپس کر کے انہیں مسترد کرنا چاہتے ہوں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `areOctals` استعمال کریں تاکہ تبدیل کرنے سے پہلے (مثلاً `Number(...)` کے ذریعے یا custom parsing کے ذریعے) یہ یقینی
> بنایا جا سکے کہ آپ کے پاس ایک غیر خالی `unknown[]` ہے جس میں ہر اندراج ایک درست آکٹل string ہے۔

### فوائد

- یہ تصدیق کرتا ہے کہ کوئی قدر ایک غیر خالی array ہے جس میں ہر عنصر ایک آکٹل string ہے، اور صرف اسی وقت `true` واپس کرتا
  ہے جب تمام آئٹمز پاس ہوں۔
- فوراً ناکام: جیسے ہی کوئی غیر آکٹل عنصر ملتا ہے `false` واپس کر دیتا ہے۔
- پارْس کرنے یا آکٹل strings کو تبدیل کرنے سے پہلے بطور guard مفید ہے تاکہ runtime errors اور غیر یکساں input handling
  سے بچا جا سکے۔

## استعمال

### نحو

فنکشن:

- `areOctals(array)`

پیرامیٹرز:

- `array`: وہ قدر جسے چیک کیا جانا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  //‎‎ value آکٹل سٹرنگز کی غیر خالی صف ہے
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areOctals(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areOctals](‎../_analysis/areOctals.md‎)

<br>

---

<small>فائل 30 January 2026 at 14:58:54 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>