# areTrue

## وصف

بيشيّك إذا كانت array مش فاضية فيها بس قيم boolean `true`.

### حالة الاستخدام

استخدم `areTrue` علشان تتأكد إن مجموعة شروط مسبقة أو feature flags كلها مفعّلة (كل القيم `true`) قبل ما تكمّل، مع اعتبار
المدخلات الفاضية أو اللي فيها مشاكل إنها مش متحققة (`false`).

> **ملاحظة لمستخدمي TypeScript:**
>
> `areTrue` بيرجّع `false` للـ array الفاضية وللـ arrays اللي فيها أي قيمة مش `true` بشكل صارم.

### مميزات

- بيرجّع `true` بس لما كل عنصر يبقى `true` بشكل صارم والـ array مايبقاش فاضي.
- بيفشل بسرعة: بيرجّع `false` أول ما يلاقي قيمة مش `true`.
- بيرفض المدخلات الغلط (مش arrays أو arrays فاضية) بإنه بيرجّع `false`.

## الاستخدام

### الصياغة

الدالة:

- `areTrue(array)`

المعاملات:

- `array`: الـ array اللي هيتشيّك عليها إن كل القيم فيها `true`.

### استيراد الدالة محليًا

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areTrue(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areTrue](‎../_analysis/areTrue.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 13:50:18 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>