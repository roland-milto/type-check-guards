# isObject

## תיאור

קובע האם `value` נתון הוא `object` (למעט `null`).

### מקרה שימוש

השתמשו ב-`isObject` כדי לאמת קלטים לא ידועים (למשל, JSON מפוענח, תגובות API, מטעני אירועים) לפני גישה למאפיינים, כדי
לוודא שהערך הוא אובייקט ולא `null`.

> **הערה למשתמשי TypeScript:**
>
> `isObject` הוא guard בזמן ריצה שמחזיר ערך בוליאני; הוא אינו מצמצם לצורת אובייקט ספציפית. שלבו אותו עם בדיקות נוספות (
> למשל, קיום מאפיינים) כאשר אתם זקוקים לטיפוס חזק יותר.

### יתרונות

- מחזיר `true` רק עבור ערכים שאינם `null` וש־`typeof` שלהם הוא `"object"`.
- מונע את המלכודת הנפוצה ב-JavaScript שבה `null` היה אחרת נחשב כאובייקט.
- עובד עבור אובייקטים פשוטים ומופעים של אובייקטים מובנים (למשל, `Date`, `RegExp`).
- בדיקת זמן ריצה פשוטה ומהירה המתאימה לתכנות הגנתי ולאימות קלט.

## שימוש

### תחביר

פונקציה:

- `isObject(value)`

פרמטרים:

- `value`: הערך שיש לבדוק האם הוא `object`.

### ייבוא מקומי של פונקציה

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  //‎‎ input הוא אובייקט שאינו null בזמן ריצה
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isObject(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isObject](‎../_analysis/isObject.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 00:18:38 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>