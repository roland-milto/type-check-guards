# isWeakSet

## وصف

بيحدد إذا كانت `value` المعطاة هي `WeakSet` من الأوبجكتات ولا لأ.

### حالة الاستخدام

استخدم `isWeakSet` لما تكون بتستقبل إدخال من غير تايب (زي من APIs خارجية، إعدادات ديناميكية، أو قيم `unknown`) وعايز
تتأكد إنه `WeakSet` قبل ما تستخدم عمليات مخصوصة بـ `WeakSet`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isWeakSet` عشان تضيّق قيمة من نوع `unknown` لـ `WeakSet<object>` وقت التشغيل؛ وخلي بالك إن `WeakSet` ماينفعش
> يحتوي غير مراجع لأوبجكتات.

### مميزات

- بيوفر تشيك بسيط وقت التشغيل عشان تعرف إذا كانت القيمة `WeakSet` ولا لأ.
- بيساعد يمنع أخطاء الأنواع عن طريق التأكد إن بس الـ `WeakSet` الحقيقيين بيتعاملوا على إنهم كده.
- بيشتغل مع أي إدخال من نوع `unknown` وبيطلع نتيجة بوليان واضحة (`true`/`false`).

## الاستخدام

### الصياغة

الدالة:

- `isWeakSet(value)`

المعاملات:

- `value`: القيمة اللي هتتشيّك.

### استيراد الدالة محليًا

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  //‎‎ a هو WeakSet وقت التشغيل
}
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isWeakSet(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isWeakSet](‎../_analysis/isWeakSet.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 14:13:50 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>