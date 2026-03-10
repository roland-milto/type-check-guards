# areNumbers

## תיאור

`areNumbers` בודק האם ערך הוא מערך לא ריק שבו כל האיברים הם מספרים.

### מקרה שימוש

אמתו נתונים שסופקו על־ידי משתמש או על־ידי API כדי לוודא שהם מערך לא ריק של מספרים לפני חישוב סכומים, ממוצעים או צבירות
מספריות אחרות.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areNumbers` כדי לאמת מערכים לא ידועים לפני ביצוע חישובים מספריים; הוא מחזיר `false` עבור מערכים ריקים ועבור
> מערכים שמכילים ערך כלשהו שאינו מספר.

### יתרונות

- מחזיר `true` רק כאשר הקלט הוא מערך לא ריק וכל איבר הוא מספר.
- מונע חיוביים שגויים על־ידי דחיית מערכים ריקים וקלטים שאינם מערכים.
- שימושי כבדיקת הגנה לפני פעולות מספריות (למשל סכימה, חישוב ממוצע) כדי להימנע משגיאות בזמן ריצה.

## שימוש

### תחביר

פונקציה:

- `areNumbers(array)`

פרמטרים:

- `array`: המערך שיש לבדוק האם הוא מכיל איברים שהם מספרים.

### ייבוא מקומי של פונקציה

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areNumbers(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areNumbers](‎../_analysis/areNumbers.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 13:04:27 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>