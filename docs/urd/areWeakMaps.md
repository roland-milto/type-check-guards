# areWeakMaps

## تفصیل

`areWeakMaps` چیک کرتا ہے کہ آیا کوئی value ایک non-empty array ہے جس میں ہر عنصر `WeakMap` ہو، اور صرف اسی صورت میں
`true` واپس کرتا ہے ورنہ `false`۔

### استعمال کا معاملہ

Runtime ڈیٹا (مثلاً parsed JSON، plugin inputs، یا loosely typed configuration) کو validate کریں تاکہ یہ یقینی ہو کہ یہ
`WeakMap` instances کی ایک non-empty array ہے، اس سے پہلے کہ آپ iterate کریں اور `WeakMap` methods کال کریں؛ جب کوئی بھی
عنصر `WeakMap` نہ ہو یا array خالی ہو تو `false` واپس کرتا ہے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> نامعلوم input کو non-empty `WeakMap[]` سمجھنے سے پہلے اسے validate کرنے کے لیے `areWeakMaps` استعمال کریں؛ یہ خالی
> arrays کے لیے `false` واپس کرتا ہے۔

### فوائد

- یقینی بناتا ہے کہ فراہم کردہ array کا ہر عنصر `WeakMap` کی instance ہے۔
- خالی arrays کے لیے `false` واپس کرتا ہے، جس سے “کوئی ڈیٹا نہیں” کو غلطی سے درست input کے طور پر قبول ہونے سے روکا جاتا
  ہے۔
- تمام items پر `WeakMap`-specific operations کرنے سے پہلے بطور guard مفید ہے۔

## استعمال

### نحو

فنکشن:

- `areWeakMaps(array)`

پیرامیٹرز:

- `array`: `WeakMap` instances کے لیے چیک کرنے والی array۔

### لوکل فنکشن امپورٹ

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  //‎‎ list WeakMap کی مثالوں کی غیر خالی صف ہے
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  //‎‎ غیر خالی WeakMap[] نہیں ہے
}

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areWeakMaps(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areWeakMaps](‎../_analysis/areWeakMaps.md‎)

<br>

---

<small>فائل 30 January 2026 at 13:40:13 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>