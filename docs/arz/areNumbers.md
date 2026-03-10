# areNumbers

## وصف

`areNumbers` بتتأكد إن القيمة مصفوفة مش فاضية وكل عناصرها أرقام.

### حالة الاستخدام

تحقق من البيانات اللي المستخدم أو الـ API بيبعتها عشان تضمن إنها مصفوفة أرقام مش فاضية قبل ما تحسب الإجمالي، المتوسط، أو
أي تجميعات رقمية تانية.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areNumbers` عشان تتحقق من المصفوفات المجهولة قبل ما تعمل حسابات رقمية؛ بترجّع `false` للمصفوفات الفاضية
> وللمصفوفات اللي فيها أي قيمة مش رقم.

### مميزات

- بيرجّع `true` بس لما الإدخال يبقى مصفوفة مش فاضية وكل عنصر فيها رقم.
- بيمنع النتائج الإيجابية الكدّابة برفض المصفوفات الفاضية والمدخلات اللي مش مصفوفات.
- مفيد كـ guard قبل العمليات الرقمية (زي الجمع أو حساب المتوسط) عشان تتفادى أخطاء وقت التشغيل.

## الاستخدام

### الصياغة

الدالة:

- `areNumbers(array)`

المعاملات:

- `array`: المصفوفة اللي هيتتشيّك عليها إن عناصرها أرقام.

### استيراد الدالة محليًا

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areNumbers(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areNumbers](‎../_analysis/areNumbers.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 13:03:22 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>