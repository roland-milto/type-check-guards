# areObjects

## وصف

`areObjects` بتشيّك إذا كانت مصفوفة مليانة متقدّمة فيها Objects بس.

### حالة الاستخدام

استخدم `areObjects` لما يوصلك Array مش معروف (زي اللي جاي من JSON parsing أو من APIs خارجية) وتحتاج تتأكد إنها مش فاضية
وإن كل عنصر فيها Object قبل ما تلف عليها وتوصل لخصائص الـ Object.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areObjects` عشان تتحقق من `unknown[]` قبل ما تتعامل مع العناصر كـ Objects؛ هي بترجّع `false` للمصفوفات
> الفاضية.

### مميزات

- بترجّع `true` بس لما الإدخال يكون مصفوفة مليانة وكل عنصر فيها يكون Object.
- بتقف بدري وبترجّع `false` أول ما تلاقي عنصر مش Object.
- بتساعدك تتحقق من إدخال مش معروف قبل ما تعمل عمليات مخصوصة للـ Object.

## الاستخدام

### الصياغة

الدالة:

- `areObjects(array)`

المعاملات:

- `array`: المصفوفة اللي هيتتأكد إن عناصرها Objects.

### استيراد الدالة محليًا

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  //‎‎ value عبارة عن مصفوفة مليانة من أوبجكتات
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areObjects(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areObjects](‎../_analysis/areObjects.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 00:07:54 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>