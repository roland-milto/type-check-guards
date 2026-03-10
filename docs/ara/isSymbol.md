# isSymbol

## الوصف

تحدّد `isSymbol` ما إذا كانت قيمة معيّنة من النوع `symbol`، وتُرجع `true` للرموز و`false` خلاف ذلك.

### حالة الاستخدام

تحقّق من أن قيمة `unknown` هي `symbol` قبل استخدامها كمُعرّف فريد، أو كمفتاح في السجل، أو كمفتاح خاصية محسوب في الكائنات
والخرائط.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isSymbol` لتضييق `unknown` إلى `symbol` قبل استدعاء الدوال المرتبطة بالرموز أو استخدامه كمفتاح خاصية محسوب.

### المزايا

- يوفّر تحقّقًا بسيطًا وموثوقًا أثناء وقت التشغيل لنوع JavaScript البدائي `symbol`.
- يساعد على تضييق قيم `unknown` قبل استخدام واجهات برمجة التطبيقات الخاصة بالرموز أو تخزينها كمفاتيح.
- يتجنب النتائج الإيجابية الكاذبة عبر استخدام `typeof`، وهي الطريقة القياسية لاكتشاف قيم `symbol`.

## الاستخدام

### الصياغة

الدالة:

- `isSymbol(value)`

المعاملات:

- `value`: القيمة المراد التحقق منها.

### استيراد الدالة محليًا

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  //‎‎ الإدخال هو رمز هنا
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isSymbol(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [isSymbol](‎../_analysis/isSymbol.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 2:25:46 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>