# areFinite

## وصف

`areFinite` بيشيّك إذا كانت القيمة مصفوفة مش فاضية وعناصرها كلها أرقام محدودة، وبيُرجّع `true` لو كده و `false` غير كده.

### حالة الاستخدام

تحقّق من مصفوفات إدخال رقمية (زي سلاسل الرسوم البيانية، قوائم الإحداثيات، عينات القياس) قبل ما تعمل حسابات، بحيث النتيجة
تبقى `true` بس لما كل القيم تكون أرقام محدودة.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areFinite` لما تحتاج تتأكد إن المصفوفة مش فاضية وبتحتوي بس على أرقام محدودة؛ بيرجّع `false` للمصفوفات الفاضية
> وللمصفوفات اللي فيها `NaN` أو infinities.

### مميزات

- بيرجّع `true` بس لما الإدخال يبقى مصفوفة مش فاضية وكل عنصر فيها رقم محدود (finite).
- بيرفض `Infinity` و `-Infinity` و `NaN` عشان بيعتمد على فحوصات `isFinite` لكل عنصر.
- بيقدّم نتيجة بوليانية بسيطة (`true`/`false`) مناسبة للـ guards ومسارات التحقق (validation).

## الاستخدام

### الصياغة

الدالة:

- `areFinite(array)`

المعاملات:

- `array`: المصفوفة اللي هيتتعملها فحص إن كل عناصرها أرقام محدودة.

### استيراد الدالة محليًا

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); //‎ صح
console.log(areFinite(b)); //‎ غلط
console.log(areFinite(c)); //‎ غلط

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); //‎ 60
console.log(sumIfFinite([10, NaN, 30])); //‎ null
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areFinite(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areFinite](‎../_analysis/areFinite.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 16:33:31 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>