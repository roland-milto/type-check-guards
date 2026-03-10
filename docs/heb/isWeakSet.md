# isWeakSet

## תיאור

קובע האם ה-`value` הנתון הוא `WeakSet` של אובייקטים.

### מקרה שימוש

השתמשו ב-`isWeakSet` כאשר מקבלים קלט ללא טיפוס (למשל, מ-API-ים חיצוניים, תצורה דינמית, או ערכים מסוג `unknown`) וצריך
לוודא שהוא `WeakSet` לפני שימוש בפעולות ייחודיות ל-`WeakSet`.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isWeakSet` כדי לצמצם ערך מסוג `unknown` ל-`WeakSet<object>` בזמן ריצה; שימו לב ש-`WeakSet` יכול להכיל רק
> הפניות לאובייקטים.

### יתרונות

- מספק בדיקת זמן ריצה פשוטה האם ערך הוא `WeakSet`.
- מסייע למנוע שגיאות טיפוסים על־ידי הבטחה שרק מופעי `WeakSet` יטופלו ככאלה.
- עובד עם כל קלט מסוג `unknown` ומחזיר תוצאת בוליאן ברורה (`true`/`false`).

## שימוש

### תחביר

פונקציה:

- `isWeakSet(value)`

פרמטרים:

- `value`: הערך שיש לבדוק.

### ייבוא מקומי של פונקציה

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); //‎ true
console.log(isWeakSet(b)); //‎ false

if (isWeakSet(a)) {
  //‎‎ a הוא WeakSet בזמן ריצה
}
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isWeakSet(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isWeakSet](‎../_analysis/isWeakSet.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 14:14:54 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>