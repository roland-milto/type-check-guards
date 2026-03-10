# isWeakMap

## תיאור

קובע האם `value` נתון הוא מופע של `WeakMap`.

### מקרה שימוש

השתמשו ב-`isWeakMap` כאשר אתם מקבלים ערך מסוג `unknown` (למשל, מ-API ציבורי, מערכת תוספים או תצורה דינמית) וצריכים לוודא
שהוא `WeakMap` לפני שימוש בהתנהגות ייחודית ל-`WeakMap`.

> **הערה למשתמשי TypeScript:**
>
> `isWeakMap` מבצע בדיקת `instanceof WeakMap`; זהו guard בזמן ריצה שמחזיר `true` רק עבור מופעים אמיתיים של `WeakMap`.

### יתרונות

- בדיקת זמן ריצה פשוטה האם ערך הוא `WeakMap`.
- מסייע למנוע שימוש שגוי ב-API-ים שדורשים `WeakMap` על ידי החזרת `true`/`false` במקום לזרוק חריגה.
- עובד עם קלטים מסוג `unknown`, מה שהופך אותו לנוח בגבולות מודולים (למשל, ניתוח, נתונים חיצוניים או קוד ללא טיפוסים).

## שימוש

### תחביר

פונקציה:

- `isWeakMap(value)`

פרמטרים:

- `value`: הערך לבדיקה.

### ייבוא מקומי של פונקציה

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  //‎‎ a הוא WeakMap בזמן ריצה
}

console.log(isWeakMap(a)); //‎ true
console.log(isWeakMap(b)); //‎ false
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isWeakMap(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isWeakMap](‎../_analysis/isWeakMap.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 13:25:12 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>