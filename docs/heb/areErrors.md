# areErrors

## תיאור

בודק האם מערך אינו ריק ומכיל רק אובייקטים מסוג `Error`, ומחזיר `true` או `false`.

### מקרה שימוש

אמת שמערך `unknown[]` שסופק בזמן ריצה (למשל, כשלונות מצטברים, תוצאות אימות, או נתונים שעברו דה-סריאליזציה) הוא רשימה לא
ריקה של אובייקטים מסוג `Error` לפני איטרציה, רישום ליומן או זריקה מחדש.

> **הערה למשתמשי TypeScript:**
>
> `areErrors` מחזיר `true` רק עבור מערך מלא שבו כל פריט הוא `Error`; הוא מחזיר `false` עבור מערך ריק או אם רכיב כלשהו
> אינו `Error`.

### יתרונות

- מבטיח שכל רכיב הוא מופע של `Error`, ומאפשר טיפול בטוח בשגיאות ורישום ליומן.
- דוחה מערכים ריקים, ומונע מצבים מקריים של "אין שגיאות" מלהיחשב כרשימות שגיאות תקפות.
- מתאים היטב כשומר בזמן ריצה בעת עבודה עם קלטים מסוג `unknown[]` (למשל, מ-API-ים או מבלוקי `catch`).

## שימוש

### תחביר

פונקציה:

- `areErrors(array)`

פרמטרים:

- `array`: המערך שיש לבדוק עבור אובייקטים מסוג `Error`.

### ייבוא מקומי של פונקציה

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  //‎‎ value הוא מערך לא ריק של אובייקטי Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areErrors(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areErrors](‎../_analysis/areErrors.md‎)

<br>

---

<small>הקובץ נוצר ב־6 February 2026 at 12:33:47 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>