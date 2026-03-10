# isNumeric

## وصف

`isNumeric` بيحدد إذا كانت `value` المعطاة بتتعتبر رقمية عن طريق مقارنة النوع اللي اتحدد لها مع `NUMERIC_TYPES`.

### حالة الاستخدام

استخدم `isNumeric` عشان تتحقق من المدخلات (زي API payloads، قيم الفورم، الإعدادات) قبل ما تعمل عمليات حسابية، وكمان عشان
تقبل بشكل متسق الأنواع الشبيهة بالأرقام (زي `BigInt`) حسب `NUMERIC_TYPES`.

> **ملاحظة لمستخدمي TypeScript:**
>
> `isNumeric` هو predicate بيرجّع boolean؛ اعتبره runtime check عشان تعرف إذا كانت القيمة بتنتمي لمجموعة الأنواع الرقمية
> اللي المكتبة معرّفاها.

### مميزات

- بيستخدم `getTypeOf` مع `NUMERIC_TYPES` عشان يلمّ منطق اكتشاف القيم الرقمية في حتة واحدة ويخلّي الشيكات متسقة عبر
  الكودبيس.
- بيرجّع boolean بسيط (`true`/`false`) عشان يسهل التفريع والاستخدام بأسلوب guard.
- بيدعم أكتر من تمثيل للأرقام (زي `number` و `BigInt`) زي ما هو متعرّف في `NUMERIC_TYPES`.

## الاستخدام

### الصياغة

الدالة:

- `isNumeric(value)`

المعاملات:

- `value`: القيمة اللي هتتشيّك إذا كانت من نوع رقمي.

### استيراد الدالة محليًا

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    //‎‎ v بيتعتبر رقمي حسب قواعد النوع بتاعة المكتبة
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isNumeric(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isNumeric](‎../_analysis/isNumeric.md‎)

<br>

---

<small>الملف اتعمل في 6 February 2026 at 15:51:34 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>