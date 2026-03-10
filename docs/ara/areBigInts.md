# areBigInts

## الوصف

تحدد `areBigInts` ما إذا كانت قيمة ما مصفوفة غير فارغة تحتوي فقط على قيم `bigint`.

### حالة الاستخدام

تحقق من مدخلات غير معروفة (مثل بيانات شبيهة بـ JSON بعد تحليلها، أو حمولات API، أو معاملات دوال مُعرّفة كـ `unknown`)
للتأكد من أنها مصفوفة غير فارغة من قيم `bigint` قبل المعالجة؛ تُرجع `true` فقط عندما تكون جميع العناصر `bigint`، وإلا
تُرجع `false`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areBigInts` كحارس وقت التشغيل قبل إجراء عمليات خاصة بـ `bigint` فقط (مثل العمليات الحسابية والمقارنات) على
> مدخلات غير معروفة.

### المزايا

- يضمن أن كل عنصر هو `bigint`، ويُرجع `true` فقط عندما تتطابق المصفوفة بالكامل.
- يرفض القيم غير المصفوفات والمصفوفات الفارغة حسب التصميم (عبر `isFilledArray`)، مما يمنع القبول غير المقصود للمدخلات
  غير الصالحة.
- فشل سريع: يُرجع `false` بمجرد العثور على عنصر ليس `bigint`.

## الاستخدام

### الصياغة

الدالة:

- `areBigInts(array)`

المعاملات:

- `array`: القيمة المراد التحقق منها.

### استيراد الدالة محليًا

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); //‎ صحيح
console.log(areBigInts(b)); //‎ خطأ
console.log(areBigInts(c)); //‎ خطأ
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areBigInts(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areBigInts](‎../_analysis/areBigInts.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 11:25:06 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>