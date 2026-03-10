# areNumerics

## الوصف

تتحقق `areNumerics` مما إذا كانت القيمة مصفوفة غير فارغة تكون جميع عناصرها رقمية.

### حالة الاستخدام

استخدم `areNumerics` للتحقق من صحة البيانات الخارجية أو غير المُنمَّطة (مثل حمولات JSON، ومعلمات الاستعلام، ومدخلات
النماذج) قبل حساب المجاميع أو المتوسطات أو غيرها من العمليات الرقمية، لضمان أن المُدخلات مصفوفة رقمية غير فارغة وإرجاع
`false` خلاف ذلك.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areNumerics` كحارس لمدخلات `unknown` قبل التعامل معها كمصفوفة رقمية؛ فهي تعيد `false` لغير المصفوفات
> وللمصفوفات الفارغة.

### المزايا

- يعيد `true` فقط عندما تكون المُدخلات مصفوفة غير فارغة وكل عنصر فيها رقميًا.
- يفشل بسرعة: يتوقف عن التحقق بمجرد العثور على عنصر غير رقمي، ويعيد `false`.
- يساعد على التحقق من صحة المُدخلات غير المعروفة بأمان قبل إجراء عمليات رقمية.

## الاستخدام

### الصياغة

الدالة:

- `areNumerics(array)`

المعاملات:

- `array`: المصفوفة المراد التحقق من احتوائها على عناصر رقمية.

### استيراد الدالة محليًا

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); //‎ true
console.log(areNumerics(b)); //‎ true
console.log(areNumerics(c)); //‎ false
console.log(areNumerics(d)); //‎ false
console.log(areNumerics(e)); //‎ false

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); //‎ 60
console.log(sumUnknown([10, "20", 30])); //‎ null

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areNumerics(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areNumerics](‎../_analysis/areNumerics.md‎)

<br>

---

<small>تم إنشاء الملف في 6 فبراير 2026 في 4:03:50 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>