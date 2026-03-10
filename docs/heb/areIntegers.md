# areIntegers

## תיאור

`areIntegers` קובעת האם כל האיברים במערך נתון הם מספרים שלמים, ומחזירה `true` אם כן ו-`false` אחרת.

### מקרה שימוש

השתמשו ב-`areIntegers` כדי לאמת נתונים שסופקו על ידי משתמש או ממקור חיצוני (למשל, פרמטרים של שאילתה, מטעני JSON, שורות
CSV) כאשר הלוגיקה שלכם דורשת רשימה מלאה של ערכי מספרים שלמים כגון מזהים, מונים, היסטי עימוד, או אינדקסים של מערכים.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areIntegers` כשומר בזמן ריצה עבור קלטים מסוג `unknown[]` לפני שמתייחסים אליהם כאל `number[]` שמכיל רק מספרים
> שלמים. אם היא מחזירה `false`, הקלט או שאינו מערך מלא או שהוא מכיל לפחות ערך אחד שאינו מספר שלם.

### יתרונות

- מחזירה `true` רק כאשר כל איבר הוא מספר שלם; אחרת מחזירה `false`.
- מסייעת לאמת קלט לא ידוע לפני ביצוע פעולות שמותרות רק על מספרים שלמים (למשל, אינדוקס, ספירות, מזהים).
- נכשלת מהר: מפסיקה לבדוק ברגע שנמצא איבר שאינו מספר שלם.

## שימוש

### תחביר

פונקציה:

- `areIntegers(array)`

פרמטרים:

- `array`: המערך שיש לבדוק עבור איברים שהם מספרים שלמים.

### ייבוא מקומי של פונקציה

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); //‎ true
console.log(areIntegers(b)); //‎ true
console.log(areIntegers(c)); //‎ false

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areIntegers(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areIntegers](‎../_analysis/areIntegers.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 00:58:33 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>