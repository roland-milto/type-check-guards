# isFilledArray

## وصف

بيفحص إذا كان `value` مصفوفة فيها عنصر واحد على الأقل، وبيُرجّع `true` أو `false`.

### حالة الاستخدام

استخدم `isFilledArray` علشان تتحقق من الداتا اللي جاية (زي API payloads، قيم الفورم، الإعدادات) قبل ما تعمل iterate، أو
توصل لأول عنصر، أو تطبق منطق محتاج عنصر واحد على الأقل.

> **ملاحظة لمستخدمي TypeScript:**
>
> `isFilledArray` هو runtime guard بيرجع boolean؛ ومش بيضيّق أنواع العناصر أكتر من إنه بيأكد إن المصفوفة مش فاضية.

### مميزات

- فحص بسيط وسريع لمصفوفة مش فاضية باستخدام `Array.isArray` وفحص الطول.
- بيساعد تتجنب أخطاء وقت التشغيل لما الكود بيفترض إن المصفوفة فيها عنصر واحد على الأقل.
- نتيجة بوليان واضحة: بيرجع `true` للمصفوفات اللي مش فاضية و`false` في غير كده.

## الاستخدام

### الصياغة

الدالة:

- `isFilledArray(value)`

المعاملات:

- `value`: القيمة اللي هتتشيّك إذا كانت مصفوفة مش فاضية.

### استيراد الدالة محليًا

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  //‎‎ input عبارة عن مصفوفة مش فاضية وقت التشغيل
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isFilledArray(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isFilledArray](‎../_analysis/isFilledArray.md‎)

<br>

---

<small>الملف اتعمل في 6 February 2026 at 11:46:11 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>