# areNullOrUndefined

## الوصف

يتحقق مما إذا كانت جميع العناصر في المصفوفة المعطاة هي `null` أو `undefined`.

### حالة الاستخدام

تحقق من أن قائمة الحقول الاختيارية لا تحتوي على أي قيم فعلية (فقط `null`/`undefined`) قبل اتخاذ قرار بتخطي المعالجة أو
عرض حالة «لم يتم توفير أي قيم».

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areNullOrUndefined` عندما تحتاج إلى التحقق من أن المصفوفة تحتوي فقط على قيم مفقودة (`null`/`undefined`). لاحظ
> أنها تُرجِع `false` للمصفوفة الفارغة.

### المزايا

- تُرجِع `true` فقط عندما يكون كل عنصر `null` أو `undefined`.
- تُرجِع `false` للمصفوفات الفارغة، مما يساعد على التمييز بين «لا توجد بيانات» و«كل القيم مفقودة».
- تعمل مع `unknown[]`، مما يجعل استخدامها آمنًا قبل تضييق الأنواع.

## الاستخدام

### الصياغة

الدالة:

- `areNullOrUndefined(array)`

المعاملات:

- `array`: المصفوفة المراد التحقق منها.

### استيراد الدالة محليًا

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
//‎‎ allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
//‎‎ containsValue === false

const empty = areNullOrUndefined([]);
//‎‎ empty === false
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areNullOrUndefined(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areNullOrUndefined](‎../_analysis/areNullOrUndefined.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 12:28:58 ص (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>