# areNaNs

## وصف

`areNaNs` بتشيّك إذا كان كل العناصر في المصفوفة `NaN` وبتطلع `true` بس لو كل عنصر `NaN`.

### حالة الاستخدام

تتحقق من الداتا اللي جاية لما `NaN` بتتستخدم كقيمة علامة (sentinel) ولازم تتأكد إن المصفوفة كلها مكوّنة حصريًا من
`NaN` (زي اكتشاف سلسلة أرقام كلها مفقودة).

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areNaNs` لما تحتاج تتأكد إن المصفوفة فيها بس القيمة الرقمية `NaN` (من غير تحويل سترنج-لرقم).

### مميزات

- بترجّع `true` بس لما كل عنصر يكون `NaN` (تشييك صارم على كل العناصر).
- ما بتعملش تحويل تلقائي للسترنجات لأرقام؛ قيم زي "NaN" بتفضل مش `NaN` وبتخلّي النتيجة `false`.
- بترجّع `false` للمصفوفات اللي مش متعبّية، وده بيمنع إن النتيجة تبقى `true` بالغلط مع إدخال فاضي.

## الاستخدام

### الصياغة

الدالة:

- `areNaNs(array)`

المعاملات:

- `array`: المصفوفة اللي هنتأكد فيها من قيم `NaN`.

### استيراد الدالة محليًا

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); //‎ صح
const b = areNaNs([NaN, 1, NaN]); //‎ غلط
const c = areNaNs([NaN, "NaN", NaN]); //‎ غلط
const d = areNaNs([NaN, null, NaN]); //‎ غلط
const e = areNaNs([] as unknown[]); //‎ غلط

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areNaNs(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areNaNs](‎../_analysis/areNaNs.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 15:50:17 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>