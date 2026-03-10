# isFilledArray

## الوصف

يتحقق مما إذا كانت `value` مصفوفة تحتوي على عنصر واحد على الأقل، ويُرجع `true` أو `false`.

### حالة الاستخدام

استخدم `isFilledArray` للتحقق من صحة البيانات الواردة (مثل حمولات واجهة برمجة التطبيقات، قيم النماذج، الإعدادات) قبل
التكرار، أو الوصول إلى العنصر الأول، أو تطبيق منطق يتطلب وجود عنصر واحد على الأقل.

> **ملاحظة لمستخدمي TypeScript:**
>
> `isFilledArray` هو حارس وقت تشغيل يُرجع قيمة منطقية؛ ولا يضيّق أنواع العناصر إلى ما هو أبعد من تأكيد أن المصفوفة غير
> فارغة.

### المزايا

- تحقق بسيط وسريع من أن المصفوفة غير فارغة باستخدام `Array.isArray` والتحقق من الطول.
- يساعد على تجنب أخطاء وقت التشغيل عندما يفترض الكود أن المصفوفة تحتوي على عنصر واحد على الأقل.
- نتيجة منطقية واضحة: تُرجع `true` للمصفوفات غير الفارغة و`false` خلاف ذلك.

## الاستخدام

### الصياغة

الدالة:

- `isFilledArray(value)`

المعاملات:

- `value`: القيمة المراد التحقق مما إذا كانت مصفوفة غير فارغة.

### استيراد الدالة محليًا

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  //‎‎ الإدخال عبارة عن مصفوفة غير فارغة أثناء وقت التشغيل
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isFilledArray(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [isFilledArray](‎../_analysis/isFilledArray.md‎)

<br>

---

<small>تم إنشاء الملف في 6 فبراير 2026 في 11:46:12 ص (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>