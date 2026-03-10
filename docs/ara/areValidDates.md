# areValidDates

## الوصف

يحدد ما إذا كانت المصفوفة غير فارغة وتتكون بالكامل من كائنات `Date` صالحة.

### حالة الاستخدام

استخدم `areValidDates` للتحقق من المصفوفات المقدمة من المستخدم أو من واجهة برمجة التطبيقات قبل تنفيذ عمليات تعتمد على
التاريخ (الفرز، التحقق من النطاق، التنسيق)، لضمان أن جميع الإدخالات هي كائنات `Date` حقيقية وصالحة وأن القائمة ليست
فارغة.

> **ملاحظة لمستخدمي TypeScript:**
>
> تعيد `areValidDates` القيمة `false` لمصفوفة فارغة؛ تأكد من أن المصفوفة مقصود أن تكون غير فارغة قبل الاعتماد عليها
> كخطوة تحقق.

### المزايا

- يعيد `true` فقط عندما يكون كل عنصر مثيلاً صالحًا من `Date` (بدون تواريخ غير صالحة مثل `new Date('invalid')`).
- يرفض الإدخال الفارغ عبر إرجاع `false`، مما يضمن أنك تقبل فقط قوائم تواريخ ذات معنى وغير فارغة.
- يوفّر تحققًا بسيطًا على نمط الحارس (boolean guard) يسهل تركيبه مع عمليات تحقق أخرى.

## الاستخدام

### الصياغة

الدالة:

- `areValidDates(array)`

المعاملات:

- `array`: المصفوفة المراد التحقق منها، وقد تحتوي على كائنات `Date`.

### استيراد الدالة محليًا

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); //‎ صحيح
console.log(areValidDates(b)); //‎ خطأ
console.log(areValidDates(c)); //‎ خطأ
console.log(areValidDates(d)); //‎ خطأ

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areValidDates(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areValidDates](‎../_analysis/areValidDates.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 2:30:31 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>