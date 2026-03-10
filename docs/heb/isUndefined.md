# isUndefined

## תיאור

בודק האם ערך נתון הוא `undefined`.

### מקרה שימוש

השתמש ב-`isUndefined` כדי להגן על קלטים אופציונליים, לזהות מאפיינים חסרים, או להבדיל בין “לא סופק” (`undefined`) לבין
“ריק במפורש” (`null`).

> **הערה למשתמשי TypeScript:**
>
> השתמש ב-`isUndefined` כאשר אתה צריך לזהות באופן ספציפי `undefined` (ולא `null`). זה בטוח משום שהוא מסתמך על
`typeof value === "undefined"`.

### יתרונות

- מספק בדיקה ברורה ומפורשת ל-`undefined` באמצעות `typeof`, תוך הימנעות ממקרי קצה עם משתנים שלא הוגדרו.
- מחזיר תוצאה בוליאנית פשוטה (`true`/`false`) המתאימה לשומרי תנאים (guards), הסתעפות ולוגיקת ולידציה.
- מסייע להבחין בין `undefined` לבין ערכים “ריקים” אחרים כמו `null`, `0`, `""` או `NaN`.

## שימוש

### תחביר

פונקציה:

- `isUndefined(value)`

פרמטרים:

- `value`: הערך שיש לבדוק.

### ייבוא מקומי של פונקציה

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  //‎‎ x אינו מוגדר כאן
} else {
  //‎‎ x אינו לא מוגדר כאן
}

const a = isUndefined(undefined); //‎ true
const b = isUndefined(null);      //‎ false
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isUndefined(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isUndefined](‎../_analysis/isUndefined.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 14:02:53 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>