# areBinaries

## تفصیل

یہ چیک کرتا ہے کہ فراہم کردہ قدر درست بائنری strings کی ایک غیر خالی array ہے یا نہیں، اور صرف اسی صورت میں `true` واپس
کرتا ہے جب تمام آئٹمز validation پاس کریں۔

### استعمال کا معاملہ

جب آپ کو کوئی نامعلوم فہرست (مثلاً JSON، forms، یا APIs سے) موصول ہو اور parsing یا processing سے پہلے یہ یقینی بنانا ہو
کہ یہ بائنری strings کی ایک غیر خالی array ہے، تو `areBinaries` استعمال کریں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> نامعلوم input کو numbers/BigInts میں تبدیل کرنے سے پہلے اسے validate کرنے کے لیے `areBinaries` استعمال کریں؛ یہ یقینی
> بناتا ہے کہ array غیر خالی ہو اور ہر عنصر ایک درست بائنری string ہو۔

### فوائد

- یہ تصدیق کرتا ہے کہ کوئی قدر ایک غیر خالی array ہے جس میں ہر عنصر ایک درست بائنری string ہے۔
- ایک سادہ boolean نتیجہ (`true`/`false`) واپس کرتا ہے جو guards، early returns، اور input validation کے لیے موزوں ہے۔
- کسی بھی غیر بائنری اندراج پر مشتمل arrays کو مسترد کر کے بعد کی parsing errors سے بچاتا ہے۔

## استعمال

### نحو

فنکشن:

- `areBinaries(array)`

پیرامیٹرز:

- `array`: وہ قدر جسے چیک کیا جانا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); //‎ درست
console.log(areBinaries(b)); //‎ غلط
console.log(areBinaries([])); //‎ غلط
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areBinaries(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areBinaries](‎../_analysis/areBinaries.md‎)

<br>

---

<small>فائل 31 January 2026 at 23:16:25 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>