# areStreams

## الوصف

تحدد `areStreams` ما إذا كانت القيمة مصفوفة غير فارغة يكون كل عنصر فيها `Stream`.

### حالة الاستخدام

التحقق من المجموعات التي يوفّرها المستخدم أو التي يتم بناؤها ديناميكيًا (مثل عدة تدفقات قراءة ملفات) قبل تمريرها عبر
pipe أو استئنافها أو إجراء عمليات أخرى عليها كمجموعة.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areStreams` للتحقق من مُدخل غير معروف قبل التعامل معه على أنه `Stream[]`؛ إذ تُرجع `true` فقط عندما تكون
> القيمة مصفوفة غير فارغة وكل عنصر فيها `Stream`.

### المزايا

- يضمن أن المُدخل عبارة عن مصفوفة غير فارغة حيث يكون كل عنصر فيها `Stream`.
- يوفّر حارسًا بسيطًا `true`/`false` للتحقق من صحة مجموعات التدفقات قبل المعالجة.
- يفشل بسرعة: يُرجع `false` بمجرد العثور على عنصر ليس `Stream`.
- يساعد على منع أخطاء وقت التشغيل عندما يفترض الكود أن جميع العناصر هي مثيلات `Stream`.

## الاستخدام

### الصياغة

الدالة:

- `areStreams(array)`

المعاملات:

- `array`: المصفوفة التي سيتم التحقق منها للتأكد من احتوائها على كائنات Stream.

### استيراد الدالة محليًا

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  //‎‎ الإدخال عبارة عن مصفوفة ممتلئة من كائنات Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areStreams(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areStreams](‎../_analysis/areStreams.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 11:32:43 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>