# isBuffer

## تفصیل

چیک کرتا ہے کہ آیا کوئی ویلیو Node.js `Buffer` ہے اور `true` یا `false` واپس کرتا ہے۔

### استعمال کا معاملہ

رن ٹائم پر اِن پٹس (مثلاً API پے لوڈز، فائل ڈیٹا، یا میسج بفرز) کی ویلیڈیشن کریں تاکہ پروسیسنگ سے پہلے یہ یقینی بنایا جا
سکے کہ ویلیو ایک `Buffer` ہے، اور Node.js کے باہر چلنے کی صورت میں جہاں `Buffer` موجود نہ ہو، قابلِ اعتماد طور پر
`false` حاصل کریں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `isBuffer` استعمال کریں تاکہ `unknown` ویلیوز کو `Buffer` تک نیرَو کیا جا سکے، اس سے پہلے کہ Buffer-اسپیسفک میتھڈز کال
> کیے جائیں۔

### فوائد

- `Buffer.isBuffer` استعمال کرتے ہوئے Node.js `Buffer` انسٹینسز کو محفوظ طریقے سے شناخت کرتا ہے۔
- ایسے ماحول میں جہاں `Buffer` دستیاب نہ ہو، `false` واپس کرتا ہے، جس سے رن ٹائم ایررز سے بچاؤ ہوتا ہے۔
- `unknown` اِن پٹ کے ساتھ کام کرتا ہے، جس سے یہ رن ٹائم ویلیڈیشن اور ٹائپ نیرونگ کے لیے موزوں بنتا ہے۔

## استعمال

### نحو

فنکشن:

- `isBuffer(value)`

پیرامیٹرز:

- `value`: جس ویلیو کو ٹیسٹ کرنا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); //‎ درست
console.log(isBuffer(b)); //‎ غلط

if (isBuffer(a)) {
  //‎‎ یہاں a ایک Buffer ہے
  console.log(a.toString("utf8"));
}
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isBuffer(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isBuffer](‎../_analysis/isBuffer.md‎)

<br>

---

<small>فائل 31 January 2026 at 16:33:49 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>