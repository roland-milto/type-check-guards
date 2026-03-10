# areOctals

## وصف

`areOctals` بيحدد إذا كانت القيمة اللي اتقدمت مصفوفة مش فاضية من سترينجات أوكتال سليمة.

### حالة الاستخدام

استخدم `areOctals` وانت بتتحقق من إدخال المستخدم، قيم الإعدادات، أو payload بتاع API اللي لازم يحتوي على octal
literals (زي أوضاع صلاحيات الملفات `0o755`) وعايز ترفض المصفوفات الفاضية أو أي عناصر غير صالحة عن طريق إرجاع `false`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areOctals` عشان تتأكد إن عندك `unknown[]` مش فاضي، وكل عنصر فيه سترينج أوكتال صحيح قبل ما تحوّل (زي بـ
`Number(...)` أو parsing مخصص).

### مميزات

- بيتأكد إن القيمة عبارة عن مصفوفة مش فاضية، وكل عنصر فيها سترينج أوكتال، وبيرجع `true` بس لما كل العناصر تعدّي.
- بيفشل بسرعة: بيرجع `false` أول ما يلاقي عنصر مش أوكتال.
- مفيد كـ guard قبل ما تعمل parsing أو تحويل لسترينجات أوكتال عشان تتجنب أخطاء وقت التشغيل وتعامل غير متّسق مع الإدخال.

## الاستخدام

### الصياغة

الدالة:

- `areOctals(array)`

المعاملات:

- `array`: القيمة اللي هتتشيّك.

### استيراد الدالة محليًا

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  //‎‎ value هي مصفوفة مش فاضية من سترينجات أوكتال
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areOctals(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areOctals](‎../_analysis/areOctals.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 14:43:48 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>