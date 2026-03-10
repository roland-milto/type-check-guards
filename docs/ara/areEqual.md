# areEqual

## الوصف

تتحقق `areEqual` مما إذا كانت جميع العناصر في مصفوفة متساوية مع قيمة متوقعة مُعطاة، وتُرجِع `true` فقط للمصفوفات غير
الفارغة التي يطابق فيها كل عنصر القيمة.

### حالة الاستخدام

التحقق من أن قائمة تحتوي فقط على قيمة واحدة مسموح بها (مثلًا: جميع أعلام الحالة هي `true`، جميع الأدوار هي `"admin"`، أو
جميع الإدخالات الرقمية تساوي ثابتًا مطلوبًا) مع اعتبار الإدخال الفارغ غير صالح (`false`).

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areEqual` عندما تحتاج إلى تحقق صارم لكل العناصر؛ فهي تُرجِع `false` للمصفوفات الفارغة ولأي إدخال ليس مصفوفة أو
> ليس ممتلئًا.

### المزايا

- تُرجِع `true` فقط عندما يطابق كل عنصر القيمة المتوقعة؛ وإلا تُرجِع `false`.
- تفشل بسرعة: تتوقف عن التحقق بمجرد العثور على عنصر غير مطابق.
- تحمي من الإدخال غير الصالح عبر إرجاع `false` عندما لا يكون الإدخال مصفوفة ممتلئة.

## الاستخدام

### الصياغة

الدالة:

- `areEqual(value, expected)`

المعاملات:

- `value`: المصفوفة المراد التحقق منها.
- `expected`: العنصر الذي تتم مقارنة كل عنصر في المصفوفة به.

### استيراد الدالة محليًا

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areEqual(value, expected)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areEqual](‎../_analysis/areEqual.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 11:49:33 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>