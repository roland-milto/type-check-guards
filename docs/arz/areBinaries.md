# areBinaries

## وصف

بيفحص إذا كانت القيمة اللي اتقدمت مصفوفة مش فاضية من سترينجات باينري صحيحة وبيُرجّع `true` بس لو كل العناصر عدّت
الفاليديشن.

### حالة الاستخدام

استخدم `areBinaries` لما يوصلك ليست مش معروفة (زي من JSON، فورمز، أو APIs) وعايز تتأكد إنها مصفوفة مش فاضية من سترينجات
باينري قبل ما تعملها بارس أو تعالجها.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areBinaries` علشان تعمل فاليديشن لأي إدخال مش معروف قبل ما تحوّل سترينجات الباينري لأرقام/BigInts؛ هو بيضمن إن
> المصفوفة مش فاضية وإن كل عنصر سترينج باينري صحيح.

### مميزات

- بيتأكد إن القيمة عبارة عن مصفوفة مش فاضية وكل عنصر فيها سترينج باينري صحيح.
- بيرجع نتيجة بوليان بسيطة (`true`/`false`) تنفع للـ guards، والـ early returns، وفاليديشن الإدخال.
- بيمنع أخطاء البارسينج اللي بتحصل بعدين عن طريق رفض المصفوفات اللي فيها أي عنصر مش باينري.

## الاستخدام

### الصياغة

الدالة:

- `areBinaries(array)`

المعاملات:

- `array`: القيمة اللي هتتشيّك.

### استيراد الدالة محليًا

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); //‎ صح
console.log(areBinaries(b)); //‎ غلط
console.log(areBinaries([])); //‎ غلط
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areBinaries(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areBinaries](‎../_analysis/areBinaries.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 23:13:47 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>