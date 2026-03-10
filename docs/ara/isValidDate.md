# isValidDate

## الوصف

تتحقق `isValidDate` مما إذا كانت قيمة معيّنة كائن `Date` صالحًا وتُرجع `true` فقط للتواريخ الحقيقية غير غير الصالحة.

### حالة الاستخدام

التحقق من مُدخلات المستخدم أو بيانات API التي قد تحتوي على تواريخ، مع ضمان أن القيمة هي مثيل `Date` حقيقي وليست تاريخًا
غير صالح قبل إجراء حسابات التاريخ أو تنسيقه أو مقارنته.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isValidDate` قبل استدعاء أساليب `Date` (مثل `toISOString` و`getTime`) على القيم ذات النوع `unknown` لضمان أنها
> كائنات `Date` صالحة.

### المزايا

- يضمن أن القيمة هي مثيل `Date` وليست مجرد سلسلة أو رقم يشبه التاريخ.
- يرفض التواريخ غير الصالحة (مثل `new Date("invalid")`) عبر التحقق من قيم الوقت `NaN`.
- حارس منطقي (boolean) بسيط وسهل الاستخدام في الشروط وخطوط أنابيب التحقق (validation pipelines).
- يساعد على منع أخطاء وقت التشغيل عند استدعاء أساليب التاريخ عبر التحقق من المُدخل أولًا.

## الاستخدام

### الصياغة

الدالة:

- `isValidDate(value)`

المعاملات:

- `value`: القيمة المراد التحقق منها.

### استيراد الدالة محليًا

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  //‎‎ الإدخال هو مثيل Date صالح
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); //‎ خطأ
console.log(isValidDate("2025-12-22")); //‎ خطأ

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isValidDate(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [isValidDate](‎../_analysis/isValidDate.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 4:38:47 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>