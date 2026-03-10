# areStrings

## الوصف

تتحقق `areStrings` مما إذا كانت المصفوفة غير فارغة وكانت جميع عناصرها سلاسل نصية، وتُرجع `true` فقط في هذه الحالة.

### حالة الاستخدام

تحقق من البيانات الخارجية أو المقدمة من المستخدم (مثل معاملات الاستعلام، وحمولات JSON، وحقول CSV) لضمان أن لديك قائمة
غير فارغة من السلاسل النصية قبل المعالجة.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areStrings` للتحقق من صحة المصفوفات غير المعروفة قبل تطبيق منطق خاص بالسلاسل النصية فقط؛ فهي تُرجع `false`
> للمصفوفات الفارغة.

### المزايا

- يضمن أن كل عنصر هو سلسلة نصية ويرفض المصفوفات ذات الأنواع المختلطة عبر إرجاع `false`.
- يرفض المصفوفات الفارغة، لذا فإن `true` تشير فقط إلى قائمة غير فارغة من السلاسل النصية.
- مفيد كحارس سريع وقت التشغيل قبل تنفيذ عمليات خاصة بالسلاسل النصية فقط (مثل `trim` و`toLowerCase`).

## الاستخدام

### الصياغة

الدالة:

- `areStrings(value)`

المعاملات:

- `value`: Expected type `string[]`.

### استيراد الدالة محليًا

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  //‎‎ input هي string[] غير فارغة أثناء وقت التشغيل
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areStrings(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areStrings](‎../_analysis/areStrings.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 1:17:07 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>