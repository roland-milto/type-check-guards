# isOfType

## تفصیل

یہ تعین کرتا ہے کہ آیا دیا گیا `value` کسی مخصوص type string سے مطابقت رکھتا ہے، primitives کے لیے `typeof` اور پیچیدہ
types کے لیے fallback استعمال کرتے ہوئے۔

### استعمال کا معاملہ

`unknown` ان پٹس (مثلاً API responses، user input، parsed JSON) کی توثیق اور narrowing کریں، اس سے پہلے کہ type-specific
عملیات انجام دیں یہ چیک کر کے کہ آیا کوئی قدر متوقع type string کی ہے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `unknown` اقدار کے ساتھ کام کرتے وقت runtime types کی بنیاد پر branching کے لیے `isOfType` استعمال کریں؛ یہ `true`/
`false` واپس کرتا ہے اور `null` اور `undefined` کو واضح طور پر ہینڈل کرتا ہے۔

### فوائد

- رفتار اور وضاحت کے لیے براہِ راست `typeof` کے ذریعے primitives کی جانچ کرتا ہے۔
- `null` اور `undefined` کو درست طور پر سنبھالتا ہے، جنہیں صرف `typeof` مطلوبہ انداز میں الگ نہیں کر سکتا۔
- `getTypeOf` استعمال کرتے ہوئے fallback موازنہ کے ذریعے پیچیدہ یا حسبِ ضرورت type strings کی معاونت کرتا ہے۔
- guards اور branching کے لیے موزوں ایک سادہ boolean نتیجہ (`true`/`false`) واپس کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `isOfType(value, type)`

پیرامیٹرز:

- `value`: `type` کے مقابلے میں جانچنے کے لیے قدر۔
- `type`: جس type کے خلاف جانچ کرنی ہے اس کی string نمائندگی۔

### لوکل فنکشن امپورٹ

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  //‎‎ یہاں input ایک عدد ہے
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  //‎‎ یہاں input ایک سٹرنگ ہے
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isOfType(value, type)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isOfType](‎../_analysis/isOfType.md‎)

<br>

---

<small>فائل 30 January 2026 at 17:07:13 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>