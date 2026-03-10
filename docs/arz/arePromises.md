# arePromises

## وصف

`arePromises` بيحدد إذا كان كل العناصر في مصفوفة هي كائنات `Promise`.

### حالة الاستخدام

اتأكد إن ليستة متبنية ديناميكيًا أو جاية من برّه فيها promises بس قبل ما تجمعهم (زي باستخدام `Promise.all`).

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `arePromises` علشان تتحقق من `unknown[]` قبل ما تنادي `Promise.all` أو أي عمليات تانية خاصة بالـ promises؛
> وبيُرجّع `false` للمصفوفات الفاضية.

### مميزات

- بيضمن إن كل عنصر يبقى `Promise` قبل ما تكمل بمنطق مخصوص بالـ promises.
- بيرجع `false` للمصفوفات اللي مش مليانة، وده بيمنع نتايج ملتبسة مع المدخلات الفاضية.
- مفيد كحارس وقت التشغيل لما بتتعامل مع `unknown[]` جاية من مصادر خارجية.

## الاستخدام

### الصياغة

الدالة:

- `arePromises(array)`

المعاملات:

- `array`: المصفوفة اللي هتتشيّك إذا كانت فيها كائنات `Promise`.

### استيراد الدالة محليًا

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  //‎‎ values هي مصفوفة من نُسَخ Promise وقت التشغيل
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.arePromises(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [arePromises](‎../_analysis/arePromises.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 23:47:26 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>