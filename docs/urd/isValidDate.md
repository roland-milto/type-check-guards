# isValidDate

## تفصیل

`isValidDate` چیک کرتا ہے کہ دی گئی قدر ایک درست `Date` object ہے یا نہیں، اور صرف حقیقی، غیر غلط تاریخوں کے لیے `true`
واپس کرتا ہے۔

### استعمال کا معاملہ

یوزر ان پٹ یا API ڈیٹا کی توثیق کریں جس میں تاریخیں شامل ہو سکتی ہیں، تاکہ date calculations، formatting، یا comparisons
کرنے سے پہلے یہ یقینی بنایا جا سکے کہ قدر ایک حقیقی `Date` instance ہے اور کوئی invalid date نہیں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `unknown` کے طور پر typed قدروں پر `Date` methods (مثلاً `toISOString`, `getTime`) کال کرنے سے پہلے `isValidDate`
> استعمال کریں تاکہ یہ یقینی ہو سکے کہ وہ درست `Date` objects ہیں۔

### فوائد

- یقینی بناتا ہے کہ کوئی قدر `Date` کی ایک instance ہے اور صرف تاریخ جیسی string یا number نہیں۔
- غلط تاریخوں کو مسترد کرتا ہے (مثلاً `new Date("invalid")`) کیونکہ یہ `NaN` وقت کی قدروں کو چیک کرتا ہے۔
- سادہ boolean guard جو conditionals اور validation pipelines میں استعمال کرنا آسان ہے۔
- ان پٹ کی پہلے تصدیق کر کے date methods کال کرتے وقت runtime errors سے بچنے میں مدد دیتا ہے۔

## استعمال

### نحو

فنکشن:

- `isValidDate(value)`

پیرامیٹرز:

- `value`: چیک کی جانے والی قدر۔

### لوکل فنکشن امپورٹ

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  //‎‎ input ایک درست Date انسٹینس ہے
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); //‎ false
console.log(isValidDate("2025-12-22")); //‎ false

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isValidDate(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isValidDate](‎../_analysis/isValidDate.md‎)

<br>

---

<small>فائل 30 January 2026 at 16:53:29 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>