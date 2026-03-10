# areBigInts

## وصف

`areBigInts` بيحدد إذا كانت قيمة ما هي أراي مش فاضية وبتحتوي بس على قيم `bigint`.

### حالة الاستخدام

تحقق من مدخلات مش معروفة (زي بيانات شبه JSON بعد ما تتعمل parsing، أو payloads جاية من API، أو باراميترات دوال نوعها
`unknown`) عشان تضمن إنها أراي مش فاضية من قيم `bigint` قبل المعالجة؛ بترجع `true` بس لما كل العناصر تكون `bigint`، غير
كده `false`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areBigInts` كـ runtime guard قبل ما تعمل عمليات مخصوصة لـ `bigint` (زي الحسابات والمقارنات) على مدخلات مش
> معروفة.

### مميزات

- بيضمن إن كل عنصر هو `bigint`، وبيطلع `true` بس لما الأراي كلها تطابق ده.
- بيرفض القيم اللي مش أراي وكمان الأرايات الفاضية بطبيعته (عن طريق `isFilledArray`)، وده بيمنع قبول مدخلات غلط بالغلط.
- فشل سريع: بيرجع `false` أول ما يلاقي عنصر مش `bigint`.

## الاستخدام

### الصياغة

الدالة:

- `areBigInts(array)`

المعاملات:

- `array`: القيمة اللي هنتأكد منها.

### استيراد الدالة محليًا

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); //‎ صح
console.log(areBigInts(b)); //‎ غلط
console.log(areBigInts(c)); //‎ غلط
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areBigInts(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areBigInts](‎../_analysis/areBigInts.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 23:25:07 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>