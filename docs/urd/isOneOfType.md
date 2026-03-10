# isOneOfType

## تفصیل

`isOneOfType` یہ طے کرتا ہے کہ آیا دیا گیا `value` فراہم کردہ ٹائپ اسٹرنگز میں سے کم از کم ایک سے مطابقت رکھتا ہے یا
نہیں؛ اگر کوئی بھی مطابقت مل جائے تو `true` اور بصورتِ دیگر `false` واپس کرتا ہے۔

### استعمال کا معاملہ

ڈھیلے ٹائپ والے یا بیرونی ڈیٹا (مثلاً پارس کیا گیا JSON، کوئری پیرامیٹرز) کی توثیق کریں، اس طرح کہ مزید منطق پر جانے سے
پہلے متعدد قابلِ قبول رن ٹائم اقسام (جیسے `number` یا `string`) کی اجازت دی جائے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `isOneOfType` اس وقت استعمال کریں جب آپ رن ٹائم پر یہ چیک کرنا چاہتے ہوں کہ کوئی قدر کئی مجاز اقسام میں سے کسی ایک سے
> مطابقت رکھتی ہے؛ اگر کم از کم ایک ٹائپ میچ ہو تو یہ `true` ورنہ `false` واپس کرتا ہے۔

### فوائد

- ایک ہی کال میں کسی قدر کو متعدد مجاز اقسام کے خلاف چیک کرتا ہے، اور پہلی مطابقت پر `true` واپس کرتا ہے۔
- `unknown` اِن پٹس کے ساتھ کام کرتا ہے، جس سے یہ رن ٹائم حدود پر مفید بنتا ہے (مثلاً بیرونی ڈیٹا، صارف اِن پٹ)۔
- یہ ایک سادہ بولین نتیجہ (`true`/`false`) فراہم کرتا ہے جو شرطی منطق اور ابتدائی واپسیوں کے ساتھ اچھی طرح جڑ جاتا ہے۔

## استعمال

### نحو

فنکشن:

- `isOneOfType(value, types)`

پیرامیٹرز:

- `value`: وہ قدر جسے مخصوص اقسام کے خلاف چیک کرنا ہے۔
- `types`: ٹائپ اسٹرنگز کی ایک اَرے جو قدر کی ممکنہ اقسام کی نمائندگی کرتی ہے۔

### لوکل فنکشن امپورٹ

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  //‎‎ input رن ٹائم پر ایک آبجیکٹ ہے
}

console.log(isOneOfType(3, ["number", "string"])); //‎ true
console.log(isOneOfType("hello", ["number", "boolean"])); //‎ false

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isOneOfType(value, types)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isOneOfType](‎../_analysis/isOneOfType.md‎)

<br>

---

<small>فائل 6 February 2026 at 13:54:57 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>