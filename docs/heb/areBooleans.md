# areBooleans

## תיאור

`areBooleans` בודק האם מערך נתון שאינו ריק מכיל רק ערכים בוליאניים, ומחזיר `true` אם כן ו-`false` אחרת.

### מקרה שימוש

אמתו נתונים שסופקו על ידי משתמש או ממקור חיצוני (למשל, מטעני JSON, פרמטרים של שאילתה, מערכי תצורה) כדי לוודא שרשימה לא
ריקה מכילה רק בוליאנים לפני החלת לוגיקה בוליאנית או העברתה ל-API-ים שמצפים ל-`boolean[]`.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areBooleans` כדי לאמת `unknown[]` לפני שמתייחסים אליו כאל `boolean[]`; הוא מחזיר `false` עבור מערכים ריקים,
> לכן טפלו במקרה הזה במפורש אם יש לאפשר רשימה ריקה.

### יתרונות

- מחזיר `true` רק כאשר כל איבר הוא בוליאני והקלט הוא מערך לא ריק.
- מונע חיוביים שגויים על ידי דחיית מערכים ריקים (מחזיר `false`).
- עובד היטב כשומר בזמן ריצה לפני פעולות שמיועדות לבוליאנים בלבד (למשל, `every`, `some`, צמצומים לוגיים).

## שימוש

### תחביר

פונקציה:

- `areBooleans(array)`

פרמטרים:

- `array`: המערך שיש לבדוק האם הוא מכיל איברים בוליאניים.

### ייבוא מקומי של פונקציה

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areBooleans(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areBooleans](‎../_analysis/areBooleans.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 14:40:23 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>