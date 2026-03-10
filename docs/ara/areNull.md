# areNull

## الوصف

يتحقق مما إذا كانت جميع العناصر في `array` المعطاة هي `null`.

### حالة الاستخدام

تحقق من أن عمودًا في مجموعة بيانات، أو قائمة حقول في API، أو مصفوفة عناصر نائبة تحتوي فقط على قيم `null` قبل تطبيق منطق
يفترض أن جميع الإدخالات فارغة عن قصد.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areNull` عندما تحتاج إلى تحقق صارم بأن الإدخال مصفوفة غير فارغة وأن كل عنصر فيها هو `null` تمامًا (ليس
`undefined` ولا القيم المُقيَّمة كـ falsy).

### المزايا

- يعيد `true` فقط عندما يكون كل عنصر `null`، مما يجعله حارسًا صارمًا من نوع «تطابق الكل».
- يرفض القيم غير المصفوفات والمصفوفات الفارغة عبر إرجاع `false`، مما يمنع نتائج صحيحة بالخطأ عند إدخال غير صالح.
- يعمل جيدًا كفحص شرط مسبق قبل معالجة بيانات يجب أن تكون بالكامل `null`.

## الاستخدام

### الصياغة

الدالة:

- `areNull(array)`

المعاملات:

- `array`: مصفوفة الإدخال التي سيتم التحقق من عناصرها لمعرفة ما إذا كانت `null`.

### استيراد الدالة محليًا

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); //‎ صحيح
const allNullB = areNull(b); //‎ خطأ

const notAnArray = areNull(123 as unknown as unknown[]); //‎ خطأ
const empty = areNull([]); //‎ خطأ

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areNull(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال هنا: [areNull](‎../_analysis/areNull.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 3:42:19 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>