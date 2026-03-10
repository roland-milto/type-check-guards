# isFloat

## وصف

`isFloat` بيحدّد إذا كانت `value` المعطاة رقم عشري محدود (يعني `number` مش عدد صحيح).

### حالة الاستخدام

التحقّق من مدخلات رقمية من المستخدم لما تكون القيم الكسرية مطلوبة (زي الأسعار، القياسات، المعدّلات) ورفض الأعداد الصحيحة
و`NaN` واللانهايات.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isFloat` لما تحتاج تقبل بس مدخلات رقمية محدودة ومش أعداد صحيحة؛ هو بيرفض الأعداد الصحيحة والأرقام غير
> المحدودة.

### مميزات

- بيرجّع `true` بس للأرقام اللي هي محدودة ومش أعداد صحيحة (بيستبعد الأعداد الصحيحة، `NaN`، `Infinity`، و `-Infinity`).
- بيشتغل مع أي نوع إدخال (`unknown`) وبيضيّق النوع بأمان عن طريق إنه بيشيّك `typeof value === "number"`.
- بيستخدم حمايات رقمية مدمجة (`Number.isInteger`, `Number.isFinite`) علشان سلوك متوقّع.

## الاستخدام

### الصياغة

الدالة:

- `isFloat(value)`

المعاملات:

- `value`: القيمة اللي هيتتشيّك عليها إذا كانت رقم عشري (floating-point).

### استيراد الدالة محليًا

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    //‎‎ القيمة رقم وقت التشغيل؛ هي محدودة ومش عدد صحيح
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isFloat(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isFloat](‎../_analysis/isFloat.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 16:06:48 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>