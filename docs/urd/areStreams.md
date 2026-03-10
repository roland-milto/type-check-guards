# areStreams

## تفصیل

`areStreams` یہ طے کرتا ہے کہ آیا کوئی قدر ایک بھرا ہوا array ہے جس میں ہر عنصر ایک `Stream` ہے۔

### استعمال کا معاملہ

صارف کی فراہم کردہ یا dynamically بنائی گئی collections (مثلاً متعدد file read streams) کی توثیق کریں اس سے پہلے کہ
انہیں piping، resuming، یا بطور گروپ کسی اور طریقے سے operate کیا جائے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `areStreams` کو نامعلوم ان پٹ کی توثیق کے لیے استعمال کریں اس سے پہلے کہ اسے `Stream[]` سمجھ کر برتا جائے؛ یہ `true`
> صرف تب واپس کرتا ہے جب قدر ایک non-empty array ہو اور ہر عنصر ایک `Stream` ہو۔

### فوائد

- یقینی بناتا ہے کہ ان پٹ ایک بھرا ہوا array ہے جس میں ہر عنصر ایک `Stream` ہے۔
- پروسیسنگ سے پہلے stream مجموعوں کی توثیق کے لیے ایک سادہ `true`/`false` guard فراہم کرتا ہے۔
- فوراً ناکام ہوتا ہے: جیسے ہی کوئی غیر-`Stream` عنصر ملتا ہے `false` واپس کر دیتا ہے۔
- جب کوڈ یہ فرض کرے کہ تمام آئٹمز `Stream` instances ہیں تو runtime errors سے بچنے میں مدد دیتا ہے۔

## استعمال

### نحو

فنکشن:

- `areStreams(array)`

پیرامیٹرز:

- `array`: وہ array جسے Stream objects کے لیے چیک کیا جانا ہے۔

### لوکل فنکشن امپورٹ

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  //‎‎ input Stream آبجیکٹس کی بھری ہوئی ارے ہے
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areStreams(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areStreams](‎../_analysis/areStreams.md‎)

<br>

---

<small>فائل 30 January 2026 at 23:36:11 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>