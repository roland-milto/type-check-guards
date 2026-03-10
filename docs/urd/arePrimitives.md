# arePrimitives

## تفصیل

`arePrimitives` یہ جانچتا ہے کہ فراہم کردہ، غیر خالی array کے تمام عناصر بنیادی (primitive) اقسام ہیں یا نہیں۔

### استعمال کا معاملہ

آنے والے ڈیٹا (مثلاً query parameters، CSV row values، یا IDs/tags کی فہرست) کی توثیق کریں کہ اس میں صرف بنیادی قدریں
ہیں، اس سے پہلے کہ آپ اسے serialize کریں، hash کریں، log کریں، یا اسے ایسے APIs کو پاس کریں جنہیں آبجیکٹس موصول نہیں
ہونے چاہئیں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `arePrimitives` اس وقت استعمال کریں جب آپ کو مزید پروسیسنگ سے پہلے یہ یقینی بنانا ہو کہ ایک `unknown[]` میں صرف بنیادی
> قدریں (string, number, bigint, boolean, symbol, undefined, یا null) موجود ہیں۔

### فوائد

- `true` صرف اسی وقت واپس کرتا ہے جب ہر عنصر ایک بنیادی (primitive) قدر ہو، جس سے یہ “کوئی آبجیکٹس/فنکشنز نہیں” والی
  arrays کے لیے ایک سخت گارڈ بن جاتا ہے۔
- فوراً ناکام ہوتا ہے: جیسے ہی کوئی غیر بنیادی عنصر ملتا ہے `false` واپس کر دیتا ہے۔
- غیر-array اور خالی arrays کے لیے بھی `false` واپس کرتا ہے (filled-array چیک کے ذریعے)، جس سے غلط input کی حادثاتی
  قبولیت روکی جاتی ہے۔

## استعمال

### نحو

فنکشن:

- `arePrimitives(array)`

پیرامیٹرز:

- `array`: وہ array جسے بنیادی (primitive) قسم کے عناصر کے لیے چیک کیا جانا ہے۔

### لوکل فنکشن امپورٹ

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); //‎ درست
const r2 = arePrimitives(b); //‎ درست
const r3 = arePrimitives(c); //‎ غلط
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.arePrimitives(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [arePrimitives](‎../_analysis/arePrimitives.md‎)

<br>

---

<small>فائل 31 January 2026 at 00:07:07 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>