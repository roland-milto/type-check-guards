# isDate

## وصف

`isDate` بيحدد إذا كانت القيمة اللي اتقدمت هي `Date`، وبيرجع `true` لكائنات `Date` و`false` لغير كده.

### حالة الاستخدام

اتحقق وضيّق القيم المجهولة (زي بيانات الطلب، قيم الإعدادات، أو JSON بعد ما يتعمله parsing) قبل ما تعمل عمليات `Date` زي
التنسيق، المقارنات، أو استدعاء `toISOString()`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isDate` عشان تضيّق نوع `unknown` لـ `Date` وقت التشغيل؛ بيرجع `true` بس لكائنات `Date` الحقيقية (مش سترينجات
> تاريخ).

### مميزات

- بيوفر حارس (guard) بسيط وقت التشغيل عشان يتأكد إن القيمة هي `Date`.
- بيساعد يمنع أخطاء الأنواع (type errors) بإنه يضمن إن بس كائنات `Date` هي اللي بتعدّي التحقق.
- مفيد للتحقق من مدخلات مش معروفة (زي payloads بتاعة API) قبل ما تستخدم دوال خاصة بالتاريخ.

## الاستخدام

### الصياغة

الدالة:

- `isDate(value)`

المعاملات:

- `value`: القيمة اللي هيتعملها فحص عشان نوع `Date`.

### استيراد الدالة محليًا

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  //‎‎ input هنا Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isDate(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isDate](‎../_analysis/isDate.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 15:36:28 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>