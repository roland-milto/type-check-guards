# areObjects

## الوصف

تتحقق `areObjects` مما إذا كانت مصفوفة غير فارغة مُقدَّمة تحتوي على كائنات فقط.

### حالة الاستخدام

استخدم `areObjects` عندما تتلقى مصفوفة غير معروفة (مثلًا من تحليل JSON أو من واجهات برمجة تطبيقات خارجية) وتحتاج إلى
التأكد من أنها غير فارغة وأن كل عنصر فيها كائن قبل التكرار والوصول إلى خصائص الكائن.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areObjects` للتحقق من `unknown[]` قبل التعامل مع العناصر على أنها كائنات؛ فهي تعيد `false` للمصفوفات الفارغة.

### المزايا

- يعيد `true` فقط عندما يكون الإدخال مصفوفة غير فارغة وكل عنصر فيها كائنًا.
- يتوقف مبكرًا ويعيد `false` بمجرد العثور على عنصر ليس كائنًا.
- يساعد على التحقق من صحة إدخال غير معروف قبل تنفيذ عمليات خاصة بالكائنات.

## الاستخدام

### الصياغة

الدالة:

- `areObjects(array)`

المعاملات:

- `array`: المصفوفة التي سيتم التحقق من احتوائها على عناصر من نوع كائن.

### استيراد الدالة محليًا

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  //‎‎ value هي مصفوفة ممتلئة من كائنات
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areObjects(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areObjects](‎../_analysis/areObjects.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 12:07:53 ص (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>