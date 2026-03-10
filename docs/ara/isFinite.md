# isFinite

## الوصف

يحدد ما إذا كانت `value` المعطاة هي `number` منتهٍ.

### حالة الاستخدام

استخدم `isFinite` للتحقق من صحة مدخلات غير معروفة (مثلًا من JSON أو النماذج أو واجهات برمجة التطبيقات) قبل إجراء
الحسابات العددية، لضمان أن القيمة عدد حقيقي ومنتهٍ.

> **ملاحظة لمستخدمي TypeScript:**
>
> `isFinite` يعيد `true` فقط للأعداد المنتهية؛ ويعيد `false` لـ `NaN` و`Infinity` وأي قيمة ليست عددًا.

### المزايا

- يستخدم الدالة المضمنة `Number.isFinite` لإجراء فحص موثوق للكونية.
- يعيد `true` فقط للأعداد المنتهية؛ ويعيد `false` لـ `NaN` و`Infinity` وللمدخلات التي ليست أعدادًا.
- مُسند بسيط وخالٍ من الآثار الجانبية ومناسب للتحقق ومنطق الحماية.

## الاستخدام

### الصياغة

الدالة:

- `isFinite(value)`

المعاملات:

- `value`: القيمة المراد التحقق من كونها منتهية.

### استيراد الدالة محليًا

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
//‎‎ finiteNumbers هو: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  //‎‎ القيمة هنا عدد محدود
  const doubled = value * 2;
  console.log(doubled);
}
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isFinite(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [isFinite](‎../_analysis/isFinite.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 4:28:52 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>