# areOfType

## الوصف

يتحقق مما إذا كانت جميع العناصر في `array` المعطاة من `type` المحدد.

### حالة الاستخدام

استخدم `areOfType` للتحقق من صحة الإدخال غير المعروف (مثل JSON المُحلَّل، وحمولات API، وإدخال المستخدم) قبل تنفيذ عمليات
خاصة بالنوع على كل عنصر في مصفوفة.

> **ملاحظة لمستخدمي TypeScript:**
>
> لأن `areOfType` هو حارس نوع، يقوم TypeScript بتضييق نوع المصفوفة داخل كتلة `if (areOfType(...)) {}` إلى
`Array<DataTypeOf<T>>`.

### المزايا

- يوفّر حارس نوع (TypeScript type guard): عندما يُرجع `true`، يتم تضييق الإدخال إلى `Array<DataTypeOf<T>>`.
- يتحقق من كل عنصر مقابل نوع وقت التشغيل المطلوب، مما يمنع مرور المصفوفات ذات الأنواع المختلطة.
- يفشل بسرعة: يُرجع `false` بمجرد العثور على عنصر غير مطابق.
- يرفض غير المصفوفات والمصفوفات الفارغة بحكم التصميم (يعتمد على `isFilledArray`).

## الاستخدام

### الصياغة

الدالة:

- `areOfType(array, type)`

المعاملات:

- `array`: المصفوفة المراد التحقق منها.
- `type`: النوع المراد التحقق منه مقابل كل عنصر في المصفوفة.

### استيراد الدالة محليًا

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  //‎‎ values أصبحت الآن number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); //‎ خطأ

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areOfType(array, type)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areOfType](‎../_analysis/areOfType.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 5:08:29 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>