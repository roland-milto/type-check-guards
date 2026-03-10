# isArray

## وصف

`isArray` بيشيّك إذا كانت قيمة معيّنة Array وبيرجّع `true` لو هي كده، وإلا `false`.

### حالة الاستخدام

اتأكد من بيانات مش معروفة (زي JSON متقري أو ردود API) إن القيمة Array قبل ما تعمل iterate أو indexing أو توصل لـ
`.length`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isArray` لما تحتاج شيك وقت التشغيل للـ arrays؛ بيرجّع boolean وآمن إنك تناديه مع قيم نوعها `unknown`.

### مميزات

- بيستخدم `Array.isArray` اللي مبني جوّه علشان يكتشف الـ array بشكل موثوق عبر البيئات المختلفة (زي iframes).
- بيرجّع نتيجة boolean بسيطة (`true`/`false`) تنفع للـ guards ومنطق التفريع.
- بيشتغل مع أي نوع إدخال عشان الباراميتر نوعه `unknown`.

## الاستخدام

### الصياغة

الدالة:

- `isArray(value)`

المعاملات:

- `value`: القيمة اللي هتتشيّك.

### استيراد الدالة محليًا

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  //‎‎ input هو مصفوفة وقت التشغيل
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isArray(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isArray](‎../_analysis/isArray.md‎)

<br>

---

<small>الملف اتعمل في 6 February 2026 at 11:29:33 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>