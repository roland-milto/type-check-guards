# areFilledArrays

## الوصف

تتحقق `areFilledArrays` مما إذا كانت المصفوفة ثنائية الأبعاد غير فارغة وأن جميع مصفوفاتها الفرعية غير فارغة.

### حالة الاستخدام

استخدم `areFilledArrays` للتحقق من صحة إدخال جدولي أو شبيه بالمصفوفات (مثل صفوف CSV أو بيانات الشبكة أو النتائج المجمعة)
بحيث يمكنك افتراض وجود مصفوفة فرعية واحدة على الأقل وأن أياً من المصفوفات الفرعية ليس فارغًا.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areFilledArrays` عندما تحتاج إلى التأكد من أن مصفوفة ثنائية الأبعاد تحتوي على صف واحد على الأقل وأن كل صف
> يحتوي على عنصر واحد على الأقل قبل التكرار عليها أو استخدام الفهرسة للوصول إلى عناصرها.

### المزايا

- يتحقق من أن المصفوفة الخارجية غير فارغة وأن كل مصفوفة داخلية غير فارغة أيضًا، ويُرجع `true` فقط عند تحقق الشرطين معًا.
- يعمل مع أي أنواع عناصر داخل المصفوفات الفرعية (مثل الأرقام والسلاسل النصية والكائنات والمصفوفات المتداخلة) لأنه يتحقق
  فقط من حالة “امتلاء” المصفوفة، وليس من محتوى العناصر.
- يوفر نتيجة منطقية بسيطة (`true`/`false`) مناسبة كحارس قبل معالجة البيانات ثنائية الأبعاد.

## الاستخدام

### الصياغة

الدالة:

- `areFilledArrays(array)`

المعاملات:

- `array`: المصفوفة ثنائية الأبعاد المراد التحقق منها.

### استيراد الدالة محليًا

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); //‎ صحيح
console.log(areFilledArrays(b)); //‎ صحيح
console.log(areFilledArrays(c)); //‎ صحيح
console.log(areFilledArrays(d)); //‎ خطأ
console.log(areFilledArrays(e)); //‎ خطأ
console.log(areFilledArrays(f)); //‎ خطأ

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areFilledArrays(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areFilledArrays](‎../_analysis/areFilledArrays.md‎)

<br>

---

<small>تم إنشاء الملف في 6 فبراير 2026 في 11:55:22 ص (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>