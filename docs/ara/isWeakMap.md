# isWeakMap

## الوصف

يحدد ما إذا كانت `value` المعطاة هي مثيل (instance) من `WeakMap`.

### حالة الاستخدام

استخدم `isWeakMap` عندما تقبل قيمة من النوع `unknown` (مثلًا من واجهة برمجة تطبيقات عامة، نظام إضافات، أو إعدادات
ديناميكية) وتحتاج إلى التحقق من أنها `WeakMap` قبل استخدام سلوك خاص بـ `WeakMap`.

> **ملاحظة لمستخدمي TypeScript:**
>
> تُجري `isWeakMap` تحققًا باستخدام `instanceof WeakMap`؛ وهي حارس وقت تشغيل يعيد `true` فقط لمثيلات `WeakMap` الفعلية.

### المزايا

- تحقق بسيط وقت التشغيل لمعرفة ما إذا كانت قيمة ما هي `WeakMap`.
- يساعد على منع إساءة استخدام واجهات برمجة التطبيقات التي تتطلب `WeakMap` عبر إرجاع `true`/`false` بدلًا من الرمي (
  throw).
- يعمل مع مدخلات من النوع `unknown`، مما يجعله مناسبًا عند حدود الوحدات (مثل التحليل، البيانات الخارجية، أو الشيفرة غير
  المعرّفة الأنواع).

## الاستخدام

### الصياغة

الدالة:

- `isWeakMap(value)`

المعاملات:

- `value`: القيمة المراد التحقق منها.

### استيراد الدالة محليًا

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  //‎‎ a هو WeakMap أثناء وقت التشغيل
}

console.log(isWeakMap(a)); //‎ صحيح
console.log(isWeakMap(b)); //‎ خطأ
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isWeakMap(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [isWeakMap](‎../_analysis/isWeakMap.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 1:24:02 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>