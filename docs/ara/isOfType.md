# isOfType

## الوصف

يحدّد ما إذا كانت `value` المعطاة تطابق سلسلة نوع محددة، باستخدام `typeof` للأنواع البدائية وبديل احتياطي للأنواع
المعقّدة.

### حالة الاستخدام

التحقق من مدخلات `unknown` وتضييق نطاقها (مثل استجابات API، ومدخلات المستخدم، وJSON المُحلَّل) عبر فحص ما إذا كانت
القيمة من نوع متوقّع كسلسلة نصية قبل تنفيذ عمليات خاصة بالنوع.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isOfType` للتفرّع بناءً على الأنواع وقت التشغيل عند العمل مع قيم `unknown`؛ فهي تعيد `true`/`false` وتتعامل مع
`null` و`undefined` بشكل صريح.

### المزايا

- يفحص الأنواع البدائية عبر `typeof` مباشرةً من أجل السرعة والوضوح.
- يتعامل بشكل صحيح مع `null` و`undefined`، وهما حالتان لا يستطيع `typeof` وحده التمييز بينهما بالشكل المقصود.
- يدعم سلاسل أنواع معقّدة أو مخصّصة عبر مقارنة احتياطية باستخدام `getTypeOf`.
- يعيد نتيجة منطقية بسيطة (`true`/`false`) مناسبة للحراس (guards) والتفرّع.

## الاستخدام

### الصياغة

الدالة:

- `isOfType(value, type)`

المعاملات:

- `value`: القيمة المراد اختبارها مقابل `type`.
- `type`: التمثيل النصي للنوع المراد التحقق منه.

### استيراد الدالة محليًا

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  //‎‎ الإدخال هنا رقم
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  //‎‎ الإدخال هنا سلسلة نصية
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isOfType(value, type)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [isOfType](‎../_analysis/isOfType.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 4:58:26 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>