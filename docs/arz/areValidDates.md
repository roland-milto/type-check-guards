# areValidDates

## وصف

بيحدد إذا كانت المصفوفة مش فاضية ومكوّنة بالكامل من كائنات `Date` صالحة.

### حالة الاستخدام

استخدم `areValidDates` علشان تتحقق من مصفوفات جاية من المستخدم أو من API قبل ما تعمل عمليات معتمدة على التاريخ (الترتيب،
فحص المدى، التنسيق)، وده بيضمن إن كل الإدخالات تواريخ حقيقية وصالحة من نوع `Date` وإن الليستة مش فاضية.

> **ملاحظة لمستخدمي TypeScript:**
>
> `areValidDates` بيرجّع `false` للمصفوفة الفاضية؛ اتأكد إن المصفوفة المقصودة تكون مش فاضية قبل ما تعتمد عليه كخطوة
> validation.

### مميزات

- بيرجّع `true` بس لما كل عنصر يكون instance صالح من `Date` (من غير تواريخ غير صالحة زي `new Date('invalid')`).
- بيرفض الإدخال الفاضي وبيطلع `false`، وده بيضمن إنك بتقبل قايمات تواريخ ليها معنى ومش فاضية.
- بيوفر فحص boolean بسيط على طريقة guard سهل تركّبه مع validations تانية.

## الاستخدام

### الصياغة

الدالة:

- `areValidDates(array)`

المعاملات:

- `array`: المصفوفة اللي هتتشيّك، وممكن تكون فيها كائنات `Date`.

### استيراد الدالة محليًا

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); //‎ صح
console.log(areValidDates(b)); //‎ غلط
console.log(areValidDates(c)); //‎ غلط
console.log(areValidDates(d)); //‎ غلط

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areValidDates(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areValidDates](‎../_analysis/areValidDates.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 14:30:34 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>