# isWeakSet

## الوصف

يحدّد ما إذا كانت `value` المعطاة هي `WeakSet` من الكائنات.

### حالة الاستخدام

استخدم `isWeakSet` عند قبول مُدخل غير مُنمّط (مثلًا من واجهات برمجة تطبيقات خارجية، أو إعدادات ديناميكية، أو قيم
`unknown`) وتحتاج إلى التحقق من أنه `WeakSet` قبل استخدام عمليات خاصة بـ `WeakSet`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isWeakSet` لتضييق قيمة من النوع `unknown` إلى `WeakSet<object>` وقت التشغيل؛ لاحظ أن `WeakSet` لا يمكن أن
> يحتوي إلا على مراجع كائنات.

### المزايا

- يوفّر تحقّقًا بسيطًا وقت التشغيل لمعرفة ما إذا كانت القيمة `WeakSet`.
- يساعد على منع أخطاء الأنواع عبر ضمان أن تُعامَل فقط مثيلات `WeakSet` على أنها كذلك.
- يعمل مع أي مُدخل من النوع `unknown` ويُرجع نتيجة منطقية واضحة (`true`/`false`).

## الاستخدام

### الصياغة

الدالة:

- `isWeakSet(value)`

المعاملات:

- `value`: القيمة المراد التحقق منها.

### استيراد الدالة محليًا

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  //‎‎ a هو WeakSet أثناء وقت التشغيل
}
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isWeakSet(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [isWeakSet](‎../_analysis/isWeakSet.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 2:13:50 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>