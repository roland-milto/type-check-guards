# areSymbols

## تفصیل

یہ چیک کرتا ہے کہ آیا اِن پٹ ایک بھری ہوئی array ہے جس کے تمام عناصر symbols ہیں، اور `true` یا `false` واپس کرتا ہے۔

### استعمال کا معاملہ

یہ توثیق کریں کہ ایک configuration فیلڈ (مثلاً symbols کی صورت میں ظاہر کیے گئے منفرد keys کی فہرست) ایک غیر خالی array
ہے جس میں صرف symbols ہیں، اس سے پہلے کہ اسے اُن APIs میں استعمال کیا جائے جنہیں `symbol[]` درکار ہوتا ہے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `areSymbols` کو نامعلوم اِن پٹ کی توثیق کے لیے استعمال کریں اس سے پہلے کہ اسے `symbol[]` سمجھا جائے؛ یہ non-arrays اور
> خالی arrays کے لیے `false` واپس کرتا ہے۔

### فوائد

- `true` صرف اسی وقت واپس کرتا ہے جب اِن پٹ ایک غیر خالی array ہو اور ہر عنصر ایک symbol ہو۔
- اندرونی filled-array چیک کے ذریعے non-arrays اور خالی arrays کو مسترد کر کے غلط مثبت نتائج سے بچاتا ہے۔
- مزید پروسیسنگ سے پہلے صرف symbols پر مشتمل فہرستوں کی توثیق کے لیے runtime type guard کے طور پر مفید ہے۔

## استعمال

### نحو

فنکشن:

- `areSymbols(array)`

پیرامیٹرز:

- `array`: وہ array جسے symbol عناصر کے لیے چیک کیا جانا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  //‎‎ a رن ٹائم پر صرف سمبلز پر مشتمل اَرے ہے
  const first = a[0];
  console.log(typeof first); //‎ "symbol"
}

console.log(areSymbols(b)); //‎ false
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areSymbols(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areSymbols](‎../_analysis/areSymbols.md‎)

<br>

---

<small>فائل 30 January 2026 at 14:24:30 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>