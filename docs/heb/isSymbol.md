# isSymbol

## תיאור

`isSymbol` קובע האם ערך נתון הוא מטיפוס `symbol`, ומחזיר `true` עבור סמלים ו-`false` אחרת.

### מקרה שימוש

אמתו שערך מסוג `unknown` הוא `symbol` לפני שימוש בו כמזהה ייחודי, כמפתח רישום, או כמפתח מאפיין מחושב באובייקטים ובמפות.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isSymbol` כדי לצמצם `unknown` ל-`symbol` לפני קריאה לפונקציות הקשורות ל-symbol או לפני שימוש בו כמפתח מאפיין
> מחושב.

### יתרונות

- מספק בדיקת זמן ריצה פשוטה ואמינה עבור הטיפוס הפרימיטיבי `symbol` ב-JavaScript.
- מסייע לצמצם ערכים מסוג `unknown` לפני שימוש ב-API-ים ייעודיים ל-symbol או לפני אחסונם כמפתחות.
- מונע חיוביים שגויים באמצעות `typeof`, שהיא הדרך הקנונית לזהות ערכי `symbol`.

## שימוש

### תחביר

פונקציה:

- `isSymbol(value)`

פרמטרים:

- `value`: הערך שיש לבדוק.

### ייבוא מקומי של פונקציה

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  //‎‎ כאן input הוא סמל
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isSymbol(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isSymbol](‎../_analysis/isSymbol.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 14:26:55 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>