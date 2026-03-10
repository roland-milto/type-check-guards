# isStream

## تفصیل

`isStream` یہ چیک کرتا ہے کہ آیا دی گئی قدر ایک stream آبجیکٹ ہے (Node.js stream-like، `ReadableStream`، یا
`WritableStream`)۔

### استعمال کا معاملہ

ایسے inputs کی توثیق کریں جو یا تو سادہ آبجیکٹس ہوں یا streams (مثلاً file uploads، HTTP bodies، یا processing
pipelines) اور اس بنیاد پر logic کو branch کریں کہ آیا قدر ایک stream ہے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `unknown` کو stream methods کال کرنے سے پہلے narrow کرنے کے لیے `isStream` استعمال کریں؛ یہ Node.js stream-like
> آبجیکٹس ( `pipe`/`on` کے ذریعے) اور Web Streams (`ReadableStream`/`WritableStream`) کو بھی پہچانتا ہے جب وہ globals
> موجود ہوں۔

### فوائد

- `pipe` اور `on` فنکشنز کی جانچ کر کے عام Node.js stream-like آبجیکٹس کو محفوظ طریقے سے شناخت کرتا ہے۔
- جب دستیاب ہوں تو `ReadableStream` اور `WritableStream` کو پہچان کر Web Streams کو بھی سپورٹ کرتا ہے۔
- guards اور branching logic کے لیے موزوں ایک سادہ boolean نتیجہ (`true`/`false`) واپس کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `isStream(value)`

پیرامیٹرز:

- `value`: وہ قدر جس کی جانچ کی جائے گی۔

### لوکل فنکشن امپورٹ

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  //‎‎ nodeStream اسٹریم جیسا ہے؛ آپ عام اسٹریم APIs کو محفوظ طریقے سے استعمال کر سکتے ہیں
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isStream(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isStream](‎../_analysis/isStream.md‎)

<br>

---

<small>فائل 30 January 2026 at 23:43:30 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>