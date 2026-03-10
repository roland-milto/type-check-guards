# areEqual

## תיאור

`areEqual` בודק האם כל הרכיבים במערך שווים לערך צפוי נתון, ומחזיר `true` רק עבור מערכים שאינם ריקים שבהם כל פריט תואם.

### מקרה שימוש

אמתו שרשימה מכילה רק ערך מותר יחיד (למשל, כל דגלי הסטטוס הם `true`, כל התפקידים הם `"admin"`, או שכל הערכים המספריים
שווים לקבוע נדרש) תוך התייחסות לקלט ריק כלא תקין (`false`).

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areEqual` כאשר אתם צריכים בדיקה מחמירה של כל הפריטים; היא מחזירה `false` עבור מערכים ריקים ועבור כל קלט
> שאינו מערך או שאינו מלא.

### יתרונות

- מחזיר `true` רק כאשר כל רכיב תואם לערך הצפוי; אחרת מחזיר `false`.
- נכשל מהר: מפסיק לבדוק ברגע שנמצא רכיב שאינו תואם.
- מגן מפני קלט לא תקין על־ידי החזרת `false` כאשר הקלט אינו מערך מלא.

## שימוש

### תחביר

פונקציה:

- `areEqual(value, expected)`

פרמטרים:

- `value`: המערך שיש לבדוק.
- `expected`: הרכיב שלפיו משווים כל פריט במערך.

### ייבוא מקומי של פונקציה

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areEqual(value, expected)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areEqual](‎../_analysis/areEqual.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 23:50:39 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>