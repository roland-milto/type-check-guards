# isPlainObject

## وصف

بيشيّك إذا كانت `value` المعطاة plain object وبيطلع `true` لو هي كده، غير كده `false`.

### حالة الاستخدام

اتأكد إن input من نوع `unknown` (زي JSON متقري، داتا خارجية، أو arguments لدالة) هو plain object قبل ما تقرا الـ keys أو
تحوّله لـ configuration object متTyped.

> **ملاحظة لمستخدمي TypeScript:**
>
> `isPlainObject` مفيد علشان تضيّق `unknown` قبل ما تتعامل معاه كإنه object شبه record؛ بيرجع `true` بس للقيم اللي الـ
> internal tag بتاعها هو `[object Object]`.

### مميزات

- بيوفر طريقة بسيطة وموثوقة علشان تتأكد إذا كانت القيمة Object عادي (يعني `Object` / `{}`)، وبيطلع `true` أو `false`.
- بيساعد تفرّق بين الـ plain objects وبين الـ arrays والـ functions و`null` وأنواع تانية مش plain object.
- مفيد كـ type guard في TypeScript علشان يضيّق قيم `unknown` قبل ما توصل لخصايص الـ object.

## الاستخدام

### الصياغة

الدالة:

- `isPlainObject(value)`

المعاملات:

- `value`: القيمة اللي هتتجرّب علشان تعرف إذا كانت plain object ولا لأ.

### استيراد الدالة محليًا

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  //‎‎ input هنا اوبجكت عادي
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); //‎ صح
console.log(isPlainObject([])); //‎ غلط
console.log(isPlainObject(null)); //‎ غلط
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isPlainObject(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isPlainObject](‎../_analysis/isPlainObject.md‎)

<br>

---

<small>الملف اتعمل في 6 February 2026 at 12:16:20 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>