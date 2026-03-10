# isUndefined

## الوصف

يتحقق مما إذا كانت قيمة معيّنة هي `undefined`.

### حالة الاستخدام

استخدم `isUndefined` لحراسة المدخلات الاختيارية، واكتشاف الخصائص المفقودة، أو التفريق بين “غير مُقدَّم” (`undefined`)
و“فارغ صراحةً” (`null`).

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isUndefined` عندما تحتاج تحديدًا إلى اكتشاف `undefined` (وليس `null`). وهو آمن لأنه يعتمد على
`typeof value === "undefined"`.

### المزايا

- يوفّر تحقّقًا واضحًا وصريحًا من `undefined` باستخدام `typeof`، مما يتجنب الحالات الطرفية مع المتغيرات غير المعلنة.
- يعيد نتيجة منطقية بسيطة (`true`/`false`) مناسبة للحراس (guards) والتفرّع ومنطق التحقق (validation).
- يساعد على التمييز بين `undefined` وقيم “فارغة” أخرى مثل `null` و`0` و`""` أو `NaN`.

## الاستخدام

### الصياغة

الدالة:

- `isUndefined(value)`

المعاملات:

- `value`: القيمة المراد التحقق منها.

### استيراد الدالة محليًا

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  //‎‎ x غير معرّف هنا
} else {
  //‎‎ x ليس غير معرّف هنا
}

const a = isUndefined(undefined); //‎ صحيح
const b = isUndefined(null);      //‎ خطأ
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isUndefined(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [isUndefined](‎../_analysis/isUndefined.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 2:01:51 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>