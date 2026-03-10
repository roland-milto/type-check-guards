# isOctal

## الوصف

يحدّد ما إذا كانت القيمة سلسلة literal ثماني صالحة (مثل `0o755`).

### حالة الاستخدام

التحقق من إدخال المستخدم أو قيم الإعدادات التي يجب التعبير عنها كسلسلة literal ثماني (على سبيل المثال، أوضاع أذونات
الملفات مثل `0o644`) قبل تحليلها أو تحويلها.

> **ملاحظة لمستخدمي TypeScript:**
>
> `isOctal` هو حارس نوع (`value is string`). بعد نتيجة `true`، يقوم TypeScript بتضييق المتغير الذي تم التحقق منه إلى
`string`.

### المزايا

- يوفّر حارس نوع صارم: يُرجع `true` فقط عندما تكون المُدخلات سلسلة نصية تطابق تنسيق literal ثماني.
- يرفض السلاسل الفارغة والسلاسل التي تحتوي على مسافات بادئة/لاحقة (تحكم ASCII/مسافة)، مما يقلّل من المطابقات غير
  المقصودة.
- يدعم إشارة اختيارية ولا يميّز حالة الأحرف لبادئة `0o`/`0O`.
- متسامح مع المُدخلات غير النصية عبر إرجاع `false` بدلًا من إطلاق استثناء.

## الاستخدام

### الصياغة

الدالة:

- `isOctal(value)`

المعاملات:

- `value`: القيمة المراد التحقق منها.

### استيراد الدالة محليًا

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); //‎ صحيح
console.log(isOctal(b)); //‎ صحيح
console.log(isOctal(c)); //‎ خطأ
console.log(isOctal(d)); //‎ خطأ

if (isOctal(a)) {
  //‎‎ a هي سلسلة نصية هنا
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isOctal(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال هنا: [isOctal](‎../_analysis/isOctal.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 2:43:52 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>