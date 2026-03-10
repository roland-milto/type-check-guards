# areFloats

## وصف

`areFloats` بيشيّك إذا كانت المصفوفة المعطاة مليانة وكل عناصرها أرقام عشرية (floats).

### حالة الاستخدام

استخدم `areFloats` لما يوصلك `unknown[]` (زي من JSON، باراميترات الاستعلام، أو APIs خارجية) وتحتاج تتأكد إنه مصفوفة
مليانة وكل عنصر فيها float قبل ما تشغّل منطق رقمي زي حساب المتوسط، الاستيفاء (interpolation)، أو الحسابات الإحصائية.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areFloats` كـ guard لـ `unknown[]` قبل ما تتعامل معاه على إنه `number[]` فيه بس أرقام عشرية (floats)؛ هو
> بيرجّع `false` للمصفوفات الفاضية ولأي عنصر مش float.

### مميزات

- بيرجّع `true` بس لما الإدخال يبقى مصفوفة مش فاضية وكل عنصر فيها يبقى رقم عشري (float).
- بيفشل بسرعة: بيرجّع `false` أول ما يلاقي عنصر مش float.
- بيساعدك تتحقق من إدخال مجهول قبل ما تعمل حسابات مخصوصة للأرقام العشرية (float).

## الاستخدام

### الصياغة

الدالة:

- `areFloats(array)`

المعاملات:

- `array`: المصفوفة اللي هتتشيّك إن عناصرها أرقام عشرية (float).

### استيراد الدالة محليًا

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); //‎ صح
console.log(areFloats(b)); //‎ غلط
console.log(areFloats(c)); //‎ غلط

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); //‎ 1.75
console.log(sumFloats([1, 2])); //‎ null
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areFloats(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areFloats](‎../_analysis/areFloats.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 14:49:20 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>