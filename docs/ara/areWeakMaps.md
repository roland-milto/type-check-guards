# areWeakMaps

## الوصف

تتحقق `areWeakMaps` مما إذا كانت القيمة مصفوفة غير فارغة يكون كل عنصر فيها `WeakMap`، وتعيد `true` فقط في هذه الحالة و
`false` خلاف ذلك.

### حالة الاستخدام

تحقق من بيانات وقت التشغيل (مثل JSON المُحلَّل، أو مُدخلات الإضافات، أو الإعدادات ذات الأنواع غير الصارمة) لضمان أنها
مصفوفة غير فارغة من مثيلات `WeakMap` قبل التكرار واستدعاء أساليب `WeakMap`؛ تعيد `false` عندما لا يكون أي عنصر `WeakMap`
أو عندما تكون المصفوفة فارغة.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areWeakMaps` للتحقق من صحة إدخال غير معروف قبل التعامل معه على أنه `WeakMap[]` غير فارغة؛ فهي تعيد `false`
> للمصفوفات الفارغة.

### المزايا

- يضمن أن كل عنصر في المصفوفة المقدَّمة هو مثيل من `WeakMap`.
- يعيد `false` للمصفوفات الفارغة، مما يمنع القبول غير المقصود لـ "عدم وجود بيانات" كمدخل صالح.
- مفيد كحارس قبل تنفيذ عمليات خاصة بـ `WeakMap` على جميع العناصر.

## الاستخدام

### الصياغة

الدالة:

- `areWeakMaps(array)`

المعاملات:

- `array`: المصفوفة التي سيتم التحقق منها لمعرفة ما إذا كانت تحتوي على مثيلات `WeakMap`.

### استيراد الدالة محليًا

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  //‎‎ القائمة هي مصفوفة غير فارغة من مثيلات WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  //‎‎ ليست WeakMap[] غير فارغة
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areWeakMaps(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areWeakMaps](‎../_analysis/areWeakMaps.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 1:36:01 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>