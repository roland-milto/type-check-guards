# arePlainObjects

## وصف

بيفحص إذا كانت كل عناصر الأراي أوبچكتات عادية، وبيرجع `true` بس لو كل عنصر مؤهل.

### حالة الاستخدام

تحقق من بيانات خارجية أو من غير تايب (زي JSON متقري، payloads من API، أو بيانات فورم) عشان تضمن إنك استلمت أراي مش فاضية
وكل إدخال فيها أوبچكت عادي قبل ما تلف عليها وتقرا الخصائص.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `arePlainObjects` عشان تتحقق من مُدخلات مش معروفة قبل ما تتعامل معاها على إنها `Record<string, unknown>[]` (أو
> شكل أوبچكت أضيق) في TypeScript.

### مميزات

- بيضمن إن كل عنصر في الأراي اللي داخلة يبقى أوبچكت عادي (plain object)، وبيرجع `true` بس لما كل العناصر تطابق ده.
- بيرفض المُدخلات الغلط بدري (مش أراي أو أراي فاضية) عن طريق إنه يرجّع `false`.
- بيعتبر إن أوبچكتات الـ object literal وكمان أوبچكتات `Object.create(null)` أوبچكتات عادية وصالحة.

## الاستخدام

### الصياغة

الدالة:

- `arePlainObjects(array)`

المعاملات:

- `array`: الأراي اللي هيتعمل عليها فحص عشان نتأكد إن عناصرها أوبچكتات عادية.

### استيراد الدالة محليًا

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); //‎ صح
const b = arePlainObjects([{}, Object.create(null)]); //‎ صح
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); //‎ غلط
const d = arePlainObjects([] as unknown[]); //‎ غلط
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.arePlainObjects(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في
الدوال: [arePlainObjects](‎../_analysis/arePlainObjects.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 16:24:15 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>