# isValidDate

## وصف

`isValidDate` بيشيّك إذا كانت قيمة معيّنة هي كائن `Date` صالح وبيرجع `true` بس للتواريخ الحقيقية اللي مش invalid.

### حالة الاستخدام

تحقق من إدخال المستخدم أو بيانات API اللي ممكن تحتوي تواريخ، وتأكد إن القيمة instance حقيقي من `Date` ومش تاريخ invalid
قبل ما تعمل حسابات تاريخ، تنسيق، أو مقارنات.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isValidDate` قبل ما تنادي ميثودز `Date` (زي `toISOString` و `getTime`) على قيم نوعها `unknown` عشان تتأكد إنها
> كائنات `Date` صالحة.

### مميزات

- بيضمن إن القيمة تبقى instance من `Date` ومش مجرد سترينج أو رقم شبه التاريخ.
- بيرفض التواريخ الغلط (زي `new Date("invalid")`) عن طريق إنه بيشيّك على قيم الوقت اللي بتطلع `NaN`.
- حارس boolean بسيط وسهل استخدامه في الشروط وسلاسل التحقق (validation pipelines).
- بيساعد يمنع أخطاء وقت التشغيل لما تنادي ميثودز التاريخ عن طريق التحقق من الإدخال الأول.

## الاستخدام

### الصياغة

الدالة:

- `isValidDate(value)`

المعاملات:

- `value`: القيمة اللي هيتعمل عليها التحقق.

### استيراد الدالة محليًا

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  //‎‎ input ده instance صحيحة من Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); //‎ false
console.log(isValidDate("2025-12-22")); //‎ false

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isValidDate(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isValidDate](‎../_analysis/isValidDate.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 16:38:48 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>