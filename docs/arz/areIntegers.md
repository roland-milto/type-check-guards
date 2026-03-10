# areIntegers

## وصف

`areIntegers` بتحدّد إذا كانت كل العناصر في مصفوفة معيّنة أعداد صحيحة، وبترجّع `true` لو كده و`false` لو لأ.

### حالة الاستخدام

استخدم `areIntegers` علشان تتحقّق من بيانات جاية من المستخدم أو من مصدر خارجي (زي query parameters، JSON payloads، CSV
rows) لما منطقك محتاج ليست مليانة من قيم أعداد صحيحة زي IDs، عدّادات، pagination offsets، أو array indices.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areIntegers` كـ runtime guard لمدخلات `unknown[]` قبل ما تتعامل معاها على إنها `number[]` فيها أعداد صحيحة بس.
> لو رجّعت `false`، يبقى الإدخال يا إمّا مش مصفوفة مليانة يا إمّا فيها على الأقل قيمة واحدة مش عدد صحيح.

### مميزات

- بترجّع `true` بس لما كل عنصر يكون عدد صحيح؛ غير كده بترجّع `false`.
- بتساعدك تتحقّق من إدخال مش معروف قبل ما تعمل عمليات لازم تكون على أعداد صحيحة بس (زي الفهرسة، العدّادات، الـ IDs).
- بتفشل بسرعة: بتبطل فحص أول ما تلاقي عنصر مش عدد صحيح.

## الاستخدام

### الصياغة

الدالة:

- `areIntegers(array)`

المعاملات:

- `array`: المصفوفة اللي هتتشيّك إن عناصرها أعداد صحيحة.

### استيراد الدالة محليًا

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); //‎ صح
console.log(areIntegers(b)); //‎ صح
console.log(areIntegers(c)); //‎ غلط

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areIntegers(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areIntegers](‎../_analysis/areIntegers.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 00:57:18 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>