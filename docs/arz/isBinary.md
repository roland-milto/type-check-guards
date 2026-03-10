# isBinary

## وصف

`isBinary` بيحدد إذا كانت القيمة سترينج باينري (وممكن تبقى مسبوقة بـ `0b`/`0B`) وبيُرجّع `true` أو `false`.

### حالة الاستخدام

اتأكد من صحة السترينجات اللي المستخدم بيدخلها (زي حقول الفورم، CLI args، قيم الكونفيج) إنها بتمثل أرقام باينري بس، وممكن
تكون بالبريفكس `0b`/`0B`، قبل أي معالجة إضافية.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isBinary` كـ type guard قبل ما تعمل parsing أو تحويل للسترينج لـ `BigInt`/`Number` علشان تتجنب مدخلات غير
> صالحة.

### مميزات

- بيقبل سترينجات باينري سواء بالبريفكس `0b`/`0B` أو من غيره.
- بيرفض السترينجات الفاضية والسترينجات اللي فيها مسافات في الأول/الآخر (ASCII ≤ 32).
- بيرجع `true`/`false` من غير ما يرمي error، فده بيخليه آمن مع المدخلات المجهولة.

## الاستخدام

### الصياغة

الدالة:

- `isBinary(value)`

المعاملات:

- `value`: القيمة اللي هيتعملها فحص.

### استيراد الدالة محليًا

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); //‎ صح
const b = isBinary("1010");   //‎ صح
const c = isBinary("0b1020"); //‎ غلط
const d = isBinary(0b1010);     //‎ غلط

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isBinary(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isBinary](‎../_analysis/isBinary.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 23:09:05 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>