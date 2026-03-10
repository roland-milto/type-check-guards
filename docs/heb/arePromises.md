# arePromises

## תיאור

`arePromises` קובע האם כל הרכיבים במערך הם מופעים של `Promise`.

### מקרה שימוש

אמתו שרשימה שנבנתה באופן דינמי או שסופקה ממקור חיצוני מכילה רק הבטחות לפני שמאגדים אותן (למשל, עם `Promise.all`).

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`arePromises` כדי לאמת `unknown[]` לפני קריאה ל-`Promise.all` או לפעולות אחרות שמיועדות רק להבטחות; הפונקציה
> מחזירה `false` עבור מערכים ריקים.

### יתרונות

- מבטיח שכל רכיב הוא `Promise` לפני שממשיכים בלוגיקה ייעודית להבטחות.
- מחזיר `false` עבור מערכים שאינם מלאים, ובכך מונע תוצאות דו-משמעיות עבור קלטים ריקים.
- שימושי כשומר בזמן ריצה בעת עבודה עם `unknown[]` ממקורות חיצוניים.

## שימוש

### תחביר

פונקציה:

- `arePromises(array)`

פרמטרים:

- `array`: המערך שיש לבדוק עבור מופעים של Promise.

### ייבוא מקומי של פונקציה

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  //‎‎ values הוא מערך של מופעי Promise בזמן ריצה
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.arePromises(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [arePromises](‎../_analysis/arePromises.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 23:48:26 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>