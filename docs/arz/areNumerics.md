# areNumerics

## وصف

`areNumerics` بيشيّك إذا كانت القيمة مصفوفة مش فاضية وكل عناصرها رقمية.

### حالة الاستخدام

استخدم `areNumerics` علشان تتحقق من بيانات جاية من برّه أو من غير typing (زي JSON payloads، query parameters، أو إدخال
الفورم) قبل ما تحسب مجموع، متوسط، أو أي عمليات رقمية تانية، وده بيضمن إن الإدخال مصفوفة أرقام مش فاضية وبيِرجّع `false`
غير كده.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areNumerics` كـ guard لإدخال `unknown` قبل ما تتعامل معاه كمصفوفة أرقام؛ بيرجّع `false` لغير المصفوفات وكمان
> للمصفوفات الفاضية.

### مميزات

- بيرجّع `true` بس لما الإدخال يبقى مصفوفة مش فاضية وكل عنصر فيها رقمي.
- بيفشل بسرعة: بيبطل يشيّك أول ما يلاقي عنصر مش رقمي، وبيِرجّع `false`.
- بيساعدك تتحقق من إدخال مجهول بأمان قبل ما تعمل عمليات حسابية رقمية.

## الاستخدام

### الصياغة

الدالة:

- `areNumerics(array)`

المعاملات:

- `array`: المصفوفة اللي هتتشيّك إن عناصرها رقمية.

### استيراد الدالة محليًا

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); //‎ صح
console.log(areNumerics(b)); //‎ صح
console.log(areNumerics(c)); //‎ غلط
console.log(areNumerics(d)); //‎ غلط
console.log(areNumerics(e)); //‎ غلط

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); //‎ 60
console.log(sumUnknown([10, "20", 30])); //‎ null

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areNumerics(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areNumerics](‎../_analysis/areNumerics.md‎)

<br>

---

<small>الملف اتعمل في 6 February 2026 at 16:03:50 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>