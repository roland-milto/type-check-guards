# areErrors

## وصف

بيفحص إذا كانت الـ array مش فاضية ومحتواها كله كائنات `Error`، وبيُرجّع `true` أو `false`.

### حالة الاستخدام

اتأكد إن `unknown[]` جاية وقت التشغيل (زي أخطاء متجمعة، نتايج validation، أو بيانات متفككة من serialization) هي ليستة مش
فاضية من كائنات `Error` قبل ما تلف عليها، تعمل logging، أو تعيد رميها (rethrow).

> **ملاحظة لمستخدمي TypeScript:**
>
> `areErrors` بترجّع `true` بس لو الـ array مليانة وكل عنصر فيها `Error`؛ وبتِرجّع `false` لو الـ array فاضية أو لو أي
> عنصر مش `Error`.

### مميزات

- بيضمن إن كل عنصر هو instance من `Error`، وده بيسهّل التعامل الآمن مع الأخطاء وتسجيلها (logging).
- بيرفض الـ arrays الفاضية، وده بيمنع إن حالة "مفيش أخطاء" تتعامل بالغلط كإنها ليستة أخطاء صالحة.
- مناسب جدًا كـ runtime guard لما بتتعامل مع مدخلات `unknown[]` (زي اللي بتيجي من APIs أو من `catch` blocks).

## الاستخدام

### الصياغة

الدالة:

- `areErrors(array)`

المعاملات:

- `array`: الـ array اللي هيتعملها check إنها فيها كائنات `Error`.

### استيراد الدالة محليًا

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  //‎‎ value عبارة عن مصفوفة مش فاضية من كائنات Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areErrors(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areErrors](‎../_analysis/areErrors.md‎)

<br>

---

<small>الملف اتعمل في 6 February 2026 at 12:32:37 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>