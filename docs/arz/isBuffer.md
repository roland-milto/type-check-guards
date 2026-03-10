# isBuffer

## وصف

بيتحقق إذا كانت القيمة Node.js `Buffer` وبيُرجّع `true` أو `false`.

### حالة الاستخدام

اتأكد من المدخلات وقت التشغيل (زي payloads بتاعة API، بيانات ملفات، أو message buffers) إن القيمة `Buffer` قبل ما
تعالجها، وكمان تضمن إنه بيرجّع `false` بشكل موثوق لما تشتغل برّه Node.js اللي ممكن `Buffer` مايبقاش موجود فيها.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isBuffer` عشان تضيّق قيم `unknown` لـ `Buffer` قبل ما تنادي ميثودز مخصوصة بـ Buffer.

### مميزات

- بيكتشف بأمان إن فيه instances من Node.js `Buffer` باستخدام `Buffer.isBuffer`.
- بيرجّع `false` في البيئات اللي `Buffer` مش متاح فيها، وده بيمنع أخطاء وقت التشغيل.
- بيشتغل مع مدخلات `unknown`، فده بيخليه مناسب للتحقق وقت التشغيل وتضييق النوع.

## الاستخدام

### الصياغة

الدالة:

- `isBuffer(value)`

المعاملات:

- `value`: القيمة اللي هتتختبر.

### استيراد الدالة محليًا

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // true
console.log(isBuffer(b)); // false

if (isBuffer(a)) {
  //‎‎ a هنا Buffer
  console.log(a.toString("utf8"));
}
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isBuffer(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isBuffer](‎../_analysis/isBuffer.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 16:30:41 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>