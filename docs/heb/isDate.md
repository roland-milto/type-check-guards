# isDate

## תיאור

`isDate` קובע האם ערך שסופק הוא `Date`, ומחזיר `true` עבור מופעי `Date` ו-`false` אחרת.

### מקרה שימוש

אמתו וצמצמו ערכים לא ידועים (למשל, נתוני בקשה, ערכי תצורה או JSON מפוענח) לפני ביצוע פעולות `Date` כגון עיצוב, השוואות
או קריאה ל-`toISOString()`.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isDate` כדי לצמצם `unknown` ל-`Date` בזמן ריצה; הוא מחזיר `true` רק עבור מופעי `Date` אמיתיים (לא מחרוזות
> תאריך).

### יתרונות

- מספק בדיקת הגנה פשוטה בזמן ריצה כדי לוודא האם ערך הוא `Date`.
- מסייע למנוע שגיאות טיפוסים על־ידי הבטחה שרק מופעי `Date` עוברים אימות.
- שימושי לאימות קלטים לא ידועים (למשל, מטעני API) לפני שימוש במתודות ייעודיות לתאריך.

## שימוש

### תחביר

פונקציה:

- `isDate(value)`

פרמטרים:

- `value`: הערך שיש לבדוק האם הוא מסוג `Date`.

### ייבוא מקומי של פונקציה

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  //‎‎ כאן input הוא Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isDate(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isDate](‎../_analysis/isDate.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 15:37:28 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>