# isPrimitive

## وصف

`isPrimitive` بيحدد إذا كانت قيمة معيّنة primitive (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### حالة الاستخدام

اتأكد من المدخلات وقت التشغيل (زي حقول API payload، قيم الإعدادات، أو بيانات من المستخدم) إن القيمة primitive قبل ما
تعمل serialize أو logging أو تطبّق عمليات مخصوصة للـ primitives بس.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isPrimitive` كـ guard لمدخلات `unknown` قبل ما تتعامل معاها كأوبجكتات أو فانكشنز؛ هي بترجع `true` للـ
> primitives و `false` للأوبجكتات والفانكشنز.

### مميزات

- تشييك سريع ومن غير تخصيص ذاكرة عشان تعرف القيمة دي primitive في JavaScript ولا لأ.
- بيتعامل صح مع `null` على إنه primitive (مع إن `typeof null` بيطلع `"object"`).
- بيساعدك تضيّق قيم `unknown` قبل ما تعمل عمليات مخصوصة للأوبجكت بس.

## الاستخدام

### الصياغة

الدالة:

- `isPrimitive(value)`

المعاملات:

- `value`: القيمة اللي هتتشيّك إذا كانت نوع primitive.

### استيراد الدالة محليًا

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isPrimitive(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isPrimitive](‎../_analysis/isPrimitive.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 23:55:24 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>