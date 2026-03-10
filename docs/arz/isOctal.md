# isOctal

## وصف

بيحدّد إذا كانت القيمة سترينج literal أوكتال صحيحة (زي `0o755`).

### حالة الاستخدام

اتأكّد من إدخال المستخدم أو قيم الإعدادات اللي لازم تتكتب كسترينج literal أوكتال (مثلاً أوضاع صلاحيات الملفات زي
`0o644`) قبل ما تعملها parsing أو تحويل.

> **ملاحظة لمستخدمي TypeScript:**
>
> `isOctal` هو type guard (`value is string`). بعد نتيجة `true`، TypeScript بيضيّق نوع المتغيّر اللي اتعمله check لـ
`string`.

### مميزات

- بيقدّم حارس نوع صارم: بيرجّع `true` بس لما الإدخال يبقى سترينج مطابق لصيغة literal للأوكتال.
- بيرفض السترينجات الفاضية والسترينجات اللي فيها مسافات/وايت سبيس في الأول أو الآخر (تحكّم ASCII/مسافة)، وده بيقلّل
  المطابقات بالغلط.
- بيدعم إشارة اختيارية ومش بيفرّق بين حروف كبيرة/صغيرة في بادئة `0o`/`0O`.
- متسامح مع المدخلات اللي مش سترينج إنه بيرجّع `false` بدل ما يرمي خطأ.

## الاستخدام

### الصياغة

الدالة:

- `isOctal(value)`

المعاملات:

- `value`: القيمة اللي هتتشيّك.

### استيراد الدالة محليًا

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); //‎ صح
console.log(isOctal(b)); //‎ صح
console.log(isOctal(c)); //‎ غلط
console.log(isOctal(d)); //‎ غلط

if (isOctal(a)) {
  //‎‎ a هنا سترينج
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isOctal(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isOctal](‎../_analysis/isOctal.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 14:43:54 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>