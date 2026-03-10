# isObject

## الوصف

يحدد ما إذا كانت `value` المعطاة هي `object` (باستثناء `null`).

### حالة الاستخدام

استخدم `isObject` للتحقق من صحة المدخلات غير المعروفة (مثل JSON المُحلَّل، واستجابات API، وحمولات الأحداث) قبل الوصول
إلى الخصائص، لضمان أن القيمة كائن وليست `null`.

> **ملاحظة لمستخدمي TypeScript:**
>
> `isObject` هو حارس وقت تشغيل يعيد قيمة منطقية؛ ولا يضيّق النوع إلى شكل كائن محدد. ادمجه مع فحوصات إضافية (مثل وجود
> الخاصية) عندما تحتاج إلى كتابة أقوى.

### المزايا

- يعيد `true` فقط للقيم غير `null` التي يكون `typeof` لها هو `"object"`.
- يمنع المأزق الشائع في JavaScript حيث قد يتم التعامل مع `null` على أنه كائن.
- يعمل مع الكائنات العادية ومع مثيلات الكائنات المضمنة (مثل `Date` و`RegExp`).
- تحقق بسيط وسريع وقت التشغيل مناسب للبرمجة الدفاعية والتحقق من صحة المدخلات.

## الاستخدام

### الصياغة

الدالة:

- `isObject(value)`

المعاملات:

- `value`: القيمة المراد التحقق مما إذا كانت `object`.

### استيراد الدالة محليًا

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  //‎‎ input هو كائن غير فارغ أثناء وقت التشغيل
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isObject(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [isObject](‎../_analysis/isObject.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 12:17:29 ص (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>