# areNumbers

## الوصف

تتحقق `areNumbers` مما إذا كانت القيمة مصفوفة غير فارغة تكون جميع عناصرها أرقامًا.

### حالة الاستخدام

تحقق من البيانات التي يوفرها المستخدم أو واجهة برمجة التطبيقات (API) للتأكد من أنها مصفوفة غير فارغة من الأرقام قبل حساب
المجاميع أو المتوسطات أو أي تجميعات عددية أخرى.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areNumbers` للتحقق من صحة المصفوفات غير المعروفة قبل إجراء الحسابات العددية؛ إذ يعيد `false` للمصفوفات الفارغة
> وللمصفوفات التي تحتوي على أي قيمة غير رقمية.

### المزايا

- يعيد `true` فقط عندما يكون الإدخال مصفوفة غير فارغة وكل عنصر فيها رقمًا.
- يمنع النتائج الإيجابية الكاذبة عبر رفض المصفوفات الفارغة والمدخلات التي ليست مصفوفات.
- مفيد كحارس قبل العمليات العددية (مثل الجمع، حساب المتوسط) لتجنب أخطاء وقت التشغيل.

## الاستخدام

### الصياغة

الدالة:

- `areNumbers(array)`

المعاملات:

- `array`: المصفوفة التي سيتم التحقق من أن عناصرها أرقام.

### استيراد الدالة محليًا

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areNumbers(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areNumbers](‎../_analysis/areNumbers.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 1:03:22 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>