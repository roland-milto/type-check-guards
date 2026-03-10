# isIndexFound

## وصف

`isIndexFound` بيحدد إذا كانت قيمة معيّنة رقم صحيح مش سالب، وده معناه إن الإندكس اتلاقى.

### حالة الاستخدام

اتأكد إن نتيجة البحث بتمثل إندكس ينفع يتستخدم (عدد صحيح `>= 0`) قبل ما تعمل indexing على مصفوفة أو سترينج، عشان تمنع
الاستخدام بالغلط لـ `-1` أو قيم مش رقمية.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isIndexFound` بعد عمليات زي `indexOf` و`findIndex` أو أي سيرش مخصص ممكن فيه `-1` (أو قيم تانية غير صالحة) تدل
> على “مش موجود”. لما ترجع `true`، القيمة بتكون رقم وآمنة للاستخدام كإندكس لمصفوفة/سترينج.

### مميزات

- بيوفر تايب جارد بسيط عشان يكتشف إذا كان اتلاقى إندكس عن طريق التأكد إنه رقم صحيح مش سالب.
- بيرجع `true` بس للقيم اللي شبه الإندكس الصح (أعداد صحيحة `>= 0`)، وبيرفض السالب، واللي مش أعداد صحيحة، واللي مش أرقام.
- بيساعد تتجنب أخطاء الـ off-by-one وأخطاء قيم السنتينل لما تشتغل مع APIs بترجع `-1` لما يكون “مش موجود”.

## الاستخدام

### الصياغة

الدالة:

- `isIndexFound(value)`

المعاملات:

- `value`: القيمة اللي هتتشيّك إذا كانت رقم صحيح مش سالب.

### استيراد الدالة محليًا

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  //‎‎ idx هنا رقم وكمان >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

//‎‎ استخدام شائع مع indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isIndexFound(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isIndexFound](‎../_analysis/isIndexFound.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 00:44:49 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>