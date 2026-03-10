# isInteger

## תיאור

קובע האם `value` נתון הוא מספר שלם בטוח.

### מקרה שימוש

אמתו קלט לא מהימן (למשל, פרמטרים של שאילתה, מטעני JSON, משתני סביבה) לפני שימוש בו כמספר שלם עבור אינדקסים של מערכים,
עימוד, מונים או מזהי מסד נתונים.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isInteger` כדי לאמת קלט לא ידוע לפני שמתייחסים אליו כמספר שלם; הוא מחזיר `true` רק עבור ערכים שבהם
`typeof value === "number"` וגם `Number.isSafeInteger(value)`.

### יתרונות

- בודק גם בטיחות טיפוס וגם בטיחות מספרית: מחזיר `true` רק כאשר הקלט הוא מספר וגם מספר שלם בטוח.
- מונע מלכודות נפוצות של המרה מספרית: מחרוזות כמו "5" מחזירות כראוי `false`.
- דוחה מספרים שאינם שלמים ומספרים שלמים לא בטוחים, מה שהופך אותו למתאים למזהים, מונים ואינדוקס מערכים.

## שימוש

### תחביר

פונקציה:

- `isInteger(value)`

פרמטרים:

- `value`: הערך שיש לבדוק עבור סטטוס של מספר שלם.

### ייבוא מקומי של פונקציה

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      //‎ נכון
const b = isInteger(-100);   //‎ נכון
const c = isInteger("5");    //‎ שגוי
const d = isInteger(5.5);    //‎ שגוי
const e = isInteger(null);   //‎ שגוי

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isInteger(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isInteger](‎../_analysis/isInteger.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 00:50:01 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>