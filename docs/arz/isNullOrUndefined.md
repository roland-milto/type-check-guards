# isNullOrUndefined

## وصف

بيتحقق إذا كانت قيمة معيّنة `null` أو `undefined`.

### حالة الاستخدام

استخدم `isNullOrUndefined` لما تحتاج تعتبر الاتنين `null` و `undefined` إنهم "مفيش قيمة"، زي التحقق من مدخلات اختيارية،
توحيد/تطبيع بيانات الـ API payloads، أو حماية مسارات الكود قبل ما تعمل dereference لقيمة ممكن تكون مش موجودة.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isNullOrUndefined` كحارس ضد القيم الناقصة قبل ما توصل لخصائص أو تنادي ميثودز؛ هو بيرجع `true` بس مع `null` و
`undefined`.

### مميزات

- بيوفر حارس واضح وقابل لإعادة الاستخدام علشان يكتشف `null` و `undefined` في مكان واحد.
- بيرجع قيمة بوليان بسيطة (`true`/`false`) وسهل تتكوّن بيها شروط وعمليات تحقق.
- بيساعد تتجنب أخطاء وقت التشغيل الشائعة عن طريق التأكد إن مفيش قيم ناقصة قبل ما توصل لخصائص أو تنادي ميثودز.

## الاستخدام

### الصياغة

الدالة:

- `isNullOrUndefined(value)`

المعاملات:

- `value`: القيمة اللي هتتشيّك إذا كانت `null` أو `undefined`.

### استيراد الدالة محليًا

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  //‎‎ اتعامل مع القيمة الناقصة
}

console.log(isNullOrUndefined(b)); //‎ صح
console.log(isNullOrUndefined(c)); //‎ غلط

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isNullOrUndefined(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في
الدوال: [isNullOrUndefined](‎../_analysis/isNullOrUndefined.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 00:32:54 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>