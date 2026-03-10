# areFalse

## وصف

`areFalse` بتشيّك إذا كان كل العناصر في array متقدّمة هي بالظبط boolean `false`.

### حالة الاستخدام

اتأكد إن ليستة feature flags أو checks أو نتايج guards كلها `false` قبل ما تكمّل (مثلاً: تأكيد إن مفيش شروط مانعة
موجودة).

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areFalse` لما تحتاج تحقق صارم إن الـ array مش فاضية وبتحتوي بس على قيمة boolean `false`.

### مميزات

- بيضمن إن كل عنصر يبقى `false` بالظبط (من غير تحويل truthy/falsey).
- بيرجّع `false` لو اللي داخل مش Array أو لو Array فاضية، عشان بيشترط Array مليانة عن طريق `isFilledArray`.
- بيوقف بدري عند أول عنصر مش `false` عشان الكفاءة.

## الاستخدام

### الصياغة

الدالة:

- `areFalse(array)`

المعاملات:

- `array`: الـ array اللي هيتعملها check، وبتحتوي عناصر من أي نوع.

### استيراد الدالة محليًا

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // ‎صح
const b = areFalse([false, true, false]);  // ‎غلط
const c = areFalse([false, "false", false]); // ‎غلط
const d = areFalse([]); // ‎غلط
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areFalse(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areFalse](‎../_analysis/areFalse.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 16:16:09 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>