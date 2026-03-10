# isOfType

## وصف

بيحدّد إذا كانت قيمة `value` بتطابق سترينج نوع معيّن، باستخدام `typeof` للأنواع البدائية وبديل احتياطي للأنواع المعقّدة.

### حالة الاستخدام

اتأكّد وضيّق قيم `unknown` (زي ردود الـ API، إدخال المستخدم، JSON المتحلّل) عن طريق إنك تراجع إذا كانت القيمة من نوع
متوقّع قبل ما تعمل عمليات مخصوصة للنوع ده.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isOfType` عشان تتفرّع حسب الأنواع وقت التشغيل وانت شغّال مع قيم `unknown`؛ هي بترجّع `true`/`false` وبتتعامل
> مع `null` و `undefined` بشكل صريح.

### مميزات

- بيشيّك على الأنواع البدائية بـ `typeof` مباشر عشان السرعة والوضوح.
- بيتعامل صح مع `null` و `undefined`، اللي `typeof` لوحده ما يقدرش يفرّق بينهم زي المطلوب.
- بيدعم سترينجات أنواع معقّدة أو مخصّصة عن طريق مقارنة احتياطية باستخدام `getTypeOf`.
- بيرجّع نتيجة بوليان بسيطة (`true`/`false`) تنفع للـ guards والتفرّع.

## الاستخدام

### الصياغة

الدالة:

- `isOfType(value, type)`

المعاملات:

- `value`: القيمة اللي هتتختبر قدّام `type`.
- `type`: التمثيل النصّي (string) للنوع اللي هيتتشيّك عليه.

### استيراد الدالة محليًا

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  //‎‎ input هنا رقم
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  //‎‎ input هنا سترينج
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isOfType(value, type)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isOfType](‎../_analysis/isOfType.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 16:58:27 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>