# areNaNs

## الوصف

تتحقق `areNaNs` مما إذا كانت جميع العناصر في مصفوفة هي `NaN` وتعيد `true` فقط إذا كان كل عنصر `NaN`.

### حالة الاستخدام

التحقق من صحة البيانات الواردة حيث تُستخدم `NaN` كقيمة دلالية (sentinel) ويجب التأكد من أن المصفوفة بأكملها تتكون حصريًا
من `NaN` (مثل اكتشاف سلسلة رقمية كل قيمها مفقودة).

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areNaNs` عندما تحتاج إلى التحقق من أن مصفوفة تحتوي فقط على القيمة العددية `NaN` (من دون تحويل قسري من سلسلة
> نصية إلى رقم).

### المزايا

- يعيد `true` فقط عندما يكون كل عنصر `NaN` (تحقق صارم لجميع العناصر).
- لا يُجري تحويلًا قسريًا للسلاسل النصية إلى أرقام؛ تبقى قيم مثل "NaN" غير `NaN` وتجعل النتيجة `false`.
- يعيد `false` للمصفوفات غير المعبأة، مما يمنع الحصول على `true` عن طريق الخطأ عند إدخال فارغ.

## الاستخدام

### الصياغة

الدالة:

- `areNaNs(array)`

المعاملات:

- `array`: المصفوفة المراد التحقق من وجود قيم `NaN` فيها.

### استيراد الدالة محليًا

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); //‎ صحيح
const b = areNaNs([NaN, 1, NaN]); //‎ خطأ
const c = areNaNs([NaN, "NaN", NaN]); //‎ خطأ
const d = areNaNs([NaN, null, NaN]); //‎ خطأ
const e = areNaNs([] as unknown[]); //‎ خطأ
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areNaNs(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال هنا: [areNaNs](‎../_analysis/areNaNs.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 3:50:19 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>