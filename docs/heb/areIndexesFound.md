# areIndexesFound

## תיאור

`areIndexesFound` בודקת האם ערך הוא מערך לא-ריק שאיבריו כולם אינדקסים תקינים, ומחזירה `true` אם כן ו-`false` אחרת.

### מקרה שימוש

אימות נתונים שסופקו על-ידי משתמש או ממקור חיצוני (למשל JSON שעבר ניתוח) שאמורים להיות רשימת אינדקסים, לפני שימוש בהם כדי
לגשת למערכים או לבצע עליהם חיתוך.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areIndexesFound` כדי לאמת קלט לא-ידוע לפני שמתייחסים לאיבריו כאינדקסים של מערך; היא מחזירה `false` עבור
> מערכים ריקים ועבור מערכים המכילים ערכים שאינם אינדקסים.

### יתרונות

- מחזיר `true` רק כאשר הקלט הוא מערך מלא וכל איבר הוא אינדקס תקין.
- נכשל מהר: מחזיר `false` ברגע שנתקל באיבר שאינו אינדקס.
- שימושי כבדיקת מגן לפני שימוש בערכים כמיקומים או כהיסטים במערך.

## שימוש

### תחביר

פונקציה:

- `areIndexesFound(array)`

פרמטרים:

- `array`: המערך שיש לבדוק את התאמתו לאינדקסים.

### ייבוא מקומי של פונקציה

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); //‎ true
console.log(areIndexesFound(b)); //‎ false
console.log(areIndexesFound(c)); //‎ false

if (areIndexesFound(a)) {
  //‎‎ כאן, `a` מאושר כמערך מלא של אינדקסים.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areIndexesFound(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים
לפונקציות: [areIndexesFound](‎../_analysis/areIndexesFound.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 00:41:57 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>