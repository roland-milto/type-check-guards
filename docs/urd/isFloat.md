# isFloat

## تفصیل

`isFloat` یہ طے کرتا ہے کہ دیا گیا `value` ایک محدود فلوٹنگ پوائنٹ نمبر ہے یا نہیں (یعنی ایسا `number` جو صحیح عدد نہ
ہو)۔

### استعمال کا معاملہ

صارف کی فراہم کردہ عددی اِن پٹ کی توثیق کریں جہاں اعشاری قدروں کی ضرورت ہو (مثلاً قیمتیں، پیمائشیں، شرحیں) اور صحیح
اعداد، `NaN` اور انفینٹیز کو مسترد کریں۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> جب آپ کو صرف محدود، غیر صحیح عددی اِن پٹس قبول کرنے ہوں تو `isFloat` استعمال کریں؛ یہ صحیح اعداد اور غیر محدود اعداد
> کو مسترد کرتا ہے۔

### فوائد

- `true` صرف محدود، غیر صحیح اعداد کے لیے واپس کرتا ہے (صحیح اعداد، `NaN`, `Infinity` اور `-Infinity` کو خارج کرتا ہے)۔
- کسی بھی اِن پٹ ٹائپ (`unknown`) کے ساتھ کام کرتا ہے اور `typeof value === "number"` چیک کر کے محفوظ طریقے سے ٹائپ کو
  محدود کرتا ہے۔
- متوقع رویّے کے لیے بلٹ اِن عددی گارڈز (`Number.isInteger`, `Number.isFinite`) استعمال کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `isFloat(value)`

پیرامیٹرز:

- `value`: وہ قدر جسے یہ جانچنے کے لیے چیک کیا جائے کہ آیا یہ فلوٹنگ پوائنٹ نمبر ہے۔

### لوکل فنکشن امپورٹ

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    //‎‎ ویلیو رن ٹائم پر ایک نمبر ہے؛ یہ محدود ہے اور عددِ صحیح نہیں ہے
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isFloat(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isFloat](‎../_analysis/isFloat.md‎)

<br>

---

<small>فائل 30 January 2026 at 16:10:22 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>