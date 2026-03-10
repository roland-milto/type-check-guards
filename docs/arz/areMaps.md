# areMaps

## وصف

`areMaps` بيحدد إذا كانت المصفوفة المعطاة مش فاضية وكل عناصرها نسخ `Map`.

### حالة الاستخدام

اتأكد من مدخلات مجهولة (زي اللي جاية من تحليل JSON، أو APIs خارجية، أو مصادر ديناميكية) قبل ما تتعامل معاها كقائمة مش
فاضية من كائنات `Map`.

> **ملاحظة لمستخدمي TypeScript:**
>
> بيرجّع `false` للمصفوفة الفاضية؛ ومش بيرجّع `true` غير لما المصفوفة تكون مليانة وكل عنصر فيها `Map`.

### مميزات

- بيضمن إن كل عنصر هو نسخة `Map`، وبيُرجّع `true` بس لما كل المصفوفة تعدّي الفحص.
- بيرفض المصفوفات الفاضية بطبيعته، وده بيمنع قبول "مفيش بيانات" بالغلط كمدخل صالح.
- مفيد كحارس قبل ما تعمل عمليات مخصوصة بـ `Map` (زي `.get()`، `.set()`، والتكرار) على مجموعة.

## الاستخدام

### الصياغة

الدالة:

- `areMaps(array)`

المعاملات:

- `array`: المصفوفة اللي هتتشيّك.

### استيراد الدالة محليًا

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  //‎‎ items مضمون إنها تبقى مصفوفة مش فاضية من كائنات Map وقت التشغيل
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  //‎‎ بتطلع false مع: المصفوفات الفاضية، أو المصفوفات اللي فيها أي قيمة مش Map
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areMaps(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areMaps](‎../_analysis/areMaps.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 16:11:32 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>