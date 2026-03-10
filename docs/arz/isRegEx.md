# isRegEx

## وصف

بيحدد إذا كانت القيمة اللي اتبعتت هي instance من `RegExp`.

### حالة الاستخدام

اتأكد من القيم اللي جاية من المستخدم أو القيم الديناميكية (زي الإعدادات، API payloads، مدخلات الـ plugins) قبل ما تتعامل
معاها كتعبير منتظم.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isRegEx` عشان تضيّق نوع قيم `unknown` (أو union) قبل ما تستخدم خصائص أو ميثودز خاصة بـ RegExp؛ هي بترجع `true`
> بس للقيم اللي هي instances من `RegExp`.

### مميزات

- بيوفر حارس نوع وقت التشغيل بسيط عشان يتأكد إن القيمة `RegExp`.
- بيساعد يمنع الأخطاء لما الكود بيكون متوقع تعبير منتظم (زي قبل ما تنادي `test` أو `exec` أو تقرا `source`).
- بيشتغل مع regex literals وكمان مع الـ instances اللي بتتعمل بـ `new RegExp(...)`.
- بيرجع نتيجة boolean واضحة (`true`/`false`) من غير ما يرمي خطأ مع المدخلات اللي مش regex.

## الاستخدام

### الصياغة

الدالة:

- `isRegEx(value)`

المعاملات:

- `value`: القيمة اللي هتتشيّك.

### استيراد الدالة محليًا

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  //‎‎ input هنا عبارة عن RegExp
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isRegEx(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isRegEx](‎../_analysis/isRegEx.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 23:28:29 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>