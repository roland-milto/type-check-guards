# isNumber

## وصف

`isNumber` بيشيّك إذا كانت القيمة رقم محدود (finite) ومش `NaN`.

### حالة الاستخدام

اتحقق من الإدخال الرقمي جاي من مصادر مش موثوقة (فورمز، query params، JSON payloads) قبل الحسابات أو التخزين أو فحوصات
المدى (range checks)، علشان تضمن إن اللي يعدّي بس هو الأرقام المحدودة (`true`) وأي حاجة تانية ترجع `false`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isNumber` علشان تتحقق من قيم `unknown` قبل ما تعمل عمليات حسابية؛ هو بيرفض `NaN` و`Infinity` و`-Infinity`.

### مميزات

- بيرجّع `true` بس للأرقام الحقيقية في JavaScript (فحص النوع + رفض `NaN` واللانهاية).
- بيمنع أخطاء فاليديشن شائعة لما `NaN` أو `Infinity` أو `-Infinity` يعدّوا بالغلط كأرقام.
- بينفع قوي كـ runtime guard للمدخلات المجهولة (زي JSON، إدخال المستخدم، APIs خارجية).
- بسيط، سريع، ومن غير أي side effects.

## الاستخدام

### الصياغة

الدالة:

- `isNumber(value)`

المعاملات:

- `value`: القيمة اللي هتتشيّك.

### استيراد الدالة محليًا

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  //‎‎ input رقم صحيح ومحدود
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isNumber(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isNumber](‎../_analysis/isNumber.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 13:08:02 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>