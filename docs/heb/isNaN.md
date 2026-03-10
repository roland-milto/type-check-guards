# isNaN

## תיאור

קובע האם ה-`value` שסופק הוא `NaN` מסוג `number` בלי להמיר מחרוזות.

### מקרה שימוש

אמתו קלט לא מהימן או בעל טיפוס רופף (למשל מטעני API, ערכי טפסים, JSON מפוענח) כדי לזהות את הערך המיוחד `NaN` ולטפל בו
במפורש, תוך התייחסות לקלטים שאינם מספרים כלא `NaN`.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isNaN` כאשר צריך לזהות את הערך המספרי המיוחד `NaN` תוך הבטחה שהקלט הוא אכן `number` (ללא המרה ממחרוזת
> למספר).

### יתרונות

- בודק האם ערך הוא `NaN` בלי לכפות ערכים שאינם מספרים (למשל מחרוזות) להפוך למספרים.
- מחזיר `true` רק עבור ערכים שהם גם מסוג `number` וגם `NaN`.
- בטוח עבור קלטים מסוג `unknown` ומונע חיוביים שגויים מהמרות מרומזות.

## שימוש

### תחביר

פונקציה:

- `isNaN(value)`

פרמטרים:

- `value`: הערך שיש לבדוק האם הוא `NaN` מסוג `number`.

### ייבוא מקומי של פונקציה

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // ‎נכון
console.log(isNaN(b)); // ‎לא נכון
console.log(isNaN(c)); // ‎לא נכון

if (isNaN(a)) {
  //‎ ‎a הוא מספר ובאופן ספציפי NaN
}
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isNaN(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isNaN](‎../_analysis/isNaN.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 15:46:17 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>