# areStrings

## وصف

`areStrings` بتشيّك إذا كانت الـ array مش فاضية و كل عناصرها strings، و بترجّع `true` بس في الحالة دي.

### حالة الاستخدام

تحقّق من بيانات جاية من برّه أو من المستخدم (زي query params، JSON payloads، CSV fields) علشان تضمن إن معاك قايمة
strings مش فاضية قبل المعالجة.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areStrings` علشان تتحقق من الـ arrays المجهولة قبل ما تطبّق منطق خاص بالـ strings بس؛ هي بترجّع `false` للـ
> arrays الفاضية.

### مميزات

- بيضمن إن كل عنصر يبقى string و بيرفض الـ arrays اللي فيها أنواع مختلطة عن طريق إنه بيرجّع `false`.
- بيرفض الـ arrays الفاضية، فـ `true` معناها بس قايمة strings مش فاضية.
- مفيد كـ runtime guard سريع قبل ما تعمل عمليات خاصة بالـ strings بس (زي `trim`، `toLowerCase`).

## الاستخدام

### الصياغة

الدالة:

- `areStrings(value)`

المعاملات:

- `value`: Expected type `string[]`.

### استيراد الدالة محليًا

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  //‎‎ input هو string[] مش فاضي وقت التشغيل
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areStrings(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areStrings](‎../_analysis/areStrings.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 13:17:08 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>