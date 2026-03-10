# isMap

## الوصف

يتحقق مما إذا كانت `value` المعطاة هي `Map`، ويُرجع `true` إذا كانت كذلك و`false` خلاف ذلك.

### حالة الاستخدام

استخدم `isMap` عندما تتلقى قيمة من النوع `unknown` (مثلًا من تحليل JSON، أو واجهات برمجة تطبيقات خارجية، أو إدخال
المستخدم) وتحتاج إلى التأكد من أنها `Map` قبل تنفيذ عمليات `Map`.

> **ملاحظة لمستخدمي TypeScript:**
>
> `isMap` هو حارس وقت تشغيل يُرجع `true` عندما تكون القيمة `Map` و`false` خلاف ذلك؛ استخدمه لتضييق `unknown` قبل استدعاء
> واجهات برمجة تطبيقات `Map`.

### المزايا

- يوفّر تحقّقًا سريعًا أثناء وقت التشغيل لمعرفة ما إذا كانت القيمة `Map`.
- يساعد على منع أخطاء الأنواع عبر حماية مسارات الشيفرة التي تتطلب أساليب `Map` مثل `get` و`set` و`has`.
- يعمل جيدًا كخطوة تحقق خفيفة عند التعامل مع مُدخلات من النوع `unknown`.

## الاستخدام

### الصياغة

الدالة:

- `isMap(value)`

المعاملات:

- `value`: القيمة المراد التحقق منها.

### استيراد الدالة محليًا

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isMap(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال هنا: [isMap](‎../_analysis/isMap.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 4:03:32 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>