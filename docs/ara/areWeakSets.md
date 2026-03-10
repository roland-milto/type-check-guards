# areWeakSets

## الوصف

يتحقق مما إذا كانت المُدخلات مصفوفة غير فارغة يكون كل عنصر فيها `WeakSet`، ويعيد `true` فقط في هذه الحالة.

### حالة الاستخدام

تحقق من مُدخلات وقت التشغيل (مثل تلك القادمة من واجهات برمجة التطبيقات، أو الإعدادات، أو البيانات التي يوفرها المستخدم)
لضمان امتلاكك قائمة غير فارغة من مثيلات `WeakSet` قبل المتابعة بمنطق يعتمد على سلوك `WeakSet`.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areWeakSets` للتحقق من صحة مُدخلات غير معروفة قبل التعامل معها على أنها `WeakSet[]`. يعيد `false` للمصفوفات
> الفارغة ولغير المصفوفات.

### المزايا

- يضمن أن كل عنصر في المصفوفة المُدخلة هو `WeakSet`.
- يعيد `false` للمصفوفات الفارغة، مما يمنع نتائج «كلها صالحة» غير المقصودة عند غياب البيانات.
- يفشل بأمان عبر إرجاع `false` عندما لا تكون المُدخلات مصفوفة ممتلئة (بما في ذلك `null`).
- مفيد كحارس قبل تنفيذ عمليات تتطلب مثيلات `WeakSet`.

## الاستخدام

### الصياغة

الدالة:

- `areWeakSets(array)`

المعاملات:

- `array`: المصفوفة المراد التحقق مما إذا كانت تحتوي على كائنات `WeakSet`.

### استيراد الدالة محليًا

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  //‎‎ a هي مصفوفة غير فارغة من مثيلات WeakSet
}

console.log(areWeakSets(a)); //‎ صحيح
console.log(areWeakSets(b)); //‎ خطأ
console.log(areWeakSets(c)); //‎ خطأ
console.log(areWeakSets(null as unknown)); //‎ خطأ
```

### استيراد كائن عام

استخدم الاستيراد التالي لاستيراد الدوال كطرائق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ستتوفر عندها الطريقة التالية بشكل عام:

- `Type.areWeakSets(array)`

## تحليل الدوال

تم توثيق تحليل جدولي يوضح المخرجات الناتجة عند إدخال معاملات مختلفة في الدوال
هنا: [areWeakSets](‎../_analysis/areWeakSets.md‎)

<br>

---

<small>تم إنشاء الملف في 30 يناير 2026 في 2:07:27 م (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>