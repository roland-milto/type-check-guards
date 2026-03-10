# areUndefined

## وصف

`areUndefined` بتشيّك إذا كان كل عنصر في array متقدّمة هو `undefined`.

### حالة الاستخدام

اتحقق إن ليستة من نتايج اختيارية مافيهاش أي قيم فعلية (بس `undefined`)، زي بعد ما تعمل mapping لعمليات lookup اللي
الإدخالات الناقصة فيها بتتعبّر بـ `undefined`، وإنت عايز تتأكد إن كل عمليات الـ lookup فشلت.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areUndefined` لما تحتاج تأكّد إن `unknown[]` فيها بس قيم `undefined`؛ هي بترجّع `false` للـ arrays الفاضية
> وكمان للمدخلات اللي مش array/غير صالحة بسبب فحص `isFilledArray` الداخلي.

### مميزات

- بيرجّع `false` لغير الـ arrays وكمان للـ arrays الفاضية عشان بيشترط array مليانة عن طريق `isFilledArray`.
- بيضمن إن كل عنصر هو `undefined` مش بس شوية منهم، وده بيخلّي القصد واضح وصريح.
- مفيد كـ predicate بأسلوب guard لما بتتحقق من collections مدخلات مش معروفة.

## الاستخدام

### الصياغة

الدالة:

- `areUndefined(array)`

المعاملات:

- `array`: الـ array اللي هتتشيّك إن عناصرها `undefined`.

### استيراد الدالة محليًا

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

//‎‎ ملاحظة: بترجّع false مع الأرايز الفاضية
const r4 = areUndefined([]); // false

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areUndefined(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areUndefined](‎../_analysis/areUndefined.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 13:54:39 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>