# isTrue

## وصف

`isTrue` بيحدد إذا كانت قيمة معيّنة مساوية بشكل صارم لـ `true`.

### حالة الاستخدام

استخدم `isTrue` علشان تتحقق من الفلاجز، feature toggles، أو قيم الإعدادات اللي لازم يتقبل فيها بس الحرفي `true` وأي حاجة
تانية تتعامل كـ `false`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isTrue` لما تحتاج تقبل بس القيمة المنطقية الحرفية `true`، مش مجرد قيم truthy.

### مميزات

- بيوفّر فحص صارم للقيمة المنطقية الحرفية `true` (من غير تحويل/إكراه).
- بيساعد يميّز `true` عن القيم اللي بتطلع truthy زي `1`، `"true"`، أو `{}`.
- سلوك بسيط ومتوقّع مناسب للـ guards وبايبلاينات التحقق.

## الاستخدام

### الصياغة

الدالة:

- `isTrue(value)`

المعاملات:

- `value`: القيمة اللي هتتعملها فحص.

### استيراد الدالة محليًا

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      //‎ صح
const b = isTrue(1);         //‎ غلط
const c = isTrue("true");   //‎ غلط

if (isTrue(a)) {
  //‎‎ a هنا صح
}
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isTrue(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isTrue](‎../_analysis/isTrue.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 13:41:34 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>