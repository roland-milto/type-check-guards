# areOneOfType

## تفصیل

`areOneOfType` چیک کرتا ہے کہ آیا ایک غیر خالی array کے تمام عناصر مخصوص runtime types میں سے کسی ایک کے ہیں۔

### استعمال کا معاملہ

آنے والے ڈیٹا (مثلاً parsed JSON) کی توثیق کریں جہاں کسی فیلڈ کو ایک غیر خالی array ہونا ضروری ہو جس کے items معلوم
primitive types کے ایک معروف سیٹ تک محدود ہوں؛ جب array خالی ہو یا اس میں کوئی بھی غیر مجاز type شامل ہو تو `false` واپس
کریں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> یہ فنکشن boolean واپس کرتا ہے اور compile time پر array کے element types کو narrow نہیں کرتا؛ مزید پروسیسنگ سے پہلے
> اسے runtime validation کے مرحلے کے طور پر استعمال کریں۔

### فوائد

- یقینی بناتا ہے کہ ایک array میں ہر عنصر کم از کم ایک مجاز runtime type سے مطابقت رکھتا ہو، اور صرف اسی وقت `true` واپس
  کرتا ہے جب پوری array پاس ہو جائے۔
- غلط inputs کو جلدی مسترد کرتا ہے: جب `array` یا `types` خالی ہو یا filled array نہ ہو تو `false` واپس کرتا ہے۔
- مخلوط قسم کی collections (مثلاً numbers اور strings) کی توثیق کے لیے `areOneOfType` کو ایک ہی کال میں مفید ہے۔

## استعمال

### نحو

فنکشن:

- `areOneOfType(array, types)`

پیرامیٹرز:

- `array`: عناصر کی ایک array جسے فراہم کردہ types کے مقابلے میں جانچنا ہے۔
- `types`: strings کی ایک array جو اُن data types کی نمائندگی کرتی ہے جن کے خلاف چیک کرنا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areOneOfType(array, types)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areOneOfType](‎../_analysis/areOneOfType.md‎)

<br>

---

<small>فائل 31 January 2026 at 23:39:09 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>