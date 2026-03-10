# areRegExes

## الوصف

تتحقق `areRegExes` مما إذا كانت القيمة مصفوفة ممتلئة تحتوي فقط على كائنات `RegExp`.

### حالة الاستخدام

تحقق من أن خيار إعداد (مثل قائمة بأنماط السماح/المنع) هو مصفوفة غير فارغة من التعبيرات النمطية قبل استخدامه للمطابقة.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areRegExes` لتضييق النوع من `unknown` إلى `RegExp[]` قبل التكرار أو تركيب الأنماط.

### المزايا

- يضمن أن القيمة عبارة عن مصفوفة غير فارغة حيث يكون كل عنصر فيها مثيلاً من `RegExp`.
- يوفّر حارسًا منطقيًا بسيطًا (`true`/`false`) للتحقق من صحة إدخال المستخدم أو الإعدادات.
- يساعد على منع أخطاء وقت التشغيل عندما يفترض الكود اللاحق أن جميع العناصر تدعم عمليات التعبيرات النمطية.

## الاستخدام

### الصياغة

الدالة:

- `areRegExes(array)`

المعاملات:

- `array`: القيمة المراد التحقق منها.

### استيراد الدالة محليًا

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  //‎‎ الأنماط هنا عبارة عن مصفوفة من RegExp
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areRegExes(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areRegExes](‎../_analysis/areRegExes.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 11:16:44 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>