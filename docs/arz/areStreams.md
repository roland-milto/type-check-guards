# areStreams

## وصف

`areStreams` بتحدد إذا كانت القيمة مصفوفة مليانة وكل عنصر فيها `Stream`.

### حالة الاستخدام

تحقق من المجموعات اللي المستخدم بيديها أو اللي بتتبني ديناميكيًا (زي كذا file read streams) قبل الـ piping أو الـ
resuming أو أي عمليات تانية عليها كمجموعة.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areStreams` علشان تتحقق من إدخال مجهول قبل ما تتعامل معاه كـ `Stream[]`؛ هي بترجع `true` بس لما القيمة تكون
> مصفوفة مش فاضية وكل عنصر فيها `Stream`.

### مميزات

- بيضمن إن الإدخال يبقى مصفوفة مليانة وكل عنصر فيها `Stream`.
- بيوفر حارس بسيط `true`/`false` علشان تتحقق من مجموعات الـ stream قبل المعالجة.
- بيفشل بسرعة: بيرجع `false` أول ما يلاقي عنصر مش `Stream`.
- بيساعد يمنع أخطاء وقت التشغيل لما الكود بيفترض إن كل العناصر instances من `Stream`.

## الاستخدام

### الصياغة

الدالة:

- `areStreams(array)`

المعاملات:

- `array`: المصفوفة اللي هيتعملها فحص علشان كائنات Stream.

### استيراد الدالة محليًا

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  //‎‎ input هو مصفوفة مليانة من كائنات Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areStreams(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areStreams](‎../_analysis/areStreams.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 23:32:44 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>