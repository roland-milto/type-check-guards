# areSets

## وصف

بيتحقق إذا كانت مصفوفة مش فاضية معيّنة بتحتوي بس على instances من `Set`، وبيِرجّع `true` لو كده و`false` غير كده.

### حالة الاستخدام

اتأكد إن قيمة (زي اللي جاية من إدخال المستخدم، أو parsing لـ JSON، أو APIs خارجية) هي مصفوفة مش فاضية من كائنات `Set`
قبل ما تعالج كل set.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areSets` علشان تتأكد من إدخال مش معروف قبل ما تلف عليه وتستدعي APIs بتاعة `Set` (زي `.size` و`.has` و`.add`)
> على كل عنصر.

### مميزات

- بيرجّع `true` بس لما الإدخال يكون مصفوفة مش فاضية وكل عنصر فيها يكون instance من `Set`.
- بيمنع النتائج الإيجابية الغلط للمصفوفات الفاضية بإنه بيرجّع `false` لما المصفوفة مايبقاش فيها عناصر.
- مفيد كـ runtime guard قبل ما تعمل عمليات مخصوصة بـ `Set` على كل عنصر.

## الاستخدام

### الصياغة

الدالة:

- `areSets(array)`

المعاملات:

- `array`: المصفوفة اللي هتتشيّك إذا كانت عناصرها instances من `Set`.

### استيراد الدالة محليًا

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  //‎‎ a هي مصفوفة من كائنات Set وقت التشغيل
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); //‎ غلط
console.log(areSets(c)); //‎ غلط
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areSets(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areSets](‎../_analysis/areSets.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 23:12:23 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>