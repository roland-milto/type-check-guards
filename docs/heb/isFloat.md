# isFloat

## תיאור

`isFloat` קובעת האם `value` נתון הוא מספר נקודה צפה סופי (כלומר `number` שאינו מספר שלם).

### מקרה שימוש

אימות קלט מספרי שסופק על-ידי משתמש כאשר נדרשים ערכים שבריים (למשל, מחירים, מדידות, שיעורים) ודחיית מספרים שלמים, `NaN`
ואינסופים.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isFloat` כאשר צריך לקבל רק קלטים מספריים סופיים שאינם שלמים; היא דוחה מספרים שלמים ומספרים שאינם סופיים.

### יתרונות

- מחזירה `true` רק עבור מספרים סופיים שאינם שלמים (לא כולל מספרים שלמים, `NaN`, `Infinity` ו-`-Infinity`).
- עובדת עם כל סוג קלט (`unknown`) ומצמצמת בבטחה באמצעות בדיקה של `typeof value === "number"`.
- משתמשת במגינים מספריים מובנים (`Number.isInteger`, `Number.isFinite`) להתנהגות צפויה.

## שימוש

### תחביר

פונקציה:

- `isFloat(value)`

פרמטרים:

- `value`: הערך שיש לבדוק האם הוא מספר נקודה צפה.

### ייבוא מקומי של פונקציה

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    //‎‎ הערך הוא מספר בזמן ריצה; הוא סופי ואינו מספר שלם
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isFloat(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isFloat](‎../_analysis/isFloat.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 16:07:54 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>