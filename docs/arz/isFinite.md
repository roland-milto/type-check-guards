# isFinite

## وصف

بيحدد إذا كانت `value` المعطاة هي `number` نهائي.

### حالة الاستخدام

استخدم `isFinite` علشان تتحقق من مُدخل مش معروف (زي اللي جاي من JSON أو فورمات أو APIs) قبل ما تعمل حسابات رقمية، وتضمن
إن القيمة رقم حقيقي ونهائي.

> **ملاحظة لمستخدمي TypeScript:**
>
> `isFinite` بيرجّع `true` بس للأرقام النهائية؛ وبيرجّع `false` لـ `NaN` و `Infinity` وأي قيمة مش رقم.

### مميزات

- بيستخدم `Number.isFinite` اللي جوّه اللغة علشان يعمل فحص موثوق للنهائية.
- بيرجّع `true` بس للأرقام النهائية؛ وبيرجّع `false` لـ `NaN` و `Infinity` وأي مُدخل مش رقم.
- Predicate بسيطة ومن غير آثار جانبية، مناسبة للتحقق (validation) ومنطق الحماية (guarding).

## الاستخدام

### الصياغة

الدالة:

- `isFinite(value)`

المعاملات:

- `value`: القيمة اللي هتتشيّك إذا كانت نهائية ولا لأ.

### استيراد الدالة محليًا

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
//‎‎ finiteNumbers بقت: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  //‎‎ value هنا رقم محدود
  const doubled = value * 2;
  console.log(doubled);
}
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isFinite(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isFinite](‎../_analysis/isFinite.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 16:28:52 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>