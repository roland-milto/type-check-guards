# areFinite

## تفصیل

`areFinite` یہ چیک کرتا ہے کہ آیا کوئی value ایک غیر خالی array ہے جس کے عناصر سب محدود (finite) اعداد ہیں؛ اگر ایسا ہو
تو `true` اور ورنہ `false` واپس کرتا ہے۔

### استعمال کا معاملہ

حسابات کرنے سے پہلے عددی اِن پٹ arrays (مثلاً chart series، coordinate lists، measurement samples) کی توثیق کریں، تاکہ
نتیجہ صرف اسی وقت `true` ہو جب تمام قدریں محدود (finite) اعداد ہوں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> جب آپ کو یہ یقینی بنانا ہو کہ کوئی array غیر خالی ہے اور اس میں صرف محدود (finite) اعداد ہیں تو `areFinite` استعمال
> کریں؛ یہ خالی arrays کے لیے اور `NaN` یا infinities پر مشتمل arrays کے لیے `false` واپس کرتا ہے۔

### فوائد

- `true` صرف اسی وقت واپس کرتا ہے جب اِن پٹ ایک غیر خالی array ہو اور ہر عنصر ایک محدود (finite) عدد ہو۔
- ہر عنصر کے لیے `isFinite` چیکس پر انحصار کرتے ہوئے `Infinity`، `-Infinity`، اور `NaN` کو مسترد کرتا ہے۔
- guards اور validation flows کے لیے موزوں ایک سادہ boolean نتیجہ (`true`/`false`) فراہم کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `areFinite(array)`

پیرامیٹرز:

- `array`: وہ array جس کے تمام عناصر کی محدود (finite) ہونے کی جانچ کرنی ہے۔

### لوکل فنکشن امپورٹ

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); //‎ درست
console.log(areFinite(b)); //‎ غلط
console.log(areFinite(c)); //‎ غلط

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); //‎ 60
console.log(sumIfFinite([10, NaN, 30])); //‎ null
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areFinite(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areFinite](‎../_analysis/areFinite.md‎)

<br>

---

<small>فائل 30 January 2026 at 16:37:53 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>