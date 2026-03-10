# areDates

## תיאור

`areDates` קובע האם מערך נתון מלא ומכיל רק אובייקטי `Date`, ומחזיר `true` רק כאשר כל האיברים הם תאריכים תקינים.

### מקרה שימוש

השתמשו ב-`areDates` כדי לאמת קלט לא ידוע (למשל JSON מפוענח, נתוני טופס, מטעני API) לפני הרצת לוגיקה ייעודית לתאריכים כמו
מיון לפי זמן, עיצוב, או חישוב טווחים.

> **הערה למשתמשי TypeScript:**
>
> מחזיר `true` רק עבור מערכים שאינם ריקים שבהם כל איבר הוא `Date`; מערכים ריקים מחזירים `false`.

### יתרונות

- מבטיח שמערך אינו ריק לפני אימות התוכן שלו, ובכך מונע `true` עבור קלטים ריקים.
- מוודא שכל איבר הוא מופע של `Date`, ומחזיר `false` מיד עם אי־התאמה ראשונה.
- שימושי כבדיקה בסגנון guard לפני ביצוע פעולות ייעודיות לתאריכים על פריטי המערך.

## שימוש

### תחביר

פונקציה:

- `areDates(array)`

פרמטרים:

- `array`: המערך שיש לבדוק עבור אובייקטי `Date`.

### ייבוא מקומי של פונקציה

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); //‎ true
console.log(areDates(b)); //‎ false
console.log(areDates(c)); //‎ false

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areDates(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areDates](‎../_analysis/areDates.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 15:30:31 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>