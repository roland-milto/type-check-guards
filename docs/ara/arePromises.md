# arePromises

## الوصف

تحدد `arePromises` ما إذا كانت جميع العناصر في مصفوفة ما هي مثيلات `Promise`.

### حالة الاستخدام

تحقق من أن قائمة مُنشأة ديناميكيًا أو مُقدمة من مصدر خارجي تحتوي على وعود فقط قبل تجميعها (مثلًا باستخدام
`Promise.all`).

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `arePromises` للتحقق من `unknown[]` قبل استدعاء `Promise.all` أو عمليات أخرى خاصة بالوعود فقط؛ إذ يعيد `false`
> للمصفوفات الفارغة.

### المزايا

- يضمن أن كل عنصر هو `Promise` قبل المتابعة بمنطق خاص بالوعود.
- يعيد `false` للمصفوفات غير المعبأة، مما يمنع النتائج الملتبسة للمدخلات الفارغة.
- مفيد كحارس وقت التشغيل عند العمل مع `unknown[]` من مصادر خارجية.

## الاستخدام

### الصياغة

الدالة:

- `arePromises(array)`

المعاملات:

- `array`: المصفوفة المراد التحقق منها لمعرفة ما إذا كانت تحتوي على مثيلات `Promise`.

### استيراد الدالة محليًا

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  //‎‎ values هي مصفوفة من مثيلات Promise أثناء وقت التشغيل
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.arePromises(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [arePromises](‎../_analysis/arePromises.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 11:47:25 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>