# areWeakSets

## تفصیل

چیک کرتا ہے کہ آیا ان پٹ ایک غیر خالی اَرے ہے جس میں ہر عنصر `WeakSet` ہو، اور صرف اسی صورت میں `true` واپس کرتا ہے۔

### استعمال کا معاملہ

رن ٹائم ان پٹ (مثلاً APIs، کنفیگریشن، یا صارف کی فراہم کردہ ڈیٹا) کی توثیق کریں تاکہ آگے بڑھنے سے پہلے یہ یقینی ہو جائے
کہ آپ کے پاس `WeakSet` انسٹینسز کی ایک غیر خالی فہرست ہے، اس منطق سے پہلے جو `WeakSet` کے رویّے پر منحصر ہو۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `areWeakSets` کو نامعلوم ان پٹ کی توثیق کے لیے استعمال کریں اس سے پہلے کہ اسے `WeakSet[]` سمجھ کر استعمال کریں۔ یہ
> خالی اَریز اور غیر اَریز کے لیے `false` واپس کرتا ہے۔

### فوائد

- یقینی بناتا ہے کہ ان پٹ اَرے کا ہر عنصر ایک `WeakSet` ہے۔
- خالی اَریز کے لیے `false` واپس کرتا ہے، جس سے گمشدہ ڈیٹا پر غلطی سے “سب درست” جیسے نتائج سے بچاؤ ہوتا ہے۔
- جب ان پٹ بھرا ہوا اَرے نہ ہو (بشمول `null`) تو `false` واپس کر کے محفوظ طریقے سے ناکام ہوتا ہے۔
- `WeakSet` انسٹینسز کی ضرورت والی کارروائیاں کرنے سے پہلے گارڈ کے طور پر مفید ہے۔

## استعمال

### نحو

فنکشن:

- `areWeakSets(array)`

پیرامیٹرز:

- `array`: `WeakSet` آبجیکٹس کے لیے چیک کیا جانے والا اَرے۔

### لوکل فنکشن امپورٹ

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  //‎‎ a WeakSet کی مثالوں کی ایک غیر خالی صف ہے
}

console.log(areWeakSets(a)); //‎ درست
console.log(areWeakSets(b)); //‎ غلط
console.log(areWeakSets(c)); //‎ غلط
console.log(areWeakSets(null as unknown)); //‎ غلط
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areWeakSets(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areWeakSets](‎../_analysis/areWeakSets.md‎)

<br>

---

<small>فائل 30 January 2026 at 14:11:31 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>