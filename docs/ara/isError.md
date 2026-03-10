# isError

## الوصف

يتحقق مما إذا كانت `value` المعطاة مثيلًا من `Error`.

### حالة الاستخدام

استخدم `isError` عندما تتلقى قيمة `unknown` (مثلًا من كتلة `catch` أو رد نداء أو مكتبة خارجية) وتحتاج إلى تحديد ما إذا
كانت `Error` بأمان قبل قراءة `message` أو `name` أو `stack`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isError` كحارس لقيم `unknown` (مثلًا من `catch`) قبل التعامل معها على أنها `Error`.

### المزايا

- يوفّر تحقّقًا بسيطًا وقت التشغيل لمعرفة ما إذا كانت القيمة مثيلًا من `Error`.
- يساعد على تضييق نطاق المُدخلات غير المعروفة قبل الوصول إلى خصائص `Error` مثل `message` أو `stack`.
- يقلّل من خطر استثناءات وقت التشغيل عند التعامل مع قيم قادمة من `catch` أو واجهات برمجة تطبيقات خارجية أو مصادر غير
  مُعرّفة الأنواع.

## الاستخدام

### الصياغة

الدالة:

- `isError(value)`

المعاملات:

- `value`: القيمة المراد التحقق منها مقابل نوع `Error`.

### استيراد الدالة محليًا

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isError(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال هنا: [isError](‎../_analysis/isError.md‎)

<br>

---

<small>تم إنشاء الملف في 6 فبراير 2026 في 12:44:36 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>