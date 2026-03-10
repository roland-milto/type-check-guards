# isBoolean

## תיאור

קובע האם ערך נתון הוא `boolean`.

### מקרה שימוש

אמת נתונים חיצוניים או ללא טיפוס (למשל, משתני סביבה, מטעני JSON, פרמטרים של שאילתה) כדי לוודא שערך הוא `boolean` לפני
השימוש בו בלוגיקה מותנית.

> **הערה למשתמשי TypeScript:**
>
> השתמש ב-`isBoolean` כדי לצמצם `unknown` ל-`boolean` לפני החלת פעולות בוליאניות.

### יתרונות

- בדיקת זמן ריצה פשוטה ומהירה באמצעות `typeof`.
- מסייע לאמת קלט לא ידוע לפני לוגיקה ייעודית לבוליאנים.
- מחזיר תוצאה צפויה מסוג `boolean` (`true`/`false`).

## שימוש

### תחביר

פונקציה:

- `isBoolean(value)`

פרמטרים:

- `value`: הערך שיש לבדוק.

### ייבוא מקומי של פונקציה

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  //‎‎ input הוא בוליאני כאן
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isBoolean(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isBoolean](‎../_analysis/isBoolean.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 14:36:28 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>