# areOneOfType

## الوصف

تتحقق `areOneOfType` مما إذا كانت جميع العناصر في مصفوفة غير فارغة هي من أحد أنواع وقت التشغيل المحددة.

### حالة الاستخدام

التحقق من صحة البيانات الواردة (مثل JSON المُحلَّل) عندما يجب أن يكون حقل ما مصفوفة غير فارغة تكون عناصرها محصورة في
مجموعة معروفة من الأنواع البدائية؛ أرجِع `false` عندما تكون المصفوفة فارغة أو تحتوي على أي نوع غير مسموح به.

> **ملاحظة لمستخدمي TypeScript:**
>
> تُرجع هذه الدالة قيمة منطقية ولا تُضيّق أنواع عناصر المصفوفة وقت الترجمة (compile time)؛ استخدمها كخطوة تحقق في وقت
> التشغيل قبل المعالجة اللاحقة.

### المزايا

- يضمن أن كل عنصر في مصفوفة يطابق نوعًا واحدًا على الأقل من أنواع وقت التشغيل المسموح بها، ويُرجع `true` فقط عندما تجتاز
  المصفوفة بأكملها الفحص.
- يرفض المدخلات غير الصالحة مبكرًا: يُرجع `false` عندما تكون `array` أو `types` فارغة أو ليست مصفوفة ممتلئة.
- مفيد للتحقق من صحة المجموعات متعددة الأنواع (مثل الأرقام والسلاسل النصية) عبر استدعاء واحد لـ `areOneOfType`.

## الاستخدام

### الصياغة

الدالة:

- `areOneOfType(array, types)`

المعاملات:

- `array`: مصفوفة من العناصر المطلوب التحقق منها مقابل الأنواع المقدمة.
- `types`: مصفوفة من السلاسل النصية تمثل أنواع البيانات المطلوب التحقق منها.

### استيراد الدالة محليًا

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areOneOfType(array, types)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areOneOfType](‎../_analysis/areOneOfType.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 11:35:57 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>