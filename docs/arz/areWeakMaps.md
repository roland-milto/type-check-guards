# areWeakMaps

## وصف

`areWeakMaps` بتشيّك إذا كانت القيمة أراي مش فاضية وكل عنصر فيها `WeakMap`، وبتِرجّع `true` بس في الحالة دي و`false` غير
كده.

### حالة الاستخدام

تحقّق من داتا وقت التشغيل (زي JSON متقري، inputs بتاعة plugins، أو إعدادات typed بشكل مش صارم) عشان تضمن إنها أراي مش
فاضية من instances بتاعة `WeakMap` قبل ما تعمل iterate وتنادي methods بتاعة `WeakMap`؛ بترجّع `false` لو أي عنصر مش
`WeakMap` أو لو الأراي فاضية.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `areWeakMaps` عشان تتحقق من input مش معروف قبل ما تتعامل معاه كإنه `WeakMap[]` مش فاضي؛ هي بترجّع `false`
> للأرايز الفاضية.

### مميزات

- بيضمن إن كل عنصر في الأراي اللي اتقدمت هو instance من `WeakMap`.
- بيرجّع `false` للأرايز الفاضية، وده بيمنع قبول “مفيش داتا” بالغلط كإنها input صالح.
- مفيد كـ guard قبل ما تعمل عمليات مخصوصة بـ `WeakMap` على كل العناصر.

## الاستخدام

### الصياغة

الدالة:

- `areWeakMaps(array)`

المعاملات:

- `array`: الأراي اللي هتتشيّك إنها فيها instances من `WeakMap`.

### استيراد الدالة محليًا

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  //‎‎ الليست عبارة عن مصفوفة مش فاضية من نُسخ WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  //‎‎ مش WeakMap[] مش فاضية
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.areWeakMaps(array)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [areWeakMaps](‎../_analysis/areWeakMaps.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 13:36:02 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>