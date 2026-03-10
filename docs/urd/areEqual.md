# areEqual

## تفصیل

`areEqual` یہ چیک کرتا ہے کہ آیا array کے تمام عناصر دی گئی متوقع قدر کے برابر ہیں، اور `true` صرف غیر خالی arrays کے
لیے واپس کرتا ہے جہاں ہر آئٹم مطابقت رکھتا ہو۔

### استعمال کا معاملہ

یہ تصدیق کریں کہ ایک فہرست میں صرف ایک ہی مجاز قدر موجود ہے (مثلاً تمام status flags `true` ہوں، تمام roles `"admin"`
ہوں، یا تمام عددی اندراجات کسی مطلوبہ مستقل کے برابر ہوں) جبکہ خالی ان پٹ کو غیر معتبر (`false`) سمجھا جائے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `areEqual` اس وقت استعمال کریں جب آپ کو تمام آئٹمز کی سخت جانچ درکار ہو؛ یہ خالی arrays اور کسی بھی non-array یا غیر
> بھری ہوئی ان پٹ کے لیے `false` واپس کرتا ہے۔

### فوائد

- `true` صرف اسی وقت واپس کرتا ہے جب ہر عنصر متوقع قدر سے مطابقت رکھتا ہو؛ بصورتِ دیگر `false` واپس کرتا ہے۔
- فوراً ناکام: جیسے ہی کوئی غیر مطابقت رکھنے والا عنصر ملتا ہے، چیک کرنا روک دیتا ہے۔
- غلط ان پٹ سے حفاظت کرتا ہے: جب ان پٹ بھرا ہوا array نہ ہو تو `false` واپس کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `areEqual(value, expected)`

پیرامیٹرز:

- `value`: وہ array جسے چیک کرنا ہے۔
- `expected`: وہ عنصر جس کے ساتھ array کے ہر آئٹم کا موازنہ کرنا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areEqual(value, expected)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areEqual](‎../_analysis/areEqual.md‎)

<br>

---

<small>فائل 31 January 2026 at 23:52:41 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>