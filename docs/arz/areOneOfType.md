# areOneOfType

## وصف

`areOneOfType` بتشيّك إذا كان كل العناصر في أراي مش فاضية من ضمن الأنواع المحددة وقت التشغيل.

### حالة الاستخدام

تحقق من الداتا الداخلة (زي JSON متقري) لما فيلد لازم يكون أراي مش فاضية وعناصرها محصورة في مجموعة معروفة من الأنواع
البدائية؛ ارجع `false` لما الأراي تكون فاضية أو فيها أي نوع مش مسموح.

> **ملاحظة لمستخدمي TypeScript:**
>
> الدالة دي بترجع boolean ومش بتضيّق أنواع عناصر الأراي وقت الكومبايل؛ استخدمها كخطوة تحقق وقت التشغيل قبل أي معالجة
> تانية.

### مميزات

- بيضمن إن كل عنصر في الأراي بيطابق على الأقل نوع واحد مسموح بيه وقت التشغيل، وبيطلع `true` بس لما الأراي كلها تعدّي.
- بيرفض المُدخلات الغلط بدري: بيرجع `false` لما `array` أو `types` تكون فاضية أو مش أراي متعبّية.
- مفيد للتحقق من مجموعات فيها أنواع مختلفة (زي أرقام ونصوص) بمكالمة واحدة لـ `areOneOfType`.

## الاستخدام

### الصياغة

الدالة:

- `areOneOfType(array, types)`

المعاملات:

- `array`: أراي من العناصر اللي هنتأكد منها قدّام الأنواع اللي اتقدّمت.
- `types`: أراي من سترينجات بتمثل أنواع البيانات اللي هنتحقق منها.

### استيراد الدالة محليًا

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areOneOfType(array, types)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areOneOfType](‎../_analysis/areOneOfType.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 23:35:57 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>