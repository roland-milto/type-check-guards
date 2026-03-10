# areWeakSets

## وصف

بيفحص إذا كان الـ input عبارة عن array مش فاضية وكل عنصر فيها `WeakSet`، وبيِرجّع `true` بس في الحالة دي.

### حالة الاستخدام

تحقق من الـ runtime input (زي اللي جاي من APIs، أو configuration، أو بيانات داخلها المستخدم) علشان تضمن إن عندك ليست مش
فاضية من instances بتاعة `WeakSet` قبل ما تكمل منطق بيعتمد على سلوك `WeakSet`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areWeakSets` علشان تتحقق من input مش معروف قبل ما تتعامل معاه على إنه `WeakSet[]`. هي بترجع `false` للـ arrays
> الفاضية ولغير الـ arrays.

### مميزات

- بيضمن إن كل عنصر في الـ input array هو `WeakSet`.
- بيرجع `false` للـ arrays الفاضية، وده بيمنع نتيجة “كلها سليمة” بالغلط لما البيانات تكون ناقصة.
- بيفشل بأمان بإنه بيرجع `false` لما الـ input مايبقاش array متعبّية (بما فيهم `null`).
- مفيد كـ guard قبل ما تعمل عمليات بتحتاج instances من `WeakSet`.

## الاستخدام

### الصياغة

الدالة:

- `areWeakSets(array)`

المعاملات:

- `array`: الـ array اللي هيتتشيّك عليها إنها فيها كائنات `WeakSet`.

### استيراد الدالة محليًا

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  //‎‎ a عبارة عن مصفوفة مش فاضية من مثيلات WeakSet
}

console.log(areWeakSets(a)); //‎ صح
console.log(areWeakSets(b)); //‎ غلط
console.log(areWeakSets(c)); //‎ غلط
console.log(areWeakSets(null as unknown)); //‎ غلط

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areWeakSets(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areWeakSets](‎../_analysis/areWeakSets.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 14:07:29 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>