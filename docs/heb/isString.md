# isString

## תיאור

`isString` קובע האם ערך נתון הוא מחרוזת.

### מקרה שימוש

אמתו קלט משתמש, שדות במטען API, או ערכי תצורה בזמן ריצה כדי לוודא שערך הוא מחרוזת לפני החלת פעולות על מחרוזות (למשל,
קיצוץ רווחים, פיצול, המרת אותיות גדולות/קטנות).

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isString` כדי לאמת ערכים מסוג `unknown` או ערכים עם טיפוס רופף לפני קריאה למתודות של מחרוזת; הוא מחזיר
`true` רק כאשר `typeof value === "string"`.

### יתרונות

- בדיקה פשוטה ומהירה באמצעות `typeof`.
- מחזיר תוצאת בוליאן צפויה: `true` עבור מחרוזות, אחרת `false`.
- עובד גם עבור מחרוזות ריקות וגם עבור מחרוזות שאינן ריקות.
- שימושי כשומר ריצה קל משקל לפני ביצוע פעולות ייעודיות למחרוזות.

## שימוש

### תחביר

פונקציה:

- `isString(value)`

פרמטרים:

- `value`: הערך שיש לבדוק אם הוא מסוג מחרוזת.

### ייבוא מקומי של פונקציה

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  //‎‎ input הוא מחרוזת כאן
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isString(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isString](‎../_analysis/isString.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 13:14:07 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>