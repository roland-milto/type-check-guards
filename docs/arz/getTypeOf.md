# getTypeOf

## وصف

`getTypeOf` بيرجّع لابل نوع مفصّل وسهل القراية لقيمة معيّنة، وبيشمل أنواع أرقام أدقّ وأنواع أوبجكتات محددة.

### حالة الاستخدام

استخدم `getTypeOf` عشان توحّد كشف الأنواع في الـ input validation والـ diagnostics—مثلاً ترفض `nan`، تقبل بس IDs من نوع
`integer`، تتعامل مع سترينجات الأرقام زي `decimal` بشكل مختلف عن `string` العادية، أو تعمل log لأنواع أوبجكتات دقيقة زي
`date` و`regexp`.

> **ملاحظة لمستخدمي TypeScript:**
>
> نوع الريترن هو `DataTypeAsString | string`. اعتبره لابل وصفي؛ وقارن مع ليتيرالز معروفة زي `integer` و`float` و`nan` و
`array` و`null` و`undefined` لما تعمل branching.

### مميزات

- بيرجّع سترينج لنوع أدقّ من `typeof` بتاع JavaScript، وبيشمل أنواع فرعية للأرقام زي `integer` و`float` و`nan`.
- بيفرّق بين `null` و`undefined` بشكل صريح كـ `null` و`undefined`.
- بيكتشف صيغ سترينجات الأرقام الشائعة وبيبلّغ عنها كـ `binary` أو `octal` أو `decimal` أو `hexadecimal` بدل ما تبقى
  `string` وخلاص.
- بيعرّف الـ arrays كـ `array` وبيستخدم `Object.prototype.toString` عشان يدي أسماء أنواع محددة للأوبجكتات (زي `date` و
  `regexp` و`map` و`set`).
- مفيد في الـ validation والـ logging والـ debugging لما تحتاج تسميات نوع ثابتة وسهلة القراية للبني آدمين.

## الاستخدام

### الصياغة

الدالة:

- `getTypeOf(value)`

المعاملات:

- `value`: القيمة اللي هنحدد نوع الداتا بتاعها.

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

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.getTypeOf(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [getTypeOf](‎../_analysis/getTypeOf.md‎)

<br>

---

<small>الملف اتعمل في 6 February 2026 at 13:05:02 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>