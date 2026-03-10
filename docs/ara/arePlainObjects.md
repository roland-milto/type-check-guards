# arePlainObjects

## الوصف

يتحقق مما إذا كانت جميع عناصر المصفوفة كائنات عادية، ويُرجع `true` فقط إذا كان كل عنصر مؤهلاً.

### حالة الاستخدام

تحقق من صحة البيانات الخارجية أو غير المُنمَّطة (مثل JSON المُحلَّل، وحمولات API، وعمليات إرسال النماذج) لضمان أنك
استلمت مصفوفة غير فارغة حيث يكون كل إدخال كائنًا عاديًا قبل التكرار وقراءة الخصائص.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `arePlainObjects` للتحقق من صحة مُدخلات غير معروفة قبل التعامل معها على أنها `Record<string, unknown>[]` (أو
> شكل كائن أكثر صرامة) في TypeScript.

### المزايا

- يضمن أن كل عنصر في المصفوفة المُدخلة هو كائن عادي، ويُرجع `true` فقط عندما تتطابق جميع العناصر.
- يرفض المُدخلات غير الصالحة مبكرًا (غير المصفوفات أو المصفوفات الفارغة) عبر إرجاع `false`.
- يعتبر كلاً من كائنات الصياغة الحرفية للكائن و كائنات `Object.create(null)` ككائنات عادية صالحة.

## الاستخدام

### الصياغة

الدالة:

- `arePlainObjects(array)`

المعاملات:

- `array`: المصفوفة التي سيتم التحقق من احتوائها على عناصر من نوع كائن عادي.

### استيراد الدالة محليًا

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); //‎ صحيح
const b = arePlainObjects([{}, Object.create(null)]); //‎ صحيح
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); //‎ خطأ
const d = arePlainObjects([] as unknown[]); //‎ خطأ
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.arePlainObjects(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [arePlainObjects](‎../_analysis/arePlainObjects.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 4:24:16 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>