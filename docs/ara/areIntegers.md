# areIntegers

## الوصف

تحدد `areIntegers` ما إذا كانت جميع العناصر في مصفوفة معيّنة أعدادًا صحيحة، وتُرجع `true` إذا كانت كذلك و`false` خلاف
ذلك.

### حالة الاستخدام

استخدم `areIntegers` للتحقق من البيانات التي يقدّمها المستخدم أو البيانات الخارجية (مثل معاملات الاستعلام، حمولات JSON،
صفوف CSV) عندما يتطلب منطقك قائمة ممتلئة من قيم الأعداد الصحيحة مثل المعرّفات، العدّادات، إزاحات ترقيم الصفحات، أو فهارس
المصفوفات.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areIntegers` كحارس وقت التشغيل لمدخلات `unknown[]` قبل التعامل معها على أنها `number[]` تحتوي على أعداد صحيحة
> فقط. إذا أعادت `false`، فإما أن الإدخال ليس مصفوفة ممتلئة أو أنه يحتوي على قيمة واحدة على الأقل ليست عددًا صحيحًا.

### المزايا

- تُرجع `true` فقط عندما يكون كل عنصر عددًا صحيحًا؛ وإلا تُرجع `false`.
- تساعد على التحقق من صحة مُدخلات غير معروفة قبل تنفيذ عمليات لا تقبل إلا الأعداد الصحيحة (مثل الفهرسة، العدّادات،
  المعرّفات).
- تفشل بسرعة: تتوقف عن التحقق بمجرد العثور على عنصر ليس عددًا صحيحًا.

## الاستخدام

### الصياغة

الدالة:

- `areIntegers(array)`

المعاملات:

- `array`: المصفوفة المراد التحقق من احتوائها على عناصر أعداد صحيحة.

### استيراد الدالة محليًا

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); //‎ صحيح
console.log(areIntegers(b)); //‎ صحيح
console.log(areIntegers(c)); //‎ خطأ

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areIntegers(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areIntegers](‎../_analysis/areIntegers.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 12:57:17 ص (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>