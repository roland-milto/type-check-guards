# isArray

## الوصف

تتحقق `isArray` مما إذا كانت قيمة معيّنة مصفوفة وتعيد `true` إذا كانت كذلك، وإلا فتعيد `false`.

### حالة الاستخدام

تحقق من صحة بيانات غير معروفة (مثل JSON المُحلَّل أو استجابات API) لضمان أن القيمة مصفوفة قبل التكرار أو الفهرسة أو
الوصول إلى `.length`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isArray` عندما تحتاج إلى تحقق وقت التشغيل للمصفوفات؛ فهي تعيد قيمة منطقية ومن الآمن استدعاؤها مع قيم
`unknown`.

### المزايا

- يستخدم الدالة المضمنة `Array.isArray` لاكتشاف المصفوفات بشكل موثوق عبر العوالم (مثل iframes).
- يعيد نتيجة منطقية بسيطة (`true`/`false`) مناسبة للحراس ومنطق التفريع.
- يعمل مع أي نوع إدخال لأن المعامل هو `unknown`.

## الاستخدام

### الصياغة

الدالة:

- `isArray(value)`

المعاملات:

- `value`: القيمة المراد التحقق منها.

### استيراد الدالة محليًا

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  //‎‎ الإدخال عبارة عن مصفوفة أثناء وقت التشغيل
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isArray(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال هنا: [isArray](‎../_analysis/isArray.md‎)

<br>

---

<small>تم إنشاء الملف في 6 فبراير 2026 في 11:29:35 ص (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>