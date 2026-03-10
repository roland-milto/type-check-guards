# isNull

## الوصف

يحدّد ما إذا كانت `value` المقدّمة هي `null`.

### حالة الاستخدام

استخدم `isNull` للتحقق من صحة المدخلات أو حقول حمولة API حيث تكون `null` قيمة دالّة (sentinel) ذات معنى ويجب التعامل
معها بشكل مختلف عن `undefined` أو القيم الأخرى.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isNull` عندما تحتاج إلى التمييز بين `null` و`undefined` والقيم الأخرى التي تُعدّ falsy؛ فهو يُرجع `true` فقط
> عند كون القيمة `null`.

### المزايا

- يوفّر تحقّقًا دقيقًا من `null` دون الخلط بينه وبين `undefined`.
- يعمل بشكل موثوق مع أي نوع إدخال لأنه يقبل `unknown`.
- بسيط وسريع وخالٍ من الآثار الجانبية؛ لا يُرجع سوى `true` أو `false`.

## الاستخدام

### الصياغة

الدالة:

- `isNull(value)`

المعاملات:

- `value`: القيمة المراد التحقق مما إذا كانت `null`.

### استيراد الدالة محليًا

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); //‎ true
console.log(isNull(b)); //‎ false

if (isNull(a)) {
  //‎‎ a هو null هنا
}
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isNull(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال هنا: [isNull](‎../_analysis/isNull.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 3:38:32 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>