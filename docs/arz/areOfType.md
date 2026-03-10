# areOfType

## وصف

بيشيّك إذا كان كل العناصر في `array` المعطاة من النوع `type` المحدد.

### حالة الاستخدام

استخدم `areOfType` علشان تتحقق من إدخال مش معروف (زي JSON متفسّر، API payloads، user input) قبل ما تعمل عمليات مخصوصة
بالنوع على كل عنصر في array.

> **ملاحظة لمستخدمي TypeScript:**
>
> عشان `areOfType` هو type guard، TypeScript بيضيّق نوع الـ array جوّه بلوك `if (areOfType(...)) {}` لـ
`Array<DataTypeOf<T>>`.

### مميزات

- بيوفر TypeScript type guard: لما بيرجع `true`، الإدخال بيتحدد إنه `Array<DataTypeOf<T>>`.
- بيتحقق من كل عنصر مقابل نوع الـ runtime المطلوب، وبيمنع إن arrays فيها أنواع مختلفة تعدّي.
- بيفشل بسرعة: بيرجع `false` أول ما يلاقي عنصر مش مطابق.
- بيرفض غير الـ arrays والـ arrays الفاضية بطبيعته (بيعتمد على `isFilledArray`).

## الاستخدام

### الصياغة

الدالة:

- `areOfType(array, type)`

المعاملات:

- `array`: الـ array اللي هيتعملها check.
- `type`: النوع اللي هيتقارن بكل عنصر جوّه الـ array.

### استيراد الدالة محليًا

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  //‎‎ دلوقتي values بقت number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); //‎ غلط

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areOfType(array, type)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areOfType](‎../_analysis/areOfType.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 17:08:31 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>