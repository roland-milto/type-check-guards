# isUndefined

## وصف

بيفحص إذا كانت قيمة معيّنة هي `undefined`.

### حالة الاستخدام

استخدم `isUndefined` عشان تحمي المدخلات الاختيارية، تكتشف الخصائص الناقصة، أو تفرّق بين “مش متقدّم” (`undefined`) و“فاضي
بشكل صريح” (`null`).

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isUndefined` لما تكون محتاج تكتشف `undefined` بالتحديد (مش `null`). هو آمن عشان بيعتمد على
`typeof value === "undefined"`.

### مميزات

- بيقدّم فحص واضح وصريح لـ `undefined` باستخدام `typeof`، وبيبعدك عن الحالات الخاصة اللي بتحصل مع المتغيرات اللي مش
  متعرّفة.
- بيرجّع نتيجة بوليان بسيطة (`true`/`false`) تنفع كـ guards، وتفرّعات (branching)، ومنطق التحقق (validation).
- بيساعد تفرّق بين `undefined` وبين قيم “فاضية” تانية زي `null`، `0`، `""`، أو `NaN`.

## الاستخدام

### الصياغة

الدالة:

- `isUndefined(value)`

المعاملات:

- `value`: القيمة اللي هتتعملها فحص.

### استيراد الدالة محليًا

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  //‎‎ x هنا undefined
} else {
  //‎‎ x هنا مش undefined
}

const a = isUndefined(undefined); //‎ true
const b = isUndefined(null);      //‎ false
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isUndefined(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isUndefined](‎../_analysis/isUndefined.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 14:01:49 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>