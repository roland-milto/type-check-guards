# isBoolean

## الوصف

يحدد ما إذا كانت قيمة معيّنة من النوع `boolean`.

### حالة الاستخدام

تحقق من البيانات الخارجية أو غير المعرّفة الأنواع (مثل متغيرات البيئة، وحمولات JSON، ومعلمات الاستعلام) لضمان أن القيمة
من النوع `boolean` قبل استخدامها في المنطق الشرطي.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isBoolean` لتضييق النوع من `unknown` إلى `boolean` قبل تطبيق العمليات المنطقية.

### المزايا

- تحقق بسيط وسريع أثناء التشغيل باستخدام `typeof`.
- يساعد على التحقق من صحة الإدخال غير المعروف قبل تطبيق منطق خاص بالقيم المنطقية.
- يعيد نتيجة `boolean` متوقعة (`true`/`false`).

## الاستخدام

### الصياغة

الدالة:

- `isBoolean(value)`

المعاملات:

- `value`: القيمة المراد التحقق منها.

### استيراد الدالة محليًا

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  //‎‎ الإدخال هنا من النوع boolean
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isBoolean(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [isBoolean](‎../_analysis/isBoolean.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 2:35:34 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>