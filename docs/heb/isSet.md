# isSet

## תיאור

קובע האם ערך נתון הוא `Set`.

### מקרה שימוש

אמתו קלטים ממקורות חיצוניים (למשל, ניתוח JSON, קלט משתמש, או API-ים של צד שלישי) כדי לוודא שערך הוא `Set` לפני ביצוע
פעולות `Set`.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isSet` כדי לצמצם ערכים מסוג `unknown` לפני קריאה ל-API-ים ייעודיים ל-`Set` כמו `.add`, `.has`, או `.size`.

### יתרונות

- מספק בדיקת זמן ריצה פשוטה כדי לאשר האם ערך הוא `Set`.
- מסייע למנוע שגיאות טיפוס באמצעות הסתעפות מוקדמת כאשר ערך אינו `Set`.
- עובד עם כל תוכן של `Set` (ריק או מאוכלס) ומחזיר `true`/`false` באופן עקבי.

## שימוש

### תחביר

פונקציה:

- `isSet(value)`

פרמטרים:

- `value`: הערך לבדיקה.

### ייבוא מקומי של פונקציה

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  //‎‎ a היא Set בזמן ריצה
  console.log(a.size);
}

console.log(isSet(b)); //‎ false
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isSet(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isSet](‎../_analysis/isSet.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 23:09:49 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>