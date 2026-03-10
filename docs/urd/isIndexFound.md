# isIndexFound

## تفصیل

`isIndexFound` یہ طے کرتا ہے کہ دی گئی قدر غیر منفی عددِ صحیح ہے یا نہیں، جس سے ظاہر ہوتا ہے کہ ایک انڈیکس ملا ہے۔

### استعمال کا معاملہ

یہ تصدیق کریں کہ سرچ کا نتیجہ قابلِ استعمال انڈیکس (عددِ صحیح `>= 0`) کی نمائندگی کرتا ہے، اس سے پہلے کہ آپ array یا
string میں انڈیکسنگ کریں، تاکہ `-1` یا غیر عددی قدروں کے حادثاتی استعمال سے بچا جا سکے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `isIndexFound` کو `indexOf`, `findIndex`، یا کسٹم سرچز جیسے آپریشنز کے بعد استعمال کریں جہاں `-1` (یا دیگر غیر درست
> قدریں) “not found” کی نشاندہی کر سکتی ہیں۔ جب یہ `true` واپس کرے تو قدر ایک نمبر ہوتی ہے اور اسے array/string انڈیکس
> کے
> طور پر محفوظ طریقے سے استعمال کیا جا سکتا ہے۔

### فوائد

- ایک سادہ ٹائپ گارڈ فراہم کرتا ہے تاکہ یہ معلوم کیا جا سکے کہ آیا کوئی انڈیکس ملا ہے یا نہیں، اس کے لیے غیر منفی عددِ
  صحیح کی جانچ کرتا ہے۔
- صرف درست انڈیکس جیسی قدروں (عددِ صحیح `>= 0`) کے لیے `true` واپس کرتا ہے، منفی قدروں، غیر عددِ صحیح قدروں، اور غیر
  عددی قدروں کو مسترد کرتا ہے۔
- ایسی APIs کے ساتھ کام کرتے وقت آف بائی ون اور سینٹینل ویلیو کی غلطیوں سے بچنے میں مدد دیتا ہے جو “not found” کے لیے
  `-1` واپس کرتی ہیں۔

## استعمال

### نحو

فنکشن:

- `isIndexFound(value)`

پیرامیٹرز:

- `value`: وہ قدر جسے یہ جانچنے کے لیے دیکھا جائے کہ آیا یہ غیر منفی عددِ صحیح ہے۔

### لوکل فنکشن امپورٹ

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  //‎‎ idx یہاں ایک عدد ہے اور >= 0 ہے
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

//‎‎ indexOf کے ساتھ عام استعمال
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isIndexFound(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isIndexFound](‎../_analysis/isIndexFound.md‎)

<br>

---

<small>فائل 31 January 2026 at 00:48:26 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>