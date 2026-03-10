# isFinite

## تفصیل

یہ تعین کرتا ہے کہ دیا گیا `value` ایک محدود `number` ہے یا نہیں۔

### استعمال کا معاملہ

عددی حسابات کرنے سے پہلے نامعلوم اِن پٹ (مثلاً JSON، فارمز، یا APIs سے) کی توثیق کے لیے `isFinite` استعمال کریں، تاکہ یہ
یقینی ہو کہ قدر ایک حقیقی، محدود عدد ہے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `isFinite` صرف محدود اعداد کے لیے `true` واپس کرتا ہے؛ یہ `NaN`، `Infinity`، اور کسی بھی غیر عددی قدر کے لیے `false`
> واپس کرتا ہے۔

### فوائد

- قابلِ اعتماد محدودیت (finite) کی جانچ کے لیے بلٹ اِن `Number.isFinite` استعمال کرتا ہے۔
- صرف محدود اعداد کے لیے `true` واپس کرتا ہے؛ `NaN`، `Infinity`، اور غیر عددی اِن پٹس کے لیے `false` واپس کرتا ہے۔
- سادہ، بغیر سائیڈ ایفیکٹس کے predicate جو ویلیڈیشن اور گارڈنگ لاجک کے لیے موزوں ہے۔

## استعمال

### نحو

فنکشن:

- `isFinite(value)`

پیرامیٹرز:

- `value`: وہ قدر جس کی محدودیت (finite) کی جانچ کرنی ہے۔

### لوکل فنکشن امپورٹ

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
//‎‎ finiteNumbers یہ ہے: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  //‎‎ یہاں value ایک محدود عدد ہے
  const doubled = value * 2;
  console.log(doubled);
}
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isFinite(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isFinite](‎../_analysis/isFinite.md‎)

<br>

---

<small>فائل 30 January 2026 at 16:32:10 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>