# areIndexesFound

## وصف

`areIndexesFound` بتشيّك إذا كانت القيمة مصفوفة مش فاضية وعناصرها كلها إندكسات صالحة، وبتِرجّع `true` لو كده و`false`
غير كده.

### حالة الاستخدام

تحقّق من بيانات جاية من المستخدم أو من مصدر خارجي (زي JSON متحلّل) اللي المفروض تكون ليستة إندكسات قبل ما تستخدمها
للوصول للمصفوفات أو لتقطيعها.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areIndexesFound` علشان تتحقق من إدخال مجهول قبل ما تعتبر عناصره إندكسات للمصفوفة؛ هي بترجّع `false` للمصفوفات
> الفاضية وللمصفوفات اللي فيها قيم مش إندكس.

### مميزات

- بيرجّع `true` بس لما الإدخال يكون مصفوفة مليانة وكل عنصر فيها يكون إندكس صالح.
- بيفشل بسرعة: بيرجّع `false` أول ما يقابل عنصر مش إندكس.
- مفيد كـ guard قبل ما تستخدم القيم كأماكن في المصفوفة أو كـ offsets.

## الاستخدام

### الصياغة

الدالة:

- `areIndexesFound(array)`

المعاملات:

- `array`: المصفوفة اللي هتتشيّك إنها مطابقة لشروط الإندكس.

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
  //‎‎ هنا، `a` اتأكدنا إنها مصفوفة اندكسات مليانة.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areIndexesFound(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في
الدوال: [areIndexesFound](‎../_analysis/areIndexesFound.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 00:40:55 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>