# isSet

## وصف

بيحدد إذا كانت قيمة معيّنة هي `Set`.

### حالة الاستخدام

اتأكد من المدخلات اللي جاية من مصادر خارجية (زي تحليل JSON، إدخال المستخدم، أو APIs لطرف تالت) إن القيمة هي `Set` قبل ما
تعمل عمليات `Set`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isSet` عشان تضيّق قيم `unknown` قبل ما تنادي APIs مخصوصة بـ `Set` زي `.add` و`.has` و`.size`.

### مميزات

- بيوفر فحص بسيط وقت التشغيل عشان يتأكد إن القيمة هي `Set`.
- بيساعد يمنع أخطاء الأنواع عن طريق السماح بتفرّع بدري لما القيمة ما تكونش `Set`.
- بيشتغل مع أي محتوى جوّه `Set` (فاضية أو مليانة) وبيطلع `true`/`false` بشكل ثابت.

## الاستخدام

### الصياغة

الدالة:

- `isSet(value)`

المعاملات:

- `value`: القيمة اللي هتتشيّك.

### استيراد الدالة محليًا

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  //‎‎ a بيبقى Set وقت التشغيل
  console.log(a.size);
}

console.log(isSet(b)); //‎ غلط

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isSet(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isSet](‎../_analysis/isSet.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 23:08:46 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>