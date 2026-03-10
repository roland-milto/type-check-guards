# isFalse

## תיאור

`isFalse` בודק האם ערך נתון שווה באופן מחמיר לליטרל הבוליאני `false`.

### מקרה שימוש

אימות נתונים לא ידועים (למשל, מ-JSON, פרמטרים של שאילתה, או קלט משתמש) כאשר רק הערך הבוליאני המפורש `false` צריך להיחשב
כדגל תקין, וכל השאר צריך להידחות.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isFalse` כאשר צריך לקבל רק את הליטרל `false` ולדחות את כל שאר הערכים ה-falsy; הוא מחזיר `true` רק עבור
`value === false`.

### יתרונות

- מספק בדיקה מחמירה עבור הליטרל הבוליאני `false` ללא המרה כפויה (coercion).
- מסייע להבחין בין `false` לבין ערכים אחרים שהם falsy כמו `0`, `""`, `null` ו-`undefined`.
- משפר את הקריאות על ידי הפיכת הכוונה למפורשת בעת אימות קלט לא ידוע.

## שימוש

### תחביר

פונקציה:

- `isFalse(value)`

פרמטרים:

- `value`: הערך שיש לבדוק.

### ייבוא מקומי של פונקציה

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  //‎‎ כאן input הוא בדיוק false
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isFalse(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isFalse](‎../_analysis/isFalse.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 16:21:45 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>