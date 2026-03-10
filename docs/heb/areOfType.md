# areOfType

## תיאור

בודק האם כל האיברים ב-`array` הנתון הם מה-`type` שצוין.

### מקרה שימוש

השתמשו ב-`areOfType` כדי לאמת קלט לא ידוע (למשל JSON מפוענח, מטעני API, קלט משתמש) לפני ביצוע פעולות תלויות-טיפוס על כל
איבר במערך.

> **הערה למשתמשי TypeScript:**
>
> מכיוון ש-`areOfType` הוא שומר טיפוסים, TypeScript מצמצם את המערך בתוך בלוק `if (areOfType(...)) {}` ל-
`Array<DataTypeOf<T>>`.

### יתרונות

- מספק שומר טיפוסים (TypeScript type guard): כאשר הוא מחזיר `true`, הקלט מצטמצם ל-`Array<DataTypeOf<T>>`.
- מאמת כל איבר מול טיפוס הריצה המבוקש, ומונע ממערכים עם טיפוסים מעורבים לעבור.
- נכשל מהר: מחזיר `false` ברגע שנמצא איבר שאינו תואם.
- דוחה ערכים שאינם מערכים ומערכים ריקים כברירת מחדל (תלוי ב-`isFilledArray`).

## שימוש

### תחביר

פונקציה:

- `areOfType(array, type)`

פרמטרים:

- `array`: המערך לבדיקה.
- `type`: הטיפוס שלפיו יש לבדוק כל איבר במערך.

### ייבוא מקומי של פונקציה

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  //‎‎ values הוא כעת number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); //‎ false

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areOfType(array, type)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areOfType](‎../_analysis/areOfType.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 17:09:39 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>