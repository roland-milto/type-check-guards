# areObjects

## תיאור

`areObjects` בודק האם מערך מלא שסופק מכיל רק אובייקטים.

### מקרה שימוש

השתמשו ב-`areObjects` כאשר אתם מקבלים מערך לא ידוע (למשל, מפענוח JSON או מ-API חיצוניים) וצריכים לוודא שהוא אינו ריק
ושכל איבר בו הוא אובייקט לפני איטרציה וגישה למאפייני אובייקט.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areObjects` כדי לאמת `unknown[]` לפני שמתייחסים לפריטים כאובייקטים; היא מחזירה `false` עבור מערכים ריקים.

### יתרונות

- מחזיר `true` רק כאשר הקלט הוא מערך מלא וכל איבר בו הוא אובייקט.
- עוצר מוקדם ומחזיר `false` ברגע שנמצא איבר שאינו אובייקט.
- מסייע לאמת קלט לא ידוע לפני ביצוע פעולות ייעודיות לאובייקטים.

## שימוש

### תחביר

פונקציה:

- `areObjects(array)`

פרמטרים:

- `array`: המערך שיש לבדוק האם הוא מכיל איברים שהם אובייקטים.

### ייבוא מקומי של פונקציה

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  //‎‎ value הוא מערך מלא של אובייקטים
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areObjects(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areObjects](‎../_analysis/areObjects.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 00:08:53 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>