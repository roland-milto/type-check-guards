# isPromise

## وصف

بيحدد إذا كانت قيمة معيّنة `Promise` ولا لأ.

### حالة الاستخدام

استخدم `isPromise` عشان تتأكد من مدخلات مش معروفة قبل ما تتعامل معاها على إنها `Promise`، زي لما تتعامل مع قيم راجعة من
plugins، dynamic imports، أو APIs نوعها مش مضبوط قوي.

> **ملاحظة لمستخدمي TypeScript:**
>
> `isPromise` بيشيّك بـ `instanceof Promise`، فبيرجع `true` بس مع instances حقيقية من `Promise` (مش thenables عامة).

### مميزات

- بيوفر تشيك بسيط وقت التشغيل عشان يعرف إذا كانت القيمة `Promise` ولا لأ.
- بيساعد يحمي مسارات الكود اللي محتاجة instance حقيقي من `Promise`، وبيطلع `true` أو `false` بشكل متوقع.
- بيتجنب النتائج الإيجابية الكدابة من كائنات “thenable” (زي `{ then() {} }`) عن طريق إنه يشترط instance فعلي من
  `Promise`.

## الاستخدام

### الصياغة

الدالة:

- `isPromise(value)`

المعاملات:

- `value`: القيمة اللي هتتشيك.

### استيراد الدالة محليًا

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); //‎ صح
console.log(isPromise(b)); //‎ غلط
console.log(isPromise(123)); //‎ غلط
console.log(isPromise(null)); //‎ غلط

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isPromise(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isPromise](‎../_analysis/isPromise.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 23:52:02 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>