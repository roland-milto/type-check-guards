# areSymbols

## الوصف

يتحقق مما إذا كان الإدخال مصفوفة ممتلئة تكون عناصرها كلها رموزًا (symbols)، ويعيد `true` أو `false`.

### حالة الاستخدام

تحقق من أن حقل إعدادات (مثل قائمة مفاتيح فريدة ممثلة كرموز) هو مصفوفة غير فارغة تحتوي على رموز فقط قبل استخدامه في
واجهات برمجة التطبيقات التي تتطلب `symbol[]`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areSymbols` للتحقق من إدخال غير معروف قبل التعامل معه على أنه `symbol[]`؛ فهي تعيد `false` لغير المصفوفات
> وللمصفوفات الفارغة.

### المزايا

- يعيد `true` فقط عندما يكون الإدخال مصفوفة غير فارغة وكل عنصر فيها رمزًا (symbol).
- يمنع النتائج الإيجابية الكاذبة عبر رفض غير المصفوفات والمصفوفات الفارغة من خلال فحص المصفوفة الممتلئة الداخلي.
- مفيد كحارس نوع وقت التشغيل (runtime type guard) للتحقق من صحة القوائم التي تحتوي على رموز فقط قبل المعالجة اللاحقة.

## الاستخدام

### الصياغة

الدالة:

- `areSymbols(array)`

المعاملات:

- `array`: المصفوفة التي سيتم التحقق مما إذا كانت عناصرها رموزًا (symbol).

### استيراد الدالة محليًا

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  //‎‎ a هي مصفوفة تحتوي على رموز فقط أثناء وقت التشغيل
  const first = a[0];
  console.log(typeof first); //‎ "symbol"
}

console.log(areSymbols(b)); //‎ false
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areSymbols(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areSymbols](‎../_analysis/areSymbols.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 2:20:37 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>