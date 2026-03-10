# areJson

## وصف

بيتحقق إذا كانت كل عناصر الـ array سترينجات JSON، وبيِرجّع `true` بس لو الـ array متعبّية وكل عنصر JSON صالح؛ غير كده
بيرجّع `false`.

### حالة الاستخدام

تحقّق من الداتا اللي جاية (زي من query params، environment variables، أو external APIs) لما تكون متوقع array من سترينجات
متشفّرة بـ JSON وعايز ترفض الـ arrays الفاضية أو أي عناصر مش JSON.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areJson` لما تحتاج تتأكد إن `unknown[]` فيها بس سترينجات JSON قبل ما تعملها parsing (زي بـ `JSON.parse`).

### مميزات

- بيرجّع `true` بس لما كل عنصر يكون سترينج JSON صالح؛ غير كده بيرجّع `false`.
- بيفشل بسرعة: بيبطل يشيّك أول ما يلاقي عنصر مش JSON.
- بيرفض الـ arrays الفاضية بالتصميم، وبيِرجّع `false` للمدخلات اللي مش متعبّية.

## الاستخدام

### الصياغة

الدالة:

- `areJson(array)`

المعاملات:

- `array`: الـ array اللي هيتعملها فحص عشان عناصر سترينج JSON.

### استيراد الدالة محليًا

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); //‎ صح
const mixed = areJson(["{\"a\":1}", 123 as unknown]); //‎ غلط
const empty = areJson([]); //‎ غلط

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areJson(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areJson](‎../_analysis/areJson.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 16:14:57 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>