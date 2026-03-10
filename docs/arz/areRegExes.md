# areRegExes

## وصف

`areRegExes` بتشيّك إذا كانت القيمة مصفوفة مليانة ومحتواها بس كائنات `RegExp`.

### حالة الاستخدام

اتأكد إن خيار في الإعدادات (زي قايمة allow/deny patterns) هو مصفوفة مش فاضية من regular expressions قبل ما تستخدمه في
المطابقة.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areRegExes` علشان تضيّق نوع `unknown` لـ `RegExp[]` قبل ما تعمل iterate أو تركّب patterns.

### مميزات

- بيضمن إن القيمة تبقى مصفوفة مش فاضية وكل عنصر فيها يبقى instance من `RegExp`.
- بيوفر حارس بولياني بسيط (`true`/`false`) علشان يتحقق من إدخال المستخدم أو الإعدادات.
- بيساعد يمنع أخطاء وقت التشغيل لما الكود اللي بعد كده يفترض إن كل العناصر بتدعم عمليات الـ regular expression.

## الاستخدام

### الصياغة

الدالة:

- `areRegExes(array)`

المعاملات:

- `array`: القيمة اللي هيتعمل عليها فحص.

### استيراد الدالة محليًا

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  //‎‎ patterns هنا عبارة عن مصفوفة من RegExp
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areRegExes(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areRegExes](‎../_analysis/areRegExes.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 23:16:45 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>