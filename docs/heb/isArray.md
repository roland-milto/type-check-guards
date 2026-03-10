# isArray

## תיאור

`isArray` בודק האם ערך נתון הוא מערך ומחזיר `true` אם כן, אחרת `false`.

### מקרה שימוש

אמתו נתונים לא ידועים (למשל, JSON מפוענח או תגובות API) כדי לוודא שערך הוא מערך לפני איטרציה, אינדוקס או גישה ל-
`.length`.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isArray` כאשר אתם צריכים בדיקה בזמן ריצה למערכים; הוא מחזיר בוליאן ובטוח לקריאה עם ערכים מסוג `unknown`.

### יתרונות

- משתמש ב-`Array.isArray` המובנה לזיהוי מערכים אמין בין realms (למשל, iframes).
- מחזיר תוצאת בוליאן פשוטה (`true`/`false`) המתאימה ל-guards וללוגיקת הסתעפות.
- עובד עם כל סוג קלט משום שהפרמטר הוא `unknown`.

## שימוש

### תחביר

פונקציה:

- `isArray(value)`

פרמטרים:

- `value`: הערך שיש לבדוק.

### ייבוא מקומי של פונקציה

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  //‎‎ input הוא מערך בזמן ריצה
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isArray(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isArray](‎../_analysis/isArray.md‎)

<br>

---

<small>הקובץ נוצר ב־6 February 2026 at 11:30:34 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>