# isNull

## وصف

بيحدد إذا كانت `value` اللي اتقدمت هي `null`.

### حالة الاستخدام

استخدم `isNull` علشان تتحقق من المدخلات أو حقول الـ API payload اللي فيها `null` كقيمة sentinel ليها معنى ولازم تتعامل
معاها بشكل مختلف عن `undefined` أو أي قيم تانية.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isNull` لما تحتاج تفرّق بين `null` و `undefined` وباقي القيم الـ falsy؛ هو بيرجع `true` بس مع `null`.

### مميزات

- بيوفر فحص دقيق لـ `null` من غير ما يخلطه بـ `undefined`.
- بيشتغل بشكل موثوق مع أي نوع إدخال عشان بيقبل `unknown`.
- بسيط وسريع ومن غير آثار جانبية؛ بيرجع بس `true` أو `false`.

## الاستخدام

### الصياغة

الدالة:

- `isNull(value)`

المعاملات:

- `value`: القيمة اللي هتتشيّك إذا كانت `null`.

### استيراد الدالة محليًا

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); //‎ صح
console.log(isNull(b)); //‎ غلط

if (isNull(a)) {
  //‎‎ a هنا null
}
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isNull(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isNull](‎../_analysis/isNull.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 15:38:32 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>