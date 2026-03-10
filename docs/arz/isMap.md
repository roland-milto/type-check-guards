# isMap

## وصف

بيتحقق إذا كانت `value` المعطاة هي `Map`، وبيُرجّع `true` لو هي كده و`false` لو لأ.

### حالة الاستخدام

استخدم `isMap` لما يوصلك قيمة `unknown` (زي من JSON parsing، أو External APIs، أو إدخال المستخدم) وتحتاج تتأكد إنها
`Map` قبل ما تعمل عمليات `Map`.

> **ملاحظة لمستخدمي TypeScript:**
>
> `isMap` هو runtime guard بيرجّع `true` لما القيمة تكون `Map` و`false` غير كده؛ استخدمه عشان تضيّق نوع `unknown` قبل ما
> تنادي APIs بتاعة `Map`.

### مميزات

- بيوفر فحص سريع وقت التشغيل عشان تعرف هل القيمة `Map` ولا لأ.
- بيساعد يمنع أخطاء الأنواع عن طريق حماية مسارات الكود اللي بتحتاج دوال `Map` زي `get` و`set` و`has`.
- بينفع كخطوة تحقق خفيفة لما بتتعامل مع مدخلات `unknown`.

## الاستخدام

### الصياغة

الدالة:

- `isMap(value)`

المعاملات:

- `value`: القيمة اللي هتتشيّك عليها.

### استيراد الدالة محليًا

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isMap(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isMap](‎../_analysis/isMap.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 16:03:33 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>