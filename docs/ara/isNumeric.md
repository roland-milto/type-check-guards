# isNumeric

## الوصف

تحدد `isNumeric` ما إذا كانت `value` المعطاة تُعد رقمية عبر التحقق من نوعها المُستنتَج مقابل `NUMERIC_TYPES`.

### حالة الاستخدام

استخدم `isNumeric` للتحقق من صحة المدخلات (مثل حمولات واجهة API، وقيم النماذج، والإعدادات) قبل إجراء العمليات الرقمية،
وللقبول بشكل متسق بالأنواع الشبيهة بالرقمية (مثل `BigInt`) وفقًا لـ `NUMERIC_TYPES`.

> **ملاحظة لمستخدمي TypeScript:**
>
> `isNumeric` هو مُسند (predicate) يعيد قيمة منطقية؛ تعامل معه كتحقق وقت التشغيل لمعرفة ما إذا كانت القيمة تنتمي إلى
> مجموعة الأنواع الرقمية المعرّفة بواسطة المكتبة.

### المزايا

- يستخدم `getTypeOf` بالإضافة إلى `NUMERIC_TYPES` لمركزة منطق اكتشاف القيم الرقمية والحفاظ على اتساق عمليات التحقق عبر
  قاعدة الشيفرة.
- يعيد قيمة منطقية بسيطة (`true`/`false`) لتسهيل التفريع والاستخدام بأسلوب الحارس (guard).
- يدعم عدة تمثيلات رقمية (مثل `number` و`BigInt`) كما هو معرّف بواسطة `NUMERIC_TYPES`.

## الاستخدام

### الصياغة

الدالة:

- `isNumeric(value)`

المعاملات:

- `value`: القيمة المراد التحقق مما إذا كانت من نوع رقمي.

### استيراد الدالة محليًا

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    //‎‎ يُعَدّ v رقميًا وفق قواعد الأنواع في المكتبة
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isNumeric(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [isNumeric](‎../_analysis/isNumeric.md‎)

<br>

---

<small>تم إنشاء الملف في 6 فبراير 2026 في 3:51:34 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>