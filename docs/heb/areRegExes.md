# areRegExes

## תיאור

`areRegExes` בודקת האם ערך הוא מערך מלא המכיל רק אובייקטים מסוג `RegExp`.

### מקרה שימוש

אמתו שאפשרות תצורה (למשל, רשימה של תבניות allow/deny) היא מערך לא-ריק של ביטויים רגולריים לפני שימוש בה להתאמה.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areRegExes` כדי לצמצם `unknown` ל-`RegExp[]` לפני איטרציה או הרכבת תבניות.

### יתרונות

- מבטיח שערך הוא מערך לא-ריק שבו כל איבר הוא מופע של `RegExp`.
- מספק שומר בוליאני פשוט (`true`/`false`) לאימות קלט משתמש או תצורה.
- מסייע למנוע שגיאות בזמן ריצה כאשר קוד בהמשך מניח שכל הפריטים תומכים בפעולות של ביטויים רגולריים.

## שימוש

### תחביר

פונקציה:

- `areRegExes(array)`

פרמטרים:

- `array`: הערך שיש לבדוק.

### ייבוא מקומי של פונקציה

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  //‎‎ patterns הוא מערך של RegExp כאן
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areRegExes(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areRegExes](‎../_analysis/areRegExes.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 23:18:32 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>