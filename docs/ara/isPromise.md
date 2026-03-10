# isPromise

## الوصف

يحدّد ما إذا كانت قيمة معيّنة هي `Promise`.

### حالة الاستخدام

استخدم `isPromise` للتحقق من صحة المدخلات غير المعروفة قبل التعامل معها على أنها `Promise`، مثلًا عند التعامل مع القيم
المُعادة من الإضافات (plugins)، أو الاستيرادات الديناميكية، أو واجهات برمجة تطبيقات ذات أنواع غير صارمة.

> **ملاحظة لمستخدمي TypeScript:**
>
> يتحقق `isPromise` عبر `instanceof Promise`، لذا لا يعيد `true` إلا لمثيلات `Promise` الحقيقية (وليس thenables عامة).

### المزايا

- يوفّر تحقّقًا بسيطًا وقت التشغيل لمعرفة ما إذا كانت القيمة `Promise`.
- يساعد على حماية مسارات الشيفرة التي تتطلب مثيلًا حقيقيًا من `Promise`، مع إرجاع `true` أو `false` بشكل متوقّع.
- يتجنب الإيجابيات الكاذبة من كائنات “thenable” (مثلًا: `{ then() {} }`) عبر اشتراط وجود مثيل `Promise` فعلي.

## الاستخدام

### الصياغة

الدالة:

- `isPromise(value)`

المعاملات:

- `value`: القيمة المراد التحقق منها.

### استيراد الدالة محليًا

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); //‎ صحيح
console.log(isPromise(b)); //‎ خطأ
console.log(isPromise(123)); //‎ خطأ
console.log(isPromise(null)); //‎ خطأ

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isPromise(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [isPromise](‎../_analysis/isPromise.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 11:52:01 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>