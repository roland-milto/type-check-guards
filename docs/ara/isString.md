# isString

## الوصف

تحدد `isString` ما إذا كانت قيمة معيّنة سلسلة نصية.

### حالة الاستخدام

تحقق من مُدخلات المستخدم، أو حقول حمولة واجهة برمجة التطبيقات (API)، أو قيم الإعدادات وقت التشغيل لضمان أن القيمة سلسلة
نصية قبل تطبيق عمليات السلاسل النصية (مثل القصّ، والتقسيم، وتحويل حالة الأحرف).

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isString` للتحقق من القيم من النوع `unknown` أو القيم ذات الأنواع غير الصارمة قبل استدعاء أساليب السلاسل
> النصية؛ فهي تعيد `true` فقط عندما `typeof value === "string"`.

### المزايا

- تحقق بسيط وسريع باستخدام `typeof`.
- يعيد نتيجة منطقية متوقعة: `true` للسلاسل النصية، وإلا `false`.
- يعمل مع السلاسل النصية الفارغة وغير الفارغة.
- مفيد كحارس خفيف وقت التشغيل قبل تنفيذ عمليات خاصة بالسلاسل النصية.

## الاستخدام

### الصياغة

الدالة:

- `isString(value)`

المعاملات:

- `value`: القيمة المراد اختبار ما إذا كانت من نوع سلسلة نصية.

### استيراد الدالة محليًا

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  //‎‎ الإدخال عبارة عن سلسلة نصية هنا
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isString(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [isString](‎../_analysis/isString.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 1:13:06 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>