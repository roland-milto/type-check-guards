# isOctal

## تفصیل

یہ طے کرتا ہے کہ آیا کوئی قدر ایک درست آکٹل لِٹرل string ہے (مثلاً `0o755`)۔

### استعمال کا معاملہ

یوزر اِن پٹ یا کنفیگریشن ویلیوز کی توثیق کریں جنہیں آکٹل لِٹرل string کی صورت میں ہونا ضروری ہے (مثال کے طور پر، فائل
پرمیشن موڈز جیسے `0o644`) اس سے پہلے کہ آپ انہیں parse کریں یا convert کریں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `isOctal` ایک ٹائپ گارڈ ہے (`value is string`)۔ `true` نتیجے کے بعد، TypeScript چیک کی گئی ویری ایبل کو `string` تک
> narrow کر دیتا ہے۔

### فوائد

- ایک سخت ٹائپ گارڈ فراہم کرتا ہے: صرف اسی وقت `true` واپس کرتا ہے جب ان پٹ ایک ایسی string ہو جو آکٹل لِٹرل فارمیٹ سے
  میچ کرے۔
- خالی strings اور وہ strings جن کے شروع/آخر میں whitespace (ASCII control/space) ہو، مسترد کرتا ہے، جس سے غیر ارادی
  میچز کم ہوتے ہیں۔
- `0o`/`0O` پری فکس کے لیے اختیاری sign کو سپورٹ کرتا ہے اور case-insensitive ہے۔
- غیر-string ان پٹس کے لیے نرم رویہ رکھتا ہے: exception پھینکنے کے بجائے `false` واپس کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `isOctal(value)`

پیرامیٹرز:

- `value`: چیک کیے جانے والی قدر۔

### لوکل فنکشن امپورٹ

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); //‎ درست
console.log(isOctal(b)); //‎ درست
console.log(isOctal(c)); //‎ غلط
console.log(isOctal(d)); //‎ غلط

if (isOctal(a)) {
  //‎‎ یہاں a سٹرنگ ہے
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isOctal(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isOctal](‎../_analysis/isOctal.md‎)

<br>

---

<small>فائل 30 January 2026 at 15:43:58 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>