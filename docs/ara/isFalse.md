# isFalse

## الوصف

تتحقق `isFalse` مما إذا كانت قيمة معيّنة مساوية تمامًا للقيمة الحرفية المنطقية `false`.

### حالة الاستخدام

التحقق من بيانات غير معروفة (مثلًا من JSON أو معاملات الاستعلام أو إدخال المستخدم) حيث يجب اعتبار القيمة المنطقية
الصريحة `false` فقط علامة صالحة، ويجب رفض كل ما عدا ذلك.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isFalse` عندما تحتاج إلى قبول القيمة الحرفية `false` فقط ورفض جميع القيم الأخرى المُقيَّمة كـ falsy؛ فهي تُرجع
`true` فقط عندما يكون `value === false`.

### المزايا

- يوفّر تحقّقًا صارمًا من القيمة الحرفية المنطقية `false` دون إجراء تحويل ضمني.
- يساعد على التمييز بين `false` وبين القيم الأخرى المُقيَّمة كـ falsy مثل `0` و`""` و`null` و`undefined`.
- يحسّن قابلية القراءة عبر جعل المقصود صريحًا عند التحقق من مُدخلات غير معروفة.

## الاستخدام

### الصياغة

الدالة:

- `isFalse(value)`

المعاملات:

- `value`: القيمة المراد التحقق منها.

### استيراد الدالة محليًا

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  //‎‎ الإدخال يساوي تمامًا false هنا
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isFalse(value)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال هنا: [isFalse](‎../_analysis/isFalse.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 4:20:47 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>