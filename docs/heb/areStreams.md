# areStreams

## תיאור

`areStreams` קובע האם ערך הוא מערך מלא שבו כל רכיב הוא `Stream`.

### מקרה שימוש

אימות אוספים שסופקו על-ידי משתמש או שנבנו באופן דינמי (למשל, מספר זרמי קריאה של קבצים) לפני ביצוע piping, resume, או
פעולות אחרות עליהם כקבוצה.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areStreams` כדי לאמת קלט לא ידוע לפני שמתייחסים אליו כ-`Stream[]`; הוא מחזיר `true` רק כאשר הערך הוא מערך לא
> ריק וכל רכיב הוא `Stream`.

### יתרונות

- מבטיח שהקלט הוא מערך מלא שבו כל רכיב הוא `Stream`.
- מספק בדיקת `true`/`false` פשוטה לאימות אוספי זרמים לפני עיבוד.
- נכשל מהר: מחזיר `false` ברגע שנמצא רכיב שאינו `Stream`.
- מסייע למנוע שגיאות בזמן ריצה כאשר הקוד מניח שכל הפריטים הם מופעים של `Stream`.

## שימוש

### תחביר

פונקציה:

- `areStreams(array)`

פרמטרים:

- `array`: המערך שיש לבדוק עבור אובייקטי Stream.

### ייבוא מקומי של פונקציה

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  //‎‎ input הוא מערך מלא של אובייקטי Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areStreams(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areStreams](‎../_analysis/areStreams.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 23:33:55 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>