# isEmpty

## وصف

بيحدد إذا كانت قيمة معيّنة فاضية، وبيطلع `true` لـ `null`، `undefined`، السترينجات الفاضية/اللي كلها مسافات، الـ arrays
الفاضية، `Map`/`Set` الفاضيين، أو الـ objects اللي مافيهاش أي خصايص enumerable خاصة بيها.

### حالة الاستخدام

استخدم `isEmpty` علشان تعمل validation للمدخلات وتكتشف القيم الناقصة/الفاضية عبر كذا نوع بيانات (زي حقول الفورم، API
payloads، وconfiguration objects) في الحالات اللي `null`، `undefined`، السترينجات اللي كلها مسافات، الـ collections
الفاضية، والـ objects اللي من غير خصايص لازم يتعاملوا كإنهم فاضيين.

> **ملاحظة لمستخدمي TypeScript:**
>
> `isEmpty` أداة بترجّع boolean (مش TypeScript type predicate)، فمش بتضيّق الأنواع لوحدها؛ استخدمها للـ
> validation/التفريع بدل التضييق وقت الـ compile.

### مميزات

- بيتعامل مع `null` و `undefined` على إنهم `true` في فحوصات الفضا.
- بيعتبر السترينجات اللي كلها مسافات فاضية عن طريق إنه بيعمل trim قبل ما يشيّك على الطول.
- بيدعم أنواع الحاويات الشائعة (arrays، `Map`، `Set`) وكمان الـ objects العادية اللي مافيهاش خصايص قابلة للعدّ (
  enumerable) خاصة بيها.
- بيتجنب عدّ الخصايص الموروثة باستخدام فحوصات `hasOwnProperty`.
- بيرجّع نتيجة boolean بسيطة (`true`/`false`) مناسبة للـ guards والـ validation.

## الاستخدام

### الصياغة

الدالة:

- `isEmpty(value)`

المعاملات:

- `value`: القيمة اللي هتتشيّك إذا كانت فاضية ولا لأ.

### استيراد الدالة محليًا

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isEmpty(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isEmpty](‎../_analysis/isEmpty.md‎)

<br>

---

<small>الملف اتعمل في 6 February 2026 at 16:17:14 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>