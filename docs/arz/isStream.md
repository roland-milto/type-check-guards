# isStream

## وصف

`isStream` بيشيّك إذا كانت قيمة معيّنة عبارة عن كائن stream (شبيه بـ Node.js stream، أو `ReadableStream`، أو
`WritableStream`).

### حالة الاستخدام

اتأكد من المدخلات اللي ممكن تكون يا إما كائنات عادية يا إما streams (زي رفع الملفات، HTTP bodies، أو processing
pipelines) وافرّع المنطق بناءً على إذا كانت القيمة stream ولا لأ.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isStream` عشان تضيّق نوع `unknown` قبل ما تنادي دوال الـ stream؛ هو بيتعرف على كائنات Node.js الشبيهة بالـ
> stream (عن طريق `pipe`/`on`) و Web Streams (`ReadableStream`/`WritableStream`) لما الـ globals دي تكون موجودة.

### مميزات

- بيكتشف بأمان الكائنات الشبيهة بـ Node.js streams الشائعة عن طريق التحقق من دوال `pipe` و `on`.
- كمان بيدعم Web Streams عن طريق التعرف على `ReadableStream` و `WritableStream` لما يكونوا متاحين.
- بيرجع نتيجة boolean بسيطة (`true`/`false`) مناسبة للـ guards ولمنطق التفريع (branching).

## الاستخدام

### الصياغة

الدالة:

- `isStream(value)`

المعاملات:

- `value`: القيمة اللي هتتشيّك.

### استيراد الدالة محليًا

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  //‎‎ nodeStream شبه الستريم؛ تقدر بأمان تستخدم واجهات برمجة الستريم الشايعة
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isStream(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isStream](‎../_analysis/isStream.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 23:38:47 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>