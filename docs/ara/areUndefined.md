# areUndefined

## الوصف

تتحقق `areUndefined` مما إذا كان كل عنصر في مصفوفة مُقدَّمة هو `undefined`.

### حالة الاستخدام

التحقق من أن قائمة من النتائج الاختيارية لا تحتوي على أي قيم فعلية (فقط `undefined`)، مثلًا بعد إجراء mapping لعمليات
lookup حيث تُمثَّل الإدخالات المفقودة على أنها `undefined`، وتريد التأكد من أن جميع عمليات lookup قد فشلت.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areUndefined` عندما تحتاج إلى التأكيد على أن `unknown[]` يحتوي فقط على قيم `undefined`؛ إذ يعيد `false`
> للمصفوفات الفارغة وللمدخلات غير المصفوفية/غير الصالحة بسبب فحص `isFilledArray` الداخلي.

### المزايا

- يعيد `false` لغير المصفوفات وللمصفوفات الفارغة عبر اشتراط مصفوفة ممتلئة باستخدام `isFilledArray`.
- يضمن أن كل عنصر هو `undefined`، وليس بعض العناصر فقط، مما يجعل المقصود صريحًا.
- مفيد كمسند على نمط الحارس عند التحقق من مجموعات إدخال غير معروفة.

## الاستخدام

### الصياغة

الدالة:

- `areUndefined(array)`

المعاملات:

- `array`: المصفوفة المراد التحقق مما إذا كانت عناصرها `undefined`.

### استيراد الدالة محليًا

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); //‎ صحيح
const r2 = areUndefined(b); //‎ خطأ
const r3 = areUndefined(c); //‎ خطأ

//‎‎ ملاحظة: تُرجِع خطأ للمصفوفات الفارغة
const r4 = areUndefined([]); //‎ خطأ
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areUndefined(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areUndefined](‎../_analysis/areUndefined.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 1:54:40 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>