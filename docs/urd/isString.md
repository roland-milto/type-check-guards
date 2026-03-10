# isString

## تفصیل

`isString` یہ طے کرتا ہے کہ دی گئی قدر ایک string ہے یا نہیں۔

### استعمال کا معاملہ

runtime پر صارف کے ان پٹ، API payload کے فیلڈز، یا configuration کی قدروں کی توثیق کریں تاکہ string آپریشنز (مثلاً
trimming، splitting، case conversion) لگانے سے پہلے یہ یقینی بنایا جا سکے کہ قدر ایک string ہے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `isString` کو `unknown` یا ڈھیلے ٹائپ والی قدروں کی توثیق کے لیے استعمال کریں، string methods کال کرنے سے پہلے؛ یہ صرف
> اسی وقت `true` واپس کرتا ہے جب `typeof value === "string"` ہو۔

### فوائد

- `typeof` استعمال کرتے ہوئے سادہ اور تیز جانچ۔
- ایک قابلِ پیش گوئی boolean نتیجہ واپس کرتا ہے: strings کے لیے `true`، ورنہ `false`۔
- خالی اور غیر خالی دونوں strings کے لیے کام کرتا ہے۔
- string سے متعلق مخصوص آپریشنز کرنے سے پہلے ایک ہلکے پھلکے runtime guard کے طور پر مفید ہے۔

## استعمال

### نحو

فنکشن:

- `isString(value)`

پیرامیٹرز:

- `value`: string ٹائپ کے لیے جانچے جانے والی قدر۔

### لوکل فنکشن امپورٹ

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  //‎‎ یہاں input ایک سٹرنگ ہے
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isString(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isString](‎../_analysis/isString.md‎)

<br>

---

<small>فائل 30 January 2026 at 13:16:10 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>