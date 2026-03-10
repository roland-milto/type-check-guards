# isNaN

## وصف

بيحدد إذا كانت `value` اللي اتقدمت هي `NaN` من نوع `number` من غير ما يحوّل السترينجز.

### حالة الاستخدام

اتحقق من مدخلات مش موثوق فيها أو نوعها مش محدد قوي (زي API payloads، قيم الفورم، JSON متقري) علشان تكتشف قيمة `NaN`
الخاصة وتتعامل معاها بشكل صريح، وفي نفس الوقت تعتبر المدخلات اللي مش أرقام إنها مش `NaN`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isNaN` لما تحتاج تكتشف القيمة الرقمية الخاصة `NaN` مع التأكد إن الإدخال فعلاً `number` (من غير تحويل من سترينج
> لرقم).

### مميزات

- بيشيّك إذا كانت القيمة `NaN` من غير ما يِحوّل القيم اللي مش أرقام (زي السترينجز) لأرقام.
- بيرجّع `true` بس للقيم اللي هي في نفس الوقت نوعها `number` وكمان `NaN`.
- آمن مع مدخلات `unknown` وبيتفادى النتائج الإيجابية الغلط اللي بتيجي من التحويلات الضمنية.

## الاستخدام

### الصياغة

الدالة:

- `isNaN(value)`

المعاملات:

- `value`: القيمة اللي هيتعملها فحص إذا كانت `NaN` من نوع `number`.

### استيراد الدالة محليًا

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // true
console.log(isNaN(b)); // false
console.log(isNaN(c)); // false

if (isNaN(a)) {
  //‎‎ a رقم وبالذات NaN
}
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isNaN(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isNaN](‎../_analysis/isNaN.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 15:45:03 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>