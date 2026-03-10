# areBuffers

## תיאור

`areBuffers` בודקת האם הערך שסופק הוא מערך לא ריק ומלא שבו כל רכיב הוא `Buffer`, ומחזירה `true` אם כן ו-`false` אחרת.

### מקרה שימוש

אימות מערכי מקטעים נכנסים (למשל, מזרמים, העלאות קבצים או חבילות רשת) כדי לוודא שכל החלקים הם מופעי `Buffer` לפני שרשור,
פענוח או העברתם לפונקציות קריפטוגרפיות או לעיבוד בינארי.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areBuffers` כדי לאמת `unknown[]` לפני קריאה ל-API-ים ייעודיים ל-Buffer כמו `Buffer.concat`, וכך להבטיח
> שהפונקציה תחזיר `true` רק כאשר כל רכיב הוא `Buffer`.

### יתרונות

- מבטיח שכל רכיב בקלט הוא מופע של `Buffer` ב-Node.js, ומחזיר `true` רק כאשר כל המערך תואם.
- דוחה קלטים לא תקינים מוקדם באמצעות דרישה למערך לא ריק ומלא; מחזיר `false` עבור מערכים ריקים או ערכים שאינם מערך.
- שימושי כשומר (guard) לפני ביצוע פעולות שמיועדות רק ל-Buffer (למשל, שרשור, גיבוב, פרוטוקולים בינאריים).

## שימוש

### תחביר

פונקציה:

- `areBuffers(array)`

פרמטרים:

- `array`: המערך שיש לבדוק האם הוא מכיל מופעי Buffer.

### ייבוא מקומי של פונקציה

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areBuffers(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areBuffers](‎../_analysis/areBuffers.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 16:25:25 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>