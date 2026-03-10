# isNumber

## تفصیل

`isNumber` چیک کرتا ہے کہ آیا کوئی ویلیو محدود (finite)، غیر-`NaN` نمبر ہے۔

### استعمال کا معاملہ

غیر معتبر ذرائع (فارمز، کوئری پیرامیٹرز، JSON پے لوڈز) سے آنے والے عددی اِن پٹ کو حساب، اسٹوریج، یا رینج چیکس سے پہلے
ویلیڈیٹ کریں، تاکہ صرف محدود نمبرز پاس ہوں (`true`) اور باقی سب کے لیے `false` واپس آئے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `unknown` ویلیوز پر حسابی عمل کرنے سے پہلے انہیں ویلیڈیٹ کرنے کے لیے `isNumber` استعمال کریں؛ یہ `NaN`, `Infinity`,
> اور `-Infinity` کو مسترد کرتا ہے۔

### فوائد

- `true` صرف حقیقی JavaScript نمبروں کے لیے واپس کرتا ہے (ٹائپ چیک کے ساتھ `NaN` اور انفینٹی کی نفی).
- عام ویلیڈیشن بگز سے بچاتا ہے جہاں `NaN`, `Infinity`, یا `-Infinity` غلطی سے نمبر کے طور پر پاس ہو جاتے ہیں۔
- نامعلوم اِن پٹ (مثلاً JSON، صارف اِن پٹ، بیرونی APIs) کے لیے رن ٹائم گارڈ کے طور پر اچھی طرح کام کرتا ہے۔
- سادہ، تیز، اور سائیڈ ایفیکٹ سے پاک۔

## استعمال

### نحو

فنکشن:

- `isNumber(value)`

پیرامیٹرز:

- `value`: چیک کرنے کے لیے ویلیو۔

### لوکل فنکشن امپورٹ

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  //‎‎ input ایک درست محدود عدد ہے
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isNumber(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isNumber](‎../_analysis/isNumber.md‎)

<br>

---

<small>فائل 30 January 2026 at 13:11:45 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>