# isBigInt

## تفصیل

`isBigInt` چیک کرتا ہے کہ آیا دی گئی ویلیو کی قسم `bigint` ہے یا نہیں؛ BigInt پرِمِٹِوز کے لیے `true` اور بصورتِ دیگر
`false` واپس کرتا ہے۔

### استعمال کا معاملہ

غیر ٹائپ شدہ ذرائع (مثلاً JSON parsing، صارف کا اِن پُٹ، بیرونی APIs) سے آنے والی ویلیوز کی توثیق اور محدود (narrow)
کریں، اس سے پہلے کہ BigInt-مخصوص حسابات انجام دیں یا انہیں صرف-BigInt فیلڈز میں محفوظ کریں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> BigInt حسابی عمل (مثلاً `+`, `*`) کرنے سے پہلے `unknown` کو `bigint` تک محدود (narrow) کرنے کے لیے `isBigInt` استعمال
> کریں، کیونکہ اس کے لیے BigInt اوپرینڈز درکار ہوتے ہیں۔

### فوائد

- `bigint` پرِمِٹو ٹائپ کے لیے ایک سادہ اور قابلِ اعتماد رن ٹائم چیک فراہم کرتا ہے۔
- BigInt-صرف آپریشنز انجام دینے سے پہلے `unknown` ویلیوز کو محدود (narrow) کرنے میں مدد دیتا ہے۔
- غلط مثبت نتائج سے بچاتا ہے: عام نمبرز، اسٹرنگز، اور دیگر اقسام `false` واپس کرتی ہیں۔

## استعمال

### نحو

فنکشن:

- `isBigInt(value)`

پیرامیٹرز:

- `value`: چیک کرنے کے لیے ویلیو۔

### لوکل فنکشن امپورٹ

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); //‎ درست
console.log(isBigInt(10));  //‎ غلط
console.log(isBigInt("10")); //‎ غلط

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isBigInt(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isBigInt](‎../_analysis/isBigInt.md‎)

<br>

---

<small>فائل 31 January 2026 at 23:33:45 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>