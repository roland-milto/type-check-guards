# isPlainObject

## الوصف

يتحقق مما إذا كانت `value` المعطاة كائنًا عاديًا ويُرجع `true` إذا كانت كذلك، وإلا يُرجع `false`.

### حالة الاستخدام

تحقّق من أن مُدخلًا من نوع `unknown` (مثل JSON المُحلَّل، أو بيانات خارجية، أو وسائط الدوال) هو كائن عادي قبل قراءة
المفاتيح أو تحويله إلى كائن إعدادات مُنمَّط.

> **ملاحظة لمستخدمي TypeScript:**
>
> `isPlainObject` مفيد لتضييق `unknown` قبل التعامل معه ككائن شبيه بالسجل (record-like)؛ فهو يُرجع `true` فقط للقيم التي
> تكون وسمها الداخلي `[object Object]`.

### المزايا

- يوفّر تحقّقًا بسيطًا وموثوقًا مما إذا كانت القيمة كائنًا عاديًا (أي `Object` / `{}`)، ويُرجع `true` أو `false`.
- يساعد على التمييز بين الكائنات العادية والمصفوفات والدوال و`null` وأنواع أخرى ليست كائنات عادية.
- مفيد كحارس نوع (type guard) في TypeScript لتضييق قيم `unknown` قبل الوصول إلى خصائص الكائن.

## الاستخدام

### الصياغة

الدالة:

- `isPlainObject(value)`

المعاملات:

- `value`: القيمة المراد اختبار ما إذا كانت كائنًا عاديًا.

### استيراد الدالة محليًا

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  //‎‎ الإدخال كائن عادي هنا
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); //‎ صحيح
console.log(isPlainObject([])); //‎ خطأ
console.log(isPlainObject(null)); //‎ خطأ

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isPlainObject(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [isPlainObject](‎../_analysis/isPlainObject.md‎)

<br>

---

<small>تم إنشاء الملف في 6 فبراير 2026 في 12:16:19 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>