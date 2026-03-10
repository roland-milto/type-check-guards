# getTypeOf

## الوصف

تعيد `getTypeOf` تسمية نوع مفصلة وسهلة القراءة لقيمة معيّنة، بما في ذلك أنواع رقمية مُحسّنة وأنواع كائنات محددة.

### حالة الاستخدام

استخدم `getTypeOf` لتوحيد اكتشاف الأنواع في التحقق من المدخلات والتشخيصات—على سبيل المثال، لرفض `nan`، وقبول معرّفات
`integer` فقط، ومعاملة السلاسل الرقمية مثل `decimal` بشكل مختلف عن `string` العادية، أو لتسجيل أنواع الكائنات الدقيقة
مثل `date` و`regexp`.

> **ملاحظة لمستخدمي TypeScript:**
>
> نوع الإرجاع هو `DataTypeAsString | string`. تعامل معه كتسمية وصفية؛ وقارن مع القيم الحرفية المعروفة مثل `integer` و
`float` و`nan` و`array` و`null` و`undefined` عند التفريع.

### المزايا

- يعيد سلسلة نوع أكثر تفصيلاً من `typeof` في JavaScript، بما في ذلك الأنواع الفرعية الرقمية مثل `integer` و`float` و
  `nan`.
- يميّز بين `null` و`undefined` بشكل صريح على أنهما `null` و`undefined`.
- يكتشف تنسيقات سلاسل الأرقام الشائعة ويبلّغ عنها كـ `binary` أو `octal` أو `decimal` أو `hexadecimal` بدلاً من `string`
  فقط.
- يعرّف المصفوفات على أنها `array` ويستخدم `Object.prototype.toString` لتقديم أسماء أنواع كائنات محددة (مثل: `date` و
  `regexp` و`map` و`set`).
- مفيد للتحقق (validation) والتسجيل (logging) وتصحيح الأخطاء (debugging) عندما تكون هناك حاجة إلى تسميات أنواع متسقة
  وسهلة القراءة للبشر.

## الاستخدام

### الصياغة

الدالة:

- `getTypeOf(value)`

المعاملات:

- `value`: القيمة التي سيتم تحديد نوع البيانات لها.

### استيراد الدالة محليًا

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

//‎‎ فحوصات مثال
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.getTypeOf(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [getTypeOf](‎../_analysis/getTypeOf.md‎)

<br>

---

<small>تم إنشاء الملف في 6 فبراير 2026 في 1:05:02 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>