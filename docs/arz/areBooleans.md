# areBooleans

## وصف

`areBooleans` بتتأكد إن الـ array اللي مش فاضية فيها قيم boolean بس، وبتِرجّع `true` لو كده و`false` غير كده.

### حالة الاستخدام

تحقق من بيانات جاية من المستخدم أو من مصدر خارجي (زي JSON payloads، query params، config arrays) عشان تضمن إن قائمة مش
فاضية فيها booleans بس قبل ما تطبق منطق boolean أو تبعتها لـ APIs بتتوقع `boolean[]`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areBooleans` عشان تتحقق من `unknown[]` قبل ما تتعامل معاها على إنها `boolean[]`؛ هي بترجّع `false` للـ arrays
> الفاضية، فتعامل مع الحالة دي بشكل صريح لو القائمة الفاضية المفروض تبقى مسموحة.

### مميزات

- بيرجّع `true` بس لما كل عنصر يبقى boolean وكمان الإدخال يبقى array مش فاضية.
- بيمنع النتائج الإيجابية الكدّابة برفض الـ arrays الفاضية (بيرجّع `false`).
- بينفع كـ runtime guard قبل عمليات بتشتغل على booleans بس (زي `every`، `some`، والاختزالات المنطقية).

## الاستخدام

### الصياغة

الدالة:

- `areBooleans(array)`

المعاملات:

- `array`: الـ array اللي هيتتشيّك عليها لو فيها عناصر boolean.

### استيراد الدالة محليًا

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areBooleans(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areBooleans](‎../_analysis/areBooleans.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 14:39:08 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>