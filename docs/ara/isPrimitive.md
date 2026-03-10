# isPrimitive

## الوصف

تحدد `isPrimitive` ما إذا كانت قيمة معيّنة بدائية (`null`، `undefined`، `boolean`، `number`، `string`، `bigint`،
`symbol`).

### حالة الاستخدام

تحقق من صحة المدخلات وقت التشغيل (مثل حقول حمولة API، أو قيم الإعدادات، أو البيانات التي يقدّمها المستخدم) لضمان أن
القيمة بدائية قبل إجراء التسلسل، أو التسجيل، أو تطبيق عمليات مخصّصة للبدائيات فقط.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isPrimitive` لحماية مدخلات `unknown` قبل التعامل معها ككائنات أو دوال؛ فهي تُرجع `true` للبدائيات و`false`
> للكائنات والدوال.

### المزايا

- تحقق سريع وبدون تخصيصات لمعرفة ما إذا كانت القيمة بدائية في JavaScript.
- يتعامل بشكل صحيح مع `null` على أنه بدائي (على الرغم من أن `typeof null` هو `"object"`).
- يساعد على تضييق قيم `unknown` قبل إجراء عمليات مخصّصة للكائنات فقط.

## الاستخدام

### الصياغة

الدالة:

- `isPrimitive(value)`

المعاملات:

- `value`: القيمة المراد التحقق مما إذا كانت من نوع بدائي.

### استيراد الدالة محليًا

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isPrimitive(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [isPrimitive](‎../_analysis/isPrimitive.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 11:55:23 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>