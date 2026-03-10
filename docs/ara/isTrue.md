# isTrue

## الوصف

تحدّد `isTrue` ما إذا كانت قيمة معيّنة مساوية تمامًا لـ `true`.

### حالة الاستخدام

استخدم `isTrue` للتحقق من الأعلام (flags) أو تبديلات الميزات (feature toggles) أو قيم الإعدادات حيث يجب قبول القيمة
الحرفية `true` فقط، ويجب التعامل مع أي شيء آخر على أنه `false`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isTrue` عندما تحتاج إلى قبول القيمة الحرفية المنطقية `true` فقط، وليس مجرد قيم صادقة (truthy).

### المزايا

- يوفّر تحقّقًا صارمًا للقيمة الحرفية المنطقية `true` (من دون تحويل ضمني).
- يساعد على التمييز بين `true` والقيم الصادقة (truthy) مثل `1` أو `"true"` أو `{}`.
- سلوك بسيط ومتوقّع مناسب للحراس (guards) ومسارات التحقق (validation pipelines).

## الاستخدام

### الصياغة

الدالة:

- `isTrue(value)`

المعاملات:

- `value`: القيمة المراد التحقق منها.

### استيراد الدالة محليًا

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      //‎ صحيح
const b = isTrue(1);         //‎ خطأ
const c = isTrue("true");   //‎ خطأ

if (isTrue(a)) {
  //‎‎ a صحيح هنا
}
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isTrue(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال هنا: [isTrue](‎../_analysis/isTrue.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 1:41:33 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>