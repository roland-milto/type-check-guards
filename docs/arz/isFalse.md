# isFalse

## وصف

`isFalse` بيشيّك إذا كانت قيمة معيّنة مساوية بشكل صارم للقيمة المنطقية الحرفية `false`.

### حالة الاستخدام

تحقّق من بيانات مش معروفة (زي اللي جاية من JSON، أو query params، أو إدخال المستخدم) لما يكون بس القيمة المنطقية الصريحة
`false` لازم تتعامل كإنها علامة (flag) صالحة، وأي حاجة تانية لازم تترفض.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isFalse` لما تحتاج تقبل بس القيمة الحرفية `false` وترفض كل القيم التانية اللي بتبان falsy؛ هي بترجع `true` بس
> لما `value === false`.

### مميزات

- بيوفر فحص صارم للقيمة المنطقية الحرفية `false` من غير تحويل نوع (coercion).
- بيساعد تميّز `false` عن قيم تانية بتبان falsy زي `0` و `""` و `null` و `undefined`.
- بيحسّن سهولة القراية بإنه بيخلّي القصد واضح لما بتتحقق من إدخال مش معروف.

## الاستخدام

### الصياغة

الدالة:

- `isFalse(value)`

المعاملات:

- `value`: القيمة اللي هيتعملها فحص.

### استيراد الدالة محليًا

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  //‎‎ input هنا بالظبط false
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isFalse(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isFalse](‎../_analysis/isFalse.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 16:20:50 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>