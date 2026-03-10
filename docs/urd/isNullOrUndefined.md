# isNullOrUndefined

## تفصیل

چیک کرتا ہے کہ آیا دی گئی قدر `null` یا `undefined` ہے۔

### استعمال کا معاملہ

`isNullOrUndefined` اس وقت استعمال کریں جب آپ کو `null` اور `undefined` دونوں کو “کوئی قدر نہیں” سمجھنا ہو، مثلاً
اختیاری اِن پٹس کی ویلیڈیشن، API پے لوڈز کو نارملائز کرنا، یا کسی ممکنہ طور پر غائب قدر کو ڈی ریفرنس کرنے سے پہلے کوڈ
پاتھس کی حفاظت کرنا۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> پراپرٹیز تک رسائی یا میتھڈز کال کرنے سے پہلے غائب اقدار سے بچاؤ کے لیے `isNullOrUndefined` استعمال کریں؛ یہ صرف `null`
> اور `undefined` کے لیے `true` واپس کرتا ہے۔

### فوائد

- ایک ہی جگہ پر `null` اور `undefined` کی شناخت کے لیے ایک واضح، دوبارہ قابلِ استعمال گارڈ فراہم کرتا ہے۔
- ایک سادہ بولین (`true`/`false`) واپس کرتا ہے جسے شرائط اور ویلیڈیشنز میں آسانی سے کمپوز کیا جا سکتا ہے۔
- پراپرٹیز تک رسائی یا میتھڈز کال کرنے سے پہلے غائب اقدار کی جانچ کر کے عام رن ٹائم غلطیوں سے بچنے میں مدد دیتا ہے۔

## استعمال

### نحو

فنکشن:

- `isNullOrUndefined(value)`

پیرامیٹرز:

- `value`: `null` یا `undefined` کے لیے چیک کی جانے والی قدر۔

### لوکل فنکشن امپورٹ

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  //‎‎ غائب قدر کو سنبھالیں
}

console.log(isNullOrUndefined(b)); //‎ درست
console.log(isNullOrUndefined(c)); //‎ غلط

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isNullOrUndefined(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isNullOrUndefined](‎../_analysis/isNullOrUndefined.md‎)

<br>

---

<small>فائل 31 January 2026 at 00:35:43 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>