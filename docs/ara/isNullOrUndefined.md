# isNullOrUndefined

## الوصف

يتحقق مما إذا كانت قيمة معيّنة هي `null` أو `undefined`.

### حالة الاستخدام

استخدم `isNullOrUndefined` عندما تحتاج إلى التعامل مع كلٍّ من `null` و`undefined` على أنهما «لا قيمة»، مثل التحقق من صحة
المدخلات الاختيارية، وتطبيع حمولات واجهات API، أو حماية مسارات الشيفرة قبل إلغاء الإشارة إلى قيمة قد تكون مفقودة.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isNullOrUndefined` للحماية من القيم المفقودة قبل الوصول إلى الخصائص أو استدعاء الدوال؛ إذ يعيد `true` فقط
> للقيمتين `null` و`undefined`.

### المزايا

- يوفّر حارسًا واضحًا وقابلًا لإعادة الاستخدام لاكتشاف `null` و`undefined` في مكان واحد.
- يعيد قيمة منطقية بسيطة (`true`/`false`) يسهل تركيبها ضمن الشروط وعمليات التحقق.
- يساعد على تجنّب أخطاء وقت التشغيل الشائعة عبر التحقق من القيم المفقودة قبل الوصول إلى الخصائص أو استدعاء الدوال.

## الاستخدام

### الصياغة

الدالة:

- `isNullOrUndefined(value)`

المعاملات:

- `value`: القيمة المراد التحقق مما إذا كانت `null` أو `undefined`.

### استيراد الدالة محليًا

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  //‎‎ التعامل مع القيمة المفقودة
}

console.log(isNullOrUndefined(b)); //‎ صحيح
console.log(isNullOrUndefined(c)); //‎ خطأ

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isNullOrUndefined(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [isNullOrUndefined](‎../_analysis/isNullOrUndefined.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 12:32:53 ص (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>