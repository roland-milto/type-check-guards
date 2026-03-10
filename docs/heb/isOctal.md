# isOctal

## תיאור

קובע האם ערך הוא מחרוזת ליטרל אוקטלי תקפה (למשל `0o755`).

### מקרה שימוש

אימות קלט משתמש או ערכי תצורה שחייבים להיות מבוטאים כמחרוזת ליטרל אוקטלי (לדוגמה, מצבי הרשאות קבצים כמו `0o644`) לפני
ניתוח (parsing) או המרה שלהם.

> **הערה למשתמשי TypeScript:**
>
> `isOctal` הוא שומר טיפוסים (`value is string`). לאחר תוצאה של `true`, TypeScript מצמצם את המשתנה שנבדק ל-`string`.

### יתרונות

- מספק שומר טיפוסים מחמיר: מחזיר `true` רק כאשר הקלט הוא מחרוזת התואמת לפורמט של ליטרל אוקטלי.
- דוחה מחרוזות ריקות ומחרוזות עם רווחים מובילים/נגררים (בקרת ASCII/רווח), ובכך מפחית התאמות מקריות.
- תומך בסימן אופציונלי ואינו תלוי רישיות עבור הקידומת `0o`/`0O`.
- סלחני עבור קלטים שאינם מחרוזת באמצעות החזרת `false` במקום לזרוק חריגה.

## שימוש

### תחביר

פונקציה:

- `isOctal(value)`

פרמטרים:

- `value`: הערך שיש לבדוק.

### ייבוא מקומי של פונקציה

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); //‎ true
console.log(isOctal(b)); //‎ true
console.log(isOctal(c)); //‎ false
console.log(isOctal(d)); //‎ false

if (isOctal(a)) {
  //‎‎ a הוא מחרוזת כאן
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isOctal(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isOctal](‎../_analysis/isOctal.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 14:46:28 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>