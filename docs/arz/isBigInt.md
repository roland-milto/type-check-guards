# isBigInt

## وصف

`isBigInt` بيشيّك إذا كانت قيمة معيّنة من نوع `bigint`، وبيُرجّع `true` للـ BigInt primitives و`false` في غير كده.

### حالة الاستخدام

اتأكد وضيّق القيم اللي جاية من مصادر من غير أنواع (زي parsing بتاع JSON، إدخال المستخدم، وواجهات APIs خارجية) قبل ما
تعمل حسابات مخصوصة للـ BigInt أو تخزنها في حقول بتقبل BigInt بس.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isBigInt` عشان تضيّق `unknown` لـ `bigint` قبل ما تعمل حسابات BigInt (زي `+` و`*`) اللي بتحتاج معاملات BigInt.

### مميزات

- بيوفر فحص بسيط وموثوق وقت التشغيل للنوع البدائي `bigint`.
- بيساعد يضيّق قيم `unknown` قبل ما تعمل عمليات مخصوصة للـ BigInt بس.
- بيتجنب النتائج الإيجابية الكدابة: الأرقام العادية، السلاسل النصية، والأنواع التانية بترجع `false`.

## الاستخدام

### الصياغة

الدالة:

- `isBigInt(value)`

المعاملات:

- `value`: القيمة اللي هتتشيّك عليها.

### استيراد الدالة محليًا

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); //‎ صح
console.log(isBigInt(10));  //‎ غلط
console.log(isBigInt("10")); //‎ غلط
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isBigInt(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isBigInt](‎../_analysis/isBigInt.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 23:31:04 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>