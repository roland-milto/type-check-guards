# isStream

## תיאור

`isStream` בודק האם ערך נתון הוא אובייקט stream (דמוי-Stream ב-Node.js, `ReadableStream`, או `WritableStream`).

### מקרה שימוש

אמתו קלטים שעשויים להיות או אובייקטים רגילים או streams (למשל העלאות קבצים, גופי HTTP, או צינורות עיבוד) והסתעפו בלוגיקה
בהתאם לשאלה האם הערך הוא stream.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isStream` כדי לצמצם `unknown` לפני קריאה למתודות של stream; הוא מזהה אובייקטים דמויי-Stream ב-Node.js (
> באמצעות `pipe`/`on`) ו-Web Streams (`ReadableStream`/`WritableStream`) כאשר ה-globals הללו קיימים.

### יתרונות

- מזהה בבטחה אובייקטים נפוצים דמויי-Stream ב-Node.js באמצעות בדיקה של הפונקציות `pipe` ו-`on`.
- תומך גם ב-Web Streams באמצעות זיהוי `ReadableStream` ו-`WritableStream` כאשר הם זמינים.
- מחזיר תוצאת בוליאן פשוטה (`true`/`false`) המתאימה ל-guards וללוגיקת הסתעפות.

## שימוש

### תחביר

פונקציה:

- `isStream(value)`

פרמטרים:

- `value`: הערך שיש לבדוק.

### ייבוא מקומי של פונקציה

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  //‎‎ nodeStream דומה לזרם; ניתן להשתמש בבטחה בממשקי API נפוצים של זרמים
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isStream(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isStream](‎../_analysis/isStream.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 23:39:55 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>