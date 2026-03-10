# isBoolean

## وصف

بيحدد إذا كانت قيمة معيّنة هي `boolean`.

### حالة الاستخدام

اتأكد من البيانات الخارجية أو اللي من غير types (زي متغيرات البيئة، JSON payloads، query parameters) إن القيمة `boolean`
قبل ما تستخدمها في منطق شرطي.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isBoolean` عشان تضيّق `unknown` لـ `boolean` قبل ما تطبّق عمليات الـ boolean.

### مميزات

- فحص وقت التشغيل بسيط وسريع باستخدام `typeof`.
- بيساعد في التحقق من الإدخال المجهول قبل منطق خاص بالـ boolean.
- بيرجع نتيجة `boolean` متوقعة (`true`/`false`).

## الاستخدام

### الصياغة

الدالة:

- `isBoolean(value)`

المعاملات:

- `value`: القيمة اللي هتتشيّك.

### استيراد الدالة محليًا

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  //‎‎ input هنا بوليان
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isBoolean(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isBoolean](‎../_analysis/isBoolean.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 14:35:33 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>