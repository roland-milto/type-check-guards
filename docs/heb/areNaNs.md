# areNaNs

## תיאור

`areNaNs` בודקת האם כל הרכיבים במערך הם `NaN` ומחזירה `true` רק אם כל רכיב הוא `NaN`.

### מקרה שימוש

אימות נתונים נכנסים שבהם `NaN` משמש כערך סמן, וכאשר חייבים לוודא שכל המערך מורכב באופן בלעדי מ-`NaN` (למשל, זיהוי סדרה
מספרית שבה כל הערכים חסרים).

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areNaNs` כאשר אתם צריכים לאמת שמערך מכיל רק את הערך המספרי `NaN` (ללא המרה ממחרוזת למספר).

### יתרונות

- מחזיר `true` רק כאשר כל רכיב הוא `NaN` (בדיקה מחמירה של כל הרכיבים).
- אינו ממיר מחרוזות למספרים; ערכים כמו "NaN" נשארים לא-`NaN` וגורמים לתוצאה להיות `false`.
- מחזיר `false` עבור מערכים שאינם מאוכלסים, ובכך מונע `true` בטעות על קלט ריק.

## שימוש

### תחביר

פונקציה:

- `areNaNs(array)`

פרמטרים:

- `array`: המערך שיש לבדוק עבור ערכי `NaN`.

### ייבוא מקומי של פונקציה

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); //‎ true
const b = areNaNs([NaN, 1, NaN]); //‎ false
const c = areNaNs([NaN, "NaN", NaN]); //‎ false
const d = areNaNs([NaN, null, NaN]); //‎ false
const e = areNaNs([] as unknown[]); //‎ false
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areNaNs(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areNaNs](‎../_analysis/areNaNs.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 15:51:33 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>