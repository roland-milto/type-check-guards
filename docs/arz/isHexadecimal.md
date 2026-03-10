# isHexadecimal

## وصف

`isHexadecimal` بيشيّك إذا كانت قيمة معيّنة سترينج ليترال هيكساديسيمال وبادئة `0x`/`0X` إلزامية.

### حالة الاستخدام

استخدم `isHexadecimal` علشان تتحقق من قيم الإعدادات، حقول الـ API payload، أو arguments بتاعة الـ CLI اللي لازم تتبعت
كسترينج ليترال هيكساديسيمال (زي IDs، masks، أو addresses) ومينفعش يبقى حواليها مسافات.

> **ملاحظة لمستخدمي TypeScript:**
>
> استخدم `isHexadecimal` لما تحتاج تتحقق من إدخال المستخدم أو الداتا المتسلسلة إنها سترينج ليترال هيكساديسيمال صارمة (
> بما فيها بادئة `0x`/`0X`) قبل ما تعملها parsing أو تحويل.

### مميزات

- بيتأكد إن القيمة سترينج وبتطابق فورمات صارم لليترال هيكساديسيمال (لازم بادئة `0x`/`0X`).
- بيرفض السترينجات اللي فيها مسافات فاضية في الأول أو الآخر، وده بيساعد تتجنب قبول إدخال متزوّد بمسافات بالغلط.
- بيدعم إشارة اختيارية ومش بيفرق بين حروف كبيرة/صغيرة في البادئة والأرقام، وبيطلع `true`/`false` بشكل متوقع.

## الاستخدام

### الصياغة

الدالة:

- `isHexadecimal(value)`

المعاملات:

- `value`: القيمة اللي هيتعملها فحص.

### استيراد الدالة محليًا

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); //‎ true
isHexadecimal("-0Xff"); //‎ true
isHexadecimal("1A2B"); //‎ false (البادئة ناقصة)
isHexadecimal(" 0x1A2B"); //‎ false (مسافة فالأول)
isHexadecimal(0x1a2b); //‎ false (مش سترينج)
```

### استيراد كائن عام

استخدم الاستيراد ده علشان تستورد الدوال كطرق للكائن بشكل عام:

```ts
import "@type-check/guards/register-global-object.mjs";
```

ساعتها هتبقى الطريقة دي متاحة بشكل عام:

- `Type.isHexadecimal(value)`

## تحليل الدوال

هتلاقي هنا تحليل جدولي بيبين النتيجة لما تدخل معاملات مختلفة في الدوال: [isHexadecimal](‎../_analysis/isHexadecimal.md‎)

<br>

---

<small>الملف اتعمل في 31 January 2026 at 22:57:40 (UTC) باستخدام *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** من *
*[Roland Milto](https://roland-milto.de/)**.</small>