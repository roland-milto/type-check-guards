# areIndexesFound

## الوصف

يتحقق `areIndexesFound` مما إذا كانت القيمة مصفوفة غير فارغة تكون عناصرها كلها فهارس صالحة، ويعيد `true` إذا كانت كذلك و
`false` خلاف ذلك.

### حالة الاستخدام

التحقق من البيانات المقدمة من المستخدم أو البيانات الخارجية (مثل JSON المُحلَّل) التي يُتوقع أن تكون قائمة من الفهارس
قبل استخدامها للوصول إلى المصفوفات أو لتقطيعها.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areIndexesFound` للتحقق من صحة الإدخال غير المعروف قبل التعامل مع عناصره كفهارس للمصفوفة؛ إذ يعيد `false`
> للمصفوفات الفارغة وللمصفوفات التي تحتوي على قيم ليست فهارس.

### المزايا

- يعيد `true` فقط عندما يكون الإدخال مصفوفة غير فارغة وكل عنصر فيها فهرسًا صالحًا.
- يفشل بسرعة: يعيد `false` بمجرد مصادفة عنصر ليس فهرسًا.
- مفيد كحارس قبل استخدام القيم كمواضع داخل المصفوفة أو كإزاحات.

## الاستخدام

### الصياغة

الدالة:

- `areIndexesFound(array)`

المعاملات:

- `array`: المصفوفة التي سيتم التحقق من توافقها مع الفهارس.

### استيراد الدالة محليًا

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); //‎ true
console.log(areIndexesFound(b)); //‎ false
console.log(areIndexesFound(c)); //‎ false

if (areIndexesFound(a)) {
  //‎‎ هنا، تم التأكد من أن `a` مصفوفة ممتلئة من الفهارس.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areIndexesFound(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areIndexesFound](‎../_analysis/areIndexesFound.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 12:40:54 ص (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>