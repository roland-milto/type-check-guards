# areUndefined

## תיאור

`areUndefined` בודק האם כל איבר במערך שסופק הוא `undefined`.

### מקרה שימוש

אמתו שרשימה של תוצאות אופציונליות אינה מכילה ערכים ממשיים (רק `undefined`), למשל לאחר מיפוי של חיפושים שבהם רשומות חסרות
מיוצגות כ-`undefined`, ואתם רוצים לוודא שכל החיפושים נכשלו.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areUndefined` כאשר אתם צריכים לוודא ש-`unknown[]` מכיל רק ערכי `undefined`; הוא מחזיר `false` עבור מערכים
> ריקים ועבור קלט שאינו מערך/קלט לא תקין בשל בדיקת `isFilledArray` הפנימית.

### יתרונות

- מחזיר `false` עבור ערכים שאינם מערכים ועבור מערכים ריקים, באמצעות דרישה למערך מלא דרך `isFilledArray`.
- מבטיח שכל איבר הוא `undefined`, ולא רק חלק מהם, ובכך מבהיר את הכוונה באופן מפורש.
- שימושי כפרדיקט בסגנון guard בעת אימות אוספים של קלט לא ידוע.

## שימוש

### תחביר

פונקציה:

- `areUndefined(array)`

פרמטרים:

- `array`: המערך שיש לבדוק עבור איברי `undefined`.

### ייבוא מקומי של פונקציה

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); //‎ true
const r2 = areUndefined(b); //‎ false
const r3 = areUndefined(c); //‎ false

//‎‎ הערה: מחזיר false עבור מערכים ריקים
const r4 = areUndefined([]); //‎ false

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areUndefined(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areUndefined](‎../_analysis/areUndefined.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 13:56:01 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>