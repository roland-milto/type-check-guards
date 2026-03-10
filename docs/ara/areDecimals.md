# areDecimals

## الوصف

يتحقق مما إذا كانت جميع العناصر في مصفوفة أعدادًا عشرية وكانت المصفوفة ممتلئة، ويُرجع `true` أو `false`.

### حالة الاستخدام

التحقق من القوائم التي يوفرها المستخدم (مثل أعمدة CSV أو مدخلات النماذج) لضمان أن المصفوفة غير فارغة وأن كل إدخال قيمة
عشرية قبل التحليل أو إجراء الحسابات.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areDecimals` عندما تحتاج إلى تحقق منطقي سريع بأن `unknown[]` غير فارغة وأن كل عنصر فيها تمثيل عشري.

### المزايا

- يضمن أن المُدخل عبارة عن مصفوفة ممتلئة قبل التحقق من العناصر، مما يمنع القبول غير المقصود للقوائم الفارغة.
- يتحقق من كل عنصر باستخدام `isDecimal`، لذا فإن القيم المختلطة أو غير الصالحة تؤدي إلى نتيجة `false` فورية.
- يوفر نتيجة منطقية بسيطة (`true`/`false`) مناسبة للحراس وتدفقات التحقق التي تعتمد على الإرجاع المبكر.

## الاستخدام

### الصياغة

الدالة:

- `areDecimals(array)`

المعاملات:

- `array`: المصفوفة المراد التحقق منها.

### استيراد الدالة محليًا

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); //‎ صحيح
console.log(areDecimals(b)); //‎ خطأ
console.log(areDecimals(c)); //‎ خطأ
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areDecimals(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areDecimals](‎../_analysis/areDecimals.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 3:56:14 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>