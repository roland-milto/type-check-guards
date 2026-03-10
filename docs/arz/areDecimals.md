# areDecimals

## وصف

بيفحص إذا كانت كل العناصر في مصفوفة أرقام عشرية والمصفوفة مليانة، وبيُرجّع `true` أو `false`.

### حالة الاستخدام

تحقق من القوايم اللي المستخدم بيدخلها (زي أعمدة CSV أو مدخلات الفورم) عشان تضمن إن المصفوفة مش فاضية وإن كل قيمة رقم
عشري قبل الـ parsing أو الحسابات.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areDecimals` لما تحتاج فحص بوليان سريع إن `unknown[]` مش فاضية وإن كل عنصر فيها تمثيل لرقم عشري.

### مميزات

- بيضمن إن الإدخال يبقى مصفوفة مليانة قبل ما يتحقق من العناصر، وده بيمنع قبول القوايم الفاضية بالغلط.
- بيتحقق من كل عنصر بـ `isDecimal`، فلو فيه قيم مختلطة أو غير صالحة النتيجة بتطلع `false` فورًا.
- بيدي نتيجة بوليان بسيطة (`true`/`false`) مناسبة للـ guards ولمسارات التحقق اللي فيها رجوع بدري.

## الاستخدام

### الصياغة

الدالة:

- `areDecimals(array)`

المعاملات:

- `array`: المصفوفة اللي هيتعمل عليها التحقق.

### استيراد الدالة محليًا

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); //‎ صح
console.log(areDecimals(b)); //‎ غلط
console.log(areDecimals(c)); //‎ غلط
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areDecimals(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areDecimals](‎../_analysis/areDecimals.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 15:56:13 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>