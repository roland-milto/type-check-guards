# areWeakMaps

## תיאור

`areWeakMaps` בודקת האם ערך הוא מערך לא-ריק שבו כל רכיב הוא `WeakMap`, ומחזירה `true` רק במקרה זה ו-`false` אחרת.

### מקרה שימוש

אמתו נתונים בזמן ריצה (למשל JSON מפוענח, קלטים של תוספים, או תצורה עם טיפוס רופף) כדי לוודא שזהו מערך לא-ריק של מופעי
`WeakMap` לפני איטרציה וקריאה למתודות של `WeakMap`; מחזירה `false` כאשר רכיב כלשהו אינו `WeakMap` או כאשר המערך ריק.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areWeakMaps` כדי לאמת קלט לא-ידוע לפני שמתייחסים אליו כאל `WeakMap[]` לא-ריק; היא מחזירה `false` עבור מערכים
> ריקים.

### יתרונות

- מבטיח שכל רכיב במערך שסופק הוא מופע של `WeakMap`.
- מחזיר `false` עבור מערכים ריקים, וכך מונע קבלה בשוגג של "אין נתונים" כקלט תקין.
- שימושי כבדיקת-מגן לפני ביצוע פעולות ייחודיות ל-`WeakMap` על כל הפריטים.

## שימוש

### תחביר

פונקציה:

- `areWeakMaps(array)`

פרמטרים:

- `array`: המערך שיש לבדוק עבור מופעי `WeakMap`.

### ייבוא מקומי של פונקציה

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  //‎‎ list הוא מערך לא ריק של מופעי WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  //‎‎ לא WeakMap[] לא ריק
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areWeakMaps(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areWeakMaps](‎../_analysis/areWeakMaps.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 13:37:24 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>