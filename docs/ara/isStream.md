# isStream

## الوصف

تتحقق `isStream` مما إذا كانت قيمة معيّنة كائن تدفّق (شبيه بتدفّقات Node.js، أو `ReadableStream`، أو `WritableStream`).

### حالة الاستخدام

تحقق من صحة المدخلات التي قد تكون إما كائنات عادية أو تدفّقات (مثل رفع الملفات، أو أجسام HTTP، أو مسارات المعالجة)
وتفريع المنطق بناءً على ما إذا كانت القيمة تدفّقًا.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isStream` لتضييق النوع `unknown` قبل استدعاء أساليب التدفّق؛ فهي تتعرّف على الكائنات الشبيهة بتدفّقات
> Node.js (عبر `pipe`/`on`) وعلى Web Streams (`ReadableStream`/`WritableStream`) عندما تكون تلك المتغيرات العامة موجودة.

### المزايا

- يكتشف بأمان الكائنات الشائعة الشبيهة بتدفّقات Node.js عبر التحقق من وجود الدالتين `pipe` و`on`.
- يدعم أيضًا Web Streams من خلال التعرّف على `ReadableStream` و`WritableStream` عند توفرهما.
- يعيد نتيجة منطقية بسيطة (`true`/`false`) مناسبة للحراس ومنطق التفريع.

## الاستخدام

### الصياغة

الدالة:

- `isStream(value)`

المعاملات:

- `value`: القيمة المراد التحقق منها.

### استيراد الدالة محليًا

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  //‎‎ nodeStream يشبه الدفق؛ يمكنك استخدام واجهات برمجة تطبيقات الدفق الشائعة بأمان
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isStream(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [isStream](‎../_analysis/isStream.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 11:38:45 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>