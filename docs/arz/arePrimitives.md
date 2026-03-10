# arePrimitives

## وصف

`arePrimitives` بتقيّم إذا كانت كل العناصر في مصفوفة مُقدَّمة وغير فاضية هي أنواع بدائية.

### حالة الاستخدام

اتأكد إن الداتا اللي داخلة (زي query parameters، قيم صف CSV، أو ليستة IDs/tags) فيها قيم بدائية بس قبل ما تعملها
serialize، أو hashing، أو logging، أو تبعتها لـ APIs اللي مينفعش تستقبل objects.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `arePrimitives` لما تحتاج تتأكد إن `unknown[]` فيها قيم بدائية بس (string, number, bigint, boolean, symbol,
> undefined, أو null) قبل ما تكمّل أي معالجة.

### مميزات

- بترجّع `true` بس لما كل عنصر يبقى قيمة بدائية (primitive)، وده بيخليها حارس صارم لمصفوفات “من غير objects/functions”.
- بتفشل بسرعة: بترجّع `false` أول ما تلاقي عنصر مش بدائي.
- كمان بترجّع `false` لو المُدخل مش مصفوفة أو لو المصفوفة فاضية (عن طريق فحص إنها filled-array)، وده بيمنع قبول مُدخلات
  غلط بالغلط.

## الاستخدام

### الصياغة

الدالة:

- `arePrimitives(array)`

المعاملات:

- `array`: المصفوفة اللي هتتشيّك إن عناصرها من النوع البدائي.

### استيراد الدالة محليًا

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); //‎ صح
const r2 = arePrimitives(b); //‎ صح
const r3 = arePrimitives(c); //‎ غلط
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.arePrimitives(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [arePrimitives](‎../_analysis/arePrimitives.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 00:00:06 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>