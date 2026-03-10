# areSymbols

## وصف

بيفحص إذا كان الإدخال مصفوفة مليانة وعناصرها كلها symbols، وبيِرجّع `true` أو `false`.

### حالة الاستخدام

اتأكد إن حقل في الإعدادات (زي قايمة مفاتيح فريدة ممثلة كـ symbols) هو مصفوفة مش فاضية ومحتواها symbols بس قبل ما تستخدمه
في APIs اللي بتتطلب `symbol[]`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areSymbols` علشان تتحقق من إدخال مش معروف قبل ما تتعامل معاه على إنه `symbol[]`؛ هي بترجّع `false` لغير
> المصفوفات والمصفوفات الفاضية.

### مميزات

- بيرجّع `true` بس لما الإدخال يبقى مصفوفة مش فاضية وكل عنصر فيها يبقى symbol.
- بيمنع النتائج الإيجابية الكدّابة برفض غير المصفوفات والمصفوفات الفاضية عن طريق فحص المصفوفة المليانة الداخلي.
- مفيد كـ runtime type guard علشان يتحقق من القوايم اللي فيها symbols بس قبل أي معالجة بعد كده.

## الاستخدام

### الصياغة

الدالة:

- `areSymbols(array)`

المعاملات:

- `array`: المصفوفة اللي هيتتعمل عليها فحص علشان عناصر الـ symbol.

### استيراد الدالة محليًا

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  //‎‎ a مصفوفة فيها رموز بس وقت التشغيل
  const first = a[0];
  console.log(typeof first); //‎ "symbol"
}

console.log(areSymbols(b)); //‎ false
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areSymbols(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areSymbols](‎../_analysis/areSymbols.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 14:20:38 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>