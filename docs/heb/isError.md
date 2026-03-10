# isError

## תיאור

בודק האם `value` נתון הוא מופע של `Error`.

### מקרה שימוש

השתמשו ב-`isError` כאשר אתם מקבלים ערך `unknown` (כגון מתוך בלוק `catch`, callback או ספרייה חיצונית) ואתם צריכים לקבוע
בבטחה האם הוא `Error` לפני קריאה של `message`, `name` או `stack`.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isError` כדי להגן על ערכי `unknown` (למשל מתוך `catch`) לפני שמתייחסים אליהם כאל `Error`.

### יתרונות

- מספק בדיקת זמן ריצה פשוטה האם ערך הוא מופע של `Error`.
- מסייע לצמצם קלטים לא ידועים לפני גישה למאפייני `Error` כגון `message` או `stack`.
- מפחית את הסיכון לחריגות בזמן ריצה בעת טיפול בערכים שמגיעים מ-`catch`, מ-API חיצוניים או ממקורות ללא טיפוס.

## שימוש

### תחביר

פונקציה:

- `isError(value)`

פרמטרים:

- `value`: הערך שיש לבדוק מול הטיפוס `Error`.

### ייבוא מקומי של פונקציה

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isError(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isError](‎../_analysis/isError.md‎)

<br>

---

<small>הקובץ נוצר ב־6 February 2026 at 12:45:33 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>