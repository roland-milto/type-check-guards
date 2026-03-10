# areFilledArrays

## تفصیل

`areFilledArrays` چیک کرتا ہے کہ آیا دو بُعدی array خالی نہیں ہے اور اس کی تمام ذیلی arrays خالی نہیں ہیں۔

### استعمال کا معاملہ

جدولی یا matrix جیسی input (مثلاً CSV rows، grid data، grouped results) کی توثیق کے لیے `areFilledArrays` استعمال کریں
تاکہ آپ محفوظ طریقے سے یہ فرض کر سکیں کہ کم از کم ایک subarray موجود ہے اور کوئی بھی subarray خالی نہیں ہے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> جب آپ کو یہ یقینی بنانا ہو کہ 2D array میں کم از کم ایک row ہو اور ہر row میں کم از کم ایک element ہو، اس سے پہلے کہ
> آپ اس پر iterate کریں یا اس میں index کریں، تو `areFilledArrays` استعمال کریں۔

### فوائد

- یہ تصدیق کرتا ہے کہ بیرونی array خالی نہیں ہے اور ہر اندرونی array بھی خالی نہیں ہے، اور صرف اسی صورت میں `true` واپس
  کرتا ہے جب دونوں شرائط پوری ہوں۔
- ذیلی arrays کے اندر کسی بھی قسم کے عناصر (مثلاً numbers، strings، objects، nested arrays) کے ساتھ کام کرتا ہے کیونکہ
  یہ صرف array کے “filled” ہونے کی حالت چیک کرتا ہے، عناصر کے مواد کو نہیں۔
- ایک سادہ boolean نتیجہ (`true`/`false`) فراہم کرتا ہے جو دو بُعدی ڈیٹا کو پروسیس کرنے سے پہلے guards کے طور پر موزوں
  ہے۔

## استعمال

### نحو

فنکشن:

- `areFilledArrays(array)`

پیرامیٹرز:

- `array`: چیک کرنے کے لیے دو بُعدی array۔

### لوکل فنکشن امپورٹ

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); //‎ درست
console.log(areFilledArrays(b)); //‎ درست
console.log(areFilledArrays(c)); //‎ درست
console.log(areFilledArrays(d)); //‎ غلط
console.log(areFilledArrays(e)); //‎ غلط
console.log(areFilledArrays(f)); //‎ غلط

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areFilledArrays(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areFilledArrays](‎../_analysis/areFilledArrays.md‎)

<br>

---

<small>فائل 6 February 2026 at 11:59:40 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>