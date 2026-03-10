# isRegEx

## תיאור

קובע האם ערך שסופק הוא מופע של `RegExp`.

### מקרה שימוש

אמתו ערכים שסופקו על ידי משתמש או ערכים דינמיים (למשל, תצורה, מטען API, קלטי תוספים) לפני שמתייחסים אליהם כביטוי רגולרי.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isRegEx` כדי לצמצם ערכים מסוג `unknown` (או איחוד) לפני שימוש במאפיינים או בשיטות ייעודיים ל-RegExp; היא
> מחזירה `true` רק עבור ערכים שהם מופעים של `RegExp`.

### יתרונות

- מספק שומר טיפוסים פשוט בזמן ריצה כדי לבדוק האם ערך הוא `RegExp`.
- מסייע למנוע שגיאות כאשר הקוד מצפה לביטוי רגולרי (למשל, לפני קריאה ל-`test`, `exec`, או קריאת `source`).
- עובד גם עם ליטרלים של regex וגם עם מופעים שנוצרו באמצעות `new RegExp(...)`.
- מחזיר תוצאת בוליאן ברורה (`true`/`false`) בלי לזרוק חריגה עבור קלטים שאינם regex.

## שימוש

### תחביר

פונקציה:

- `isRegEx(value)`

פרמטרים:

- `value`: הערך שיש לבדוק.

### ייבוא מקומי של פונקציה

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  //‎‎ input הוא RegExp כאן
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isRegEx(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isRegEx](‎../_analysis/isRegEx.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 23:29:31 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>