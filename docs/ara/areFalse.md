# areFalse

## الوصف

تتحقق `areFalse` مما إذا كانت جميع العناصر في مصفوفة مُعطاة هي القيمة المنطقية `false` بشكل صارم.

### حالة الاستخدام

تحقق من أن قائمة أعلام الميزات، أو الفحوصات، أو نتائج الحراس كلها `false` قبل المتابعة (مثلًا، تأكيد عدم وجود شروط
مانعة).

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areFalse` عندما تحتاج إلى تحقق صارم بأن المصفوفة غير فارغة وتحتوي فقط على القيمة المنطقية `false`.

### المزايا

- يضمن أن كل عنصر هو `false` بشكل صارم (من دون تحويل قيمي truthy/falsey).
- يعيد `false` للمصفوفات غير الصالحة أو المصفوفات الفارغة عبر اشتراط مصفوفة ممتلئة باستخدام `isFilledArray`.
- يتوقف مبكرًا عند أول عنصر ليس `false` لتحسين الكفاءة.

## الاستخدام

### الصياغة

الدالة:

- `areFalse(array)`

المعاملات:

- `array`: المصفوفة المراد التحقق منها، وتحتوي على عناصر من أي نوع.

### استيراد الدالة محليًا

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); //‎ صحيح
const b = areFalse([false, true, false]);  //‎ خطأ
const c = areFalse([false, "false", false]); //‎ خطأ
const d = areFalse([]); //‎ خطأ
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areFalse(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areFalse](‎../_analysis/areFalse.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 4:16:06 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>