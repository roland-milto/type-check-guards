# isString

## وصف

`isString` بيحدد إذا كانت قيمة معيّنة هي string.

### حالة الاستخدام

اتأكد من إدخال المستخدم، أو حقول الـ API payload، أو قيم الإعدادات وقت التشغيل علشان تضمن إن القيمة string قبل ما تطبق
عمليات على الـ string (زي trimming، splitting، تحويل الحالة).

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isString` علشان تتحقق من قيم `unknown` أو قيم نوعها مش محدد قوي قبل ما تنادي methods بتاعة الـ string؛ هي
> بترجّع `true` بس لما `typeof value === "string"`.

### مميزات

- تشييك بسيط وسريع باستخدام `typeof`.
- بيرجّع نتيجة boolean متوقعة: `true` للـ strings، غير كده `false`.
- شغال مع الـ strings الفاضية واللي مش فاضية.
- مفيد كـ runtime guard خفيف قبل ما تعمل عمليات مخصوصة للـ strings.

## الاستخدام

### الصياغة

الدالة:

- `isString(value)`

المعاملات:

- `value`: القيمة اللي هتتختبر إذا كانت من نوع string.

### استيراد الدالة محليًا

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  //‎‎ input هنا سترينج
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isString(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isString](‎../_analysis/isString.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 13:13:08 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>