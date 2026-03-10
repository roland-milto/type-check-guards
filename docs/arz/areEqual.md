# areEqual

## وصف

`areEqual` بتشيّك إذا كانت كل العناصر في مصفوفة مساوية لقيمة متوقعة معيّنة، وبتِرجّع `true` بس للمصفوفات غير الفاضية
اللي كل عناصرها مطابقة.

### حالة الاستخدام

اتأكد إن قائمة فيها قيمة مسموح بيها واحدة بس (زي إن كل أعلام الحالة `true`، كل الأدوار `"admin"`، أو كل القيم الرقمية
مساوية لثابت مطلوب) مع اعتبار الإدخال الفاضي غير صالح (`false`).

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areEqual` لما تحتاج تحقق صارم إن كل العناصر مطابقة؛ هي بترجّع `false` للمصفوفات الفاضية ولأي إدخال مش مصفوفة
> أو مش مليان.

### مميزات

- بيرجّع `true` بس لما كل عنصر يطابق القيمة المتوقعة؛ غير كده بيرجّع `false`.
- بيفشل بسرعة: بيبطل يشيّك أول ما يلاقي عنصر مش مطابق.
- بيحمي من الإدخال غير الصالح بإنه بيرجّع `false` لما الإدخال مايبقاش مصفوفة مليانة.

## الاستخدام

### الصياغة

الدالة:

- `areEqual(value, expected)`

المعاملات:

- `value`: المصفوفة اللي هيتعمل عليها التحقق.
- `expected`: العنصر اللي هيتقارن بيه كل عنصر في المصفوفة.

### استيراد الدالة محليًا

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areEqual(value, expected)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areEqual](‎../_analysis/areEqual.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 23:49:34 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>