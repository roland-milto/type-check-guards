# areDates

## وصف

`areDates` بتحدد إذا كانت أراي معيّنة مليانة وبتحتوي بس على كائنات `Date`، وبترجع `true` بس لما كل العناصر تكون تواريخ
صالحة.

### حالة الاستخدام

استخدم `areDates` عشان تڤاليديت input مش معروف (زي JSON متقري، بيانات فورم، أو payloads من API) قبل ما تشغّل لوجيك مخصوص
للتواريخ زي الترتيب حسب الوقت، الفورماتينج، أو حساب المدى.

> **ملاحظة لمستخدمي TypeScript:**
>
> بترجع `true` بس للأرايز اللي مش فاضية واللي كل عنصر فيها `Date`؛ الأرايز الفاضية بترجع `false`.

### مميزات

- بيضمن إن الأراي مش فاضية قبل ما يڤاليديت محتواها، وده بيمنع إنها ترجع `true` مع مدخلات فاضية.
- بيتأكد إن كل عنصر هو instance من `Date`، وبيطلع `false` فورًا عند أول عنصر مش مطابق.
- مفيد كـ check على طريقة guard قبل ما تعمل عمليات مخصوصة للتواريخ على عناصر الأراي.

## الاستخدام

### الصياغة

الدالة:

- `areDates(array)`

المعاملات:

- `array`: الأراي اللي هيتتشيك عليها إنها فيها كائنات `Date`.

### استيراد الدالة محليًا

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); //‎ صح
console.log(areDates(b)); //‎ غلط
console.log(areDates(c)); //‎ غلط

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areDates(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areDates](‎../_analysis/areDates.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 15:29:23 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>