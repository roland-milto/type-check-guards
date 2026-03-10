# isObject

## وصف

بيحدد إذا كانت قيمة `value` المعطاة هي `object` (مع استبعاد `null`).

### حالة الاستخدام

استخدم `isObject` علشان تتحقق من inputs مجهولة (زي JSON متقري، ردود API، event payloads) قبل ما توصل للـ properties،
وتضمن إن القيمة object ومش `null`.

> **ملاحظة لمستخدمي TypeScript:**
>
> `isObject` هو runtime guard بيرجّع boolean؛ ومش بيضيّق النوع لشكل object معيّن. استخدمه مع تشييكات إضافية (زي وجود
> properties) لما تحتاج typing أقوى.

### مميزات

- بيرجّع `true` بس للقيم اللي مش `null` واللي `typeof` بتاعها هو `"object"`.
- بيمنع الغلطة الشائعة في JavaScript اللي فيها `null` بيتعامل كإنه object.
- بينفع مع الـ plain objects وكمان مع instances بتاعة built-in objects (زي `Date` و `RegExp`).
- تشييك بسيط وسريع وقت التشغيل، مناسب للـ defensive programming ولـ input validation.

## الاستخدام

### الصياغة

الدالة:

- `isObject(value)`

المعاملات:

- `value`: القيمة اللي هتتشيّك إذا كانت `object`.

### استيراد الدالة محليًا

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  //‎‎ input هو اوبچكت مش null وقت التشغيل
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isObject(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isObject](‎../_analysis/isObject.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 00:17:28 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>