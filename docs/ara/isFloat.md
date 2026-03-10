# isFloat

## الوصف

تحدد `isFloat` ما إذا كانت `value` المعطاة عددًا عشريًا منتهيًا (قيمة من نوع `number` ليست عددًا صحيحًا).

### حالة الاستخدام

التحقق من صحة إدخال رقمي يقدمه المستخدم عندما تكون القيم الكسرية مطلوبة (مثل الأسعار والقياسات والمعدلات) ورفض الأعداد
الصحيحة و`NaN` واللانهايات.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isFloat` عندما تحتاج إلى قبول مدخلات رقمية منتهية وغير صحيحة فقط؛ فهو يرفض الأعداد الصحيحة والأعداد غير
> المنتهية.

### المزايا

- يعيد `true` فقط للأعداد المنتهية غير الصحيحة (يستبعد الأعداد الصحيحة و`NaN` و`Infinity` و`-Infinity`).
- يعمل مع أي نوع إدخال (`unknown`) ويُضيّق النوع بأمان عبر التحقق من `typeof value === "number"`.
- يستخدم حواجز رقمية مدمجة (`Number.isInteger` و`Number.isFinite`) لسلوك متوقع.

## الاستخدام

### الصياغة

الدالة:

- `isFloat(value)`

المعاملات:

- `value`: القيمة المراد التحقق مما إذا كانت عددًا عشريًا (floating-point).

### استيراد الدالة محليًا

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    //‎‎ القيمة هي رقم أثناء وقت التشغيل؛ وهي منتهية وليست عددًا صحيحًا
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isFloat(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال هنا: [isFloat](‎../_analysis/isFloat.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 2:51:17 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>