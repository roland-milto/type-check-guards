# areFinite

## الوصف

تتحقق `areFinite` مما إذا كانت القيمة مصفوفة غير فارغة تكون عناصرها كلها أعدادًا منتهية، وتعيد `true` إذا كان الأمر كذلك
و`false` خلاف ذلك.

### حالة الاستخدام

التحقق من صحة مصفوفات الإدخال الرقمية (مثل سلاسل المخططات، وقوائم الإحداثيات، وعينات القياس) قبل إجراء الحسابات، لضمان
أن تكون النتيجة `true` فقط عندما تكون جميع القيم أعدادًا منتهية.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areFinite` عندما تحتاج إلى التأكد من أن المصفوفة غير فارغة وتحتوي فقط على أعداد منتهية؛ فهي تعيد `false`
> للمصفوفات الفارغة وللمصفوفات التي تحتوي على `NaN` أو قيم لا نهائية.

### المزايا

- يعيد `true` فقط عندما يكون الإدخال مصفوفة غير فارغة وكل عنصر فيها عددًا منتهيًا.
- يرفض `Infinity` و`-Infinity` و`NaN` بالاعتماد على فحوصات `isFinite` لكل عنصر.
- يوفّر نتيجة منطقية بسيطة (`true`/`false`) مناسبة للحراس (guards) وتدفّقات التحقق (validation).

## الاستخدام

### الصياغة

الدالة:

- `areFinite(array)`

المعاملات:

- `array`: المصفوفة المراد التحقق من كون جميع عناصرها أعدادًا منتهية.

### استيراد الدالة محليًا

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); //‎ صحيح
console.log(areFinite(b)); //‎ خطأ
console.log(areFinite(c)); //‎ خطأ

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); //‎ 60
console.log(sumIfFinite([10, NaN, 30])); //‎ null

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areFinite(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areFinite](‎../_analysis/areFinite.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 4:33:31 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>