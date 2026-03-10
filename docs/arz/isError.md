# isError

## وصف

بيشيّك إذا كانت `value` المعطاة instance من `Error`.

### حالة الاستخدام

استخدم `isError` لما توصلك قيمة `unknown` (زي اللي بتيجي من بلوك `catch`، أو callback، أو مكتبة خارجية) وإنت محتاج تحدد
بأمان إذا كانت `Error` قبل ما تقرا `message`، أو `name`، أو `stack`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isError` كـ guard للقيم `unknown` (زي اللي بتيجي من `catch`) قبل ما تتعامل معاها على إنها `Error`.

### مميزات

- بيوفر تشيك بسيط وقت التشغيل عشان تعرف إذا كانت القيمة instance من `Error`.
- بيساعدك تضيّق نوع المدخلات المجهولة قبل ما توصل لخصايص `Error` زي `message` أو `stack`.
- بيقلّل خطر استثناءات وقت التشغيل وإنت بتتعامل مع قيم جاية من `catch`، أو APIs خارجية، أو مصادر من غير types.

## الاستخدام

### الصياغة

الدالة:

- `isError(value)`

المعاملات:

- `value`: القيمة اللي هتتشيّك عليها مقارنةً بنوع `Error`.

### استيراد الدالة محليًا

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isError(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isError](‎../_analysis/isError.md‎)

<br>

---

<small>الملف اتعمل في 6 February 2026 at 12:44:36 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>