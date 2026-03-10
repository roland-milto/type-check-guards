# areNull

## وصف

بيفحص إذا كان كل العناصر في `array` المعطاة هي `null`.

### حالة الاستخدام

اتأكد إن عمود بيانات في dataset، أو قايمة حقول من API، أو مصفوفة placeholder فيها بس قيم `null` قبل ما تطبّق منطق بيفترض
إن كل الإدخالات فاضية عن قصد.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areNull` لما تحتاج فحص صارم إن الإدخال مصفوفة مش فاضية وكل عنصر فيها هو بالظبط `null` (مش `undefined` ومش قيم
> falsy).

### مميزات

- بيرجّع `true` بس لما كل عنصر يبقى `null`، وده بيخليه حارس صارم من نوع “الكل مطابق”.
- بيرفض القيم اللي مش مصفوفات والمصفوفات الفاضية بإنه بيرجّع `false`، وده بيمنع نتايج truthy بالصدفة مع إدخال غير صالح.
- مناسب قوي كفحص شرط مسبق قبل معالجة بيانات لازم تبقى كلها `null`.

## الاستخدام

### الصياغة

الدالة:

- `areNull(array)`

المعاملات:

- `array`: المصفوفة المُدخلة اللي هيتعمل عليها فحص لعناصر `null`.

### استيراد الدالة محليًا

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); //‎ صح
const allNullB = areNull(b); //‎ غلط

const notAnArray = areNull(123 as unknown as unknown[]); //‎ غلط
const empty = areNull([]); //‎ غلط

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areNull(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areNull](‎../_analysis/areNull.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 15:42:20 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>