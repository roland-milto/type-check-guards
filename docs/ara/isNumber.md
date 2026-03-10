# isNumber

## الوصف

تتحقق `isNumber` مما إذا كانت القيمة رقمًا منتهيًا وغير `NaN`.

### حالة الاستخدام

تحقق من صحة الإدخال الرقمي من مصادر غير موثوقة (النماذج، معاملات الاستعلام، حمولات JSON) قبل الحسابات أو التخزين أو
فحوصات النطاق، لضمان مرور الأرقام المنتهية فقط (`true`) وأن كل ما عدا ذلك يعيد `false`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isNumber` للتحقق من قيم `unknown` قبل إجراء العمليات الحسابية؛ فهي ترفض `NaN` و`Infinity` و`-Infinity`.

### المزايا

- يعيد `true` فقط للأرقام الحقيقية في JavaScript (تحقق من النوع بالإضافة إلى رفض `NaN` واللانهاية).
- يمنع أخطاء التحقق الشائعة حيث تمر `NaN` أو `Infinity` أو `-Infinity` كأرقام عن طريق الخطأ.
- يعمل جيدًا كحارس وقت التشغيل للمدخلات غير المعروفة (مثل JSON، إدخال المستخدم، واجهات برمجة التطبيقات الخارجية).
- بسيط وسريع وخالٍ من الآثار الجانبية.

## الاستخدام

### الصياغة

الدالة:

- `isNumber(value)`

المعاملات:

- `value`: القيمة المراد التحقق منها.

### استيراد الدالة محليًا

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  //‎‎ الإدخال هو رقم محدود صالح
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isNumber(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [isNumber](‎../_analysis/isNumber.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 1:08:01 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>