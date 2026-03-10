# isOneOfType

## وصف

`isOneOfType` بيحدد إذا كانت `value` المعطاة بتطابق على الأقل واحد من سلاسل الأنواع اللي اتقدمت، وبيِرجّع `true` لو لقى
أي تطابق و`false` غير كده.

### حالة الاستخدام

تحقّق من داتا نوعها مش مضبوط قوي أو جاية من برّه (زي JSON متحلّل، أو query parameters) بالسماح بكذا نوع مقبول وقت
التشغيل (زي `number` أو `string`) قبل ما تكمّل منطق تاني.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isOneOfType` لما تبقى عايز فحص وقت التشغيل إن قيمة بتطابق أي نوع من كذا نوع مسموح؛ بيرجّع `true` لو على الأقل
> نوع واحد طابق، وإلا بيرجّع `false`.

### مميزات

- بيشيّك قيمة قدّام كذا نوع مسموح بيهم في نِداء واحد، وبيِرجّع `true` أول ما يلاقي تطابق.
- بيشتغل مع مُدخلات `unknown`، فبيبقى مفيد على حدود وقت التشغيل (زي الداتا الخارجية، إدخال المستخدم).
- نتيجة بوليانية بسيطة (`true`/`false`) وبتتركّب كويس مع المنطق الشرطي والـ early returns.

## الاستخدام

### الصياغة

الدالة:

- `isOneOfType(value, types)`

المعاملات:

- `value`: القيمة اللي هتتشيّك قدّام الأنواع المحددة.
- `types`: مصفوفة من سلاسل نصية للأنواع بتمثل الأنواع المحتملة للقيمة.

### استيراد الدالة محليًا

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  //‎‎ input هو اوبجكت وقت التشغيل
}

console.log(isOneOfType(3, ["number", "string"])); //‎ صح
console.log(isOneOfType("hello", ["number", "boolean"])); //‎ غلط

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isOneOfType(value, types)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isOneOfType](‎../_analysis/isOneOfType.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 23:42:18 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>