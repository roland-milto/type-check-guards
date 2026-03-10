# areHexadecimals

## الوصف

يتحقق مما إذا كانت جميع العناصر في مصفوفة ما سلاسل سداسية عشرية، ويُرجع `true` فقط للمصفوفات غير الفارغة التي يكون فيها
كل عنصر صالحًا.

### حالة الاستخدام

استخدم `areHexadecimals` للتحقق من إدخال المستخدم أو البيانات الخارجية (مثل المعرّفات، قيم التحقق، أو أكواد الألوان بدون
بادئة '#') قبل إجراء تحليل سداسي عشري أو متابعة المعالجة.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areHexadecimals` للتحقق من صحة إدخال غير معروف قبل التحليل أو تحويل القيم (على سبيل المثال، قبل
`parseInt(value, 16)` أو تحويلات BigInt).

### المزايا

- يتحقق من أن كل عنصر عبارة عن سلسلة سداسية عشرية ويُرجع `true` فقط عندما تتطابق جميع العناصر.
- يرفض المصفوفات الفارغة حسب التصميم، ويُرجع `false` عند غياب بيانات الإدخال.
- يوفر نتيجة منطقية بسيطة (`true`/`false`) مناسبة للحراس والتحقق بأسلوب الإرجاع المبكر.

## الاستخدام

### الصياغة

الدالة:

- `areHexadecimals(array)`

المعاملات:

- `array`: المصفوفة المراد التحقق من احتوائها على عناصر من نوع سلاسل سداسية عشرية.

### استيراد الدالة محليًا

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areHexadecimals(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areHexadecimals](‎../_analysis/areHexadecimals.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 11:05:18 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>