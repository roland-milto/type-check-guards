# areTrue

## تفصیل

چیک کرتا ہے کہ آیا ایک غیر خالی array میں صرف boolean `true` قدریں موجود ہیں۔

### استعمال کا معاملہ

`areTrue` استعمال کریں تاکہ یہ تصدیق ہو سکے کہ پیشگی شرائط یا feature flags کا ایک مجموعہ سب فعال ہیں (تمام قدریں `true`
ہیں) قبل اس کے کہ آگے بڑھیں، جبکہ خالی یا خراب inputs کو پورا نہ ہونے والا (`false`) سمجھا جائے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `areTrue` خالی array کے لیے اور اُن arrays کے لیے جن میں کوئی بھی قدر سختی سے `true` نہ ہو، `false` واپس کرتا ہے۔

### فوائد

- `true` صرف اسی وقت واپس کرتا ہے جب ہر عنصر سختی سے `true` ہو اور array خالی نہ ہو۔
- تیزی سے ناکام ہوتا ہے: جیسے ہی کوئی غیر-`true` قدر ملتی ہے `false` واپس کر دیتا ہے۔
- غلط inputs (non-arrays یا خالی arrays) کو `false` واپس کر کے مسترد کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `areTrue(array)`

پیرامیٹرز:

- `array`: وہ array جسے تمام `true` قدروں کے لیے چیک کرنا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areTrue(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areTrue](‎../_analysis/areTrue.md‎)

<br>

---

<small>فائل 30 January 2026 at 13:53:14 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>