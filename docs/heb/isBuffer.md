# isBuffer

## תיאור

בודק האם ערך הוא `Buffer` של Node.js ומחזיר `true` או `false`.

### מקרה שימוש

אמתו קלטים בזמן ריצה (למשל, מטעני API, נתוני קבצים או מאגרי הודעות) כדי לוודא שערך הוא `Buffer` לפני עיבודו, ולקבל באופן
אמין `false` בעת הרצה מחוץ ל-Node.js שבה `Buffer` עשוי שלא להתקיים.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isBuffer` כדי לצמצם ערכים מסוג `unknown` ל-`Buffer` לפני קריאה למתודות ייעודיות ל-Buffer.

### יתרונות

- מזהה בבטחה מופעי `Buffer` של Node.js באמצעות `Buffer.isBuffer`.
- מחזיר `false` בסביבות שבהן `Buffer` אינו זמין, וכך נמנעות שגיאות בזמן ריצה.
- עובד עם קלט מסוג `unknown`, מה שהופך אותו למתאים לאימות בזמן ריצה ולצמצום טיפוסים.

## שימוש

### תחביר

פונקציה:

- `isBuffer(value)`

פרמטרים:

- `value`: הערך שיש לבדוק.

### ייבוא מקומי של פונקציה

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); //‎ true
console.log(isBuffer(b)); //‎ false

if (isBuffer(a)) {
  //‎‎ a הוא Buffer כאן
  console.log(a.toString("utf8"));
}
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isBuffer(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isBuffer](‎../_analysis/isBuffer.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 16:31:47 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>