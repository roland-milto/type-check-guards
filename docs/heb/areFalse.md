# areFalse

## תיאור

`areFalse` בודקת האם כל הרכיבים במערך שסופק הם בדיוק הערך הבוליאני `false`.

### מקרה שימוש

אמתו שרשימה של דגלי תכונה, בדיקות או תוצאות של guards הן כולן `false` לפני שממשיכים (למשל, כדי לוודא שאין תנאים חוסמים).

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areFalse` כאשר נדרשת ולידציה מחמירה שמערך אינו ריק ומכיל רק את הערך הבוליאני `false`.

### יתרונות

- מבטיח שכל רכיב הוא בדיוק `false` (ללא המרה מרומזת של truthy/falsey).
- מחזיר `false` עבור ערכים שאינם מערכים או עבור מערכים ריקים, באמצעות דרישה למערך מלא דרך `isFilledArray`.
- עוצר מוקדם ברכיב הראשון שאינו `false` לשם יעילות.

## שימוש

### תחביר

פונקציה:

- `areFalse(array)`

פרמטרים:

- `array`: המערך לבדיקה, המכיל רכיבים מכל סוג.

### ייבוא מקומי של פונקציה

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); //‎ true
const b = areFalse([false, true, false]);  //‎ false
const c = areFalse([false, "false", false]); //‎ false
const d = areFalse([]); //‎ false
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areFalse(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areFalse](‎../_analysis/areFalse.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 16:17:09 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>