# isInteger

## تفصیل

یہ تعین کرتا ہے کہ دیا گیا `value` ایک محفوظ عددِ صحیح نمبر ہے یا نہیں۔

### استعمال کا معاملہ

غیر معتبر ان پٹ (مثلاً query params، JSON payloads، environment variables) کو عددِ صحیح کے طور پر استعمال کرنے سے پہلے
توثیق کریں—اَرے انڈیکسز، pagination، کاؤنٹرز، یا ڈیٹابیس IDs کے لیے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> نامعلوم ان پٹ کو عددِ صحیح عددی قدر سمجھنے سے پہلے اس کی توثیق کے لیے `isInteger` استعمال کریں؛ یہ `true` صرف اُن
> قدروں کے لیے واپس کرتا ہے جہاں `typeof value === "number"` اور `Number.isSafeInteger(value)` ہو۔

### فوائد

- قسم (type) اور عددی حفاظت دونوں کی جانچ کرتا ہے: `true` صرف تب واپس کرتا ہے جب ان پٹ ایک نمبر ہو اور ایک محفوظ عددِ
  صحیح ہو۔
- عددی جبری تبدیلی (numeric coercion) کے عام مسائل سے بچاتا ہے: "5" جیسی سٹرنگز درست طور پر `false` واپس کرتی ہیں۔
- غیر عددِ صحیح اور غیر محفوظ عددِ صحیح کو مسترد کرتا ہے، جس سے یہ IDs، کاؤنٹرز، اور اَرے انڈیکسنگ کے لیے موزوں بنتا ہے۔

## استعمال

### نحو

فنکشن:

- `isInteger(value)`

پیرامیٹرز:

- `value`: عددِ صحیح ہونے کی حیثیت جانچنے کے لیے قدر۔

### لوکل فنکشن امپورٹ

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      //‎ درست
const b = isInteger(-100);   //‎ درست
const c = isInteger("5");    //‎ غلط
const d = isInteger(5.5);    //‎ غلط
const e = isInteger(null);   //‎ غلط

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isInteger(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isInteger](‎../_analysis/isInteger.md‎)

<br>

---

<small>فائل 31 January 2026 at 00:51:52 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>