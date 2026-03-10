# isWeakMap

## وصف

بيحدد إذا كانت `value` المعطاة عبارة عن instance من `WeakMap`.

### حالة الاستخدام

استخدم `isWeakMap` لما تكون بتستقبل قيمة `unknown` (زي من public API، نظام plugins، أو إعدادات ديناميكية) وعايز تتأكد
إنها `WeakMap` قبل ما تستخدم سلوك مخصوص بـ `WeakMap`.

> **ملاحظة لمستخدمي TypeScript:**
>
> `isWeakMap` بيعمل تشييك `instanceof WeakMap`؛ ده runtime guard بيرجع `true` بس للـ `WeakMap` الحقيقية.

### مميزات

- تشييك بسيط وقت التشغيل عشان تعرف القيمة دي `WeakMap` ولا لأ.
- بيساعد يمنع سوء استخدام الـ APIs اللي بتحتاج `WeakMap`، لإنه بيرجع `true`/`false` بدل ما يرمي خطأ.
- بيشتغل مع مدخلات `unknown`، وده بيخليه عملي عند حدود الموديول (زي البارسينج، الداتا الخارجية، أو كود من غير تايبس).

## الاستخدام

### الصياغة

الدالة:

- `isWeakMap(value)`

المعاملات:

- `value`: القيمة اللي هتتشيّك.

### استيراد الدالة محليًا

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  //‎‎ a هو WeakMap وقت التشغيل
}

console.log(isWeakMap(a)); //‎ صح
console.log(isWeakMap(b)); //‎ غلط
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isWeakMap(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isWeakMap](‎../_analysis/isWeakMap.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 13:24:03 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>