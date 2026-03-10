# isValidDate

## תיאור

`isValidDate` בודק האם ערך נתון הוא אובייקט `Date` תקין ומחזיר `true` רק עבור תאריכים אמיתיים שאינם לא תקינים.

### מקרה שימוש

אימות קלט משתמש או נתוני API שעשויים להכיל תאריכים, כדי להבטיח שהערך הוא מופע אמיתי של `Date` ולא תאריך לא תקין לפני
ביצוע חישובי תאריך, עיצוב או השוואות.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isValidDate` לפני קריאה למתודות של `Date` (למשל, `toISOString`, `getTime`) על ערכים שמטיפוסם `unknown` כדי
> לוודא שהם אובייקטים תקינים מסוג `Date`.

### יתרונות

- מבטיח שערך הוא מופע של `Date` ולא רק מחרוזת או מספר שנראים כמו תאריך.
- דוחה תאריכים לא תקינים (למשל, `new Date("invalid")`) באמצעות בדיקה לערכי זמן מסוג `NaN`.
- שומר בוליאני פשוט שקל להשתמש בו בתנאים ובצינורות ולידציה.
- מסייע למנוע שגיאות בזמן ריצה בעת קריאה למתודות של תאריך על־ידי אימות הקלט תחילה.

## שימוש

### תחביר

פונקציה:

- `isValidDate(value)`

פרמטרים:

- `value`: הערך שיש לבדוק.

### ייבוא מקומי של פונקציה

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  //‎‎ input הוא מופע Date תקין
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); //‎ false
console.log(isValidDate("2025-12-22")); //‎ false

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isValidDate(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isValidDate](‎../_analysis/isValidDate.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 16:40:16 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>