# isRegEx

## الوصف

يحدّد ما إذا كانت القيمة المقدَّمة هي نسخة (instance) من `RegExp`.

### حالة الاستخدام

تحقّق من القيم التي يوفّرها المستخدم أو القيم الديناميكية (مثل الإعدادات، وحمولات API، ومدخلات الإضافات) قبل التعامل
معها كتعبير نمطي.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isRegEx` لتضييق قيم `unknown` (أو قيم الاتحاد union) قبل استخدام خصائص أو أساليب خاصة بـ RegExp؛ إذ يعيد
`true` فقط للقيم التي تكون نسخًا (instances) من `RegExp`.

### المزايا

- يوفّر حارس نوع (type guard) بسيطًا وقت التشغيل للتحقق مما إذا كانت القيمة `RegExp`.
- يساعد على منع الأخطاء عندما يتوقع الكود تعبيرًا نمطيًا (مثلًا قبل استدعاء `test` أو `exec` أو قراءة `source`).
- يعمل مع كلٍ من صيغ regex الحرفية (literals) والنسخ التي يتم إنشاؤها عبر `new RegExp(...)`.
- يعيد نتيجة منطقية واضحة (`true`/`false`) دون رمي استثناء عند إدخالات ليست regex.

## الاستخدام

### الصياغة

الدالة:

- `isRegEx(value)`

المعاملات:

- `value`: القيمة المراد التحقق منها.

### استيراد الدالة محليًا

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  //‎‎ الإدخال هو تعبير نمطي هنا
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isRegEx(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال هنا: [isRegEx](‎../_analysis/isRegEx.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 11:28:28 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>