# areIndexesFound

## تفصیل

`areIndexesFound` یہ چیک کرتا ہے کہ آیا کوئی value ایک غیر خالی array ہے جس کے تمام عناصر درست indexes ہیں؛ اگر ہیں تو
`true` اور ورنہ `false` واپس کرتا ہے۔

### استعمال کا معاملہ

صارف کی فراہم کردہ یا بیرونی ڈیٹا (مثلاً parsed JSON) کی توثیق کریں جس سے توقع ہو کہ وہ indexes کی فہرست ہے، اس سے پہلے
کہ اسے arrays تک رسائی یا انہیں slice کرنے کے لیے استعمال کیا جائے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `areIndexesFound` کو نامعلوم اِن پٹ کی توثیق کے لیے استعمال کریں اس سے پہلے کہ اس کے عناصر کو array indexes سمجھ کر
> برتا جائے؛ یہ خالی arrays کے لیے اور ایسے arrays کے لیے جن میں غیر-index قدریں ہوں `false` واپس کرتا ہے۔

### فوائد

- یہ `true` صرف اسی وقت واپس کرتا ہے جب اِن پٹ ایک بھرا ہوا array ہو اور ہر عنصر ایک درست index ہو۔
- فوراً ناکام: جیسے ہی کوئی غیر-index عنصر ملتا ہے `false` واپس کر دیتا ہے۔
- قدروں کو array positions یا offsets کے طور پر استعمال کرنے سے پہلے guard کے طور پر مفید ہے۔

## استعمال

### نحو

فنکشن:

- `areIndexesFound(array)`

پیرامیٹرز:

- `array`: وہ array جسے index کے مطابق ہونے کی جانچ کے لیے چیک کیا جائے۔

### لوکل فنکشن امپورٹ

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); //‎ درست
console.log(areIndexesFound(b)); //‎ غلط
console.log(areIndexesFound(c)); //‎ غلط

if (areIndexesFound(a)) {
  //‎‎ یہاں، `a` کی تصدیق ہو جاتی ہے کہ یہ انڈیکسز کی بھری ہوئی ارے ہے۔
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areIndexesFound(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areIndexesFound](‎../_analysis/areIndexesFound.md‎)

<br>

---

<small>فائل 31 January 2026 at 01:04:46 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>