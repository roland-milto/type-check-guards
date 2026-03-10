# isDate

## الوصف

تحدّد `isDate` ما إذا كانت القيمة المُقدَّمة هي `Date`، وتُرجع `true` لمثيلات `Date` و`false` خلاف ذلك.

### حالة الاستخدام

تحقّق من القيم غير المعروفة وضيّق نوعها (مثل بيانات الطلب، قيم الإعدادات، أو JSON المُحلَّل) قبل إجراء عمليات `Date` مثل
التنسيق، المقارنات، أو استدعاء `toISOString()`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isDate` لتضييق النوع من `unknown` إلى `Date` وقت التشغيل؛ فهي تُرجع `true` فقط لمثيلات `Date` الفعلية (وليس
> لسلاسل نصية تمثل تاريخًا).

### المزايا

- يوفّر حارسًا بسيطًا وقت التشغيل للتحقق مما إذا كانت القيمة من نوع `Date`.
- يساعد على منع أخطاء الأنواع عبر ضمان مرور مثيلات `Date` فقط خلال التحقق.
- مفيد للتحقق من المدخلات غير المعروفة (مثل حمولات واجهات برمجة التطبيقات) قبل استخدام أساليب خاصة بالتواريخ.

## الاستخدام

### الصياغة

الدالة:

- `isDate(value)`

المعاملات:

- `value`: القيمة المراد التحقق مما إذا كانت من نوع `Date`.

### استيراد الدالة محليًا

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  //‎‎ الإدخال هو Date هنا
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isDate(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال هنا: [isDate](‎../_analysis/isDate.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 3:36:28 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>