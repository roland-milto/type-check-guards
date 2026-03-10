# areErrors

## الوصف

يتحقق مما إذا كانت المصفوفة غير فارغة وتحتوي فقط على كائنات `Error`، ويُرجع `true` أو `false`.

### حالة الاستخدام

تحقق من أن `unknown[]` المُقدَّمة وقت التشغيل (مثلًا: الإخفاقات المجمّعة، نتائج التحقق من الصحة، أو البيانات المُزالة
التسلسل) هي قائمة غير فارغة من كائنات `Error` قبل التكرار عليها أو تسجيلها أو إعادة رميها.

> **ملاحظة لمستخدمي TypeScript:**
>
> تُرجع `areErrors` القيمة `true` فقط لمصفوفة ممتلئة يكون كل عنصر فيها `Error`؛ وتُرجع `false` لمصفوفة فارغة أو إذا كان
> أي عنصر ليس `Error`.

### المزايا

- يضمن أن كل عنصر هو مثيل من `Error`، مما يتيح معالجة الأخطاء وتسجيلها بأمان.
- يرفض المصفوفات الفارغة، مما يمنع اعتبار حالات "لا توجد أخطاء" بالخطأ قوائم أخطاء صالحة.
- يعمل جيدًا كحارس وقت التشغيل عند التعامل مع مدخلات `unknown[]` (مثلًا من واجهات برمجة التطبيقات أو كتل `catch`).

## الاستخدام

### الصياغة

الدالة:

- `areErrors(array)`

المعاملات:

- `array`: المصفوفة المراد التحقق منها بحثًا عن كائنات `Error`.

### استيراد الدالة محليًا

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  //‎‎ القيمة هي مصفوفة غير فارغة من كائنات Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areErrors(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areErrors](‎../_analysis/areErrors.md‎)

<br>

---

<small>تم إنشاء الملف في 6 فبراير 2026 في 12:32:37 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>