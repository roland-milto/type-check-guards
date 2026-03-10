# isPromise

## תיאור

קובע האם ערך נתון הוא `Promise`.

### מקרה שימוש

השתמשו ב-`isPromise` כדי לאמת קלטים לא ידועים לפני שמתייחסים אליהם כאל `Promise`, למשל בעת טיפול בערכים שמוחזרים
מתוספים (plugins), ייבואים דינמיים (dynamic imports), או ממשקי API עם טיפוסים רופפים.

> **הערה למשתמשי TypeScript:**
>
> `isPromise` בודק באמצעות `instanceof Promise`, ולכן הוא מחזיר `true` רק עבור מופעי `Promise` אמיתיים (ולא thenables
> כלליים).

### יתרונות

- מספק בדיקת זמן ריצה פשוטה האם ערך הוא `Promise`.
- מסייע להגן על מסלולי קוד שדורשים מופע `Promise` אמיתי, ומחזיר `true` או `false` באופן צפוי.
- מונע חיוביים שגויים מאובייקטים "thenable" (למשל, `{ then() {} }`) על ידי דרישה למופע `Promise` ממשי.

## שימוש

### תחביר

פונקציה:

- `isPromise(value)`

פרמטרים:

- `value`: הערך שיש לבדוק.

### ייבוא מקומי של פונקציה

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); //‎ true
console.log(isPromise(b)); //‎ false
console.log(isPromise(123)); //‎ false
console.log(isPromise(null)); //‎ false

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isPromise(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isPromise](‎../_analysis/isPromise.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 23:52:55 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>