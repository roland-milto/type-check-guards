# isOneOfType

## الوصف

تحدد `isOneOfType` ما إذا كانت `value` المعطاة تطابق على الأقل أحد سلاسل الأنواع المقدمة، وتُرجع `true` إذا وُجد أي
تطابق و`false` خلاف ذلك.

### حالة الاستخدام

التحقق من صحة البيانات ذات الأنواع غير الصارمة أو الخارجية (مثل JSON المُحلَّل، معاملات الاستعلام) عبر السماح بعدة أنواع
مقبولة وقت التشغيل (مثل `number` أو `string`) قبل المتابعة بمنطق إضافي.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isOneOfType` عندما تريد تحققًا وقت التشغيل من أن قيمة ما تطابق أيًا من عدة أنواع مسموح بها؛ فهي تُرجع `true`
> إذا طابق نوع واحد على الأقل، وإلا تُرجع `false`.

### المزايا

- يتحقق من قيمة مقابل عدة أنواع مسموح بها في استدعاء واحد، ويُرجع `true` عند أول تطابق.
- يعمل مع مدخلات من نوع `unknown`، مما يجعله مفيدًا عند حدود وقت التشغيل (مثل البيانات الخارجية، إدخال المستخدم).
- نتيجة منطقية بسيطة (`true`/`false`) تتكامل جيدًا مع المنطق الشرطي وعمليات الإرجاع المبكر.

## الاستخدام

### الصياغة

الدالة:

- `isOneOfType(value, types)`

المعاملات:

- `value`: القيمة المراد التحقق منها مقابل الأنواع المحددة.
- `types`: مصفوفة من سلاسل الأنواع التي تمثل الأنواع المحتملة للقيمة.

### استيراد الدالة محليًا

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  //‎‎ الإدخال كائن أثناء وقت التشغيل
}

console.log(isOneOfType(3, ["number", "string"])); //‎ صحيح
console.log(isOneOfType("hello", ["number", "boolean"])); //‎ خطأ

```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.isOneOfType(value, types)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [isOneOfType](‎../_analysis/isOneOfType.md‎)

<br>

---

<small>تم إنشاء الملف في 31 يناير 2026 في 11:42:16 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>