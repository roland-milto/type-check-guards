# isSymbol

## وصف

`isSymbol` بيحدد إذا كانت قيمة معيّنة من نوع `symbol`، وبيُرجّع `true` للـ symbols و`false` لغير كده.

### حالة الاستخدام

اتأكد إن قيمة `unknown` هي `symbol` قبل ما تستخدمها كمُعرّف فريد، أو مفتاح في الـ registry، أو كمفتاح خاصية محسوب في الـ
objects والـ maps.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isSymbol` عشان تضيّق `unknown` لـ `symbol` قبل ما تنادي دوال ليها علاقة بالـ symbol أو تستخدمه كمفتاح خاصية
> محسوب.

### مميزات

- بيوفر فحص بسيط وموثوق وقت التشغيل لنوع الـ JavaScript البدائي `symbol`.
- بيساعد يضيّق قيم `unknown` قبل ما تستخدم APIs مخصوصة بالـ symbol أو تخزنها كمفاتيح.
- بيتجنب النتائج الإيجابية الكدابة باستخدام `typeof`، وده الطريقة القياسية لاكتشاف قيم `symbol`.

## الاستخدام

### الصياغة

الدالة:

- `isSymbol(value)`

المعاملات:

- `value`: القيمة اللي هتتعملها فحص.

### استيراد الدالة محليًا

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  //‎‎ input هنا رمز
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isSymbol(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isSymbol](‎../_analysis/isSymbol.md‎)

<br>

---

<small>الملف اتعمل في 30 January 2026 at 14:25:46 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>