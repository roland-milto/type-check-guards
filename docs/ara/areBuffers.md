# areBuffers

## الوصف

تتحقق `areBuffers` مما إذا كانت القيمة المقدمة مصفوفة غير فارغة ومعبأة حيث يكون كل عنصر فيها `Buffer`، وتُرجع `true` إذا
كان الأمر كذلك و`false` خلاف ذلك.

### حالة الاستخدام

تحقق من مصفوفات الأجزاء الواردة (مثلًا من التدفقات، أو رفع الملفات، أو حزم الشبكة) لضمان أن جميع الأجزاء هي مثيلات
`Buffer` قبل دمجها أو فك ترميزها أو تمريرها إلى دوال التشفير أو المعالجة الثنائية.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areBuffers` للتحقق من `unknown[]` قبل استدعاء واجهات برمجة التطبيقات الخاصة بـ Buffer مثل `Buffer.concat`،
> لضمان أن الدالة تُرجع `true` فقط عندما يكون كل عنصر `Buffer`.

### المزايا

- يضمن أن كل عنصر في الإدخال هو مثيل `Buffer` في Node.js، ويُرجع `true` فقط عندما تتطابق المصفوفة بالكامل.
- يرفض المدخلات غير الصالحة مبكرًا عبر اشتراط مصفوفة غير فارغة ومعبأة؛ ويُرجع `false` للمصفوفات الفارغة أو القيم غير
  المصفوفية.
- مفيد كحارس قبل تنفيذ عمليات خاصة بـ buffer فقط (مثل الدمج، والتجزئة، والبروتوكولات الثنائية).

## الاستخدام

### الصياغة

الدالة:

- `areBuffers(array)`

المعاملات:

- `array`: المصفوفة المراد التحقق منها لمعرفة ما إذا كانت تحتوي على مثيلات buffer.

### استيراد الدالة محليًا

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areBuffers(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areBuffers](‎../_analysis/areBuffers.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 4:24:09 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>