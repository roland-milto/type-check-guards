# areNullOrUndefined

## وصف

بتشيّك إذا كان كل العناصر في المصفوفة المعطاة `null` أو `undefined`.

### حالة الاستخدام

اتأكد إن ليستة حقول اختيارية مفيهاش أي قيم فعلية (بس `null`/`undefined`) قبل ما تقرر تتخطّى المعالجة أو تعرض حالة "مفيش
قيم متقدّمة".

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areNullOrUndefined` لما تحتاج تتأكد إن المصفوفة فيها بس قيم ناقصة (`null`/`undefined`). خد بالك إنها بترجّع
`false` للمصفوفة الفاضية.

### مميزات

- بترجّع `true` بس لما كل عنصر يكون `null` أو `undefined`.
- بترجّع `false` للمصفوفات الفاضية، وده بيساعد تفرّق بين "مفيش بيانات" و"كل القيم ناقصة".
- بتشتغل مع `unknown[]`، فده بيخلي استخدامها آمن قبل ما تضيّق الأنواع.

## الاستخدام

### الصياغة

الدالة:

- `areNullOrUndefined(array)`

المعاملات:

- `array`: المصفوفة اللي هتتشيّك.

### استيراد الدالة محليًا

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
//‎‎ allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
//‎‎ containsValue === false

const empty = areNullOrUndefined([]);
//‎‎ empty === false

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areNullOrUndefined(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في
الدوال: [areNullOrUndefined](‎../_analysis/areNullOrUndefined.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 00:29:00 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>