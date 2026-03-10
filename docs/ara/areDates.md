# areDates

## الوصف

تحدد `areDates` ما إذا كانت المصفوفة المعطاة ممتلئة وتحتوي فقط على كائنات `Date`، وتُرجع `true` فقط عندما تكون جميع
العناصر تواريخ صالحة.

### حالة الاستخدام

استخدم `areDates` للتحقق من صحة مدخلات غير معروفة (مثل JSON المُحلَّل، بيانات النماذج، حمولات واجهات API) قبل تشغيل منطق
خاص بالتواريخ مثل الفرز حسب الوقت، أو التنسيق، أو حساب النطاقات.

> **ملاحظة لمستخدمي TypeScript:**
>
> تُرجع `true` فقط للمصفوفات غير الفارغة التي يكون كل عنصر فيها `Date`؛ أما المصفوفات الفارغة فتُرجع `false`.

### المزايا

- يضمن أن المصفوفة غير فارغة قبل التحقق من محتواها، مما يمنع إرجاع `true` للمدخلات الفارغة.
- يتحقق من أن كل عنصر هو مثيل `Date`، ويُرجع `false` فورًا عند أول عدم تطابق.
- مفيد كتحقق بأسلوب الحارس قبل تنفيذ عمليات خاصة بالتواريخ على عناصر المصفوفة.

## الاستخدام

### الصياغة

الدالة:

- `areDates(array)`

المعاملات:

- `array`: المصفوفة المراد التحقق من احتوائها على كائنات `Date`.

### استيراد الدالة محليًا

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); //‎ صحيح
console.log(areDates(b)); //‎ خطأ
console.log(areDates(c)); //‎ خطأ

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areDates(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areDates](‎../_analysis/areDates.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 3:29:19 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>