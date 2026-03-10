# isNull

## تفصیل

یہ طے کرتا ہے کہ فراہم کردہ `value` آیا `null` ہے یا نہیں۔

### استعمال کا معاملہ

`isNull` کو ان پٹس یا API پے لوڈ فیلڈز کی توثیق کے لیے استعمال کریں جہاں `null` ایک معنی خیز sentinel قدر ہو اور اسے
`undefined` یا دیگر قدروں سے مختلف طریقے سے ہینڈل کرنا ضروری ہو۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `isNull` اس وقت استعمال کریں جب آپ کو `null` کو `undefined` اور دیگر falsy قدروں سے الگ پہچاننے کی ضرورت ہو؛ یہ صرف
`null` کے لیے `true` واپس کرتا ہے۔

### فوائد

- `null` کے لیے ایک درست جانچ فراہم کرتا ہے، اسے `undefined` کے ساتھ خلط ملط کیے بغیر۔
- کسی بھی ان پٹ ٹائپ کے لیے قابلِ اعتماد طور پر کام کرتا ہے کیونکہ یہ `unknown` قبول کرتا ہے۔
- سادہ، تیز، اور بغیر سائیڈ ایفیکٹس کے؛ صرف `true` یا `false` واپس کرتا ہے۔

## استعمال

### نحو

فنکشن:

- `isNull(value)`

پیرامیٹرز:

- `value`: `null` کے لیے چیک کرنے والی قدر۔

### لوکل فنکشن امپورٹ

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); //‎ درست
console.log(isNull(b)); //‎ غلط

if (isNull(a)) {
  //‎‎ یہاں a null ہے
}
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.isNull(value)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [isNull](‎../_analysis/isNull.md‎)

<br>

---

<small>فائل 31 January 2026 at 15:41:16 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>