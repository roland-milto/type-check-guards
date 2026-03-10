# areNumerics

## תיאור

`areNumerics` בודקת האם ערך הוא מערך לא ריק שבו כל האיברים הם מספריים.

### מקרה שימוש

השתמשו ב-`areNumerics` כדי לאמת נתונים חיצוניים או לא מטיפוסיים (למשל, מטעני JSON, פרמטרים של שאילתה, קלט מטופס) לפני
חישוב סכומים, ממוצעים או פעולות מספריות אחרות, תוך הבטחה שהקלט הוא מערך מספרי לא ריק והחזרת `false` אחרת.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areNumerics` כדי להגן על קלט מסוג `unknown` לפני שמתייחסים אליו כמערך מספרי; היא מחזירה `false` עבור ערכים
> שאינם מערכים ועבור מערכים ריקים.

### יתרונות

- מחזיר `true` רק כאשר הקלט הוא מערך לא ריק וכל איבר בו הוא מספרי.
- נכשל מהר: מפסיק לבדוק ברגע שנמצא איבר שאינו מספרי, ומחזיר `false`.
- מסייע לאמת קלט לא ידוע בצורה בטוחה לפני ביצוע פעולות מספריות.

## שימוש

### תחביר

פונקציה:

- `areNumerics(array)`

פרמטרים:

- `array`: המערך שיש לבדוק האם הוא מכיל איברים מספריים.

### ייבוא מקומי של פונקציה

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); //‎ true
console.log(areNumerics(b)); //‎ true
console.log(areNumerics(c)); //‎ false
console.log(areNumerics(d)); //‎ false
console.log(areNumerics(e)); //‎ false

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); //‎ 60
console.log(sumUnknown([10, "20", 30])); //‎ null
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areNumerics(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areNumerics](‎../_analysis/areNumerics.md‎)

<br>

---

<small>הקובץ נוצר ב־6 February 2026 at 16:05:16 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>