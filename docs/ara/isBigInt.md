# isBigInt

## الوصف

تتحقق `isBigInt` مما إذا كانت قيمة معيّنة من النوع `bigint`، وتُرجع `true` لقيم BigInt البدائية و`false` خلاف ذلك.

### حالة الاستخدام

تحقق من القيم وضيّق نطاقها القادمة من مصادر غير مُعرّفة الأنواع (مثل تحليل JSON، وإدخال المستخدم، وواجهات برمجة
التطبيقات الخارجية) قبل إجراء حسابات خاصة بـ BigInt أو تخزينها في حقول تقبل BigInt فقط.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isBigInt` لتضييق `unknown` إلى `bigint` قبل إجراء حسابات BigInt (مثل `+` و`*`) التي تتطلب معاملات من نوع
> BigInt.

### المزايا

- يوفّر فحصًا بسيطًا وموثوقًا وقت التشغيل للنوع البدائي `bigint`.
- يساعد على تضييق قيم `unknown` قبل تنفيذ عمليات خاصة بـ BigInt فقط.
- يتجنب الإيجابيات الكاذبة: الأرقام العادية والسلاسل النصية والأنواع الأخرى تُرجع `false`.

## الاستخدام

### الصياغة

الدالة:

- `isBigInt(value)`

المعاملات:

- `value`: القيمة المراد التحقق منها.

### استيراد الدالة محليًا

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); //‎ صحيح
console.log(isBigInt(10));  //‎ خطأ
console.log(isBigInt("10")); //‎ خطأ
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isBigInt(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [isBigInt](‎../_analysis/isBigInt.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 11:31:04 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>