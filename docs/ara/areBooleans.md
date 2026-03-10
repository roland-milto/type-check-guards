# areBooleans

## الوصف

يتحقق `areBooleans` مما إذا كانت مصفوفة غير فارغة معيّنة تحتوي فقط على قيم منطقية، ويعيد `true` إذا كان الأمر كذلك و
`false` خلاف ذلك.

### حالة الاستخدام

تحقق من البيانات التي يوفّرها المستخدم أو المصادر الخارجية (مثل حمولات JSON، ومعلمات الاستعلام، ومصفوفات الإعدادات)
لضمان أن قائمة غير فارغة تحتوي فقط على قيم منطقية قبل تطبيق المنطق المنطقي أو تمريرها إلى واجهات برمجة التطبيقات التي
تتوقع `boolean[]`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areBooleans` للتحقق من `unknown[]` قبل التعامل معها على أنها `boolean[]`؛ فهي تعيد `false` للمصفوفات الفارغة،
> لذا تعامل مع هذه الحالة صراحةً إذا كان ينبغي السماح بقائمة فارغة.

### المزايا

- يعيد `true` فقط عندما يكون كل عنصر قيمة منطقية ويكون الإدخال مصفوفة غير فارغة.
- يمنع النتائج الإيجابية الكاذبة برفض المصفوفات الفارغة (يعيد `false`).
- يعمل جيدًا كحارس وقت التشغيل قبل العمليات التي تتطلب قيمًا منطقية فقط (مثل `every` و`some` والاختزالات المنطقية).

## الاستخدام

### الصياغة

الدالة:

- `areBooleans(array)`

المعاملات:

- `array`: المصفوفة المراد التحقق من احتوائها على عناصر منطقية.

### استيراد الدالة محليًا

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areBooleans(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areBooleans](‎../_analysis/areBooleans.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 2:39:07 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>