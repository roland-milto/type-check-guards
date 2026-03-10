# isNaN

## الوصف

يحدد ما إذا كانت `value` المقدمة هي `NaN` من النوع `number` دون تحويل السلاسل النصية.

### حالة الاستخدام

تحقق من صحة الإدخال غير الموثوق أو ضعيف الأنواع (مثل حمولات API، قيم النماذج، JSON المُحلَّل) لاكتشاف القيمة الخاصة
`NaN` والتعامل معها بشكل صريح، مع اعتبار المدخلات غير الرقمية على أنها ليست `NaN`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isNaN` عندما تحتاج إلى اكتشاف القيمة الرقمية الخاصة `NaN` مع ضمان أن الإدخال هو فعلاً `number` (من دون تحويل
> سلسلة نصية إلى رقم).

### المزايا

- يتحقق مما إذا كانت القيمة هي `NaN` دون إكراه القيم غير الرقمية (مثل السلاسل النصية) إلى أرقام.
- يعيد `true` فقط للقيم التي يكون نوعها `number` وفي الوقت نفسه `NaN`.
- آمن لمدخلات `unknown` ويتجنب النتائج الإيجابية الكاذبة الناتجة عن التحويلات الضمنية.

## الاستخدام

### الصياغة

الدالة:

- `isNaN(value)`

المعاملات:

- `value`: القيمة المراد التحقق مما إذا كانت `NaN` من النوع `number`.

### استيراد الدالة محليًا

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); //‎ true
console.log(isNaN(b)); //‎ false
console.log(isNaN(c)); //‎ false

if (isNaN(a)) {
  //‎‎ a هو رقم وبالتحديد NaN
}
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isNaN(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال هنا: [isNaN](‎../_analysis/isNaN.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 3:45:01 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>