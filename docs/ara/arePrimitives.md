# arePrimitives

## الوصف

تُقيِّم `arePrimitives` ما إذا كانت جميع العناصر في مصفوفة مُقدَّمة وغير فارغة من الأنواع البدائية.

### حالة الاستخدام

تحقّق من أن البيانات الواردة (مثل معاملات الاستعلام، أو قيم صف CSV، أو قائمة من IDs/tags) تحتوي فقط على قيم بدائية قبل
إجراء التسلسل، أو التجزئة، أو التسجيل، أو تمريرها إلى واجهات برمجة التطبيقات التي يجب ألا تستقبل كائنات.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `arePrimitives` عندما تحتاج إلى التأكد من أن `unknown[]` يحتوي فقط على قيم بدائية (string, number, bigint,
> boolean, symbol, undefined, أو null) قبل المعالجة اللاحقة.

### المزايا

- تُرجِع `true` فقط عندما يكون كل عنصر قيمة بدائية، مما يجعلها حاجزًا صارمًا لمصفوفات «بدون كائنات/دوال».
- تفشل بسرعة: تُرجِع `false` بمجرد العثور على عنصر غير بدائي.
- تُرجِع أيضًا `false` لغير المصفوفات وللمصفوفات الفارغة (عبر فحص المصفوفة الممتلئة)، مما يمنع القبول غير المقصود لإدخال
  غير صالح.

## الاستخدام

### الصياغة

الدالة:

- `arePrimitives(array)`

المعاملات:

- `array`: المصفوفة المراد التحقق من أن عناصرها من النوع البدائي.

### استيراد الدالة محليًا

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); //‎ صحيح
const r2 = arePrimitives(b); //‎ صحيح
const r3 = arePrimitives(c); //‎ خطأ
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.arePrimitives(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [arePrimitives](‎../_analysis/arePrimitives.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 12:00:11 ص (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>