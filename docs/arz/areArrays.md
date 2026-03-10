# areArrays

## وصف

`areArrays` بيحدد إذا كانت القيمة مصفوفة ثنائية الأبعاد مليانة وعناصرها كلها مصفوفات.

### حالة الاستخدام

استخدم `areArrays` علشان تتحقق من إدخالات شبه الجداول أو المصفوفات (زي صفوف CSV، بيانات grid، أو القوايم المتجمعة) قبل
ما تعمل عمليات على الصفوف/الأعمدة؛ هيرجع `false` لو الإدخال مش مصفوفة، أو فاضي، أو فيه أي عنصر مش مصفوفة.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areArrays` لما تحتاج تتأكد إن القيمة مصفوفة ثنائية الأبعاد مش فاضية وإن كل صف عبارة عن مصفوفة قبل ما تعمل
> تكرار (iterate) أو تستخدم الفهرسة (indexing) جوه مصفوفات متداخلة.

### مميزات

- بيتأكد إن الإدخال عبارة عن مصفوفة ثنائية الأبعاد مش فاضية، وكل عنصر فيها عبارة عن مصفوفة.
- بيرجع نتيجة بوليان بسيطة (`true`/`false`) مناسبة للـ guards والخروج بدري.
- بيساعد يمنع أخطاء وقت التشغيل لما الكود اللي بعد كده يفترض عمليات على مصفوفات متداخلة (زي عمل map على الصفوف).

## الاستخدام

### الصياغة

الدالة:

- `areArrays(array)`

المعاملات:

- `array`: الإدخال اللي هيتفحص.

### استيراد الدالة محليًا

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  //‎‎ value عبارة عن مصفوفة ثنائية الأبعاد وعناصرها مصفوفات
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areArrays(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areArrays](‎../_analysis/areArrays.md‎)

<br>

---

<small>الملف اتعمل في 6 February 2026 at 13:38:35 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>