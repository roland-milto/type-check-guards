# isBuffer

## الوصف

يتحقق مما إذا كانت القيمة هي `Buffer` في Node.js ويعيد `true` أو `false`.

### حالة الاستخدام

تحقق من صحة المدخلات وقت التشغيل (مثل حمولات API، أو بيانات الملفات، أو مخازن الرسائل) لضمان أن القيمة هي `Buffer` قبل
معالجتها، والحصول بشكل موثوق على `false` عند التشغيل خارج Node.js حيث قد لا يكون `Buffer` موجودًا.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isBuffer` لتضييق قيم `unknown` إلى `Buffer` قبل استدعاء الطرق الخاصة بـ Buffer.

### المزايا

- يكتشف بأمان مثيلات `Buffer` في Node.js باستخدام `Buffer.isBuffer`.
- يعيد `false` في البيئات التي لا يتوفر فيها `Buffer`، مما يتجنب أخطاء وقت التشغيل.
- يعمل مع مدخلات من النوع `unknown`، مما يجعله مناسبًا للتحقق وقت التشغيل وتضييق الأنواع.

## الاستخدام

### الصياغة

الدالة:

- `isBuffer(value)`

المعاملات:

- `value`: القيمة المراد اختبارها.

### استيراد الدالة محليًا

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); //‎ true
console.log(isBuffer(b)); //‎ false

if (isBuffer(a)) {
  //‎‎ a هو Buffer هنا
  console.log(a.toString("utf8"));
}
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isBuffer(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [isBuffer](‎../_analysis/isBuffer.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 4:30:39 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>