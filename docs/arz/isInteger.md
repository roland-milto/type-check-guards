# isInteger

## وصف

بيحدّد إذا كانت `value` المعطاة رقم عدد صحيح آمن.

### حالة الاستخدام

تحقّق من إدخال مش موثوق فيه (زي query params، JSON payloads، environment variables) قبل ما تستخدمه كعدد صحيح لمؤشرات
المصفوفات، pagination، العدّادات، أو database IDs.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isInteger` علشان تتحقق من إدخال مش معروف قبل ما تتعامل معاه كعدد صحيح رقمي؛ بيرجّع `true` بس للقيم اللي فيها
`typeof value === "number"` و `Number.isSafeInteger(value)`.

### مميزات

- بيشيّك على النوع وكمان الأمان الرقمي: بيرجّع `true` بس لما الإدخال يكون رقم وكمان عدد صحيح آمن.
- بيمنع المشاكل الشائعة بتاعة التحويل الرقمي: سترينجات زي "5" بترجّع `false` صح.
- بيرفض الأعداد اللي مش صحيحة والأعداد الصحيحة غير الآمنة، وده بيخليه مناسب للـ IDs، العدّادات، وفهرسة المصفوفات.

## الاستخدام

### الصياغة

الدالة:

- `isInteger(value)`

المعاملات:

- `value`: القيمة اللي هتتشيّك إذا كانت عدد صحيح ولا لأ.

### استيراد الدالة محليًا

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      //‎ صح
const b = isInteger(-100);   //‎ صح
const c = isInteger("5");    //‎ غلط
const d = isInteger(5.5);    //‎ غلط
const e = isInteger(null);   //‎ غلط

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isInteger(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isInteger](‎../_analysis/isInteger.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 00:49:04 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>