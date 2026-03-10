# areFloats

## الوصف

تتحقق `areFloats` مما إذا كانت المصفوفة المعطاة ممتلئة وكانت جميع عناصرها أعدادًا عشرية (floats).

### حالة الاستخدام

استخدم `areFloats` عندما تستقبل `unknown[]` (مثلًا من JSON أو معاملات الاستعلام أو واجهات برمجة التطبيقات الخارجية)
وتحتاج إلى التأكد من أنها مصفوفة ممتلئة يكون كل عنصر فيها عددًا عشريًا (float) قبل تشغيل منطق عددي مثل حساب المتوسط أو
الاستيفاء أو الحسابات الإحصائية.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areFloats` كحارس لـ `unknown[]` قبل التعامل معها على أنها `number[]` تحتوي فقط على أعداد عشرية (floats)؛ فهي
> تعيد `false` للمصفوفات الفارغة ولأي عنصر ليس عددًا عشريًا (float).

### المزايا

- يعيد `true` فقط عندما يكون الإدخال مصفوفة غير فارغة وكل عنصر فيها عددًا عشريًا (float).
- يفشل بسرعة: يعيد `false` بمجرد العثور على عنصر ليس عددًا عشريًا (float).
- يساعد على التحقق من صحة إدخال غير معروف قبل إجراء حسابات خاصة بالأعداد العشرية (float).

## الاستخدام

### الصياغة

الدالة:

- `areFloats(array)`

المعاملات:

- `array`: المصفوفة المراد التحقق من أن عناصرها أعداد عشرية (float).

### استيراد الدالة محليًا

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); //‎ صحيح
console.log(areFloats(b)); //‎ خطأ
console.log(areFloats(c)); //‎ خطأ

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); //‎ 1.75
console.log(sumFloats([1, 2])); //‎ null

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areFloats(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areFloats](‎../_analysis/areFloats.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 2:47:50 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>