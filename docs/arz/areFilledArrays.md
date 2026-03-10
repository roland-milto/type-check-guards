# areFilledArrays

## وصف

`areFilledArrays` بتشيّك إذا كانت المصفوفة ثنائية الأبعاد مش فاضية وكل المصفوفات الفرعية اللي جواها مش فاضية.

### حالة الاستخدام

استخدم `areFilledArrays` علشان تتحقق من مدخلات شبه الجداول أو المصفوفات (زي صفوف CSV، بيانات grid، نتايج متجمّعة) بحيث
تقدر تفترض بأمان إن فيه على الأقل مصفوفة فرعية واحدة ومفيش ولا مصفوفة فرعية فاضية.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areFilledArrays` لما تحتاج تتأكد إن مصفوفة 2D فيها على الأقل صف واحد وإن كل صف فيه على الأقل عنصر واحد قبل ما
> تعمل iterate عليها أو تستخدم indexing.

### مميزات

- بيتأكد إن المصفوفة الخارجية مش فاضية وإن كل مصفوفة جوّاها كمان مش فاضية، وبيرجّع `true` بس لما الشرطين يتحققوا.
- بيشتغل مع أي نوع عناصر جوّا المصفوفات الفرعية (زي أرقام، سترينجات، أوبجكتس، مصفوفات متداخلة) لأنه بس بيفحص حالة إن
  المصفوفة “مليانة”، مش محتوى العناصر.
- بيدي نتيجة بوليان بسيطة (`true`/`false`) تنفع كـ guard قبل ما تعالج بيانات ثنائية الأبعاد.

## الاستخدام

### الصياغة

الدالة:

- `areFilledArrays(array)`

المعاملات:

- `array`: المصفوفة ثنائية الأبعاد اللي هتتشيّك.

### استيراد الدالة محليًا

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); //‎ صح
console.log(areFilledArrays(b)); //‎ صح
console.log(areFilledArrays(c)); //‎ صح
console.log(areFilledArrays(d)); //‎ غلط
console.log(areFilledArrays(e)); //‎ غلط
console.log(areFilledArrays(f)); //‎ غلط

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areFilledArrays(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في
الدوال: [areFilledArrays](‎../_analysis/areFilledArrays.md‎)

<br>

---

<small>الملف اتعمل في 6 February 2026 at 11:55:23 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>