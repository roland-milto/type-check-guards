# areHexadecimals

## وصف

بيفحص إذا كانت كل العناصر في أراي سترينجات هيكساديسيمال، وبيطلع `true` بس للأرايز غير الفاضية اللي كل عنصر فيها صالح.

### حالة الاستخدام

استخدم `areHexadecimals` عشان تتحقق من إدخال المستخدم أو الداتا الخارجية (زي IDs، checksums، أو أكواد ألوان من غير
علامة '#' في الأول) قبل ما تعمل parsing هيكساديسيمال أو أي معالجة تانية.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areHexadecimals` عشان تتحقق من إدخال مش معروف قبل ما تعمل parsing أو تحويل للقيم (مثلاً قبل
`parseInt(value, 16)` أو تحويلات BigInt).

### مميزات

- بيتأكد إن كل عنصر سترينج هيكساديسيمال وبيرجع `true` بس لما كل العناصر تطابق.
- بيرفض الأرايز الفاضية بطبيعته، وبيطلع `false` لما بيانات الإدخال مش موجودة.
- بيدي نتيجة بوليان بسيطة (`true`/`false`) مناسبة للـ guards وللتحقق اللي بيرجع بدري.

## الاستخدام

### الصياغة

الدالة:

- `areHexadecimals(array)`

المعاملات:

- `array`: الأراي اللي هيتعملها فحص عشان عناصرها تكون سترينجات هيكساديسيمال.

### استيراد الدالة محليًا

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areHexadecimals(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في
الدوال: [areHexadecimals](‎../_analysis/areHexadecimals.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 23:05:18 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>