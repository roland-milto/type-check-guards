# areValidDates

## תיאור

קובעת האם מערך אינו ריק ומורכב כולו מאובייקטים תקינים מסוג `Date`.

### מקרה שימוש

השתמשו ב-`areValidDates` כדי לוודא תקינות של מערכים שסופקו על־ידי משתמש או API לפני ביצוע פעולות מבוססות תאריך (מיון,
בדיקות טווח, עיצוב), וכך להבטיח שכל הערכים הם אובייקטים אמיתיים ותקינים מסוג `Date` ושהרשימה אינה ריקה.

> **הערה למשתמשי TypeScript:**
>
> `areValidDates` מחזירה `false` עבור מערך ריק; ודאו שהמערך אכן מיועד להיות לא ריק לפני שמסתמכים עליה כשלב ולידציה.

### יתרונות

- מחזירה `true` רק כאשר כל רכיב הוא מופע תקין של `Date` (ללא תאריכים לא תקינים כמו `new Date('invalid')`).
- דוחה קלט ריק על־ידי החזרת `false`, וכך מבטיחה שתאשרו רק רשימות תאריכים משמעותיות ולא ריקות.
- מספקת בדיקת בוליאן פשוטה בסגנון guard שקל לשלב עם ולידציות אחרות.

## שימוש

### תחביר

פונקציה:

- `areValidDates(array)`

פרמטרים:

- `array`: המערך לבדיקה, שעשוי להכיל אובייקטים מסוג `Date`.

### ייבוא מקומי של פונקציה

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); //‎ נכון
console.log(areValidDates(b)); //‎ שגוי
console.log(areValidDates(c)); //‎ שגוי
console.log(areValidDates(d)); //‎ שגוי

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areValidDates(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים
לפונקציות: [areValidDates](‎../_analysis/areValidDates.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 14:31:59 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>