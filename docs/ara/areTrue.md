# areTrue

## الوصف

يتحقق مما إذا كانت مصفوفة غير فارغة تحتوي فقط على القيم المنطقية `true`.

### حالة الاستخدام

استخدم `areTrue` للتحقق من أن مجموعة من الشروط المسبقة أو أعلام الميزات كلها مفعّلة (كل القيم `true`) قبل المتابعة، مع
اعتبار المُدخلات الفارغة أو المشوّهة غير مستوفاة (`false`).

> **ملاحظة لمستخدمي TypeScript:**
>
> تُرجع `areTrue` القيمة `false` للمصفوفة الفارغة وللمصفوفات التي تحتوي على أي قيمة ليست `true` بشكل صارم.

### المزايا

- تُرجع `true` فقط عندما يكون كل عنصر `true` بشكل صارم وتكون المصفوفة غير فارغة.
- تفشل بسرعة: تُرجع `false` بمجرد العثور على قيمة ليست `true`.
- ترفض المُدخلات غير الصالحة (غير المصفوفات أو المصفوفات الفارغة) عبر إرجاع `false`.

## الاستخدام

### الصياغة

الدالة:

- `areTrue(array)`

المعاملات:

- `array`: المصفوفة المراد التحقق من احتوائها على قيم `true` فقط.

### استيراد الدالة محليًا

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areTrue(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال هنا: [areTrue](‎../_analysis/areTrue.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 1:50:17 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>