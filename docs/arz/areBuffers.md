# areBuffers

## وصف

`areBuffers` بتتأكد إذا كانت القيمة اللي اتقدمت أراي مش فاضية ومليانة وكل عنصر فيها `Buffer`، وبترجع `true` لو كده و
`false` غير كده.

### حالة الاستخدام

تحقق من أرايات الـ chunks اللي جاية (مثلاً من streams، رفع ملفات، أو باكيتس شبكة) علشان تضمن إن كل الأجزاء `Buffer` قبل
الدمج، الديكودينج، أو تمريرها لفنكشنز الكريبتوجرافي أو معالجة الباينري.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areBuffers` علشان تتحقق من `unknown[]` قبل ما تنادي APIs خاصة بالـ Buffer زي `Buffer.concat`، وده بيضمن إن
> الفنكشن بترجع `true` بس لما كل عنصر يكون `Buffer`.

### مميزات

- بيضمن إن كل عنصر في الإدخال هو نسخة من Node.js `Buffer`، وبيرجع `true` بس لما كل عناصر الأراي تطابق ده.
- بيرفض الإدخالات الغلط بدري عن طريق إنه بيشترط أراي مش فاضية ومليانة؛ بيرجع `false` للأرايات الفاضية أو اللي مش أراي.
- مفيد كـ guard قبل ما تعمل عمليات خاصة بالـ buffer بس (زي الدمج، الهاشينج، بروتوكولات الباينري).

## الاستخدام

### الصياغة

الدالة:

- `areBuffers(array)`

المعاملات:

- `array`: الأراي اللي هيتتشيّك عليها إذا كانت عناصرها نسخ Buffer.

### استيراد الدالة محليًا

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areBuffers(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areBuffers](‎../_analysis/areBuffers.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 16:24:10 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>